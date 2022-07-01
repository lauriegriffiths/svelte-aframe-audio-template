<script>
  import Meyda from "meyda";

  //Because we are using Svelte, changes to these variables will affect the scene
  let color = "#DD00DD";
  let volume = 0.001;
  let sf = 50;
  let note = 0;

  //these buffers store temporary values to smooth out the input.  If you make them longer the values change more smoothly but the response time is slower.
  let volume_buffer = [0, 0];
  let note_buffer = [0, 0];

  let audioElement;

  async function setupAudio() {
    const audioContext = new window.AudioContext();

    const mic_stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    //Use the line below to get audio from a file instead of the microphone
    //audioElement = new Audio('audio_file.mp3');

    const source = audioContext.createMediaStreamSource(mic_stream);

    //Use the line below to output sound to the speakers
    //source.connect(audioContext.destination);

    if (typeof Meyda === "undefined") {
      console.log("Meyda could not be found! Have you included it?");
    } else {
      const analyzer = Meyda.createMeydaAnalyzer({
        audioContext: audioContext,
        source: source,
        bufferSize: 1024,
        featureExtractors: ["rms", "chroma"],
        callback: (features) => {
          const raw_volume = features.rms * sf;
          volume_buffer.pop();
          volume_buffer.unshift(raw_volume);
          volume =
            volume_buffer.reduce((a, b) => a + b, 0) / volume_buffer.length;

          const raw_note =
            Object.keys(features.chroma).reduce(function (a, b) {
              return features.chroma[a] > features.chroma[b] ? a : b;
            }) / 3;
          note_buffer.pop();
          note_buffer.unshift(raw_note);
          note = note_buffer.reduce((a, b) => a + b, 0) / note_buffer.length;
        },
      });
      analyzer.start();
    }
  }

  function startAudio() {
    setupAudio();
    audioElement.play();
  }
</script>

<!-- the code below sets up a simple 3D frame using a-frame -->
<a-scene style="position:absolute;z-index:0">
  <a-sphere position={note - 1 + " " + volume + " -5"} radius="1.25" {color} />
  <a-plane
    position="0 0 -4"
    rotation="-90 0 0"
    width="4"
    height="4"
    color="#7BC8A4"
  />
  <a-sky color="#ECECEC" />
</a-scene>
<button style="position:fixed;	z-index: 9999" on:click={startAudio}>Start</button
>
