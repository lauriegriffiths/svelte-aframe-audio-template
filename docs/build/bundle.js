var app=function(){"use strict";function t(){}function e(t){return t()}function r(){return Object.create(null)}function n(t){t.forEach(e)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function u(t,e,r){t.insertBefore(e,r||null)}function c(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function s(){return t=" ",document.createTextNode(t);var t}function l(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function p(t,e,r){e in t?t[e]="boolean"==typeof t[e]&&""===r||r:function(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}(t,e,r)}function m(t,e,r,n){null===r?t.style.removeProperty(e):t.style.setProperty(e,r,n?"important":"")}let h;function d(t){h=t}const g=[],w=[],v=[],y=[],b=Promise.resolve();let _=!1;function S(t){v.push(t)}const M=new Set;let E=0;function A(){const t=h;do{for(;E<g.length;){const t=g[E];E++,d(t),C(t.$$)}for(d(null),g.length=0,E=0;w.length;)w.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];M.has(e)||(M.add(e),e())}v.length=0}while(g.length);for(;y.length;)y.pop()();_=!1,M.clear(),d(t)}function C(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const k=new Set;function F(t,e){-1===t.$$.dirty[0]&&(g.push(t),_||(_=!0,b.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(o,i,u,f,s,l,p,m=[-1]){const g=h;d(o);const w=o.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(g?g.$$.context:[])),callbacks:r(),dirty:m,skip_bound:!1,root:i.target||g.$$.root};p&&p(w.root);let v=!1;if(w.ctx=u?u(o,i.props||{},((t,e,...r)=>{const n=r.length?r[0]:e;return w.ctx&&s(w.ctx[t],w.ctx[t]=n)&&(!w.skip_bound&&w.bound[t]&&w.bound[t](n),v&&F(o,t)),e})):[],w.update(),v=!0,n(w.before_update),w.fragment=!!f&&f(w.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);w.fragment&&w.fragment.l(t),t.forEach(c)}else w.fragment&&w.fragment.c();i.intro&&((y=o.$$.fragment)&&y.i&&(k.delete(y),y.i(b))),function(t,r,o,i){const{fragment:u,on_mount:c,on_destroy:f,after_update:s}=t.$$;u&&u.m(r,o),i||S((()=>{const r=c.map(e).filter(a);f?f.push(...r):n(r),t.$$.on_mount=[]})),s.forEach(S)}(o,i.target,i.anchor,i.customElement),A()}var y,b;d(g)}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function B(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var z,$,j=(z=function(t,e){t.exports=function(){function t(t,e,r){if(r||2===arguments.length)for(var n,a=0,o=e.length;a<o;a++)!n&&a in e||(n||(n=Array.prototype.slice.call(e,0,a)),n[a]=e[a]);return t.concat(n||Array.prototype.slice.call(e))}var e=Object.freeze({__proto__:null,blackman:function(t){for(var e=new Float32Array(t),r=2*Math.PI/(t-1),n=2*r,a=0;a<t/2;a++)e[a]=.42-.5*Math.cos(a*r)+.08*Math.cos(a*n);for(a=Math.ceil(t/2);a>0;a--)e[t-a]=e[a-1];return e},sine:function(t){for(var e=Math.PI/(t-1),r=new Float32Array(t),n=0;n<t;n++)r[n]=Math.sin(e*n);return r},hanning:function(t){for(var e=new Float32Array(t),r=0;r<t;r++)e[r]=.5-.5*Math.cos(2*Math.PI*r/(t-1));return e},hamming:function(t){for(var e=new Float32Array(t),r=0;r<t;r++)e[r]=.54-.46*Math.cos(2*Math.PI*(r/t-1));return e}}),r={};function n(t){for(;t%2==0&&t>1;)t/=2;return 1===t}function a(t,n){if("rect"!==n){if(""!==n&&n||(n="hanning"),r[n]||(r[n]={}),!r[n][t.length])try{r[n][t.length]=e[n](t.length)}catch(t){throw new Error("Invalid windowing function")}t=function(t,e){for(var r=[],n=0;n<Math.min(t.length,e.length);n++)r[n]=t[n]*e[n];return r}(t,r[n][t.length])}return t}function o(t,e,r){for(var n=new Float32Array(t),a=0;a<n.length;a++)n[a]=a*e/r,n[a]=13*Math.atan(n[a]/1315.8)+3.5*Math.atan(Math.pow(n[a]/7518,2));return n}function i(t){return Float32Array.from(t)}function u(t){return 1125*Math.log(1+t/700)}function c(t,e,r){for(var n,a=new Float32Array(t+2),o=new Float32Array(t+2),i=e/2,c=u(0),f=(u(i)-c)/(t+1),s=new Array(t+2),l=0;l<a.length;l++)a[l]=l*f,o[l]=(n=a[l],700*(Math.exp(n/1125)-1)),s[l]=Math.floor((r+1)*o[l]/e);for(var p=new Array(t),m=0;m<p.length;m++){for(p[m]=new Array(r/2+1).fill(0),l=s[m];l<s[m+1];l++)p[m][l]=(l-s[m])/(s[m+1]-s[m]);for(l=s[m+1];l<s[m+2];l++)p[m][l]=(s[m+2]-l)/(s[m+2]-s[m+1])}return p}function f(e,r,n,a,o,i,u){void 0===a&&(a=5),void 0===o&&(o=2),void 0===i&&(i=!0),void 0===u&&(u=440);var c=Math.floor(n/2)+1,f=new Array(n).fill(0).map((function(t,a){return e*function(t,e){return Math.log2(16*t/e)}(r*a/n,u)}));f[0]=f[1]-1.5*e;var s,l,p,m=f.slice(1).map((function(t,e){return Math.max(t-f[e])}),1).concat([1]),h=Math.round(e/2),d=new Array(e).fill(0).map((function(t,r){return f.map((function(t){return(10*e+h+t-r)%e-h}))})),g=d.map((function(t,e){return t.map((function(t,r){return Math.exp(-.5*Math.pow(2*d[e][r]/m[r],2))}))}));if(l=(s=g)[0].map((function(){return 0})),p=s.reduce((function(t,e){return e.forEach((function(e,r){t[r]+=Math.pow(e,2)})),t}),l).map(Math.sqrt),g=s.map((function(t,e){return t.map((function(t,e){return t/(p[e]||1)}))})),o){var w=f.map((function(t){return Math.exp(-.5*Math.pow((t/e-a)/o,2))}));g=g.map((function(t){return t.map((function(t,e){return t*w[e]}))}))}return i&&(g=t(t([],g.slice(3),!0),g.slice(0,3),!0)),g.map((function(t){return t.slice(0,c)}))}function s(t,e){for(var r=0,n=0,a=0;a<e.length;a++)r+=Math.pow(a,t)*Math.abs(e[a]),n+=e[a];return r/n}function l(t){var e=t.ampSpectrum,r=t.barkScale,n=t.numberOfBarkBands,a=void 0===n?24:n;if("object"!=typeof e||"object"!=typeof r)throw new TypeError;var o=a,i=new Float32Array(o),u=0,c=e,f=new Int32Array(o+1);f[0]=0;for(var s=r[c.length-1]/o,l=1,p=0;p<c.length;p++)for(;r[p]>s;)f[l++]=p,s=l*r[c.length-1]/o;for(f[o]=c.length-1,p=0;p<o;p++){for(var m=0,h=f[p];h<f[p+1];h++)m+=c[h];i[p]=Math.pow(m,.23)}for(p=0;p<i.length;p++)u+=i[p];return{specific:i,total:u}}function p(t){var e=t.ampSpectrum;if("object"!=typeof e)throw new TypeError;for(var r=new Float32Array(e.length),n=0;n<r.length;n++)r[n]=Math.pow(e[n],2);return r}function m(t){var e=t.ampSpectrum,r=t.melFilterBank,n=t.bufferSize;if("object"!=typeof e)throw new TypeError("Valid ampSpectrum is required to generate melBands");if("object"!=typeof r)throw new TypeError("Valid melFilterBank is required to generate melBands");for(var a=p({ampSpectrum:e}),o=r.length,i=Array(o),u=new Float32Array(o),c=0;c<u.length;c++){i[c]=new Float32Array(n/2),u[c]=0;for(var f=0;f<n/2;f++)i[c][f]=r[c][f]*a[f],u[c]+=i[c][f];u[c]=Math.log(u[c]+1)}return Array.prototype.slice.call(u)}function h(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var d={exports:{}},g=null,w=function(t,e){var r=t.length;return e=e||2,g&&g[r]||function(t){(g=g||{})[t]=new Array(t*t);for(var e=Math.PI/t,r=0;r<t;r++)for(var n=0;n<t;n++)g[t][n+r*t]=Math.cos(e*(n+.5)*r)}(r),t.map((function(){return 0})).map((function(n,a){return e*t.reduce((function(t,e,n,o){return t+e*g[r][n+a*r]}),0)}))};!function(t){t.exports=w}(d);var v=h(d.exports),y=Object.freeze({__proto__:null,buffer:function(t){return t.signal},rms:function(t){var e=t.signal;if("object"!=typeof e)throw new TypeError;for(var r=0,n=0;n<e.length;n++)r+=Math.pow(e[n],2);return r/=e.length,Math.sqrt(r)},energy:function(t){var e=t.signal;if("object"!=typeof e)throw new TypeError;for(var r=0,n=0;n<e.length;n++)r+=Math.pow(Math.abs(e[n]),2);return r},complexSpectrum:function(t){return t.complexSpectrum},spectralSlope:function(t){var e=t.ampSpectrum,r=t.sampleRate,n=t.bufferSize;if("object"!=typeof e)throw new TypeError;for(var a=0,o=0,i=new Float32Array(e.length),u=0,c=0,f=0;f<e.length;f++){a+=e[f];var s=f*r/n;i[f]=s,u+=s*s,o+=s,c+=s*e[f]}return(e.length*c-o*a)/(a*(u-Math.pow(o,2)))},spectralCentroid:function(t){var e=t.ampSpectrum;if("object"!=typeof e)throw new TypeError;return s(1,e)},spectralRolloff:function(t){var e=t.ampSpectrum,r=t.sampleRate;if("object"!=typeof e)throw new TypeError;for(var n=e,a=r/(2*(n.length-1)),o=0,i=0;i<n.length;i++)o+=n[i];for(var u=.99*o,c=n.length-1;o>u&&c>=0;)o-=n[c],--c;return(c+1)*a},spectralFlatness:function(t){var e=t.ampSpectrum;if("object"!=typeof e)throw new TypeError;for(var r=0,n=0,a=0;a<e.length;a++)r+=Math.log(e[a]),n+=e[a];return Math.exp(r/e.length)*e.length/n},spectralSpread:function(t){var e=t.ampSpectrum;if("object"!=typeof e)throw new TypeError;return Math.sqrt(s(2,e)-Math.pow(s(1,e),2))},spectralSkewness:function(t){var e=t.ampSpectrum;if("object"!=typeof e)throw new TypeError;var r=s(1,e),n=s(2,e),a=s(3,e);return(2*Math.pow(r,3)-3*r*n+a)/Math.pow(Math.sqrt(n-Math.pow(r,2)),3)},spectralKurtosis:function(t){var e=t.ampSpectrum;if("object"!=typeof e)throw new TypeError;var r=e,n=s(1,r),a=s(2,r),o=s(3,r),i=s(4,r);return(-3*Math.pow(n,4)+6*n*a-4*n*o+i)/Math.pow(Math.sqrt(a-Math.pow(n,2)),4)},amplitudeSpectrum:function(t){return t.ampSpectrum},zcr:function(t){var e=t.signal;if("object"!=typeof e)throw new TypeError;for(var r=0,n=1;n<e.length;n++)(e[n-1]>=0&&e[n]<0||e[n-1]<0&&e[n]>=0)&&r++;return r},loudness:l,perceptualSpread:function(t){for(var e=l({ampSpectrum:t.ampSpectrum,barkScale:t.barkScale}),r=0,n=0;n<e.specific.length;n++)e.specific[n]>r&&(r=e.specific[n]);return Math.pow((e.total-r)/e.total,2)},perceptualSharpness:function(t){for(var e=l({ampSpectrum:t.ampSpectrum,barkScale:t.barkScale}),r=e.specific,n=0,a=0;a<r.length;a++)n+=a<15?(a+1)*r[a+1]:.066*Math.exp(.171*(a+1));return n*(.11/e.total)},powerSpectrum:p,mfcc:function(t){var e=t.ampSpectrum,r=t.melFilterBank,n=t.numberOfMFCCCoefficients,a=t.bufferSize,o=Math.min(40,Math.max(1,n||13));if(r.length<o)throw new Error("Insufficient filter bank for requested number of coefficients");var i=m({ampSpectrum:e,melFilterBank:r,bufferSize:a});return v(i).slice(0,o)},chroma:function(t){var e=t.ampSpectrum,r=t.chromaFilterBank;if("object"!=typeof e)throw new TypeError("Valid ampSpectrum is required to generate chroma");if("object"!=typeof r)throw new TypeError("Valid chromaFilterBank is required to generate chroma");var n=r.map((function(t,r){return e.reduce((function(e,r,n){return e+r*t[n]}),0)})),a=Math.max.apply(Math,n);return a?n.map((function(t){return t/a})):n},spectralFlux:function(t){var e=t.signal,r=t.previousSignal,n=t.bufferSize;if("object"!=typeof e||"object"!=typeof r)throw new TypeError;for(var a=0,o=-n/2;o<e.length/2-1;o++)x=Math.abs(e[o])-Math.abs(r[o]),a+=(x+Math.abs(x))/2;return a},spectralCrest:function(t){var e=t.ampSpectrum;if("object"!=typeof e)throw new TypeError;var r=0,n=-1/0;return e.forEach((function(t){r+=Math.pow(t,2),n=t>n?t:n})),r/=e.length,r=Math.sqrt(r),n/r},melBands:m});function b(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var _={},S={},M={bitReverseArray:function(t){if(void 0===_[t]){for(var e=(t-1).toString(2).length,r="0".repeat(e),n={},a=0;a<t;a++){var o=a.toString(2);o=r.substr(o.length)+o,o=[].concat(b(o)).reverse().join(""),n[a]=parseInt(o,2)}_[t]=n}return _[t]},multiply:function(t,e){return{real:t.real*e.real-t.imag*e.imag,imag:t.real*e.imag+t.imag*e.real}},add:function(t,e){return{real:t.real+e.real,imag:t.imag+e.imag}},subtract:function(t,e){return{real:t.real-e.real,imag:t.imag-e.imag}},euler:function(t,e){var r=-2*Math.PI*t/e;return{real:Math.cos(r),imag:Math.sin(r)}},conj:function(t){return t.imag*=-1,t},constructComplexArray:function(t){var e={};e.real=void 0===t.real?t.slice():t.real.slice();var r=e.real.length;return void 0===S[r]&&(S[r]=Array.apply(null,Array(r)).map(Number.prototype.valueOf,0)),e.imag=S[r].slice(),e}},E=function(t){var e={};void 0===t.real||void 0===t.imag?e=M.constructComplexArray(t):(e.real=t.real.slice(),e.imag=t.imag.slice());var r=e.real.length,n=Math.log2(r);if(Math.round(n)!=n)throw new Error("Input size must be a power of 2.");if(e.real.length!=e.imag.length)throw new Error("Real and imaginary components must have the same length.");for(var a=M.bitReverseArray(r),o={real:[],imag:[]},i=0;i<r;i++)o.real[a[i]]=e.real[i],o.imag[a[i]]=e.imag[i];for(var u=0;u<r;u++)e.real[u]=o.real[u],e.imag[u]=o.imag[u];for(var c=1;c<=n;c++)for(var f=Math.pow(2,c),s=0;s<f/2;s++)for(var l=M.euler(s,f),p=0;p<r/f;p++){var m=f*p+s,h=f*p+s+f/2,d={real:e.real[m],imag:e.imag[m]},g={real:e.real[h],imag:e.imag[h]},w=M.multiply(l,g),v=M.subtract(d,w);e.real[h]=v.real,e.imag[h]=v.imag;var y=M.add(w,d);e.real[m]=y.real,e.imag[m]=y.imag}return e},A=E,C=function(){function t(t,e){var r=this;if(this._m=e,!t.audioContext)throw this._m.errors.noAC;if(t.bufferSize&&!n(t.bufferSize))throw this._m._errors.notPow2;if(!t.source)throw this._m._errors.noSource;this._m.audioContext=t.audioContext,this._m.bufferSize=t.bufferSize||this._m.bufferSize||256,this._m.hopSize=t.hopSize||this._m.hopSize||this._m.bufferSize,this._m.sampleRate=t.sampleRate||this._m.audioContext.sampleRate||44100,this._m.callback=t.callback,this._m.windowingFunction=t.windowingFunction||"hanning",this._m.featureExtractors=y,this._m.EXTRACTION_STARTED=t.startImmediately||!1,this._m.channel="number"==typeof t.channel?t.channel:0,this._m.inputs=t.inputs||1,this._m.outputs=t.outputs||1,this._m.numberOfMFCCCoefficients=t.numberOfMFCCCoefficients||this._m.numberOfMFCCCoefficients||13,this._m.numberOfBarkBands=t.numberOfBarkBands||this._m.numberOfBarkBands||24,this._m.spn=this._m.audioContext.createScriptProcessor(this._m.bufferSize,this._m.inputs,this._m.outputs),this._m.spn.connect(this._m.audioContext.destination),this._m._featuresToExtract=t.featureExtractors||[],this._m.barkScale=o(this._m.bufferSize,this._m.sampleRate,this._m.bufferSize),this._m.melFilterBank=c(Math.max(this._m.melBands,this._m.numberOfMFCCCoefficients),this._m.sampleRate,this._m.bufferSize),this._m.inputData=null,this._m.previousInputData=null,this._m.frame=null,this._m.previousFrame=null,this.setSource(t.source),this._m.spn.onaudioprocess=function(t){var e;null!==r._m.inputData&&(r._m.previousInputData=r._m.inputData),r._m.inputData=t.inputBuffer.getChannelData(r._m.channel),r._m.previousInputData?((e=new Float32Array(r._m.previousInputData.length+r._m.inputData.length-r._m.hopSize)).set(r._m.previousInputData.slice(r._m.hopSize)),e.set(r._m.inputData,r._m.previousInputData.length-r._m.hopSize)):e=r._m.inputData,function(t,e,r){if(t.length<e)throw new Error("Buffer is too short for frame length");if(r<1)throw new Error("Hop length cannot be less that 1");if(e<1)throw new Error("Frame length cannot be less that 1");var n=1+Math.floor((t.length-e)/r);return new Array(n).fill(0).map((function(n,a){return t.slice(a*r,a*r+e)}))}(e,r._m.bufferSize,r._m.hopSize).forEach((function(t){r._m.frame=t;var e=r._m.extract(r._m._featuresToExtract,r._m.frame,r._m.previousFrame);"function"==typeof r._m.callback&&r._m.EXTRACTION_STARTED&&r._m.callback(e),r._m.previousFrame=r._m.frame}))}}return t.prototype.start=function(t){this._m._featuresToExtract=t||this._m._featuresToExtract,this._m.EXTRACTION_STARTED=!0},t.prototype.stop=function(){this._m.EXTRACTION_STARTED=!1},t.prototype.setSource=function(t){this._m.source&&this._m.source.disconnect(this._m.spn),this._m.source=t,this._m.source.connect(this._m.spn)},t.prototype.setChannel=function(t){t<=this._m.inputs?this._m.channel=t:console.error("Channel ".concat(t," does not exist. Make sure you've provided a value for 'inputs' that is greater than ").concat(t," when instantiating the MeydaAnalyzer"))},t.prototype.get=function(t){return this._m.inputData?this._m.extract(t||this._m._featuresToExtract,this._m.inputData,this._m.previousInputData):null},t}(),k={audioContext:null,spn:null,bufferSize:512,sampleRate:44100,melBands:26,chromaBands:12,callback:null,windowingFunction:"hanning",featureExtractors:y,EXTRACTION_STARTED:!1,numberOfMFCCCoefficients:13,numberOfBarkBands:24,_featuresToExtract:[],windowing:a,_errors:{notPow2:new Error("Meyda: Buffer size must be a power of 2, e.g. 64 or 512"),featureUndef:new Error("Meyda: No features defined."),invalidFeatureFmt:new Error("Meyda: Invalid feature format"),invalidInput:new Error("Meyda: Invalid input."),noAC:new Error("Meyda: No AudioContext specified."),noSource:new Error("Meyda: No source node specified.")},createMeydaAnalyzer:function(t){return new C(t,Object.assign({},k))},listAvailableFeatureExtractors:function(){return Object.keys(this.featureExtractors)},extract:function(t,e,r){var a=this;if(!e)throw this._errors.invalidInput;if("object"!=typeof e)throw this._errors.invalidInput;if(!t)throw this._errors.featureUndef;if(!n(e.length))throw this._errors.notPow2;void 0!==this.barkScale&&this.barkScale.length==this.bufferSize||(this.barkScale=o(this.bufferSize,this.sampleRate,this.bufferSize)),void 0!==this.melFilterBank&&this.barkScale.length==this.bufferSize&&this.melFilterBank.length==this.melBands||(this.melFilterBank=c(Math.max(this.melBands,this.numberOfMFCCCoefficients),this.sampleRate,this.bufferSize)),void 0!==this.chromaFilterBank&&this.chromaFilterBank.length==this.chromaBands||(this.chromaFilterBank=f(this.chromaBands,this.sampleRate,this.bufferSize)),"buffer"in e&&void 0===e.buffer?this.signal=i(e):this.signal=e;var u=F(e,this.windowingFunction,this.bufferSize);if(this.signal=u.windowedSignal,this.complexSpectrum=u.complexSpectrum,this.ampSpectrum=u.ampSpectrum,r){var s=F(r,this.windowingFunction,this.bufferSize);this.previousSignal=s.windowedSignal,this.previousComplexSpectrum=s.complexSpectrum,this.previousAmpSpectrum=s.ampSpectrum}var l=function(t){return a.featureExtractors[t]({ampSpectrum:a.ampSpectrum,chromaFilterBank:a.chromaFilterBank,complexSpectrum:a.complexSpectrum,signal:a.signal,bufferSize:a.bufferSize,sampleRate:a.sampleRate,barkScale:a.barkScale,melFilterBank:a.melFilterBank,previousSignal:a.previousSignal,previousAmpSpectrum:a.previousAmpSpectrum,previousComplexSpectrum:a.previousComplexSpectrum,numberOfMFCCCoefficients:a.numberOfMFCCCoefficients,numberOfBarkBands:a.numberOfBarkBands})};if("object"==typeof t)return t.reduce((function(t,e){var r;return Object.assign({},t,((r={})[e]=l(e),r))}),{});if("string"==typeof t)return l(t);throw this._errors.invalidFeatureFmt}},F=function(t,e,r){var n={};void 0===t.buffer?n.signal=i(t):n.signal=t,n.windowedSignal=a(n.signal,e),n.complexSpectrum=A(n.windowedSignal),n.ampSpectrum=new Float32Array(r/2);for(var o=0;o<r/2;o++)n.ampSpectrum[o]=Math.sqrt(Math.pow(n.complexSpectrum.real[o],2)+Math.pow(n.complexSpectrum.imag[o],2));return n};return"undefined"!=typeof window&&(window.Meyda=k),k}()},z($={exports:{}},$.exports),$.exports),O=B(j);function I(e){let r,a,o,h,d,g,w,v,y,b,_,S,M,x;return{c(){r=f("a-scene"),a=f("a-sphere"),h=s(),d=f("a-plane"),g=s(),w=f("a-sky"),v=s(),y=f("div"),b=f("button"),b.textContent="Start",_=s(),S=f("button"),S.textContent="Stop",p(a,"position",o=e[1]-1+" "+e[0]+" -5"),p(a,"radius","1.25"),p(a,"color",D),p(d,"position","0 0 -4"),p(d,"rotation","-90 0 0"),p(d,"width","4"),p(d,"height","4"),p(d,"color","#7BC8A4"),p(w,"color","#ECECEC"),m(r,"position","absolute"),m(r,"z-index","0"),m(y,"position","fixed"),m(y,"z-index","9999")},m(t,n){u(t,r,n),i(r,a),i(r,h),i(r,d),i(r,g),i(r,w),u(t,v,n),u(t,y,n),i(y,b),i(y,_),i(y,S),M||(x=[l(b,"click",e[3]),l(S,"click",e[2])],M=!0)},p(t,[e]){3&e&&o!==(o=t[1]-1+" "+t[0]+" -5")&&p(a,"position",o)},i:t,o:t,d(t){t&&c(r),t&&c(v),t&&c(y),M=!1,n(x)}}}let D="#DD00DD";function R(t,e,r){let n,a=.001,o=0,i=[0,0],u=[0,0];return[a,o,async function(){console.log("Stopping audio"),n.close()},function(){!async function(){n=new window.AudioContext;const t=await navigator.mediaDevices.getUserMedia({audio:!0}),e=n.createMediaStreamSource(t);void 0===O?console.log("Meyda could not be found! Have you included it?"):O.createMeydaAnalyzer({audioContext:n,source:e,bufferSize:1024,featureExtractors:["rms","chroma"],callback:t=>{const e=50*t.rms;i.pop(),i.unshift(e),r(0,a=i.reduce(((t,e)=>t+e),0)/i.length);const n=Object.keys(t.chroma).reduce((function(e,r){return t.chroma[e]>t.chroma[r]?e:r}))/3;u.pop(),u.unshift(n),r(1,o=u.reduce(((t,e)=>t+e),0)/u.length)}}).start()}(),undefined.play()}]}return new class extends class{$destroy(){!function(t,e){const r=t.$$;null!==r.fragment&&(n(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const t=r.indexOf(e);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),T(this,t,R,I,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
