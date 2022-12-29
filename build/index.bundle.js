/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/arrow.png */ "./src/assets/arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*style.css*/\r\nbody {\r\n  background-color: darkcyan;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.game {\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\n.player {\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: lightblue;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  transform-origin: center;\r\n}\r\n\r\n.asteroid {\r\n  position: absolute;\r\n  width: 80px;\r\n  height: 80px;\r\n  background-color: lightgray;\r\n  border-radius: 50%;\r\n  transform-origin: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;EACE,0BAA0B;EAC1B,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,yDAA2C;EAC3C,4BAA4B;EAC5B,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;EAClB,wBAAwB;AAC1B","sourcesContent":["/*style.css*/\r\nbody {\r\n  background-color: darkcyan;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.game {\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\n.player {\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: lightblue;\r\n  background-image: url(\"./assets/arrow.png\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  transform-origin: center;\r\n}\r\n\r\n.asteroid {\r\n  position: absolute;\r\n  width: 80px;\r\n  height: 80px;\r\n  background-color: lightgray;\r\n  border-radius: 50%;\r\n  transform-origin: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/howler/dist/howler.js":
/*!********************************************!*\
  !*** ./node_modules/howler/dist/howler.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */
  var HowlerGlobal = function() {
    this.init();
  };
  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function() {
      var self = this || Howler;

      // Create a global ID counter.
      self._counter = 1000;

      // Pool of unlocked HTML5 Audio objects.
      self._html5AudioPool = [];
      self.html5PoolSize = 10;

      // Internal properties.
      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

      // Public properties.
      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null;

      // Set to false to disable the auto audio unlocker.
      self.autoUnlock = true;

      // Setup the various state values for global tracking.
      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this || Howler;
      vol = parseFloat(vol);

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol;

        // Don't update any of the nodes if we are muted.
        if (self._muted) {
          return self;
        }

        // When using Web Audio, we just need to adjust the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
        }

        // Loop through and change volume for all HTML5 audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and change the volumes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function(muted) {
      var self = this || Howler;

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted;

      // With Web Audio, we just need to mute the master gain.
      if (self.usingWebAudio) {
        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
      }

      // Loop through and mute all HTML5 Audio nodes.
      for (var i=0; i<self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds();

          // Loop through all sounds and mark the audio node as muted.
          for (var j=0; j<ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = (muted) ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Handle stopping all sounds globally.
     */
    stop: function() {
      var self = this || Howler;

      // Loop through all Howls and stop them.
      for (var i=0; i<self._howls.length; i++) {
        self._howls[i].stop();
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function() {
      var self = this || Howler;

      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].unload();
      }

      // Create a new AudioContext to make sure it is fully reset.
      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function() {
      var self = this || Howler;

      // Keeps track of the suspend/resume state of the AudioContext.
      self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';

      // Automatically begin the 30-second suspend process
      self._autoSuspend();

      // Check if audio is available.
      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio();

            // Check if the canplaythrough event is available.
            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch(e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      }

      // Test to make sure audio isn't disabled in Internet Explorer.
      try {
        var test = new Audio();
        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {}

      // Check for supported codecs.
      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function() {
      var self = this || Howler;
      var audioTest = null;

      // Must wrap in a try/catch because IE11 in server mode throws an error.
      try {
        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
      var ua = self._navigator ? self._navigator.userAgent : '';
      var checkOpera = ua.match(/OPR\/([0-6].)/g);
      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);
      var checkSafari = ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1;
      var safariVersion = ua.match(/Version\/(.*?) /);
      var isOldSafari = (checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15);

      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType('audio/wav')).replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        m4b: !!(audioTest.canPlayType('audio/x-m4b;') || audioTest.canPlayType('audio/m4b;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
        webm: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };

      return self;
    },

    /**
     * Some browsers/devices will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _unlockAudio: function() {
      var self = this || Howler;

      // Only run this if Web Audio is supported and it hasn't already been unlocked.
      if (self._audioUnlocked || !self.ctx) {
        return;
      }

      self._audioUnlocked = false;
      self.autoUnlock = false;

      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      }

      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684
      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

      // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.
      var unlock = function(e) {
        // Create a pool of unlocked HTML5 Audio objects that can
        // be used for playing sounds without user interaction. HTML5
        // Audio objects must be individually unlocked, as opposed
        // to the WebAudio API which only needs a single activation.
        // This must occur before WebAudio setup or the source.onended
        // event will not fire.
        while (self._html5AudioPool.length < self.html5PoolSize) {
          try {
            var audioNode = new Audio();

            // Mark this Audio object as unlocked to ensure it can get returned
            // to the unlocked pool when released.
            audioNode._unlocked = true;

            // Add the audio node to the pool.
            self._releaseHtml5Audio(audioNode);
          } catch (e) {
            self.noAudio = true;
            break;
          }
        }

        // Loop through any assigned audio nodes and unlock them.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and unlock the audio nodes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node && !sound._node._unlocked) {
                sound._node._unlocked = true;
                sound._node.load();
              }
            }
          }
        }

        // Fix Android can not play in suspend state.
        self._autoResume();

        // Create an empty buffer.
        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination);

        // Play the empty buffer.
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        }

        // Setup a timeout to check that we are unlocked on the next event loop.
        source.onended = function() {
          source.disconnect(0);

          // Update the unlocked state and prevent this check from happening again.
          self._audioUnlocked = true;

          // Remove the touch start listener.
          document.removeEventListener('touchstart', unlock, true);
          document.removeEventListener('touchend', unlock, true);
          document.removeEventListener('click', unlock, true);
          document.removeEventListener('keydown', unlock, true);

          // Let all sounds know that audio has been unlocked.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('unlock');
          }
        };
      };

      // Setup a touch start listener to attempt an unlock in.
      document.addEventListener('touchstart', unlock, true);
      document.addEventListener('touchend', unlock, true);
      document.addEventListener('click', unlock, true);
      document.addEventListener('keydown', unlock, true);

      return self;
    },

    /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left,
     * return a new Audio object and throw a warning.
     * @return {Audio} HTML5 Audio object.
     */
    _obtainHtml5Audio: function() {
      var self = this || Howler;

      // Return the next object from the pool if one exists.
      if (self._html5AudioPool.length) {
        return self._html5AudioPool.pop();
      }

      //.Check if the audio is locked and throw a warning.
      var testPlay = new Audio().play();
      if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
        testPlay.catch(function() {
          console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
        });
      }

      return new Audio();
    },

    /**
     * Return an activated HTML5 Audio object to the pool.
     * @return {Howler}
     */
    _releaseHtml5Audio: function(audio) {
      var self = this || Howler;

      // Don't add audio to the pool if we don't know if it has been unlocked.
      if (audio._unlocked) {
        self._html5AudioPool.push(audio);
      }

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      // Check if any sounds are playing.
      for (var i=0; i<self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j=0; j<self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      }

      // If no sound has played after 30 seconds, suspend the context.
      self._suspendTimer = setTimeout(function() {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';

        // Handle updating the state of the audio context after suspending.
        var handleSuspension = function() {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;
            self._autoResume();
          }
        };

        // Either the state gets suspended or it is interrupted.
        // Either way, we need to update the state to suspended.
        self.ctx.suspend().then(handleSuspension, handleSuspension);
      }, 30000);

      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self.ctx.state !== 'interrupted' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended' || self.state === 'running' && self.ctx.state === 'interrupted') {
        self.ctx.resume().then(function() {
          self.state = 'running';

          // Emit to all Howls that the audio has resumed.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  };

  // Setup the global audio controller.
  var Howler = new HowlerGlobal();

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */
  var Howl = function(o) {
    var self = this;

    // Throw an error if no source is provided.
    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };
  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function(o) {
      var self = this;

      // If we don't have an AudioContext created yet, run the setup.
      if (!Howler.ctx) {
        setupAudioContext();
      }

      // Setup user-defined default properties.
      self._autoplay = o.autoplay || false;
      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = (typeof o.preload === 'boolean' || o.preload === 'metadata') ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;
      self._xhr = {
        method: o.xhr && o.xhr.method ? o.xhr.method : 'GET',
        headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
        withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false,
      };

      // Setup all other default properties.
      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];
      self._playLock = false;

      // Setup event listeners.
      self._onend = o.onend ? [{fn: o.onend}] : [];
      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
      self._onload = o.onload ? [{fn: o.onload}] : [];
      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
      self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
      self._onunlock = o.onunlock ? [{fn: o.onunlock}] : [];
      self._onresume = [];

      // Web Audio or HTML5 Audio?
      self._webAudio = Howler.usingWebAudio && !self._html5;

      // Automatically try to enable audio.
      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
        Howler._unlockAudio();
      }

      // Keep track of this Howl group in the global controller.
      Howler._howls.push(self);

      // If they selected autoplay, add a play event to the load queue.
      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function() {
            self.play();
          }
        });
      }

      // Load the source file unless otherwise specified.
      if (self._preload && self._preload !== 'none') {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function() {
      var self = this;
      var url = null;

      // If no audio is available, quit immediately.
      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');
        return;
      }

      // Make sure our source is in an array.
      if (typeof self._src === 'string') {
        self._src = [self._src];
      }

      // Loop through the sources and pick the first one that is compatible.
      for (var i=0; i<self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];
          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
            continue;
          }

          // Extract the file extension from the URL or base64 data URI.
          ext = /^data:audio\/([^;,]+);/i.exec(str);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        }

        // Log a warning if no extension was found.
        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        }

        // Check if this extension is available.
        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');
        return;
      }

      self._src = url;
      self._state = 'loading';

      // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.
      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      }

      // Create a new sound object and add it to the pool.
      new Sound(self);

      // Load and decode the audio data for playback.
      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function(sprite, internal) {
      var self = this;
      var id = null;

      // Determine if a sprite, sound id or nothing was passed
      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default';

        // Check if there is a single paused sound that isn't ended.
        // If there is, play that sound. If not, continue as usual.
        if (!self._playLock) {
          var num = 0;
          for (var i=0; i<self._sounds.length; i++) {
            if (self._sounds[i]._paused && !self._sounds[i]._ended) {
              num++;
              id = self._sounds[i]._id;
            }
          }

          if (num === 1) {
            sprite = null;
          } else {
            id = null;
          }
        }
      }

      // Get the selected node, or get one from the pool.
      var sound = id ? self._soundById(id) : self._inactiveSound();

      // If the sound doesn't exist, do nothing.
      if (!sound) {
        return null;
      }

      // Select the sprite definition.
      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      }

      // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.
      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite;

        // Mark this sound as not ended in case another sound is played before this one loads.
        sound._ended = false;

        // Add the sound to the queue to be played on load.
        var soundId = sound._id;
        self._queue.push({
          event: 'play',
          action: function() {
            self.play(soundId);
          }
        });

        return soundId;
      }

      // Don't play the sound if an id was passed and it is already playing.
      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          self._loadQueue('play');
        }

        return sound._id;
      }

      // Make sure the AudioContext isn't suspended, and resume it if it is.
      if (self._webAudio) {
        Howler._autoResume();
      }

      // Determine how long to play for and where to start playing.
      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
      var timeout = (duration * 1000) / Math.abs(sound._rate);
      var start = self._sprite[sprite][0] / 1000;
      var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      sound._sprite = sprite;

      // Mark the sound as ended instantly so that this async playback
      // doesn't get grabbed by another call to play while this one waits to start.
      sound._ended = false;

      // Update the parameters of the sound.
      var setParams = function() {
        sound._paused = false;
        sound._seek = seek;
        sound._start = start;
        sound._stop = stop;
        sound._loop = !!(sound._loop || self._sprite[sprite][2]);
      };

      // End the sound instantly if seek is at the end.
      if (seek >= stop) {
        self._ended(sound);
        return;
      }

      // Begin the actual playback.
      var node = sound._node;
      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function() {
          self._playLock = false;
          setParams();
          self._refreshBuffer(sound);

          // Setup the playback params.
          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime;

          // Play the sound using the supported method.
          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          }

          // Start a new timer if none is present.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function() {
              self._emit('play', sound._id);
              self._loadQueue();
            }, 0);
          }
        };

        if (Howler.state === 'running' && Howler.ctx.state !== 'interrupted') {
          playWebAudio();
        } else {
          self._playLock = true;

          // Wait for the audio context to resume before playing.
          self.once('resume', playWebAudio);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate;

          // Some browsers will throw an error if this is called without user interaction.
          try {
            var play = node.play();

            // Support older browsers that don't support promises, and thus don't have this issue.
            if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
              self._playLock = true;

              // Set param values immediately.
              setParams();

              // Releases the lock and executes queued actions.
              play
                .then(function() {
                  self._playLock = false;
                  node._unlocked = true;
                  if (!internal) {
                    self._emit('play', sound._id);
                  } else {
                    self._loadQueue();
                  }
                })
                .catch(function() {
                  self._playLock = false;
                  self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                    'on mobile devices and Chrome where playback was not within a user interaction.');

                  // Reset the ended and paused values.
                  sound._ended = true;
                  sound._paused = true;
                });
            } else if (!internal) {
              self._playLock = false;
              setParams();
              self._emit('play', sound._id);
            }

            // Setting rate before playing won't work in IE, so we set it again here.
            node.playbackRate = sound._rate;

            // If the node is still paused, then we can assume there was a playback issue.
            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                'on mobile devices and Chrome where playback was not within a user interaction.');
              return;
            }

            // Setup the end timer on sprites or listen for the ended event.
            if (sprite !== '__default' || sound._loop) {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } else {
              self._endTimers[sound._id] = function() {
                // Fire ended on this audio node.
                self._ended(sound);

                // Clear this listener.
                node.removeEventListener('ended', self._endTimers[sound._id], false);
              };
              node.addEventListener('ended', self._endTimers[sound._id], false);
            }
          } catch (err) {
            self._emit('playerror', sound._id, err);
          }
        };

        // If this is streaming audio, make sure the src is set and load again.
        if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
          node.src = self._src;
          node.load();
        }

        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
        var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
        if (node.readyState >= 3 || loadedNoReadyState) {
          playHtml5();
        } else {
          self._playLock = true;
          self._state = 'loading';

          var listener = function() {
            self._state = 'loaded';
            
            // Begin playback.
            playHtml5();

            // Clear this listener.
            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };
          node.addEventListener(Howler._canPlayEvent, listener, false);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'pause',
          action: function() {
            self.pause(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be paused.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              }

              // Clean up the buffer source.
              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        }

        // Fire the pause event, unless `true` is passed as the 2nd argument.
        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function(id, internal) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to stop when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'stop',
          action: function() {
            self.stop(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be stopped.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;
              sound._node.pause();

              // If this is a live stream, stop download once the audio is stopped.
              if (sound._node.duration === Infinity) {
                self._clearSound(sound._node);
              }
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function(muted, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to mute when capable.
      if (self._state !== 'loaded'|| self._playLock) {
        self._queue.push({
          event: 'mute',
          action: function() {
            self.mute(muted, id);
          }
        });

        return self;
      }

      // If applying mute/unmute to all sounds, update the group's value.
      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      }

      // If no id is passed, get all ID's to be muted.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted;

          // Cancel active fade and set the volume to the end value.
          if (sound._interval) {
            self._stopFade(sound._id);
          }

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function() {
      var self = this;
      var args = arguments;
      var vol, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the volume or return the current volume.
      var sound;
      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded'|| self._playLock) {
          self._queue.push({
            event: 'volume',
            action: function() {
              self.volume.apply(self, args);
            }
          });

          return self;
        }

        // Set the group volume.
        if (typeof id === 'undefined') {
          self._volume = vol;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol;

            // Stop currently running fades.
            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function(from, to, len, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to fade when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'fade',
          action: function() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      }

      // Make sure the to/from/len values are numbers.
      from = Math.min(Math.max(0, parseFloat(from)), 1);
      to = Math.min(Math.max(0, parseFloat(to)), 1);
      len = parseFloat(len);

      // Set the volume to the start position.
      self.volume(from, id);

      // Fade the volume of one or all sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        // Create a linear fade or fall back to timeouts with HTML5 Audio.
        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          }

          // If we are using Web Audio, let the native methods do the actual fade.
          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + (len / 1000);
            sound._volume = from;
            sound._node.gain.setValueAtTime(from, currentTime);
            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
        }
      }

      return self;
    },

    /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */
    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
      var self = this;
      var vol = from;
      var diff = to - from;
      var steps = Math.abs(diff / 0.01);
      var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
      var lastTick = Date.now();

      // Store the value being faded to.
      sound._fadeTo = to;

      // Update the volume value on each interval tick.
      sound._interval = setInterval(function() {
        // Update the volume based on the time since the last tick.
        var tick = (Date.now() - lastTick) / len;
        lastTick = Date.now();
        vol += diff * tick;

        // Round to within 2 decimal points.
        vol = Math.round(vol * 100) / 100;

        // Make sure the volume is in the right bounds.
        if (diff < 0) {
          vol = Math.max(to, vol);
        } else {
          vol = Math.min(to, vol);
        }

        // Change the volume.
        if (self._webAudio) {
          sound._volume = vol;
        } else {
          self.volume(vol, sound._id, true);
        }

        // Set the group's volume.
        if (isGroup) {
          self._volume = vol;
        }

        // When the fade is complete, stop it and fire event.
        if ((to < from && vol <= to) || (to > from && vol >= to)) {
          clearInterval(sound._interval);
          sound._interval = null;
          sound._fadeTo = null;
          self.volume(to, sound._id);
          self._emit('fade', sound._id);
        }
      }, stepLen);
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function(id) {
      var self = this;
      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self.volume(sound._fadeTo, id);
        sound._fadeTo = null;
        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function() {
      var self = this;
      var args = arguments;
      var loop, id, sound;

      // Determine the values for loop and id.
      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      }

      // If no id is passed, get all ID's to be looped.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;
          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;
            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;

              // If playing, restart playback to ensure looping updates.
              if (self.playing(ids[i])) {
                self.pause(ids[i], true);
                self.play(ids[i], true);
              }
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function() {
      var self = this;
      var args = arguments;
      var rate, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the playback rate or return the current value.
      var sound;
      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'rate',
            action: function() {
              self.rate.apply(self, args);
            }
          });

          return self;
        }

        // Set the group rate.
        if (typeof id === 'undefined') {
          self._rate = rate;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            if (self.playing(id[i])) {
              sound._rateSeek = self.seek(id[i]);
              sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            }
            sound._rate = rate;

            // Change the playback rate.
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            }

            // Reset the timers.
            var seek = self.seek(id[i]);
            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Start a new end timer if sound is already playing.
            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);
              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function() {
      var self = this;
      var args = arguments;
      var seek, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current position of the first node.
        if (self._sounds.length) {
          id = self._sounds[0]._id;
        }
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else if (self._sounds.length) {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // If there is no ID, bail out.
      if (typeof id === 'undefined') {
        return 0;
      }

      // If the sound hasn't loaded, add it to the load queue to seek when capable.
      if (typeof seek === 'number' && (self._state !== 'loaded' || self._playLock)) {
        self._queue.push({
          event: 'seek',
          action: function() {
            self.seek.apply(self, args);
          }
        });

        return self;
      }

      // Get the sound.
      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);
          if (playing) {
            self.pause(id, true);
          }

          // Move the position of the track and cancel timer.
          sound._seek = seek;
          sound._ended = false;
          self._clearTimer(id);

          // Update the seek position for HTML5 Audio.
          if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
            sound._node.currentTime = seek;
          }

          // Seek and emit when ready.
          var seekAndEmit = function() {
            // Restart the playback if the sound was playing.
            if (playing) {
              self.play(id, true);
            }

            self._emit('seek', id);
          };

          // Wait for the play lock to be unset before emitting (HTML5 Audio).
          if (playing && !self._webAudio) {
            var emitSeek = function() {
              if (!self._playLock) {
                seekAndEmit();
              } else {
                setTimeout(emitSeek, 0);
              }
            };
            setTimeout(emitSeek, 0);
          } else {
            seekAndEmit();
          }
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function(id) {
      var self = this;

      // Check the passed sound ID (if any).
      if (typeof id === 'number') {
        var sound = self._soundById(id);
        return sound ? !sound._paused : false;
      }

      // Otherwise, loop through all sounds and check if any are playing.
      for (var i=0; i<self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function(id) {
      var self = this;
      var duration = self._duration;

      // If we pass an ID, get the sound and return the sprite length.
      var sound = self._soundById(id);
      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function() {
      var self = this;

      // Stop playing any active sounds.
      var sounds = self._sounds;
      for (var i=0; i<sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        }

        // Remove the source or disconnect.
        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          self._clearSound(sounds[i]._node);

          // Remove any event listeners.
          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
          sounds[i]._node.removeEventListener('ended', sounds[i]._endFn, false);

          // Release the Audio object back to the pool.
          Howler._releaseHtml5Audio(sounds[i]._node);
        }

        // Empty out all of the nodes.
        delete sounds[i]._node;

        // Make sure all timers are cleared out.
        self._clearTimer(sounds[i]._id);
      }

      // Remove the references in the global Howler object.
      var index = Howler._howls.indexOf(self);
      if (index >= 0) {
        Howler._howls.splice(index, 1);
      }

      // Delete this sound from the cache (if no other Howl is using it).
      var remCache = true;
      for (i=0; i<Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      }

      // Clear global errors.
      Howler.noAudio = false;

      // Clear out `self`.
      self._state = 'unloaded';
      self._sounds = [];
      self = null;

      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0;

      // Allow passing just an event and ID.
      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i=0; i<events.length; i++) {
          var isId = (id === events[i].id);
          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);
        for (i=0; i<keys.length; i++) {
          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function(event, fn, id) {
      var self = this;

      // Setup the event listener.
      self.on(event, fn, id, 1);

      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function(event, id, msg) {
      var self = this;
      var events = self['_on' + event];

      // Loop through event store and fire all functions.
      for (var i=events.length-1; i>=0; i--) {
        // Only fire the listener if the correct ID is used.
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function(fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0);

          // If this event was setup with `once`, remove it.
          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      }

      // Pass the event type into load queue so that it can continue stepping.
      self._loadQueue(event);

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function(event) {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0];

        // Remove this task if a matching event was passed.
        if (task.event === event) {
          self._queue.shift();
          self._loadQueue();
        }

        // Run the task if no event type is passed.
        if (!event) {
          task.action();
        }
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function(sound) {
      var self = this;
      var sprite = sound._sprite;

      // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.
      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      }

      // Should this sound loop?
      var loop = !!(sound._loop || self._sprite[sprite][2]);

      // Fire the ended event.
      self._emit('end', sound._id);

      // Restart the playback for HTML5 Audio loop.
      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      }

      // Restart this timer if on a Web Audio loop.
      if (self._webAudio && loop) {
        self._emit('play', sound._id);
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;

        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      }

      // Mark the node as paused.
      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        self._clearTimer(sound._id);

        // Clean up the buffer source.
        self._cleanBuffer(sound._node);

        // Attempt to auto-suspend AudioContext if no sounds are still playing.
        Howler._autoSuspend();
      }

      // When using a sprite, end the track.
      if (!self._webAudio && !loop) {
        self.stop(sound._id, true);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function(id) {
      var self = this;

      if (self._endTimers[id]) {
        // Clear the timeout or remove the ended listener.
        if (typeof self._endTimers[id] !== 'function') {
          clearTimeout(self._endTimers[id]);
        } else {
          var sound = self._soundById(id);
          if (sound && sound._node) {
            sound._node.removeEventListener('ended', self._endTimers[id], false);
          }
        }

        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function(id) {
      var self = this;

      // Loop through all sounds and find the one with this ID.
      for (var i=0; i<self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function() {
      var self = this;

      self._drain();

      // Find the first inactive node to recycle.
      for (var i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      }

      // If no inactive node was found, create a new one.
      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0;

      // If there are less sounds than the max pool size, we are done.
      if (self._sounds.length < limit) {
        return;
      }

      // Count the number of inactive sounds.
      for (i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      }

      // Remove excess inactive sounds, going in reverse order.
      for (i=self._sounds.length - 1; i>=0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          }

          // Remove sounds until we have the pool size.
          self._sounds.splice(i, 1);
          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];
        for (var i=0; i<self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function(sound) {
      var self = this;

      // Setup the buffer source for playback.
      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src];

      // Connect to the correct node.
      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      }

      // Setup looping and playback rate.
      sound._node.bufferSource.loop = sound._loop;
      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop || 0;
      }
      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function(node) {
      var self = this;
      var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

      if (Howler._scratchBuffer && node.bufferSource) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);
        if (isIOS) {
          try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
        }
      }
      node.bufferSource = null;

      return self;
    },

    /**
     * Set the source to a 0-second silence to stop any downloading (except in IE).
     * @param  {Object} node Audio node to clear.
     */
    _clearSound: function(node) {
      var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
      if (!checkIE) {
        node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
      }
    }
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */
  var Sound = function(howl) {
    this._parent = howl;
    this.init();
  };
  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function() {
      var self = this;
      var parent = self._parent;

      // Setup the default parameters.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a unique ID for this sound.
      self._id = ++Howler._counter;

      // Add itself to the parent's pool.
      parent._sounds.push(self);

      // Create the new node.
      self.create();

      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function() {
      var self = this;
      var parent = self._parent;
      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
        self._node.paused = true;
        self._node.connect(Howler.masterGain);
      } else if (!Howler.noAudio) {
        // Get an unlocked Audio object from the pool.
        self._node = Howler._obtainHtml5Audio();

        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
        self._errorFn = self._errorListener.bind(self);
        self._node.addEventListener('error', self._errorFn, false);

        // Listen for 'canplaythrough' event to let us know the sound is ready.
        self._loadFn = self._loadListener.bind(self);
        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

        // Listen for the 'ended' event on the sound to account for edge-case where
        // a finite sound has a duration of Infinity.
        self._endFn = self._endListener.bind(self);
        self._node.addEventListener('ended', self._endFn, false);

        // Setup the new audio node.
        self._node.src = parent._src;
        self._node.preload = parent._preload === true ? 'auto' : parent._preload;
        self._node.volume = volume * Howler.volume();

        // Begin loading the source.
        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function() {
      var self = this;
      var parent = self._parent;

      // Reset all of the parameters of this sound.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a new ID so that it isn't confused with the previous sound.
      self._id = ++Howler._counter;

      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function() {
      var self = this;

      // Fire an error event and pass back the code.
      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

      // Clear the event listener.
      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function() {
      var self = this;
      var parent = self._parent;

      // Round up the duration to account for the lower precision in HTML5 Audio.
      parent._duration = Math.ceil(self._node.duration * 10) / 10;

      // Setup a sprite if none is defined.
      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {__default: [0, parent._duration * 1000]};
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';
        parent._emit('load');
        parent._loadQueue();
      }

      // Clear the event listener.
      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    },

    /**
     * HTML5 Audio ended listener callback.
     */
    _endListener: function() {
      var self = this;
      var parent = self._parent;

      // Only handle the `ended`` event if the duration is Infinity.
      if (parent._duration === Infinity) {
        // Update the parent duration to match the real audio duration.
        // Round up the duration to account for the lower precision in HTML5 Audio.
        parent._duration = Math.ceil(self._node.duration * 10) / 10;

        // Update the sprite that corresponds to the real duration.
        if (parent._sprite.__default[1] === Infinity) {
          parent._sprite.__default[1] = parent._duration * 1000;
        }

        // Run the regular ended method.
        parent._ended(self);
      }

      // Clear the event listener since the duration is now correct.
      self._node.removeEventListener('ended', self._endFn, false);
    }
  };

  /** Helper Methods **/
  /***************************************************************************/

  var cache = {};

  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */
  var loadBuffer = function(self) {
    var url = self._src;

    // Check if the buffer has already been cached and use it instead.
    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration;

      // Load the sound into this Howl.
      loadSound(self);

      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);
      for (var i=0; i<data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open(self._xhr.method, url, true);
      xhr.withCredentials = self._xhr.withCredentials;
      xhr.responseType = 'arraybuffer';

      // Apply any custom headers to the request.
      if (self._xhr.headers) {
        Object.keys(self._xhr.headers).forEach(function(key) {
          xhr.setRequestHeader(key, self._xhr.headers[key]);
        });
      }

      xhr.onload = function() {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];
        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
          return;
        }

        decodeAudioData(xhr.response, self);
      };
      xhr.onerror = function() {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };
      safeXhrSend(xhr);
    }
  };

  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */
  var safeXhrSend = function(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };

  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */
  var decodeAudioData = function(arraybuffer, self) {
    // Fire a load error if something broke.
    var error = function() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    };

    // Load the sound on success.
    var success = function(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      } else {
        error();
      }
    };

    // Decode the buffer into an audio source.
    if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
      Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
    } else {
      Howler.ctx.decodeAudioData(arraybuffer, success, error);
    }
  }

  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */
  var loadSound = function(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {__default: [0, self._duration * 1000]};
    }

    // Fire the loaded event.
    if (self._state !== 'loaded') {
      self._state = 'loaded';
      self._emit('load');
      self._loadQueue();
    }
  };

  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */
  var setupAudioContext = function() {
    // If we have already detected that Web Audio isn't supported, don't run this step again.
    if (!Howler.usingWebAudio) {
      return;
    }

    // Check if we are using Web Audio and setup the AudioContext if we are.
    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch(e) {
      Howler.usingWebAudio = false;
    }

    // If the audio context creation still failed, set using web audio to false.
    if (!Howler.ctx) {
      Howler.usingWebAudio = false;
    }

    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.
    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var version = appVersion ? parseInt(appVersion[1], 10) : null;
    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
      if (Howler._navigator && !safari) {
        Howler.usingWebAudio = false;
      }
    }

    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    if (Howler.usingWebAudio) {
      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : Howler._volume, Howler.ctx.currentTime);
      Howler.masterGain.connect(Howler.ctx.destination);
    }

    // Re-run the setup on Howler.
    Howler._setup();
  };

  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // Add support for CommonJS libraries such as browserify.
  if (true) {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // Add to global in Node.js (for testing, etc).
  if (typeof __webpack_require__.g !== 'undefined') {
    __webpack_require__.g.HowlerGlobal = HowlerGlobal;
    __webpack_require__.g.Howler = Howler;
    __webpack_require__.g.Howl = Howl;
    __webpack_require__.g.Sound = Sound;
  } else if (typeof window !== 'undefined') {  // Define globally in case AMD is not available or unused.
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  // Setup default properties.
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */
  HowlerGlobal.prototype.stereo = function(pan) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Loop through all Howls and update their stereo panning.
    for (var i=self._howls.length-1; i>=0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };

  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */
  HowlerGlobal.prototype.pos = function(x, y, z) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._pos[1] : y;
    z = (typeof z !== 'number') ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];

      if (typeof self.ctx.listener.positionX !== 'undefined') {
        self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
      }
    } else {
      return self._pos;
    }

    return self;
  };

  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */
  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    var or = self._orientation;
    y = (typeof y !== 'number') ? or[1] : y;
    z = (typeof z !== 'number') ? or[2] : z;
    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];

      if (typeof self.ctx.listener.forwardX !== 'undefined') {
        self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
      }
    } else {
      return or;
    }

    return self;
  };

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */
  Howl.prototype.init = (function(_super) {
    return function(o) {
      var self = this;

      // Setup user-defined default properties.
      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      };

      // Setup event listeners.
      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

      // Complete initilization with howler.js core's init function.
      return _super.call(this, o);
    };
  })(Howl.prototype.init);

  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */
  Howl.prototype.stereo = function(pan, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function() {
          self.stereo(pan, id);
        }
      });

      return self;
    }

    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

    // Setup the group's stereo panning if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    }

    // Change the streo panning of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower';

            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(pan, 0, 0);
              }
            } else {
              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */
  Howl.prototype.pos = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change position when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? 0 : y;
    z = (typeof z !== 'number') ? -0.5 : z;

    // Setup the group's spatial position if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    }

    // Change the spatial position of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.positionX !== 'undefined') {
              sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setPosition(x, y, z);
            }
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */
  Howl.prototype.orientation = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._orientation[1] : y;
    z = (typeof z !== 'number') ? self._orientation[2] : z;

    // Setup the group's spatial orientation if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    }

    // Change the spatial orientation of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.orientationX !== 'undefined') {
              sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setOrientation(x, y, z);
            }
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */
  Howl.prototype.pannerAttr = function() {
    var self = this;
    var args = arguments;
    var o, id, sound;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // Determine the values based on arguments.
    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (typeof args[0] === 'object') {
        o = args[0];

        // Set the grou's panner attribute values.
        if (typeof id === 'undefined') {
          if (!o.pannerAttr) {
            o.pannerAttr = {
              coneInnerAngle: o.coneInnerAngle,
              coneOuterAngle: o.coneOuterAngle,
              coneOuterGain: o.coneOuterGain,
              distanceModel: o.distanceModel,
              maxDistance: o.maxDistance,
              refDistance: o.refDistance,
              rolloffFactor: o.rolloffFactor,
              panningModel: o.panningModel
            };
          }

          self._pannerAttr = {
            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    }

    // Update the values of the specified sounds.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
        };

        // Update the panner values or create a new panner if none exists.
        var panner = sound._panner;
        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
          panner.panningModel = pa.panningModel;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          }

          // Create a new panner node.
          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */
  Sound.prototype.init = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Setup user-defined default properties.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete initilization with howler.js core Sound's init function.
      _super.call(this);

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  })(Sound.prototype.init);

  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */
  Sound.prototype.reset = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Reset all spatial plugin properties on this sound.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      } else if (self._panner) {
        // Disconnect the panner.
        self._panner.disconnect(0);
        self._panner = undefined;
        parent._refreshBuffer(self);
      }

      // Complete resetting of the sound.
      return _super.call(this);
    };
  })(Sound.prototype.reset);

  /** Helper Methods **/
  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */
  var setupPanner = function(sound, type) {
    type = type || 'spatial';

    // Create the new panner node.
    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.panningModel = sound._pannerAttr.panningModel;

      if (typeof sound._panner.positionX !== 'undefined') {
        sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
        sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
        sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      }

      if (typeof sound._panner.orientationX !== 'undefined') {
        sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
        sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
        sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
      }
    } else {
      sound._panner = Howler.ctx.createStereoPanner();
      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
    }

    sound._panner.connect(sound._node);

    // Update the connections.
    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id, true);
    }
  };
})();


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/arrow.png":
/*!******************************!*\
  !*** ./src/assets/arrow.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1b685dd8f14084ce487b.png";

/***/ }),

/***/ "./src/assets/boing.mp3":
/*!******************************!*\
  !*** ./src/assets/boing.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ed740d29c11e86a7016b.mp3";

/***/ }),

/***/ "./node_modules/@peasy-lib/peasy-input/dist/esm/index.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@peasy-lib/peasy-input/dist/esm/index.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input),
/* harmony export */   "Keyboard": () => (/* binding */ Keyboard),
/* harmony export */   "KeyboardMapping": () => (/* binding */ KeyboardMapping)
/* harmony export */ });
class KeyboardMapping {
  constructor(mappings, callback, effectMode, keymapMode) {
    this.mappings = mappings;
    this.callback = callback;
    this.effectMode = effectMode;
    this.keymapMode = keymapMode;
    if (typeof this.mappings === "string") {
      this.mappings = [this.mappings];
    }
    if (Array.isArray(this.mappings)) {
      this.mappings = [...this.mappings].reduce((mappings2, value) => {
        mappings2[value] = value;
        return mappings2;
      }, {});
    }
    for (const key in this.mappings) {
      const action = this.mappings[key];
      if (typeof action === "string") {
        this.mappings[key] = {
          action,
          repeat: true
        };
      }
      this.mappings[key].mapping = this;
    }
  }
  maps(keys) {
    return this.mappings[keys];
  }
  unmap() {
    Keyboard.unmap(this);
  }
}

const _Keyboard = class {
  static initialize(element) {
    this.element = element;
    this.element.addEventListener("keydown", this.keyChange);
    this.element.addEventListener("keyup", this.keyChange);
    return this;
  }
  static terminate() {
    this.element?.removeEventListener("keydown", this.keyChange);
    this.element?.removeEventListener("keyup", this.keyChange);
    this.element = null;
  }
  static map(mappings, callback, effectMode = "interval", keymapMode = "add") {
    const mapping = new KeyboardMapping(mappings, callback, effectMode, keymapMode);
    this.mappings.unshift(mapping);
    return mapping;
  }
  static unmap(mapping) {
    this.mappings = this.mappings.filter((m) => m !== mapping);
    for (const key of this.pressed.keys()) {
      if (this.pressed.get(key)?.keymap.mapping === mapping) {
        this.pressed.delete(key);
      }
    }
    this.lastPressed = [...this.pressed.keys()];
  }
  static resolve(keys, eventType) {
    const mapped = this.mapped(keys);
    if (mapped == null) {
      return;
    }
    if (mapped.mapping?.effectMode === "instant") {
      mapped.mapping.callback?.(mapped.action, eventType === "keydown", 0);
      return;
    }
    if (eventType === "keydown") {
      if (!this.pressed.has(keys)) {
        this.pressed.set(keys, { keymap: mapped, repeat: 0, done: false, doneIs: false });
      }
    } else if (eventType === "keyup") {
      this.pressed.delete(keys);
    }
  }
  static update(deltaTime) {
    this.pressed.forEach((mapped, key) => {
      if (mapped.repeat === 0 || mapped.keymap.repeat && mapped.repeat <= 0) {
        mapped.keymap.mapping?.callback?.(mapped.keymap.action, true, deltaTime);
        mapped.repeat += Input.rps;
      } else {
        if (!mapped.keymap.repeat) {
          if (!mapped.done) {
            mapped.done = true;
          }
        } else {
          mapped.repeat -= deltaTime * 1e3;
        }
      }
    });
    this.lastPressed.forEach((keys) => {
      if (!this.pressed.has(keys)) {
        const mapped = this.mapped(keys);
        mapped?.mapping.callback?.(mapped.action, false, deltaTime);
      }
    });
    this.lastPressed = [...this.pressed.keys()];
  }
  static mapped(keys) {
    let mapped;
    for (const mapping of this.mappings) {
      mapped = mapping.maps(keys);
      if (mapped != null || mapping.keymapMode === "replace") {
        break;
      }
    }
    return mapped;
  }
  static is(action) {
    for (const pressed of this.pressed.values()) {
      if (pressed.keymap.action !== action) {
        continue;
      }
      if (pressed.repeat === 0 || pressed.keymap.repeat && pressed.repeat <= 0) {
        return true;
      } else {
        if (!pressed.keymap.repeat && !pressed.doneIs) {
          pressed.doneIs = true;
          return true;
        }
      }
      return false;
    }
    return false;
  }
};
let Keyboard = _Keyboard;
Keyboard.mappings = [];
Keyboard.pressed = /* @__PURE__ */ new Map();
Keyboard.lastPressed = [];
Keyboard.keyChange = (event) => {
  let keys = event.key;
  if (["Control", "Alt", "Shift"].includes(keys)) {
    if (event.type === "keydown") {
      for (const pressed of _Keyboard.pressed.keys()) {
        const pressedKeys = pressed.split("+");
        if (pressedKeys.includes(keys)) {
          continue;
        }
        let modifiedPressed = pressedKeys.pop();
        for (const modifier of ["Shift", "Alt", "Control"]) {
          if (keys === modifier || pressedKeys.includes(modifier)) {
            modifiedPressed = `${modifier}+${modifiedPressed}`;
          }
        }
        _Keyboard.resolve(pressed, "keyup");
        _Keyboard.resolve(modifiedPressed, "keydown");
      }
    } else if (event.type === "keyup") {
      for (const pressed of _Keyboard.pressed.keys()) {
        const pressedKeys = pressed.split("+");
        if (!pressedKeys.includes(keys)) {
          continue;
        }
        const modifiedPressed = pressedKeys.filter((key) => key !== keys).join("+");
        _Keyboard.resolve(pressed, "keyup");
        _Keyboard.resolve(modifiedPressed, "keydown");
      }
    }
  } else {
    if (event.shiftKey) {
      keys = `Shift+${keys}`;
    }
    if (event.altKey) {
      keys = `Alt+${keys}`;
    }
    if (event.ctrlKey) {
      keys = `Control+${keys}`;
    }
    _Keyboard.resolve(keys, event.type);
  }
};

class MouseMapping {
  constructor() {
  }
  unmap() {
    Mouse.unmap(this);
  }
}

class Mouse {
  static initialize() {
    return this;
  }
  static terminate() {
  }
  static map() {
    const mapping = new MouseMapping();
    this.mappings.unshift(mapping);
    return mapping;
  }
  static unmap(mapping) {
    this.mappings = this.mappings.filter((m) => m !== mapping);
  }
  static update(deltaTime) {
  }
  static is(action) {
    return false;
  }
}
Mouse.mappings = [];

const _Input = class {
  static initialize(rps, rAF = true, element = document.body) {
    _Input.initialized = true;
    this.rps = rps;
    Keyboard.initialize(element);
    if (rAF === true) {
      let last;
      const start = (now) => {
        last = now;
        requestAnimationFrame(tick);
      };
      const tick = (now) => {
        const deltaTime = (now - last) / 1e3;
        last = now;
        _Input.update(deltaTime);
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(start);
      return;
    }
    return this;
  }
  static terminate() {
    Keyboard.terminate();
  }
  static map(mappings, callback, effectMode = "interval", keymapMode = "add") {
    if (!_Input.initialized) {
      _Input.initialize(60);
    }
    return Keyboard.map(mappings, callback, effectMode, keymapMode);
  }
  static unmap(mapping) {
    if (mapping instanceof KeyboardMapping) {
      Keyboard.unmap(mapping);
    } else {
      Mouse.unmap(mapping);
    }
  }
  static update(deltaTime) {
    Keyboard.update(deltaTime);
  }
  static is(action) {
    if (!_Input.initialized) {
      _Input.initialize(60);
    }
    return Keyboard.is(action) || Mouse.is(action);
  }
};
let Input = _Input;
Input.initialized = false;


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMva2V5Ym9hcmQtbWFwcGluZy50cyIsIi4uLy4uL3NyYy9rZXlib2FyZC50cyIsIi4uLy4uL3NyYy9tb3VzZS1tYXBwaW5nLnRzIiwiLi4vLi4vc3JjL21vdXNlLnRzIiwiLi4vLi4vc3JjL2lucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElLZXlNYXBwaW5nLCBLZXlib2FyZCwgS2V5Q2FsbGJhY2ssIEtleUVmZmVjdE1vZGUsIEtleW1hcE1vZGUgfSBmcm9tIFwiLi9rZXlib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRNYXBwaW5nIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBtYXBwaW5nczogc3RyaW5nIHwgc3RyaW5nW10gfCBSZWNvcmQ8c3RyaW5nLCBJS2V5TWFwcGluZz4sXG4gICAgcHVibGljIGNhbGxiYWNrOiBLZXlDYWxsYmFjayB8IHVuZGVmaW5lZCxcbiAgICBwdWJsaWMgZWZmZWN0TW9kZTogS2V5RWZmZWN0TW9kZSxcbiAgICBwdWJsaWMga2V5bWFwTW9kZTogS2V5bWFwTW9kZSxcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm1hcHBpbmdzID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5tYXBwaW5ncyA9IFt0aGlzLm1hcHBpbmdzXTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5tYXBwaW5ncykpIHtcbiAgICAgIHRoaXMubWFwcGluZ3MgPSBbLi4udGhpcy5tYXBwaW5nc10ucmVkdWNlKChtYXBwaW5ncywgdmFsdWUpID0+IHtcbiAgICAgICAgKG1hcHBpbmdzIGFzIGFueSlbdmFsdWVdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBtYXBwaW5ncztcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5tYXBwaW5ncykge1xuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5tYXBwaW5nc1trZXldO1xuICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMubWFwcGluZ3Nba2V5XSA9IHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICByZXBlYXQ6IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0aGlzLm1hcHBpbmdzW2tleV0ubWFwcGluZyA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1hcHMoa2V5czogc3RyaW5nKTogSUtleU1hcHBpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiAodGhpcy5tYXBwaW5ncyBhcyBhbnkpW2tleXNdO1xuICB9XG5cbiAgcHVibGljIHVubWFwKCk6IHZvaWQge1xuICAgIEtleWJvYXJkLnVubWFwKHRoaXMpO1xuICB9XG5cbiAgLy8gcHVibGljIGFkZE1hcHBpbmcoa2V5czogc3RyaW5nIHwgc3RyaW5nW10sIGNhbGxiYWNrOiBLZXlDYWxsYmFjaykge1xuICAvLyAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAvLyAgICAga2V5cyA9IFtrZXlzXTtcbiAgLy8gICB9XG4gIC8vICAga2V5cy5mb3JFYWNoKGtleSA9PiB0aGlzLm1hcHBpbmdzLnNldChrZXksIGNhbGxiYWNrKSk7XG4gIC8vIH1cbiAgLy8gcHVibGljIHJlbW92ZU1hcHBpbmcoa2V5OiBzdHJpbmcpIHtcbiAgLy8gICB0aGlzLm1hcHBpbmdzLmRlbGV0ZShrZXkpO1xuICAvLyB9XG59XG4iLCJpbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL2lucHV0XCI7XG5pbXBvcnQgeyBLZXlib2FyZE1hcHBpbmcgfSBmcm9tIFwiLi9rZXlib2FyZC1tYXBwaW5nXCI7XG5cbmV4cG9ydCB0eXBlIEtleUNhbGxiYWNrID0gKGtleTogc3RyaW5nLCBwcmVzc2VkOiBib29sZWFuLCBkZWx0YVRpbWU6IG51bWJlcikgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIEtleW1hcE1vZGUgPSAnYWRkJyB8ICdyZXBsYWNlJztcbmV4cG9ydCB0eXBlIEtleUVmZmVjdE1vZGUgPSAnaW5zdGFudCcgfCAnaW50ZXJ2YWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElLZXlNYXBwaW5nIHtcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIHJlcGVhdDogYm9vbGVhbjtcbiAgbWFwcGluZz86IEtleWJvYXJkTWFwcGluZztcbn1cbi8vIFRPRE86IEFkZCBzdXBwb3J0IGZvciBtdWx0aXBsZSBrZXlzIGZvciBvbmUgYWN0aW9uXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQge1xuICBwcml2YXRlIHN0YXRpYyBlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIHByaXZhdGUgc3RhdGljIG1hcHBpbmdzOiBLZXlib2FyZE1hcHBpbmdbXSA9IFtdO1xuICAvLyBwcml2YXRlIHN0YXRpYyBtYXBwaW5nczogTWFwPHN0cmluZywgS2V5Q2FsbGJhY2s+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBwcmVzc2VkOiBNYXA8c3RyaW5nLCB7IGtleW1hcDogSUtleU1hcHBpbmcsIHJlcGVhdDogbnVtYmVyLCBkb25lOiBib29sZWFuLCBkb25lSXM6IGJvb2xlYW4gfT4gPSBuZXcgTWFwKCk7XG4gIHByaXZhdGUgc3RhdGljIGxhc3RQcmVzc2VkOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleUNoYW5nZSk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlDaGFuZ2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB0ZXJtaW5hdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlDaGFuZ2UpO1xuICAgIHRoaXMuZWxlbWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleUNoYW5nZSk7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbWFwKG1hcHBpbmdzOiBzdHJpbmcgfCBzdHJpbmdbXSB8IFJlY29yZDxzdHJpbmcsIElLZXlNYXBwaW5nPiwgY2FsbGJhY2s/OiBLZXlDYWxsYmFjaywgZWZmZWN0TW9kZTogS2V5RWZmZWN0TW9kZSA9ICdpbnRlcnZhbCcsIGtleW1hcE1vZGU6IEtleW1hcE1vZGUgPSAnYWRkJyk6IEtleWJvYXJkTWFwcGluZyB7XG4gICAgY29uc3QgbWFwcGluZyA9IG5ldyBLZXlib2FyZE1hcHBpbmcobWFwcGluZ3MsIGNhbGxiYWNrLCBlZmZlY3RNb2RlLCBrZXltYXBNb2RlKTtcbiAgICB0aGlzLm1hcHBpbmdzLnVuc2hpZnQobWFwcGluZyk7XG4gICAgcmV0dXJuIG1hcHBpbmc7XG4gIH1cbiAgcHVibGljIHN0YXRpYyB1bm1hcChtYXBwaW5nOiBLZXlib2FyZE1hcHBpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm1hcHBpbmdzID0gdGhpcy5tYXBwaW5ncy5maWx0ZXIobSA9PiBtICE9PSBtYXBwaW5nKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLnByZXNzZWQua2V5cygpKSB7XG4gICAgICBpZiAodGhpcy5wcmVzc2VkLmdldChrZXkpPy5rZXltYXAubWFwcGluZyA9PT0gbWFwcGluZykge1xuICAgICAgICB0aGlzLnByZXNzZWQuZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubGFzdFByZXNzZWQgPSBbLi4udGhpcy5wcmVzc2VkLmtleXMoKV07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGtleUNoYW5nZSA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGxldCBrZXlzID0gZXZlbnQua2V5O1xuICAgIGlmIChbJ0NvbnRyb2wnLCAnQWx0JywgJ1NoaWZ0J10uaW5jbHVkZXMoa2V5cykpIHtcbiAgICAgIGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAgZm9yIChjb25zdCBwcmVzc2VkIG9mIHRoaXMucHJlc3NlZC5rZXlzKCkpIHtcbiAgICAgICAgICBjb25zdCBwcmVzc2VkS2V5cyA9IHByZXNzZWQuc3BsaXQoJysnKTtcbiAgICAgICAgICBpZiAocHJlc3NlZEtleXMuaW5jbHVkZXMoa2V5cykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbW9kaWZpZWRQcmVzc2VkID0gcHJlc3NlZEtleXMucG9wKCk7XG4gICAgICAgICAgZm9yIChjb25zdCBtb2RpZmllciBvZiBbJ1NoaWZ0JywgJ0FsdCcsICdDb250cm9sJ10pIHtcbiAgICAgICAgICAgIGlmIChrZXlzID09PSBtb2RpZmllciB8fCBwcmVzc2VkS2V5cy5pbmNsdWRlcyhtb2RpZmllcikpIHtcbiAgICAgICAgICAgICAgbW9kaWZpZWRQcmVzc2VkID0gYCR7bW9kaWZpZXJ9KyR7bW9kaWZpZWRQcmVzc2VkfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgS2V5Ym9hcmQucmVzb2x2ZShwcmVzc2VkLCAna2V5dXAnKTtcbiAgICAgICAgICBLZXlib2FyZC5yZXNvbHZlKG1vZGlmaWVkUHJlc3NlZCBhcyBzdHJpbmcsICdrZXlkb3duJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJykge1xuICAgICAgICBmb3IgKGNvbnN0IHByZXNzZWQgb2YgdGhpcy5wcmVzc2VkLmtleXMoKSkge1xuICAgICAgICAgIGNvbnN0IHByZXNzZWRLZXlzID0gcHJlc3NlZC5zcGxpdCgnKycpO1xuICAgICAgICAgIGlmICghcHJlc3NlZEtleXMuaW5jbHVkZXMoa2V5cykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBtb2RpZmllZFByZXNzZWQgPSBwcmVzc2VkS2V5cy5maWx0ZXIoa2V5ID0+IGtleSAhPT0ga2V5cykuam9pbignKycpO1xuXG4gICAgICAgICAgS2V5Ym9hcmQucmVzb2x2ZShwcmVzc2VkLCAna2V5dXAnKTtcbiAgICAgICAgICBLZXlib2FyZC5yZXNvbHZlKG1vZGlmaWVkUHJlc3NlZCwgJ2tleWRvd24nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAga2V5cyA9IGBTaGlmdCske2tleXN9YDtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5hbHRLZXkpIHtcbiAgICAgICAga2V5cyA9IGBBbHQrJHtrZXlzfWA7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICBrZXlzID0gYENvbnRyb2wrJHtrZXlzfWA7XG4gICAgICB9XG4gICAgICBLZXlib2FyZC5yZXNvbHZlKGtleXMsIGV2ZW50LnR5cGUpO1xuICAgIH1cbiAgfTtcblxuICBwdWJsaWMgc3RhdGljIHJlc29sdmUoa2V5czogc3RyaW5nLCBldmVudFR5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IG1hcHBlZCA9IHRoaXMubWFwcGVkKGtleXMpO1xuICAgIGlmIChtYXBwZWQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtYXBwZWQubWFwcGluZz8uZWZmZWN0TW9kZSA9PT0gJ2luc3RhbnQnKSB7XG4gICAgICBtYXBwZWQubWFwcGluZy5jYWxsYmFjaz8uKG1hcHBlZC5hY3Rpb24sIGV2ZW50VHlwZSA9PT0gJ2tleWRvd24nLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnRUeXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgIGlmICghdGhpcy5wcmVzc2VkLmhhcyhrZXlzKSkge1xuICAgICAgICB0aGlzLnByZXNzZWQuc2V0KGtleXMsIHsga2V5bWFwOiBtYXBwZWQsIHJlcGVhdDogMCwgZG9uZTogZmFsc2UsIGRvbmVJczogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdrZXl1cCcpIHtcbiAgICAgIHRoaXMucHJlc3NlZC5kZWxldGUoa2V5cyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLnByZXNzZWQuZm9yRWFjaCgobWFwcGVkLCBrZXkpID0+IHtcbiAgICAgIGlmIChtYXBwZWQucmVwZWF0ID09PSAwIHx8IChtYXBwZWQua2V5bWFwLnJlcGVhdCAmJiBtYXBwZWQucmVwZWF0IDw9IDApKSB7XG4gICAgICAgIG1hcHBlZC5rZXltYXAubWFwcGluZz8uY2FsbGJhY2s/LihtYXBwZWQua2V5bWFwLmFjdGlvbiwgdHJ1ZSwgZGVsdGFUaW1lKTtcbiAgICAgICAgbWFwcGVkLnJlcGVhdCArPSBJbnB1dC5ycHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnTk8gUkVQRUFUJywgbWFwcGVkLnJlcGVhdCk7XG4gICAgICAgIGlmICghbWFwcGVkLmtleW1hcC5yZXBlYXQpIHtcbiAgICAgICAgICBpZiAoIW1hcHBlZC5kb25lKSB7XG4gICAgICAgICAgICAvLyBtYXBwZWQua2V5bWFwLm1hcHBpbmcuY2FsbGJhY2sobWFwcGVkLmtleW1hcC5hY3Rpb24sIGZhbHNlLCBkZWx0YVRpbWUpO1xuICAgICAgICAgICAgbWFwcGVkLmRvbmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXBwZWQucmVwZWF0IC09IGRlbHRhVGltZSAqIDEwMDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmxhc3RQcmVzc2VkLmZvckVhY2goa2V5cyA9PiB7XG4gICAgICBpZiAoIXRoaXMucHJlc3NlZC5oYXMoa2V5cykpIHtcbiAgICAgICAgY29uc3QgbWFwcGVkID0gdGhpcy5tYXBwZWQoa2V5cyk7XG4gICAgICAgIG1hcHBlZD8ubWFwcGluZyEuY2FsbGJhY2s/LihtYXBwZWQuYWN0aW9uLCBmYWxzZSwgZGVsdGFUaW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmxhc3RQcmVzc2VkID0gWy4uLnRoaXMucHJlc3NlZC5rZXlzKCldO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtYXBwZWQoa2V5czogc3RyaW5nKTogSUtleU1hcHBpbmcgfCB1bmRlZmluZWQge1xuICAgIGxldCBtYXBwZWQ7XG4gICAgZm9yIChjb25zdCBtYXBwaW5nIG9mIHRoaXMubWFwcGluZ3MpIHtcbiAgICAgIG1hcHBlZCA9IG1hcHBpbmcubWFwcyhrZXlzKTtcbiAgICAgIGlmIChtYXBwZWQgIT0gbnVsbCB8fCBtYXBwaW5nLmtleW1hcE1vZGUgPT09ICdyZXBsYWNlJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hcHBlZDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXMoYWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBmb3IgKGNvbnN0IHByZXNzZWQgb2YgdGhpcy5wcmVzc2VkLnZhbHVlcygpKSB7XG4gICAgICBpZiAocHJlc3NlZC5rZXltYXAuYWN0aW9uICE9PSBhY3Rpb24pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAocHJlc3NlZC5yZXBlYXQgPT09IDAgfHwgKHByZXNzZWQua2V5bWFwLnJlcGVhdCAmJiBwcmVzc2VkLnJlcGVhdCA8PSAwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghcHJlc3NlZC5rZXltYXAucmVwZWF0ICYmICFwcmVzc2VkLmRvbmVJcykge1xuICAgICAgICAgIHByZXNzZWQuZG9uZUlzID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vdXNlIH0gZnJvbSBcIi4vbW91c2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3VzZU1hcHBpbmcge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICApIHtcclxuICB9XHJcbiAgcHVibGljIHVubWFwKCk6IHZvaWQge1xyXG4gICAgTW91c2UudW5tYXAodGhpcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1vdXNlTWFwcGluZyB9IGZyb20gXCIuL21vdXNlLW1hcHBpbmdcIjtcclxuXHJcbmV4cG9ydCB0eXBlIE1vdXNlQ2FsbGJhY2sgPSAoa2V5OiBzdHJpbmcsIHByZXNzZWQ6IGJvb2xlYW4sIGRlbHRhVGltZTogbnVtYmVyKSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBNb3VzZUVmZmVjdE1vZGUgPSAnaW5zdGFudCcgfCAnaW50ZXJ2YWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNlIHtcclxuICBwcml2YXRlIHN0YXRpYyBtYXBwaW5nczogTW91c2VNYXBwaW5nW10gPSBbXTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRlcm1pbmF0ZSgpIHsgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG1hcCgpOiBNb3VzZU1hcHBpbmcge1xyXG4gICAgY29uc3QgbWFwcGluZyA9IG5ldyBNb3VzZU1hcHBpbmcoKTtcclxuICAgIHRoaXMubWFwcGluZ3MudW5zaGlmdChtYXBwaW5nKTtcclxuICAgIHJldHVybiBtYXBwaW5nO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIHVubWFwKG1hcHBpbmc6IE1vdXNlTWFwcGluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXBwaW5ncyA9IHRoaXMubWFwcGluZ3MuZmlsdGVyKG0gPT4gbSAhPT0gbWFwcGluZyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikgeyB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXMoYWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUtleU1hcHBpbmcsIEtleWJvYXJkLCBLZXlDYWxsYmFjaywgS2V5RWZmZWN0TW9kZSwgS2V5bWFwTW9kZSB9IGZyb20gXCIuL2tleWJvYXJkXCI7XG5pbXBvcnQgeyBLZXlib2FyZE1hcHBpbmcgfSBmcm9tIFwiLi9rZXlib2FyZC1tYXBwaW5nXCI7XG5pbXBvcnQgeyBNb3VzZSB9IGZyb20gXCIuL21vdXNlXCI7XG5pbXBvcnQgeyBNb3VzZU1hcHBpbmcgfSBmcm9tIFwiLi9tb3VzZS1tYXBwaW5nXCI7XG5cbmV4cG9ydCB0eXBlIElucHV0Q2FsbGJhY2sgPSBLZXlDYWxsYmFjaztcbmV4cG9ydCB0eXBlIElucHV0RWZmZWN0TW9kZSA9IEtleUVmZmVjdE1vZGU7XG5cbmV4cG9ydCBjbGFzcyBJbnB1dCB7XG4gIHByaXZhdGUgc3RhdGljIGluaXRpYWxpemVkID0gZmFsc2U7XG4gIHB1YmxpYyBzdGF0aWMgcnBzOiBudW1iZXI7XG5cbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKHJwczogbnVtYmVyLCByQUYgPSB0cnVlLCBlbGVtZW50ID0gZG9jdW1lbnQuYm9keSkge1xuICAgIElucHV0LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLnJwcyA9IHJwcztcbiAgICBLZXlib2FyZC5pbml0aWFsaXplKGVsZW1lbnQpO1xuICAgIE1vdXNlLmluaXRpYWxpemUoKTtcblxuICAgIGlmIChyQUYgPT09IHRydWUpIHtcbiAgICAgIGxldCBsYXN0OiBudW1iZXI7XG4gICAgICBjb25zdCBzdGFydCA9IChub3c6IG51bWJlcikgPT4ge1xuICAgICAgICBsYXN0ID0gbm93O1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgICB9O1xuICAgICAgY29uc3QgdGljayA9IChub3c6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSAobm93IC0gbGFzdCkgLyAxMDAwO1xuICAgICAgICBsYXN0ID0gbm93O1xuICAgICAgICBJbnB1dC51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgICAgfTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGFydCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB0ZXJtaW5hdGUoKSB7XG4gICAgS2V5Ym9hcmQudGVybWluYXRlKCk7XG4gICAgTW91c2UudGVybWluYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG1hcChtYXBwaW5nczogYW55LCBjYWxsYmFjaz86IElucHV0Q2FsbGJhY2ssIGVmZmVjdE1vZGU6IElucHV0RWZmZWN0TW9kZSA9ICdpbnRlcnZhbCcsIGtleW1hcE1vZGU6IEtleW1hcE1vZGUgPSAnYWRkJyk6IEtleWJvYXJkTWFwcGluZyB7XG4gICAgaWYgKCFJbnB1dC5pbml0aWFsaXplZCkge1xuICAgICAgSW5wdXQuaW5pdGlhbGl6ZSg2MCk7XG4gICAgfVxuICAgIHJldHVybiBLZXlib2FyZC5tYXAobWFwcGluZ3MsIGNhbGxiYWNrLCBlZmZlY3RNb2RlLCBrZXltYXBNb2RlKTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIHVubWFwKG1hcHBpbmc6IEtleWJvYXJkTWFwcGluZyB8IE1vdXNlTWFwcGluZyk6IHZvaWQge1xuICAgIGlmIChtYXBwaW5nIGluc3RhbmNlb2YgS2V5Ym9hcmRNYXBwaW5nKSB7XG4gICAgICBLZXlib2FyZC51bm1hcChtYXBwaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTW91c2UudW5tYXAobWFwcGluZyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICBLZXlib2FyZC51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICBNb3VzZS51cGRhdGUoZGVsdGFUaW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXMoYWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIUlucHV0LmluaXRpYWxpemVkKSB7XG4gICAgICBJbnB1dC5pbml0aWFsaXplKDYwKTtcbiAgICB9XG4gICAgcmV0dXJuIEtleWJvYXJkLmlzKGFjdGlvbikgfHwgTW91c2UuaXMoYWN0aW9uKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1hcHBpbmdzIl0sIm1hcHBpbmdzIjoiQUFFTyxNQUFNLGVBQWdCLENBQUE7QUFBQSxFQUNwQixXQUNFLENBQUEsUUFBQSxFQUNBLFFBQ0EsRUFBQSxVQUFBLEVBQ0EsVUFDUCxFQUFBO0FBSk8sSUFBQSxJQUFBLENBQUEsUUFBQSxHQUFBLFFBQUEsQ0FBQTtBQUNBLElBQUEsSUFBQSxDQUFBLFFBQUEsR0FBQSxRQUFBLENBQUE7QUFDQSxJQUFBLElBQUEsQ0FBQSxVQUFBLEdBQUEsVUFBQSxDQUFBO0FBQ0EsSUFBQSxJQUFBLENBQUEsVUFBQSxHQUFBLFVBQUEsQ0FBQTtBQUVQLElBQUksSUFBQSxPQUFPLElBQUssQ0FBQSxRQUFBLEtBQWEsUUFBVSxFQUFBO0FBQ3JDLE1BQUssSUFBQSxDQUFBLFFBQUEsR0FBVyxDQUFDLElBQUEsQ0FBSyxRQUFRLENBQUEsQ0FBQTtBQUFBLEtBQ2hDO0FBQ0EsSUFBQSxJQUFJLEtBQU0sQ0FBQSxPQUFBLENBQVEsSUFBSyxDQUFBLFFBQVEsQ0FBRyxFQUFBO0FBQ2hDLE1BQUssSUFBQSxDQUFBLFFBQUEsR0FBVyxDQUFDLEdBQUcsSUFBQSxDQUFLLFFBQVEsQ0FBRSxDQUFBLE1BQUEsQ0FBTyxDQUFDQSxTQUFBQSxFQUFVLEtBQVUsS0FBQTtBQUM3RCxRQUFD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


/***/ }),

/***/ "./node_modules/@peasy-lib/peasy-physics/dist/esm/index.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@peasy-lib/peasy-physics/dist/esm/index.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "Entity": () => (/* binding */ Entity),
/* harmony export */   "Force": () => (/* binding */ Force),
/* harmony export */   "Intersection": () => (/* binding */ Intersection),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "Physics": () => (/* binding */ Physics),
/* harmony export */   "Point": () => (/* binding */ Point),
/* harmony export */   "Polygon": () => (/* binding */ Polygon),
/* harmony export */   "Ray": () => (/* binding */ Ray),
/* harmony export */   "Rect": () => (/* binding */ Rect),
/* harmony export */   "RoundedRect": () => (/* binding */ RoundedRect),
/* harmony export */   "Stadium": () => (/* binding */ Stadium),
/* harmony export */   "Vector": () => (/* binding */ Vector)
/* harmony export */ });
class Vector3 {
    constructor(t = 0, s = 0, e = 0) {
        this.x = t;
        this.y = s;
        this.z = e;
    }
    get zero() {
        return 0 === Math.abs(this.x) && 0 === Math.abs(this.y) && 0 === Math.abs(this.z);
    }
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    get half() {
        return this.multiply(.5);
    }
    get negHalf() {
        return this.multiply(-.5);
    }
    static from(t = 0, s = 0, e = 0) {
        if (t instanceof Vector3) {
            s = t.y;
            e = t.z;
            t = t.x;
        } else if (Array.isArray(t)) {
            s = t[1];
            e = t[2];
            t = t[0];
        } else if ("string" === typeof t && t.includes(",")) [t, s, e] = t.split(",").map((t => +t)); else if ("number" !== typeof t && "string" !== typeof t && "x" in t && "y" in t && "z" in t) {
            s = t.y;
            e = t.z;
            t = t.x;
        }
        return new Vector3(t, s, e);
    }
    equals(t) {
        if (this.x !== t.x || this.y !== t.y || this.z !== t.z) return false;
        return true;
    }
    add(t, s = false) {
        const e = s ? this : this.clone();
        const {x: i, y: n, z: h} = Array.isArray(t) ? {
            x: t[0],
            y: t[1],
            z: t[2]
        } : t;
        e.x += i;
        e.y += n;
        e.z += h;
        return e;
    }
    subtract(t, s = false) {
        const e = s ? this : this.clone();
        const {x: i, y: n, z: h} = Array.isArray(t) ? {
            x: t[0],
            y: t[1],
            z: t[2]
        } : t;
        e.x -= i;
        e.y -= n;
        e.z -= h;
        return e;
    }
    multiply(t, s = false) {
        const e = s ? this : this.clone();
        const i = t instanceof Vector3 ? t : new Vector3(t, t, t);
        e.x *= i.x;
        e.y *= i.y;
        e.z *= i.z;
        return e;
    }
    divide(t, s = false) {
        const e = s ? this : this.clone();
        const i = t instanceof Vector3 ? t : new Vector(t, t, t);
        e.x /= i.x;
        e.y /= i.y;
        e.z /= i.z;
        return e;
    }
    modulus(t, s = false) {
        const e = s ? this : this.clone();
        const i = t instanceof Vector3 ? t : new Vector3(t, t, t);
        e.x %= i.x;
        e.y %= i.y;
        e.z %= i.z;
        return e;
    }
    normalize(t = false) {
        const s = t ? this : this.clone();
        const e = this.magnitude;
        if (e > 0) s.divide(e, true);
        return s;
    }
    dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z;
    }
    sign(t = false) {
        const s = t ? this : this.clone();
        s.x = Math.sign(s.x);
        s.y = Math.sign(s.y);
        s.z = Math.sign(s.z);
        return s;
    }
    clamp(t, s, e = false) {
        const i = e ? this : this.clone();
        i.x = Math.max(t.x, Math.min(i.x, s.x));
        i.y = Math.max(t.y, Math.min(i.y, s.y));
        i.z = Math.max(t.z, Math.min(i.z, s.z));
        return i;
    }
    floor(t = false) {
        const s = t ? this : this.clone();
        s.x = Math.floor(s.x);
        s.y = Math.floor(s.y);
        s.z = Math.floor(s.z);
        return s;
    }
    rotate(t, s = false) {
        const e = s ? this : this.clone();
        const i = t * (Math.PI / 180);
        const n = Math.sin(i);
        const h = Math.cos(i);
        const {x: r, y: o} = e;
        e.x = r * h - o * n;
        e.y = r * n + o * h;
        return e;
    }
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    toArray() {
        return [ this.x, this.y, this.z ];
    }
    toString() {
        return `${this.x}, ${this.y},${this.z}`;
    }
    toVector2() {
        return new Vector(this.x, this.y, this.z);
    }
}

class Vector {
    constructor(t = 0, s = 0, e = 0) {
        this.x = t;
        this.y = s;
        this.z = e;
    }
    get zero() {
        return 0 === Math.abs(this.x) && 0 === Math.abs(this.y);
    }
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    get half() {
        return this.multiply(.5);
    }
    get negHalf() {
        return this.multiply(-.5);
    }
    static from(t = 0, s = 0, e = 0) {
        if (t instanceof Vector) {
            s = t.y;
            e = t.z;
            t = t.x;
        } else if (Array.isArray(t)) {
            s = t[1];
            e = t[2] ?? 0;
            t = t[0];
        } else if ("string" === typeof t && t.includes(",")) [t, s, e] = t.split(",").map((t => +t)); else if ("number" !== typeof t && "string" !== typeof t && "x" in t && "y" in t) {
            s = t.y;
            e = t.z;
            t = t.x;
        }
        return new Vector(t, s, e);
    }
    equals(t) {
        if (this.x !== t.x || this.y !== t.y || this.z !== t.z) return false;
        return true;
    }
    add(t, s = false) {
        const e = s ? this : this.clone();
        const {x: i, y: n, z: h} = Array.isArray(t) ? {
            x: t[0],
            y: t[1],
            z: t[2]
        } : t;
        e.x += i;
        e.y += n;
        return e;
    }
    subtract(t, s = false) {
        const e = s ? this : this.clone();
        const {x: i, y: n, z: h} = Array.isArray(t) ? {
            x: t[0],
            y: t[1],
            z: t[2]
        } : t;
        e.x -= i;
        e.y -= n;
        return e;
    }
    multiply(t, s = false) {
        const e = s ? this : this.clone();
        const i = t instanceof Vector ? t : new Vector(t, t, t);
        e.x *= i.x;
        e.y *= i.y;
        return e;
    }
    divide(t, s = false) {
        const e = s ? this : this.clone();
        const i = t instanceof Vector ? t : new Vector(t, t, t);
        e.x /= i.x;
        e.y /= i.y;
        return e;
    }
    modulus(t, s = false) {
        const e = s ? this : this.clone();
        const i = t instanceof Vector ? t : new Vector(t, t, t);
        e.x %= i.x;
        e.y %= i.y;
        return e;
    }
    normalize(t = false) {
        const s = t ? this : this.clone();
        const e = this.magnitude;
        if (e > 0) s.divide(e, true);
        return s;
    }
    dot(t) {
        return this.x * t.x + this.y * t.y;
    }
    sign(t = false) {
        const s = t ? this : this.clone();
        s.x = Math.sign(s.x);
        s.y = Math.sign(s.y);
        return s;
    }
    clamp(t, s, e = false) {
        const i = e ? this : this.clone();
        i.x = Math.max(t.x, Math.min(i.x, s.x));
        i.y = Math.max(t.y, Math.min(i.y, s.y));
        return i;
    }
    floor(t = false) {
        const s = t ? this : this.clone();
        s.x = Math.floor(s.x);
        s.y = Math.floor(s.y);
        return s;
    }
    rotate(t, s = false) {
        const e = s ? this : this.clone();
        const i = t * (Math.PI / 180);
        const n = Math.sin(i);
        const h = Math.cos(i);
        const {x: r, y: o} = e;
        e.x = r * h - o * n;
        e.y = r * n + o * h;
        return e;
    }
    clone() {
        return new Vector(this.x, this.y, this.z);
    }
    toArray() {
        return [ this.x, this.y ];
    }
    toString() {
        return `${this.x}, ${this.y}`;
    }
    toVector3() {
        return new Vector3(this.x, this.y, this.z);
    }
}

class RoundedRect {
    constructor(t, s, e, i = 0) {
        this.position = t;
        this.size = s;
        this.radius = e;
        this.orientation = i;
        this.worldSpace = false;
        this.t = [];
    }
    get half() {
        return this.size.half;
    }
    get left() {
        return this.position.x - this.half.x;
    }
    set left(t) {
        this.position.x = t + this.half.x;
    }
    get right() {
        return this.position.x + this.half.x;
    }
    set right(t) {
        this.position.x = t - this.half.x;
    }
    get top() {
        return this.position.y - this.half.y;
    }
    set top(t) {
        this.position.y = t + this.half.y;
    }
    get bottom() {
        return this.position.y + this.half.y;
    }
    set bottom(t) {
        this.position.y = t - this.half.y;
    }
    get width() {
        return this.size.x;
    }
    set width(t) {
        this.size.x = t;
    }
    get height() {
        return this.size.y;
    }
    set height(t) {
        this.size.y = t;
    }
    get vertices() {
        if (this.t.length > 0) return this.t;
        this.t = [ new Vector(-this.half.x, -this.half.y), new Vector(+this.half.x, -this.half.y), new Vector(+this.half.x, +this.half.y), new Vector(-this.half.x, +this.half.y) ];
        const t = this.position;
        const s = this.orientation;
        this.position = new Vector(0, 0);
        this.orientation = 0;
        this.transform(t, s);
        return this.t;
    }
    equals(t) {
        if (!this.position.equals(t.position) || !this.size.equals(t.size)) return false;
        return true;
    }
    rotate(t) {
        const s = this.vertices;
        if (0 !== Math.abs(t)) {
            s.forEach((s => s.rotate(t, true)));
            this.position.rotate(t, true);
            this.orientation += t;
        }
        this.t = s;
    }
    translate(t) {
        const s = this.vertices;
        s.forEach((s => s.add(t, true)));
        this.position.add(t, true);
        this.t = s;
    }
    transform(t, s) {
        this.rotate(s);
        this.translate(t);
    }
    resetVertices() {
        this.t = [];
    }
    toString() {
        return `[${this.position}] (${this.size})`;
    }
    clone() {
        return new RoundedRect(this.position.clone(), this.size.clone(), this.orientation);
    }
}

class Stadium {
    constructor(t, s, e, i = 0) {
        this.position = t;
        this.size = s;
        this.orientation = i;
        this.worldSpace = false;
        this.t = [];
        this.horizontal = "horizontal" === e;
    }
    get radius() {
        return (this.horizontal ? this.height : this.width) / 2;
    }
    get half() {
        return this.size.half;
    }
    get left() {
        return this.position.x - this.half.x;
    }
    set left(t) {
        this.position.x = t + this.half.x;
    }
    get right() {
        return this.position.x + this.half.x;
    }
    set right(t) {
        this.position.x = t - this.half.x;
    }
    get top() {
        return this.position.y - this.half.y;
    }
    set top(t) {
        this.position.y = t + this.half.y;
    }
    get bottom() {
        return this.position.y + this.half.y;
    }
    set bottom(t) {
        this.position.y = t - this.half.y;
    }
    get width() {
        return this.size.x;
    }
    set width(t) {
        this.size.x = t;
    }
    get height() {
        return this.size.y;
    }
    set height(t) {
        this.size.y = t;
    }
    get area() {
        const t = this.radius;
        const s = Math.PI * t * t;
        const e = this.horizontal ? (this.width - 2 * t) * this.height : (this.height - 2 * t) * this.width;
        return s + e;
    }
    get boundingRadius() {
        return Math.max(this.half.x, this.half.y);
    }
    get boundingBox() {
        return new Rect(this.position.clone(), this.size.clone());
    }
    get vertices() {
        if (this.t.length > 0) return this.t;
        this.t = [ new Vector(-this.half.x, -this.half.y), new Vector(+this.half.x, -this.half.y), new Vector(+this.half.x, +this.half.y), new Vector(-this.half.x, +this.half.y) ];
        const t = this.position;
        const s = this.orientation;
        this.position = new Vector(0, 0);
        this.orientation = 0;
        this.transform(t, s);
        return this.t;
    }
    equals(t) {
        if (!this.position.equals(t.position) || !this.size.equals(t.size)) return false;
        return true;
    }
    rotate(t) {
        const s = this.vertices;
        if (0 !== Math.abs(t)) {
            s.forEach((s => s.rotate(t, true)));
            this.position.rotate(t, true);
            this.orientation += t;
        }
        this.t = s;
    }
    translate(t) {
        const s = this.vertices;
        s.forEach((s => s.add(t, true)));
        this.position.add(t, true);
        this.t = s;
    }
    transform(t, s) {
        this.rotate(s);
        this.translate(t);
    }
    resetVertices() {
        this.t = [];
    }
    overlaps(t) {
        const s = Point.from(this.position);
        const e = this.getSweptShape(t);
        return s.within(e);
    }
    getSweptShape(t) {
        if (t instanceof Circle) {
            const s = this.clone();
            s.size.add(new Vector(2 * t.radius, 2 * t.radius), true);
            s.position = t.position.clone();
            return s;
        }
        if (t instanceof Stadium) {
            let s;
            if (this.horizontal === t.horizontal) {
                s = t.clone();
                s.size.add(this.size, true);
            } else s = new RoundedRect(t.position.clone(), t.size.add(this.size), this.radius + t.radius);
            return s;
        }
        if (t instanceof Rect) {
            const s = new RoundedRect(t.position.clone(), t.size.add(this.size), this.radius);
            return s;
        }
        return this;
    }
    toString() {
        return `[${this.position}] (${this.size})`;
    }
    clone() {
        return new Stadium(this.position.clone(), this.size.clone(), this.horizontal ? "horizontal" : "vertical", this.orientation);
    }
}

class Point extends Vector {
    static from(t = 0, s = 0, e = 0) {
        const i = Vector.from(t, s, e);
        return new Point(i.x, i.y, i.z);
    }
    within(t) {
        if (t instanceof Rect) return !(this.x < t.left || this.x > t.right || this.y < t.top || this.y > t.bottom);
        if (t instanceof Circle) {
            const s = t.position.subtract(this);
            const e = s.magnitude;
            return e * e < t.radius * t.radius;
        }
        if (t instanceof Stadium) if (t.horizontal) return this.within(new Rect(t.position, t.size.subtract(new Vector(2 * t.radius, 0)))) || this.within(new Circle(new Vector(t.left + t.radius, t.position.y), t.radius)) || this.within(new Circle(new Vector(t.right - t.radius, t.position.y), t.radius)); else return this.within(new Rect(t.position, t.size.subtract(new Vector(0, 2 * t.radius)))) || this.within(new Circle(new Vector(t.position.x, t.top + t.radius), t.radius)) || this.within(new Circle(new Vector(t.position.x, t.bottom - t.radius), t.radius));
        if (t instanceof RoundedRect) {
            const s = t.radius;
            const e = 2 * s;
            return this.within(new Circle(new Vector(t.left + s, t.top + s), s)) || this.within(new Circle(new Vector(t.right - s, t.top + s), s)) || this.within(new Circle(new Vector(t.right - s, t.bottom - s), s)) || this.within(new Circle(new Vector(t.left + s, t.bottom - s), s)) || this.within(new Rect(t.position, t.size.subtract(new Vector(e, 0)))) || this.within(new Rect(t.position, t.size.subtract(new Vector(0, e))));
        }
        return false;
    }
}

class Circle {
    constructor(t, s, e = 0) {
        this.position = t;
        this.radius = s;
        this.orientation = e;
    }
    get size() {
        return new Vector(2 * this.radius, 2 * this.radius);
    }
    get half() {
        return this.size.half;
    }
    get left() {
        return this.position.x - this.half.x;
    }
    get right() {
        return this.position.x + this.half.x;
    }
    get top() {
        return this.position.y - this.half.y;
    }
    get bottom() {
        return this.position.y + this.half.y;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
    get boundingRadius() {
        return this.radius;
    }
    get boundingBox() {
        return new Rect(this.position.clone(), new Vector(2 * this.radius, 2 * this.radius));
    }
    get vertices() {
        return [];
    }
    equals(t) {
        if (!this.position.equals(t.position) || this.radius !== t.radius) return false;
        return true;
    }
    rotate(t) {
        this.orientation += t;
    }
    translate(t) {
        this.position.add(t, true);
    }
    transform(t, s) {
        this.rotate(s);
        this.translate(t);
    }
    overlaps(t) {
        const s = Point.from(this.position);
        const e = this.getSweptShape(t);
        return s.within(e);
    }
    getSweptShape(t) {
        if (t instanceof Circle) {
            const s = t.clone();
            s.radius += this.radius;
            return s;
        }
        if (t instanceof Stadium) {
            const s = t.getSweptShape(this);
            s.position = t.position.clone();
            return s;
        }
        if (t instanceof Rect) {
            const s = new RoundedRect(t.position.clone(), t.size.add(new Vector(2 * this.radius, 2 * this.radius)), this.radius);
            return s;
        }
        return this;
    }
    clone() {
        return new Circle(this.position.clone(), this.radius);
    }
}

class Rect {
    constructor(t, s, e = 0) {
        this.worldSpace = false;
        this.i = 0;
        this.t = [];
        this.h = t;
        this.u = s;
        this.i = e;
    }
    get position() {
        return this.h;
    }
    set position(t) {
        this.h = t;
        this.t = [];
    }
    get size() {
        return this.u;
    }
    set size(t) {
        this.u = t;
        this.t = [];
    }
    get orientation() {
        return this.i;
    }
    set orientation(t) {
        this.i = t;
        this.t = [];
    }
    get half() {
        return this.u.half;
    }
    get left() {
        return this.h.x - this.half.x;
    }
    set left(t) {
        this.h.x = t + this.half.x;
        this.t = [];
    }
    get right() {
        return this.h.x + this.half.x;
    }
    set right(t) {
        this.h.x = t - this.half.x;
        this.t = [];
    }
    get top() {
        return this.h.y - this.half.y;
    }
    set top(t) {
        this.h.y = t + this.half.y;
        this.t = [];
    }
    get bottom() {
        return this.h.y + this.half.y;
    }
    set bottom(t) {
        this.h.y = t - this.half.y;
        this.t = [];
    }
    get width() {
        return this.u.x;
    }
    set width(t) {
        this.u.x = t;
        this.t = [];
    }
    get height() {
        return this.u.y;
    }
    set height(t) {
        this.u.y = t;
        this.t = [];
    }
    get area() {
        return this.size.x * this.size.y;
    }
    get boundingRadius() {
        const t = this.half.multiply(this.half);
        return Math.sqrt(t.x + t.y);
    }
    get boundingBox() {
        return this;
    }
    get vertices() {
        if (this.t.length > 0) return this.t;
        this.t = [ new Vector(-this.half.x, -this.half.y), new Vector(+this.half.x, -this.half.y), new Vector(+this.half.x, +this.half.y), new Vector(-this.half.x, +this.half.y) ];
        const t = this.h;
        const s = this.i;
        this.h = new Vector(0, 0);
        this.i = 0;
        this.transform(t, s);
        return this.t;
    }
    equals(t) {
        if (!this.h.equals(t.position) || !this.u.equals(t.size)) return false;
        return true;
    }
    rotate(t) {
        const s = this.vertices;
        if (0 !== Math.abs(t)) {
            s.forEach((s => s.rotate(t, true)));
            this.h.rotate(t, true);
            this.i += t;
        }
        this.t = s;
    }
    translate(t) {
        const s = this.vertices;
        s.forEach((s => s.add(t, true)));
        this.h.add(t, true);
        this.t = s;
    }
    transform(t, s) {
        this.rotate(s);
        this.translate(t);
    }
    resetVertices() {
        this.t = [];
    }
    overlaps(t) {
        if (t instanceof Rect) return !(this.left > t.right || this.right < t.left || this.top > t.bottom || this.bottom < t.top);
        const s = Point.from(this.position);
        const e = this.getSweptShape(t);
        return s.within(e);
    }
    within(t) {
        return !(this.left < t.left || this.right > t.right || this.top < t.top || this.bottom > t.bottom);
    }
    getSweptShape(t) {
        if (t instanceof Stadium) {
            const s = t.getSweptShape(this);
            s.position = t.position.clone();
            return s;
        }
        if (t instanceof Rect) {
            const s = t.clone();
            s.size.add(this.size, true);
            return s;
        }
        if (t instanceof Circle) {
            const s = t.getSweptShape(this);
            s.position = t.position.clone();
            return s;
        }
        return this;
    }
    toString() {
        return `[${this.h}] (${this.u})`;
    }
    clone() {
        return new Rect(this.h.clone(), this.u.clone(), this.i);
    }
}

var t;

class QuadTreeResolver {
    constructor(t, s) {
        this.V = new WeakMap;
        this.R = new QuadTree(new Rect(t, s));
    }
    updateEntityProximities(t, s) {
        t.forEach((t => {
            const e = new Rect(t.position, t.movementBox.size);
            const i = this.R.search(e);
            i.forEach((e => {
                t.near.add(e);
                s.proximities++;
            }));
            t.near.delete(t);
            s.proximities--;
        }));
    }
    addEntity(t) {
        const s = new Rect(t.position, t.movementBox.size);
        const e = new QuadTreeItem(t, s);
        e.quadtree = this.R.add(e);
        while (null == e.quadtree) {
            this.R = this.R.createParent(t.position);
            e.quadtree = this.R.add(e);
        }
        this.V.set(t, e);
    }
    updateEntity(t) {
        const s = this.V.get(t);
        const e = new Rect(t.position, t.movementBox.size);
        s.area = e;
        s.quadtree = s.quadtree.update(s);
        while (null == s.quadtree) {
            this.R = this.R.createParent(t.position);
            s.quadtree = this.R.update(s);
        }
        this.V.set(t, s);
    }
    removeEntity(t) {
        const s = this.V.get(t);
        s.quadtree.remove(s);
        this.V.delete(t);
    }
    findEntities(t) {
        const s = new Rect(t.position, new Vector(t.radius, t.radius));
        return this.R.search(s);
    }
}

class QuadTreeItem {
    constructor(t, s, e) {
        this.entity = t;
        this.area = s;
        this.quadtree = e;
    }
    static getKey(t) {
        return `${t.position.x},${t.position.y},${t.size.x},${t.size.y}`;
    }
}

class QuadTree {
    constructor(s, e = null) {
        this.area = s;
        this.parent = e;
        t.add(this);
        this.M = [];
        const i = this.area.half;
        const n = i.half;
        this.P = [ new Rect(this.area.position.add(new Vector(+n.x, -n.y)), i), new Rect(this.area.position.add(new Vector(-n.x, +n.y)), i), new Rect(this.area.position.add(new Vector(+n.x, +n.y)), i), new Rect(this.area.position.add(new Vector(-n.x, -n.y)), i) ];
        this.C = [ null, null, null, null ];
        console.log("Created new quadtree", s);
    }
    add(t, s) {
        for (let e = 0; e < 4; e++) {
            if (this.C[e] === s) continue;
            if (t.area.within(this.P[e])) {
                if (null == this.C[e]) this.C[e] = new QuadTree(this.P[e], this);
                return this.C[e]?.add(t);
            }
        }
        if (t.area.within(this.area)) {
            this.M.push(t);
            return this;
        }
        if (null == this.parent) console.log("CREATE NEW QUADTREE ROOT");
        return this.parent?.add(t, this);
    }
    remove(t) {
        const s = this.M.indexOf(t);
        if (s > -1) this.M.splice(s, 1);
    }
    update(t) {
        this.remove(t);
        return this.add(t);
    }
    search(t) {
        const s = [];
        for (const e of this.M) if (t.overlaps(e.area)) s.push(e.entity);
        for (const e of this.C) {
            if (null == e) continue;
            if (e.area.within(t)) s.push(...e.entities); else if (t.overlaps(e.area)) s.push(...e.search(t));
        }
        return s;
    }
    get entities() {
        const t = [ ...this.M.map((t => t.entity)) ];
        for (const s of this.C) if (null != s) t.push(...s.entities);
        return t;
    }
    createParent(t) {
        const s = this.area.half;
        const e = s.half;
        this.C.push(new QuadTree(new Rect(this.area.position.add(new Vector(-e.x, -e.y)), s), this));
        this.C.push(new QuadTree(new Rect(this.area.position.add(new Vector(+e.x, -e.y)), s), this));
        this.C.push(new QuadTree(new Rect(this.area.position.add(new Vector(-e.x, +e.y)), s), this));
        this.C.push(new QuadTree(new Rect(this.area.position.add(new Vector(+e.x, +e.y)), s), this));
        return this;
    }
}

t = new WeakSet;

class Force {
    constructor(t, s) {
        this.name = t;
        this.duration = s;
        this.startTime = null;
        this.magnitude = 0;
    }
    static create(t) {
        const s = new Force(t.name, t.duration ?? 0);
        s.direction = t.direction;
        s.maxMagnitude = t.maxMagnitude ?? 1;
        s.acceleration = t.acceleration;
        s.deceleration = t.deceleration;
        s.callback = t.callback;
        return s;
    }
    update(t, s) {
        if (0 !== this.duration && this.duration !== 1 / 0) {
            if (null == this.startTime) this.startTime = s;
            if (this.startTime + this.duration > s) if (this.magnitude > 0) if (null == this.deceleration) this.magnitude = 0; else this.magnitude -= this.deceleration * t; else return;
        }
        if (null != this.callback) return;
        if (this.magnitude < this.maxMagnitude) if (null == this.acceleration) this.magnitude = this.maxMagnitude; else {
            this.magnitude += this.acceleration * t;
            if (this.magnitude > this.maxMagnitude) this.magnitude = this.maxMagnitude;
        }
    }
    effect(t) {
        return null != this.callback ? (() => this.callback(this, t))() : new Vector((this.direction?.x ?? 1) * this.magnitude, (this.direction?.y ?? 1) * this.magnitude);
    }
    reset() {
        this.startTime = null;
        this.magnitude = 0;
        return this;
    }
    clone() {
        return Force.create(this);
    }
    static Drag(t = {}) {
        t.density ?? (t.density = 1);
        t.coefficient ?? (t.coefficient = .1);
        t.surface ?? (t.surface = (t, s) => s.getSurfaceArea?.() ?? 500);
        const s = -.5 * t.density * (t.coefficient / 1e6);
        return Force.create({
            name: "drag",
            duration: 1 / 0,
            callback: (e, i) => function(t, s, e, i) {
                const n = s.velocity.normalize();
                const h = s.velocity.magnitude;
                const r = i(t, s);
                return n.multiply(e * r * h * h, true);
            }(e, i, s, t.surface)
        });
    }
    static Gravity(t = {}) {
        t.G ?? (t.G = 1);
        t.direction ?? (t.direction = new Vector(0, 1));
        return Force.create({
            name: "gravity",
            duration: 1 / 0,
            direction: t.direction,
            magnitude: 1e4 * t.G
        });
    }
}

class Shape {
    constructor(t) {
        this.entity = t;
        this.types = [];
    }
    get worldPosition() {
        const t = this.entity.position.add(this.shape.position);
        t.z += this.shape.position.z;
        return t;
    }
    get worldShape() {
        const t = this.clone();
        t.shape.worldSpace = true;
        t.shape.transform(this.entity.position, this.entity.orientation);
        return t;
    }
    get renderPosition() {
        return this.shape.size.negHalf.add(this.shape.position);
    }
    static create(t, s) {
        const e = new Shape(t);
        if (null == s.shape) if (null != s.alignment) s.shape = "stadium"; else if (null != s.radius) s.shape = "circle"; else if (null != s.size) s.shape = "rect"; else throw new Error(`Failed to infer shape: ${JSON.stringify(s)}!`);
        switch (s.shape) {
          case "rect":
            {
                const t = Vector.from(s.size);
                const i = Vector.from(s.position ?? [ 0, 0 ]);
                e.shape = new Rect(i, t, s.orientation);
                break;
            }

          case "circle":
            {
                const t = s.radius;
                const i = Vector.from(s.position ?? [ 0, 0 ]);
                e.shape = new Circle(i, t);
                break;
            }

          case "stadium":
            {
                const t = Vector.from(s.size);
                const i = Vector.from(s.position ?? [ 0, 0 ]);
                e.shape = new Stadium(i, t, s.alignment, s.orientation);
                break;
            }
        }
        e.name = s.name ?? "";
        e.color = s.color;
        e.signal = s.signal;
        e.types = Array.isArray(s.types) ? [ ...s.types ] : [ s.types ?? "collision" ];
        return e;
    }
    clone() {
        const t = new Shape(this.entity);
        t.localShape = this;
        t.shape = this.shape.clone();
        t.types = this.types;
        t.signal = this.signal;
        return t;
    }
}

class Entity {
    constructor() {
        this.velocity = new Vector;
        this.movements = 0;
        this.mass = 1;
        this.forces = [];
        this.maxSpeed = 1e6;
        this.deleted = false;
        this.shapes = [];
        this.worldShapes = [];
        this.collisionTypes = {};
        this.signalTypes = {};
        this.near = new Set;
        this.i = 0;
        this.h = new Vector;
    }
    get left() {
        return this.position.x + this.shapes[0].shape.size.negHalf.x;
    }
    get top() {
        return this.position.y + this.shapes[0].shape.size.negHalf.y;
    }
    get position() {
        return this.h;
    }
    set position(t) {
        if (t.x === this.h.x && t.y === this.h.y) {
            if (t instanceof Vector) this.h = t;
            return;
        }
        this.h = t instanceof Vector ? t : new Vector(t.x, t.y);
    }
    get orientation() {
        return this.i;
    }
    set orientation(t) {
        if (this.i === t) return;
        this.i = t;
    }
    static create(t) {
        const s = new Entity;
        s.entity = t.entity ?? t;
        s.position = new Vector(s.entity.position.x, s.entity.position.y);
        s.orientation = t.orientation ?? s.i;
        s.mass = t.mass ?? s.mass;
        s.forces = (t.forces ?? []).map((t => t instanceof Force ? t : t = Force.create(t)));
        s.maxSpeed = t.maxSpeed ?? s.maxSpeed;
        s.color = t.color;
        s.collidingCallback = t.colliding;
        (t.shapes ?? []).forEach((t => s.addShape(t)));
        return s;
    }
    addForce(t) {
        if (!(t instanceof Force)) t = Force.create(t);
        this.forces.push(t);
    }
    applyForces(t, s) {
        if (null == this.position) return false;
        for (let e = 0; e < this.forces.length; e++) {
            const i = this.forces[e];
            i.update(t, s);
            const n = i.effect(this);
            this.velocity.add(n, true);
            if (i.duration <= 0) this.forces.splice(e--, 1);
        }
        this.movements = 0;
        return true;
    }
    addShape(t) {
        if (!(t instanceof Shape)) t = Shape.create(this, t);
        this.shapes.push(t);
        this.I();
        this.boundingRadius = this.$();
        this.movementRadius = this.F(1 / 60);
        this.boundingBox = this.A();
        this.movementBox = this.N(1 / 60);
        return t;
    }
    prepareMovement(t, s) {
        this.direction = this.velocity.normalize();
        if (++this.movements < 15) this.speed = Math.abs(this.velocity.magnitude); else if (this.movements >= 20) this.speed = 0;
        if (this.speed < 1e-5) {
            this.speed = 0;
            this.velocity = new Vector;
        }
        if (this.speed > this.maxSpeed && this.movements < 15) {
            this.speed = this.maxSpeed;
            this.velocity = this.direction.multiply(this.speed);
        }
        this.movementBox = this.N(t);
        const e = this.F(t);
        if (e !== this.movementRadius) {
            this.movementRadius = e;
            Physics.updateEntity(this);
        }
        return this.speed > 0;
    }
    move(t) {
        this.position.add(this.direction.multiply(this.speed * t), true);
        Physics.updateEntity(this);
    }
    moveTo(t) {
        this.position.x = t.x;
        this.position.y = t.y;
        this.worldShapes = this.shapes.map((t => t.worldShape));
        Physics.updateEntity(this);
    }
    getSurfaceArea() {
        return this.shapes[0].shape.area;
    }
    colliding(t, s) {
        return this.collidingCallback?.call(this, t, s) ?? "collide";
    }
    I() {
        this.collisionTypes = {};
        this.signalTypes = {};
        for (const t of this.shapes) for (const s of t.types) {
            if (null != Physics.collisions[s]) {
                if (null == this.collisionTypes[s]) this.collisionTypes[s] = [];
                this.collisionTypes[s].push(t);
            }
            if (null != Physics.signals[s]) {
                if (null == this.signalTypes[s]) this.signalTypes[s] = [];
                this.signalTypes[s].push(t);
            }
        }
    }
    $() {
        return Math.max(...this.shapes.map((t => t.shape.boundingRadius)));
    }
    A() {
        const t = Math.min(...this.shapes.map((t => t.shape.left)));
        const s = Math.max(...this.shapes.map((t => t.shape.right)));
        const e = Math.min(...this.shapes.map((t => t.shape.top)));
        const i = Math.max(...this.shapes.map((t => t.shape.bottom)));
        return new Rect(new Vector, new Vector(s - t, i - e));
    }
    F(t) {
        const s = Math.min(this.maxSpeed * Math.min(4 * t, .1), this.maxSpeed);
        const e = this.boundingRadius + s;
        this.movementRadiusDebug = e;
        return e * e;
    }
    N(t) {
        const s = 2 * Math.min(this.maxSpeed * Math.min(t, .1), this.maxSpeed);
        const e = this.boundingBox.clone();
        e.size.add(new Vector(s, s), true);
        return e;
    }
}

class Intersection {
    constructor() {
        this.intersects = false;
        this.time = 1 / 0;
    }
}

class RadiusResolver {
    constructor(t) {
        this.T = t;
        this.V = new Set;
    }
    updateEntityProximities(t, s) {
        for (let e = 0, i = t.length; e < i; e++) {
            const i = t[e];
            if (null != this.T) {
                this.T?.drawShape(i.shapes[0].worldShape.shape, 0 === i.mass ? "red" : "black", i.color);
                if (Physics.showAreas) this.T.drawShape(new Circle(i.position, i.movementRadiusDebug), "red");
            }
            for (let n = e + 1, h = t.length; n < h; n++) {
                const e = t[n];
                const h = e.position.subtract(i.position).magnitude;
                if (i.movementRadius + e.movementRadius < h * h) {
                    s.skipped++;
                    continue;
                }
                i.near.add(e);
                e.near.add(i);
                s.proximities++;
            }
        }
    }
    addEntity(t) {
        this.V.add(t);
    }
    updateEntity(t) {
        this.V.add(t);
    }
    removeEntity(t) {
        this.V.delete(t);
    }
    findEntities(t) {
        return [];
    }
}

class Line {
    constructor(t, s) {
        this.start = t;
        this.end = s;
    }
    get normal() {
        return new Vector(-(this.end.y - this.start.y), this.end.x - this.start.x);
    }
    get direction() {
        return this.end.subtract(this.start);
    }
    get magnitude() {
        return this.direction.magnitude;
    }
    get directionVector() {
        return this.direction.divide(this.magnitude);
    }
}

class Ray {
    constructor(t, s, e) {
        this.origin = t;
        if (s instanceof Vector) {
            this.magnitude = e ?? s.magnitude;
            this.q = s.normalize();
        } else {
            this.H = s;
            this.magnitude = e ?? 1;
        }
    }
    get normal() {
        const t = this.directionVector;
        return new Vector(-t.y, t.x);
    }
    get directionVector() {
        return null != this.q ? this.q : new Vector;
    }
    get directionAngle() {
        return null != this.H ? this.H : (Math.atan2(this.q.y, this.q.x) * Ray.B + Ray.O) % 360;
    }
    set direction(t) {
        if (t instanceof Vector) {
            this.q = t;
            this.H = void 0;
        } else {
            this.H = t;
            this.q = void 0;
        }
    }
    get end() {
        return this.origin.add(this.directionVector.multiply(this.magnitude));
    }
    set end(t) {
        const s = t.subtract(this.origin);
        this.direction = s.normalize();
        this.magnitude = s.magnitude;
    }
    getIntersection(t) {
        if (t instanceof Stadium) return this.getIntersectionStadium(t);
        if (t instanceof RoundedRect) return this.getIntersectionRoundedRect(t);
        if (t instanceof Rect) return this.getIntersectionRect(t);
        if (t instanceof Circle) return this.getIntersectionCircle(t);
        return new Intersection;
    }
    getIntersectionRect(t) {
        const s = new Intersection;
        const e = this.origin;
        const i = this.end.subtract(this.origin);
        const n = t.position.subtract(t.half).subtract(e).divide(i);
        const h = t.position.add(t.half).subtract(e).divide(i);
        if (isNaN(n.x) || isNaN(n.y) || isNaN(h.x) || isNaN(h.y)) {
            h.y = 1 / 0;
            return s;
        }
        if (n.x > h.x) [n.x, h.x] = [ h.x, n.x ];
        if (n.y > h.y) [n.y, h.y] = [ h.y, n.y ];
        if (n.x > h.y || n.y > h.x) return s;
        const r = Math.max(n.x, n.y);
        if (r < 0 || r > 1) return s;
        s.normal = i.sign();
        if (this.directionVector.multiply(s.normal).zero) {
            console.log("%%% No movement in normal direction.");
            return s;
        }
        s.time = r;
        s.point = e.add(i.multiply(s.time));
        if (s.point.x > t.left && s.point.x < t.right && s.point.y > t.top && s.point.y < t.bottom) ;
        if (n.x < n.y) {
            if (0 === Math.abs(s.normal.y)) {
                console.log("IGNORING y");
                return s;
            }
            s.normal.multiply(new Vector(0, -1), true);
            s.tangent = new Vector(-s.normal.y, s.normal.x);
        } else {
            if (0 === Math.abs(s.normal.x)) {
                console.log("IGNORING x");
                return s;
            }
            s.normal.multiply(new Vector(-1, 0), true);
            s.tangent = new Vector(-s.normal.y, s.normal.x);
        }
        s.intersects = true;
        return s;
    }
    getIntersectionCircle(t) {
        const s = new Intersection;
        new Line(this.origin, t.position);
        const e = this.origin.subtract(t.position);
        const i = e.dot(this.directionVector);
        const n = e.dot(e) - t.radius * t.radius;
        let h = i * i - n;
        if (h < 0) return s;
        h = Math.sqrt(h);
        const r = -i - h;
        if (r < 0 || r > this.magnitude) return s;
        s.point = this.origin.add(this.directionVector.multiply(r));
        s.time = r / this.magnitude;
        s.normal = s.point.subtract(t.position).normalize();
        s.tangent = new Vector(-s.normal.y, s.normal.x);
        s.intersects = true;
        return s;
    }
    getIntersectionStadium(t) {
        let s = new Intersection;
        const e = [];
        if (t.horizontal) e.push(new Rect(t.position, t.size.subtract(new Vector(2 * t.radius, 0))), new Circle(new Vector(t.left + t.radius, t.position.y), t.radius), new Circle(new Vector(t.right - t.radius, t.position.y), t.radius)); else e.push(new Rect(t.position, t.size.subtract(new Vector(0, 2 * t.radius))), new Circle(new Vector(t.position.x, t.top + t.radius), t.radius), new Circle(new Vector(t.position.x, t.bottom - t.radius), t.radius));
        e.forEach((t => {
            const e = this.getIntersection(t);
            if (e.intersects) if (e.time < s.time) s = e;
        }));
        s.shapes = e;
        return s;
    }
    getIntersectionRoundedRect(t) {
        let s = new Intersection;
        const e = t.radius;
        const i = 2 * e;
        const n = [ new Circle(new Vector(t.left + e, t.top + e), e), new Circle(new Vector(t.right - e, t.top + e), e), new Circle(new Vector(t.right - e, t.bottom - e), e), new Circle(new Vector(t.left + e, t.bottom - e), e), new Rect(t.position, t.size.subtract(new Vector(i, 0))), new Rect(t.position, t.size.subtract(new Vector(0, i))) ];
        n.forEach((t => {
            const e = this.getIntersection(t);
            if (e.intersects) if (e.time < s.time) s = e;
        }));
        s.shapes = n;
        return s;
    }
}

Ray.B = 180 / Math.PI;

Ray.O = 360 + 90;

class SpatialHashGridResolver {
    constructor(t, s) {
        this.size = t;
        this.T = s;
        this.V = new WeakMap;
        this.W = new SpatialHashGrid(t);
    }
    updateEntityProximities(t, s) {
        t.forEach((t => {
            const e = new Rect(t.position, t.movementBox.size);
            if (null != this.T) {
                this.T?.drawShape(t.shapes[0].worldShape.shape, "black", t.color);
                this.T.drawShape(e, "red");
            }
            const i = this.W.search(e);
            i.forEach((e => {
                if (e === t) return;
                const i = e.position.subtract(t.position).magnitude;
                if (t.movementRadius + e.movementRadius < i * i) return;
                t.near.add(e);
                s.proximities++;
            }));
            s.proximities--;
        }));
    }
    addEntity(t) {
        const s = new Rect(t.position, t.movementBox.size);
        const e = new SpatialHashGridItem(t, s);
        this.W.add(e);
        this.V.set(t, e);
    }
    updateEntity(t) {
        const s = this.V.get(t);
        const e = new Rect(t.position, t.movementBox.size);
        s.area = e;
        this.W.update(s);
    }
    removeEntity(t) {
        const s = this.V.get(t);
        this.W.remove(s);
        this.V.delete(t);
    }
    findEntities(t) {
        const s = new Rect(t.position, new Vector(t.radius, t.radius));
        return this.W.search(s);
    }
}

class SpatialHashGridItem {
    constructor(t, s) {
        this.entity = t;
        this.area = s;
        this.query = -1;
    }
}

class SpatialHashGrid {
    constructor(t) {
        this.size = t;
        this.W = new Map;
        this._ = 0;
        this.M = new Map;
    }
    add(t) {
        t.keys = this.getKeys(t.area);
        t.key = t.keys.join("/");
        t.locations = t.keys.map((s => {
            let e = this.W.get(s);
            if (null == e) {
                e = new Set;
                this.W.set(s, e);
            }
            e.add(t);
            return e;
        }));
    }
    remove(t) {
        t.locations.forEach((s => s.delete(t)));
        t.locations = [];
        t.keys = [];
    }
    update(t) {
        const s = this.getKeys(t.area);
        if (s.join("/") === t.key) return;
        this.remove(t);
        this.add(t);
    }
    search(t) {
        const s = this._++;
        const e = [];
        const i = this.getKeys(t);
        for (const t of i) {
            const i = this.W.get(t);
            if (null == i) continue;
            for (const t of i) {
                if (t.query === s) continue;
                e.push(t.entity);
                t.query = s;
            }
        }
        return e;
    }
    getKeys(t) {
        const s = [];
        const e = Math.floor(t.left / this.size.x);
        const i = Math.floor(t.right / this.size.x) + 1;
        const n = Math.floor(t.top / this.size.y);
        const h = Math.floor(t.bottom / this.size.y) + 1;
        for (let t = e; t < i; t++) for (let e = n; e < h; e++) s.push(`${t},${e}`);
        return s;
    }
}

class Polygon {
    constructor(t, s, e = 0) {
        this.position = t;
        this.vertices = s;
        this.orientation = e;
        this.worldSpace = false;
    }
    get left() {
        return this.position.x + Math.min(...this.vertices.map((t => t.x)));
    }
    set left(t) {
        this.position.x = t - Math.min(...this.vertices.map((t => t.x)));
    }
    get right() {
        return this.position.x + Math.max(...this.vertices.map((t => t.x)));
    }
    set right(t) {
        this.position.x = t - Math.max(...this.vertices.map((t => t.x)));
    }
    get top() {
        return this.position.y + Math.min(...this.vertices.map((t => t.y)));
    }
    set top(t) {
        this.position.y = t - Math.min(...this.vertices.map((t => t.y)));
    }
    get bottom() {
        return this.position.y + Math.max(...this.vertices.map((t => t.y)));
    }
    set bottom(t) {
        this.position.y = t - Math.max(...this.vertices.map((t => t.y)));
    }
    get width() {
        return this.right - this.left;
    }
    get height() {
        return this.bottom - this.top;
    }
    rotate(t) {
        if (0 !== t) {
            this.vertices.forEach((s => s.rotate(t, true)));
            this.orientation += t;
        }
        return this;
    }
    translate(t) {
        this.vertices.forEach((s => s.add(t, true)));
        this.position.add(t, true);
        return this;
    }
    clone() {
        return new Polygon(this.position.clone(), this.vertices.map((t => t.clone())), this.orientation);
    }
}

class Canvas {
    constructor(t) {
        this.ctx = t;
        this.logging = false;
    }
    clear() {
        const t = this.ctx;
        const s = t.canvas;
        this.ctx.clearRect(0, 0, s.width, s.height);
    }
    drawShape(t, s, e, i = true) {
        const n = this.ctx;
        n.strokeStyle = s;
        if (null != e) n.fillStyle = e;
        if (t instanceof Line) {
            n.beginPath();
            n.moveTo(t.start.x, t.start.y);
            n.lineTo(t.end.x, t.end.y);
            n.stroke();
        } else if (t instanceof Ray) {
            n.strokeStyle = s;
            n.beginPath();
            n.moveTo(t.origin.x, t.origin.y);
            n.lineTo(t.end.x, t.end.y);
            if (null != e) n.fill();
            n.stroke();
            this.drawCross(t.origin, s, 2);
        } else if (t instanceof Stadium) {
            const i = Math.PI;
            const h = t.position;
            const r = t.radius;
            n.beginPath();
            if (t.horizontal) {
                n.arc(t.right - r, h.y, r, i / 2, 1.5 * i, true);
                n.lineTo(t.left + r, t.top);
                n.arc(t.left + r, h.y, r, 1.5 * i, .5 * i, true);
                n.lineTo(t.right - r, t.bottom);
            } else {
                n.arc(h.x, t.top + r, r, 0, i, true);
                n.lineTo(t.left, t.bottom - r);
                n.arc(h.x, t.bottom - r, r, i, 0, true);
                n.lineTo(t.right, t.top + r);
            }
            if (null != e) n.fill();
            n.stroke();
            this.drawCross(h, s, 2);
        } else if (t instanceof RoundedRect) {
            const i = t.radius;
            n.beginPath();
            n.arc(t.left + i, t.top + i, i, -.5 * Math.PI, Math.PI, true);
            n.lineTo(t.left, t.bottom - i);
            n.arc(t.left + i, t.bottom - i, i, Math.PI, .5 * Math.PI, true);
            n.lineTo(t.right - i, t.bottom);
            n.arc(t.right - i, t.bottom - i, i, .5 * Math.PI, 0, true);
            n.lineTo(t.right, t.top + i);
            n.arc(t.right - i, t.top + i, i, 0, .5 * -Math.PI, true);
            n.lineTo(t.left + i, t.top);
            if (null != e) n.fill();
            n.stroke();
            this.drawCross(t.position, s, 2);
        } else if (t instanceof Rect || t instanceof Polygon) {
            n.beginPath();
            const i = t.vertices;
            for (let t = 0; t < i.length; t++) n.lineTo(i[t].x, i[t].y);
            n.lineTo(i[0].x, i[0].y);
            if (null != e) n.fill();
            n.stroke();
            this.drawCross(t.position, s, 2);
        } else if (t instanceof Circle) {
            n.beginPath();
            n.arc(t.position.x, t.position.y, t.radius, 0, 2 * Math.PI);
            if (null != e) n.fill();
            n.stroke();
            this.drawCross(t.position, s, 2);
        }
    }
    drawCross(t, s, e, i = true) {
        const n = this.ctx;
        n.strokeStyle = s;
        n.beginPath();
        n.moveTo(t.x, t.y - e);
        n.lineTo(t.x, t.y + e);
        n.stroke();
        n.beginPath();
        n.moveTo(t.x - e, t.y);
        n.lineTo(t.x + e, t.y);
        n.stroke();
    }
    drawText(t, s, e, i = "11px Arial", n = true) {
        const h = this.ctx;
        h.fillStyle = e;
        h.font = i;
        h.fillText(t, s.x, s.y);
    }
    log(...t) {
        if (!this.logging) return;
        console.log(...t);
    }
}

class Physics {
    static initialize(t) {
        t = t ?? {};
        const s = t.collisions ?? {
            collision: [ "collision" ]
        };
        t.signals ?? {};
        for (const t in s) for (const e of s[t]) {
            if (null == Physics.collisions[t]) Physics.collisions[t] = {};
            Physics.collisions[t][e] = true;
            if (null == Physics.collisions[e]) Physics.collisions[e] = {};
            Physics.collisions[e][t] = true;
        }
        if (null != t.ctx) {
            Physics.canvas = new Canvas(t.ctx);
            Physics.showAreas = t.showAreas ?? Physics.showAreas;
        }
        switch (t.resolver) {
          case "quadtree":
            Physics.L = new QuadTreeResolver(new Vector(500, 500), new Vector(2e3, 2e3));
            break;

          case "spatial-hash-grid":
            Physics.L = new SpatialHashGridResolver(new Vector(100, 100), Physics.canvas);
            break;

          default:
            Physics.L = new RadiusResolver(Physics.canvas);
            break;
        }
    }
    static update(t, s) {
        const e = performance.now();
        const i = {
            time: -1,
            movers: 0,
            moving: 0,
            totalChecks: 0,
            skipped: 0,
            solitaires: 0,
            collisionCandidates: 0,
            proximities: 0,
            checks: 0,
            moved: new Set
        };
        if (t > .5) return i;
        if (Physics.dontClear) {
            debugger;
            Physics.dontClear = false;
        }
        Physics.canvas?.clear();
        const n = new Set;
        const h = this.entities.filter((e => {
            if (!e.applyForces(t, s)) return false;
            e.prepareMovement(t, s);
            if (e.speed > 0) n.add(e);
            e.near.clear();
            return true;
        }));
        i.movers = h.length;
        i.moving = n.size;
        i.totalChecks = h.length * h.length;
        this.L.updateEntityProximities(h, i);
        let r = t;
        while (r > 1e-4) {
            let t = r;
            let e = [ new Intersection ];
            const o = new WeakMap;
            for (const s of n) {
                i.collisionCandidates++;
                for (const n of s.near) {
                    if (n.deleted) {
                        s.near.delete(n);
                        break;
                    }
                    if (!o.has(n)) o.set(n, new Set);
                    if (o.get(s)?.has(n)) continue;
                    o.get(n)?.add(s);
                    i.checks++;
                    const h = s.velocity.multiply(t).subtract((n.velocity ?? new Vector).multiply(t));
                    const r = new Ray(s.position, h.normalize(), h.magnitude);
                    const c = s.shapes[0].worldShape.shape;
                    const a = n.shapes[0].worldShape.shape;
                    const u = c.getSweptShape(a);
                    const l = r.getIntersection(u);
                    if (l.intersects) {
                        l.mover = s;
                        l.entity = n;
                        if (l.time === e[0].time) e.push(l); else if (l.time < e[0].time) e = [ l ];
                    }
                }
            }
            if (e[0].intersects) t *= e[0].time;
            if (t > 0) {
                n.forEach((s => {
                    s.move(t);
                    i.moved.add(s);
                }));
                r -= t;
            }
            if (e[0].intersects) for (const t of e) {
                const e = t.mover;
                const i = t.entity;
                const o = t.tangent;
                const c = t.normal;
                const a = e.colliding(i, t);
                const u = i.colliding(e, t);
                let l = false;
                if ("remove" === a) {
                    e.deleted = true;
                    Physics.removeEntities(e);
                    n.delete(e);
                    const t = h.indexOf(e);
                    if (t > -1) h.splice(t, 1);
                    l = true;
                }
                if ("remove" === u) {
                    i.deleted = true;
                    Physics.removeEntities(i);
                    n.delete(i);
                    const t = h.indexOf(i);
                    if (t > -1) h.splice(t, 1);
                    l = true;
                }
                if (l) break;
                const f = {};
                if (0 !== e.mass) {
                    f.mass = e.mass;
                    f.direction = e.direction;
                    f.speed = e.speed;
                } else {
                    f.mass = i.mass;
                    f.direction = i.direction.multiply(-1);
                    f.speed = i.speed;
                }
                const w = {};
                if (0 !== i.mass) {
                    w.mass = i.mass;
                    w.direction = i.direction;
                    w.speed = i.speed;
                } else {
                    w.mass = e.mass;
                    w.direction = e.direction.multiply(-1);
                    w.speed = e.speed;
                }
                const d = f.direction.multiply(f.speed).dot(o);
                const g = w.direction.multiply(w.speed).dot(o);
                const V = f.direction.multiply(f.speed).dot(c);
                const y = w.direction.multiply(w.speed).dot(c);
                const R = (V * (f.mass - w.mass) + 2 * w.mass * y) / (f.mass + w.mass);
                const M = (y * (w.mass - f.mass) + 2 * f.mass * V) / (f.mass + w.mass);
                if (0 !== e.mass) e.velocity = o.multiply(d).add(c.multiply(R));
                if (e.prepareMovement(r, s)) n.add(e); else n.delete(e);
                if (0 !== i.mass) i.velocity = o.multiply(g).add(c.multiply(M));
                if (i.prepareMovement(r, s)) n.add(i); else n.delete(i);
            }
            if (0 === n.size) break;
        }
        i.time = performance.now() - e;
        return i;
    }
    static update_WORKING(t, s) {
        const e = [];
        for (let i = 0, n = this.entities.length; i < n; i++) {
            const n = this.entities[i];
            if (!n.applyForces(t, s)) continue;
            n.prepareMovement(t, s);
            e.push(n);
            n.near.clear();
            for (let t = i + 1, s = this.entities.length; t < s; t++) {
                const s = this.entities[t];
                if (null == s.position) continue;
                const e = s.position.subtract(n.position).magnitude;
                if (n.movementRadius + s.movementRadius < e * e) {
                    console.log("skipping");
                    continue;
                }
                n.near.add(s);
                s.near.add(n);
            }
        }
        let i = t;
        const n = new Set;
        while (i > 1e-4) {
            let t = i;
            let h = [ new Intersection ];
            for (const s of e) {
                if (0 === s.speed) continue;
                n.add(s);
                console.log("Checking near", s.near.size);
                for (const e of s.near) {
                    e.near.delete(s);
                    const i = s.velocity.multiply(t).subtract((e.velocity ?? new Vector).multiply(t));
                    const n = new Ray(s.position, i.normalize(), i.magnitude);
                    const r = s.shapes[0].worldShape.shape;
                    const o = e.shapes[0].worldShape.shape;
                    const c = r.getSweptShape(o);
                    const a = n.getIntersection(c);
                    if (a.intersects) {
                        a.mover = s;
                        a.entity = e;
                        if (a.time === h[0].time) h.push(a); else if (a.time < h[0].time) h = [ a ];
                    }
                }
            }
            if (h[0].intersects) t *= h[0].time;
            n.forEach((s => {
                s.move(t);
            }));
            i -= t;
            if (h[0].intersects) for (const t of h) {
                const e = t.mover;
                const h = t.entity;
                const r = t.tangent;
                const o = t.normal;
                const c = 1;
                const a = 1;
                const u = e.direction.multiply(e.speed).dot(r);
                const l = h.direction.multiply(h.speed).dot(r);
                const f = e.direction.multiply(e.speed).dot(o);
                const w = h.direction.multiply(h.speed).dot(o);
                const d = (f * (c - a) + 2 * a * w) / (c + a);
                const g = (w * (a - c) + 2 * c * f) / (c + a);
                e.velocity = r.multiply(u).add(o.multiply(d));
                h.velocity = r.multiply(l).add(o.multiply(g));
                if (e.prepareMovement(i, s)) n.add(e); else n.delete(e);
                if (!h.prepareMovement(i, s)) n.add(h); else n.delete(h);
            }
            if (0 === n.size) break;
            for (const t of e) {
                t.position.add([ 1100, 1100 ], true).modulus(1100, true);
                const s = t.shapes[0].worldShape.shape;
                if (s.position.x < 0) t.velocity.x = -t.velocity.x; else if (s.position.x > 1100) t.velocity.x = -t.velocity.x;
                if (s.position.y < 0) t.velocity.y = -t.velocity.y; else if (s.position.y > 1100) t.velocity.y = -t.velocity.y;
            }
        }
    }
    static addForce(t) {
        if (!(t instanceof Force)) t = Force.create(t);
        Physics.forces.push(t);
    }
    static removeForce(t, s = Physics) {
        const e = Physics.forces.findIndex((t => t === s));
        if (e < 0) return;
        Physics.forces.splice(e, 1);
    }
    static addEntities(t) {
        if (!Array.isArray(t)) t = [ t ];
        console.log("addEntities", t);
        return t.map((t => {
            const s = t instanceof Entity ? t : Entity.create(t);
            Physics.forces.forEach((t => s.addForce(t.clone().reset())));
            Physics.entities.push(s);
            if (null != s.position) Physics.L.addEntity(s);
            console.log("addEntities map", s);
            return s;
        }));
    }
    static updateEntity(t) {
        Physics.L.updateEntity(t);
    }
    static removeEntities(t) {
        if (!Array.isArray(t)) t = [ t ];
        t.forEach((t => {
            const s = Physics.entities.findIndex((s => s === t));
            if (s > -1) Physics.entities.splice(s, 1);
            Physics.L.removeEntity(t);
        }));
    }
}

Physics.entities = [];

Physics.forces = [];

Physics.collisions = {};

Physics.signals = {};

Physics.showAreas = false;

Physics.dontClear = false;


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@peasy-lib/peasy-ui/dist/esm/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@peasy-lib/peasy-ui/dist/esm/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI),
/* harmony export */   "UIView": () => (/* binding */ UIView)
/* harmony export */ });
class UIView {
    constructor() {
        this.state = "created";
        this.bindings = [];
        this.animations = [];
        this.animationQueue = [];
        this.destroyed = "";
        this.moved = "";
    }
    static create(t, i, e = {}, s = {
        parent: null,
        prepare: true,
        sibling: null
    }) {
        const n = new UIView;
        n.model = e;
        n.element = i;
        n.bindings.push(...UI.parse(n.element, e, n, s.parent));
        n.parentElement = t;
        n.sibling = s.sibling;
        n.parent = s.parent ?? UI;
        n.attached = new Promise((t => {
            n.attachResolve = t;
        }));
        return n;
    }
    destroy() {
        this.element.classList.add("pui-removing");
        this.destroyed = "queue";
        UI.destroyed.push(this);
    }
    terminate() {
        Promise.all(this.getAnimations()).then((() => {
            this.element.parentElement?.removeChild(this.element);
            this.bindings.forEach((t => t.unbind()));
            const t = this.parent.views.findIndex((t => t === this));
            if (t > -1) this.parent.views.splice(t, 1);
        }));
        this.destroyed = "destroyed";
    }
    move(t) {
        this.moved = "queue";
        this.element.classList.add("pui-moving");
        this.sibling = t;
    }
    play(t, i) {
        if ("string" === typeof t) t = this.animations.find((i => i.name === t)).clone();
        t.element = i;
        t.state = "pending";
        this.animationQueue.push(t);
        this.updateAnimations(performance.now());
        return t;
    }
    updateFromUI() {
        this.bindings.forEach((t => t.updateFromUI()));
    }
    updateToUI() {
        this.bindings.forEach((t => t.updateToUI()));
        switch (this.state) {
          case "created":
            this.element.classList.add("pui-adding");
            if (!this.element.hasAttribute("PUI-UNRENDERED")) (this.parentElement ?? UI.parentElement(this.element, this.parent)).insertBefore(this.element, this.sibling?.nextSibling ?? null);
            this.attachResolve();
            this.state = "attaching";
            break;

          case "attaching":
            if (0 === this.getAnimations(false).length) {
                this.element.classList.remove("pui-adding");
                this.state = "attached";
            }
            break;

          case "attached":
            this.state = "rendered";
            break;
        }
    }
    updateAtEvents() {
        this.bindings.forEach((t => t.updateAtEvents()));
    }
    updateAnimations(t) {
        while ("finished" === this.animationQueue[0]?.state ?? false) {
            const t = this.animationQueue.shift();
            t.destroy();
        }
        for (let i = 0; i < this.animationQueue.length; i++) {
            const e = this.animationQueue[i];
            if ("pending" !== e.state) continue;
            if (e.isBlocked(t)) continue;
            e.state = "playing";
            e.startTime = t;
            e.animation = e.element.animate(e.keyframes, e.options);
            e.finished = e.animation.finished;
            e.finished.then((() => {
                e.state = "finished";
                this.updateAnimations(performance.now());
            }));
        }
    }
    updateMove() {
        switch (this.moved) {
          case "queue":
            this.moved = "move";
            break;

          case "move":
            if (0 === this.getAnimations().length) {
                const t = UI.parentElement(this.element, this.parent);
                t.insertBefore(this.element, this.sibling.nextSibling);
                this.element.classList.remove("pui-moving");
                this.moved = "";
                this.sibling = null;
            }
            break;
        }
        this.bindings.forEach((t => t.updateMove()));
    }
    getAnimations(t = true) {
        return this.element.getAnimations({
            subtree: t
        }).filter((t => "finished" !== t.playState && t.effect?.getTiming().iterations !== 1 / 0)).map((t => t.finished));
    }
}

class UIBinding {
    constructor() {
        this.fromUI = false;
        this.toUI = true;
        this.atEvent = false;
        this.oneTime = false;
        this.views = [];
        this.firstUpdate = true;
        this.events = [];
        this.triggerAtEvent = t => {
            this.events.push(t);
        };
        this.id = ++UI.id;
    }
    get element() {
        if (null == this.$element) this.$element = "string" === typeof this.selector ? this.context.querySelector(this.selector) : this.selector;
        return this.$element;
    }
    set element(t) {
        this.$element = t;
    }
    static create(t) {
        const i = new UIBinding;
        const e = t.property?.split(":") ?? [];
        const s = e.shift();
        i.object = "$model" in t.object ? t.object : {
            $model: t.object
        };
        i.property = s;
        i.arguments = e;
        i.context = t.context ?? document;
        i.selector = t.selector;
        i.attribute = t.attribute ?? "innerText";
        i.value = t.value ?? i.value;
        i.template = t.template ?? i.template;
        i.fromUI = t.fromUI ?? i.fromUI;
        i.toUI = t.toUI ?? i.toUI;
        i.atEvent = t.atEvent ?? i.atEvent;
        i.oneTime = t.oneTime ?? i.oneTime;
        i.parent = t.parent ?? UI;
        i.addListener();
        if ("boolean" !== typeof i.fromUI) i.fromUI = i.fromUI.bind(i);
        if ("boolean" !== typeof i.toUI) i.toUI = i.toUI.bind(i);
        return i;
    }
    destroy() {
        this.element = null;
        this.removeListener();
        this.views.forEach((t => t.destroy()));
    }
    unbind() {
        UI.unbind(this);
    }
    addListener() {
        if (this.atEvent) {
            this.toUI = false;
            this.fromUI = false;
            this.element.addEventListener(this.attribute, this.triggerAtEvent);
        }
    }
    removeListener() {
        if (this.atEvent) this.element.removeEventListener(this.attribute, this.triggerAtEvent);
    }
    updateFromUI() {
        if (false === this.fromUI || this.firstUpdate) {
            this.firstUpdate = false;
            this.views.forEach((t => t.updateFromUI()));
            return;
        }
        const {target: t, property: i} = UI.resolveProperty(this.element, this.attribute);
        const e = t[i];
        if (e !== this.lastUIValue) {
            let t = true !== this.fromUI ? this.fromUI(e, this.lastUIValue, this.property, this.object) : e;
            this.lastUIValue = e;
            if (void 0 !== t && t !== this.lastValue) {
                this.lastValue = t;
                const {target: i, property: e} = UI.resolveProperty(this.object, this.property);
                if ("number" === UI.resolveValue(this.object, this.property) && !isNaN(t)) t = +t;
                i[e] = t;
            } else this.lastValue = t;
        }
        this.views.forEach((t => t.updateFromUI()));
    }
    updateToUI() {
        if (false === this.toUI) {
            this.views.forEach((t => t.updateToUI()));
            return;
        }
        let t = UI.resolveValue(this.object, this.property);
        let i = false;
        if (null != this.template) {
            if (this.template instanceof HTMLElement) if ("boolean" === typeof this.attribute) {
                t = false === (t ?? false) ? false : true;
                if (t !== this.lastValue) {
                    const i = true !== this.toUI ? this.toUI(t, this.lastValue, this.property, this.object) : t;
                    if (void 0 !== i && i !== this.lastUIValue) {
                        if (i === this.attribute) this.views.push(UIView.create(this.element.parentElement, this.template.cloneNode(true), this.object, {
                            parent: this,
                            prepare: false,
                            sibling: this.element
                        })); else {
                            const t = this.views.pop();
                            t?.destroy();
                        }
                        this.lastValue = t;
                        this.lastUIValue = i;
                    }
                }
            } else {
                if (null == t) t = [];
                const e = this.arguments[0];
                const s = this.lastValue ?? [];
                if (t.length !== s.length) i = true; else for (let n = 0, h = t.length; n < h; n++) {
                    let h, r;
                    if (null == e) {
                        h = t[n];
                        r = s[n];
                    } else {
                        h = UI.resolveValue(t[n] ?? {}, e);
                        r = UI.resolveValue(s[n] ?? {}, e);
                    }
                    if (h !== r) {
                        i = true;
                        break;
                    }
                }
                if (!i) {
                    this.views.forEach((t => t.updateToUI()));
                    if (this.oneTime) this.oneTimeDone();
                    return;
                }
                const n = true !== this.toUI ? this.toUI(t, s, this.property, this.object) : t;
                if (null == n) {
                    this.views.forEach((t => t.updateToUI()));
                    if (this.oneTime) this.oneTimeDone();
                    return;
                }
                const h = this.lastUIValue ?? [];
                let r = 0;
                for (let t = 0, i = n.length, s = 0; t < i; t++, s++) {
                    let i, l;
                    if (null == e) {
                        i = n[t];
                        l = h[s];
                    } else {
                        i = UI.resolveValue(n[t] ?? {}, e);
                        l = UI.resolveValue(h[s] ?? {}, e);
                    }
                    if (i === l) r++; else break;
                }
                if (r === n.length && n.length === h.length) {
                    this.views.forEach((t => t.updateToUI()));
                    if (this.oneTime) this.oneTimeDone();
                    return;
                }
                const l = this.views.splice(0, r);
                let o = l[l.length - 1];
                for (let t = r, i = n.length, s = r; t < i; t++, s++) {
                    const i = n[t];
                    if ("string" !== typeof i) i.$index = t;
                    const s = this.views.shift();
                    if (null == s) {
                        const t = {
                            $model: {
                                [this.attribute]: i
                            },
                            $parent: this.object
                        };
                        const e = UIView.create(this.element.parentElement, this.template.cloneNode(true), t, {
                            parent: this,
                            prepare: false,
                            sibling: o?.element ?? this.element
                        });
                        l.push(e);
                        o = e;
                        continue;
                    }
                    const h = null == e ? i : UI.resolveValue(i ?? {}, e);
                    const r = s?.model.$model[this.attribute];
                    const a = null == e ? r : UI.resolveValue(r ?? {}, e);
                    if (h === a) {
                        l.push(s);
                        s.move(o?.element ?? this.element);
                        o = s;
                        continue;
                    }
                    if (!n.slice(t).map((t => null == e ? t : UI.resolveValue(t ?? {}, e))).includes(a)) {
                        s.destroy();
                        t--;
                        o = s;
                        continue;
                    }
                    this.views.unshift(s);
                    let u = false;
                    for (let t = 0, i = this.views.length; t < i; t++) {
                        const i = this.views[t];
                        const s = i?.model.$model[this.attribute];
                        const n = null == e ? s : UI.resolveValue(s ?? {}, e);
                        if (h === n) {
                            l.push(...this.views.splice(t, 1));
                            i.move(o?.element ?? this.element);
                            u = true;
                            o = i;
                            break;
                        }
                    }
                    if (!u) {
                        const t = {
                            $model: {
                                [this.attribute]: i
                            },
                            $parent: this.object
                        };
                        const e = UIView.create(this.element.parentElement, this.template.cloneNode(true), t, {
                            parent: this,
                            prepare: false,
                            sibling: o?.element ?? this.element
                        });
                        l.push(e);
                        o = e;
                    }
                }
                this.views.forEach((t => t.destroy()));
                this.views = l;
                this.lastValue = [ ...t ];
                this.lastUIValue = [ ...n ];
            } else if (null == this.value) {
                const i = UI.resolveValue(this.object, this.attribute);
                const e = i.template;
                const s = null == t ? i : i.create(t);
                this.value = t ?? i;
                this.views.push(UI.create(this.element.parentElement, e, s, {
                    parent: this,
                    prepare: true,
                    sibling: this.element
                }));
            }
        } else if (t !== this.lastValue) {
            const i = true !== this.toUI ? this.toUI(t, this.lastValue, this.property, this.object) : t;
            if (void 0 !== i && i !== this.lastUIValue) {
                const {target: e, property: s} = UI.resolveProperty(this.element, this.attribute);
                e[s] = i;
                this.lastValue = t;
                this.lastUIValue = i;
            }
        }
        this.views.forEach((t => t.updateToUI()));
        if (this.oneTime) this.oneTimeDone();
    }
    oneTimeDone() {
        this.toUI = false;
        this.fromUI = false;
    }
    updateAtEvents() {
        let t = this.events.shift();
        while (null != t) {
            const i = UI.resolveValue(this.object, this.property);
            i(t, this.object.$model, this.element, this.attribute, this.object);
            t = this.events.shift();
        }
        this.views.forEach((t => t.updateAtEvents()));
    }
    updateMove() {
        this.views.forEach((t => t.updateMove()));
    }
}

class UI {
    static initialize(t = true) {
        UI.initialized = true;
        if (false === t) return;
        if (true === t) {
            const t = () => {
                UI.update();
                requestAnimationFrame(t);
            };
            requestAnimationFrame(t);
            return;
        }
        setInterval((() => UI.update()), 1e3 / t);
    }
    static create(t, i, e = {}, s = {
        parent: null,
        prepare: true,
        sibling: null
    }) {
        if ("string" === typeof i) {
            const e = t?.ownerDocument ?? document;
            if (i.startsWith("#")) i = e.querySelector(i).innerHTML;
            const n = e.createElement("div");
            n.innerHTML = s.prepare ? UI.prepare(i) : i;
            i = n.firstElementChild;
        }
        const n = UIView.create(t, i, e, s);
        if (n.parent === UI) UI.views.push(n);
        if (!UI.initialized) UI.initialize();
        return n;
    }
    static play(t, i) {
        if ("string" === typeof t) {
            t = this.globals.animations.find((i => i.name === t)).clone();
            return t.play(i);
        }
        return t.play();
    }
    static parse(t, i, e, s) {
        const n = [];
        if (3 === t.nodeType) {
            let h = t.textContent;
            let r = h.match(UI.regexValue);
            while (null != r) {
                const l = r[1];
                let o = r[2];
                h = r[3];
                let a = false;
                if (o.startsWith("|")) {
                    a = true;
                    o = o.slice(1).trimStart();
                }
                let u = t.cloneNode();
                t.textContent = l;
                UI.parentElement(t, s).insertBefore(u, t.nextSibling);
                n.push(UI.bind({
                    selector: u,
                    attribute: "textContent",
                    object: i,
                    property: o,
                    parent: e,
                    oneTime: a
                }));
                t = u;
                u = t.cloneNode();
                u.textContent = h;
                UI.parentElement(t, s).insertBefore(u, t.nextSibling);
                t = u;
                r = h.match(UI.regexValue);
            }
        } else {
            n.push(...Object.keys(t.attributes ?? []).reverse().map((n => {
                const h = [];
                if (t instanceof Comment) return [];
                const r = t.attributes[n];
                if (r.name.startsWith("pui.")) {
                    const n = r.value.match(UI.regexAttribute);
                    let [h, l, o, a, u] = n;
                    let f;
                    let c;
                    let U = false;
                    if ("@" !== o) {
                        const e = l.match(/^'(.*?)'$/);
                        if (null != e) {
                            f = e[1];
                            t.setAttribute("value", f);
                            l = "option" === t.nodeName.toLowerCase() ? "selected" : "checked";
                            a = t => t ? f : void 0;
                            o = t => t === f;
                        } else if ("" === l) if (">" === a) {
                            const {target: e, property: s} = UI.resolveProperty(i, u);
                            e[s] = t;
                            return [];
                        } else {
                            const i = document.createComment(r.name);
                            UI.parentNode(t, s).insertBefore(i, t);
                            UI.parentNode(t, s).removeChild(t);
                            t.removeAttribute(r.name);
                            c = t;
                            t = i;
                            l = "=" === o;
                            o = true;
                            if ("|" === a) U = true;
                        } else if ("=" === a && "=" === o) {
                            const i = UI.parentNode(t, s);
                            if (8 !== i.nodeType) {
                                const e = document.createComment(r.name);
                                i.insertBefore(e, t);
                                i.removeChild(t);
                                t.removeAttribute(r.name);
                                t = e;
                            } else t = i;
                            c = l;
                            U = true;
                            o = true;
                        } else if ("*" === a) {
                            const i = document.createComment(r.name);
                            UI.parentNode(t, s).insertBefore(i, t);
                            UI.parentNode(t, s).removeChild(t);
                            t.removeAttribute(r.name);
                            c = t;
                            t = i;
                        } else if ("|" === a) U = true; else if ("checked" !== l) t.setAttribute(l, "");
                    }
                    return [ UI.bind({
                        selector: t,
                        attribute: l,
                        value: f,
                        object: i,
                        property: u,
                        template: c,
                        toUI: "string" === typeof o ? "<" === o : o,
                        fromUI: "string" === typeof a ? ">" === a : a,
                        atEvent: "@" === o,
                        parent: e,
                        oneTime: U
                    }) ];
                }
                const l = [ r.value ];
                let o = 0;
                let a = l[o].match(UI.regexValue);
                while (null != a) {
                    let {before: s, property: n, after: u} = a.groups;
                    let f = false;
                    if (n.startsWith("|")) {
                        f = true;
                        n = n.slice(1).trimStart();
                    }
                    h.push(UI.bind({
                        selector: t,
                        attribute: r.name,
                        object: i,
                        property: n,
                        oneTime: f,
                        toUI(i, e, s, n) {
                            if (this.oneTime) {
                                const t = l.indexOf(s);
                                if (t > -1) {
                                    l[t] = UI.resolveValue(n, s);
                                    l[t - 1] += l[t] + l[t + 1];
                                    l.splice(t, 2);
                                }
                            }
                            const h = l.map(((t, i) => {
                                if (i % 2 === 0) return t;
                                return UI.resolveValue(n, t);
                            })).join("");
                            t.setAttribute(r.name, h);
                            return h;
                        },
                        parent: e
                    }));
                    l[o++] = s;
                    l[o++] = n;
                    l[o] = u;
                    a = l[o].match(UI.regexValue);
                }
                return h;
            })).flat());
            if (t instanceof Comment) return n.filter((t => {
                if (null != t.template) return true;
                t.unbind();
                return false;
            }));
            if (!UI.leaveAttributes) for (let i = Object.keys(t.attributes ?? []).length - 1; i >= 0; i--) {
                const e = t.attributes[Object.keys(t.attributes ?? [])[i]];
                if (e.name.startsWith("pui.")) t.removeAttribute(e.name);
            }
            n.push(...Array.from(t.childNodes).map((t => UI.parse(t, i, e, s))).flat());
        }
        return n;
    }
    static bind(t) {
        const i = UIBinding.create(t);
        return i;
    }
    static unbind(t) {
        t.destroy();
        if (t.parent !== UI) {
            const i = t.parent.bindings;
            const e = i.indexOf(t);
            if (e > -1) i.splice(e, 1);
        }
    }
    static update() {
        this.views.forEach((t => t.updateFromUI()));
        this.views.forEach((t => t.updateToUI()));
        this.views.forEach((t => t.updateAtEvents()));
        const t = performance.now();
        [ ...this.views, this.globals ].forEach((i => i.updateAnimations(t)));
        this.views.forEach((t => {
            t.updateMove();
        }));
        this.destroyed.forEach((t => {
            switch (t.destroyed) {
              case "queue":
                if ("rendered" === t.state) t.destroyed = "destroy"; else t.updateToUI();
                break;

              case "destroy":
                {
                    t.terminate();
                    const i = this.destroyed.findIndex((i => t === i));
                    if (i > -1) this.destroyed.splice(i, 1);
                }
            }
        }));
    }
    static resolveProperty(t, i) {
        i = i.replace("[", ".").replace("]", ".");
        const e = i.split(".").filter((t => (t ?? "").length > 0));
        while ("$parent" === e[0] && null != t.$parent) {
            t = t.$parent;
            e.shift();
        }
        let s = "$model" in t ? t.$model : t;
        while (e.length > 1) s = s[e.shift()];
        return {
            target: s,
            property: e[0]
        };
    }
    static resolveValue(t, i) {
        let e = 0;
        do {
            const {target: e, property: s} = UI.resolveProperty(t, i);
            if (null != e && s in e) return e[s];
            t = t.$parent;
        } while (null != t && e++ < 1e3);
    }
    static parentElement(t, i) {
        const e = t.parentElement;
        if (null != e) return e;
        while (null != i && (null == i.element || i.element === t)) i = i.parent;
        return i?.element;
    }
    static parentNode(t, i) {
        const e = t.parentNode;
        if (null != e) return e;
        while (null != i && (null == i.element || i.element === t)) i = i.parent;
        return i?.element;
    }
    static prepare(t) {
        let i = t;
        t = "";
        let e = i.match(UI.regexReplace);
        while (null != e) {
            const [s, n, h, r] = e;
            if (h.match(/\S\s*===/)) t += `${n.trimEnd()}br PUI-UNRENDERED PUI.${UI.bindingCounter++}="${h}"`; else t += `${n} PUI.${UI.bindingCounter++}="${h}" `;
            i = r;
            e = i.match(UI.regexReplace);
        }
        t += i;
        return t;
    }
}

UI.initialized = false;

UI.id = 0;

UI.views = [];

UI.destroyed = [];

UI.globals = new UIView;

UI.leaveAttributes = false;

UI.regexReplace = /([\S\s]*?)\$\{([^}]*?[<=@!]=[*=>|][^}]*?)\}([\S\s]*)/m;

UI.regexAttribute = /^\s*(\S*?)\s*([<=@!])=([*=>|])\s*(\S*?)\s*$/;

UI.regexValue = /(?<before>[\S\s]*?)\$\{\s*(?<property>[\s\S]*?)\s*\}(?<after>[\S\s]*)/m;

UI.bindingCounter = 0;


//# sourceMappingURL=index.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @peasy-lib/peasy-physics */ "./node_modules/@peasy-lib/peasy-physics/dist/esm/index.mjs");
/* harmony import */ var _peasy_lib_peasy_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @peasy-lib/peasy-ui */ "./node_modules/@peasy-lib/peasy-ui/dist/esm/index.mjs");
/* harmony import */ var _peasy_lib_peasy_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @peasy-lib/peasy-input */ "./node_modules/@peasy-lib/peasy-input/dist/esm/index.mjs");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_boing_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/boing.mp3 */ "./src/assets/boing.mp3");






var sound = new howler__WEBPACK_IMPORTED_MODULE_1__.Howl({
    src: _assets_boing_mp3__WEBPACK_IMPORTED_MODULE_2__,
    sprite: {
        bounce: [0, 1000],
    },
});
//sound.play("bounce");
/********************************************** */
//PEASY-UI
/************************************************/
var template = "\n<div class=\"game\">\n  <div class=\"player\" ${ ==> player.element} style=\"translate: ${player.position.x}px ${player.position.y}px; left: -25px; top: -25px; rotate: ${player.angle}deg;\"></div>\n  <div class=\"asteroid\" ${ ==> asteroid.element} style=\"translate: ${asteroid.position.x}px ${asteroid.position.y}px; left: -40px; top: -40px;\"></div>\n  <canvas ${ ==> canvas}></canvas>\n</div>\n";
var THRUSTFORCE = 20;
var model = {
    canvas: null,
    player: {
        element: null,
        position: { x: 50, y: 50 },
        angle: 0,
    },
    asteroid: {
        element: null,
        position: { x: 120, y: 50 },
    },
};
_peasy_lib_peasy_ui__WEBPACK_IMPORTED_MODULE_3__.UI.create(document.body, template, model);
_peasy_lib_peasy_ui__WEBPACK_IMPORTED_MODULE_3__.UI.initialize(false);
var screenWidth;
var screenHeight;
window.addEventListener("DOMContentLoaded", function () {
    model.canvas.setAttribute("width", window.innerWidth.toString());
    model.canvas.setAttribute("height", window.innerHeight.toString());
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
});
window.addEventListener("resize", function () {
    model.canvas.setAttribute("width", window.innerWidth.toString());
    model.canvas.setAttribute("height", window.innerHeight.toString());
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
});
/********************************************** */
//PEASY-Physics
/************************************************/
var playerShape = {
    position: { x: 0, y: 0 },
    radius: undefined,
    size: undefined,
    alignment: undefined,
};
playerShape.size = new _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Vector(50, 50);
var asteroidShape = {
    position: { x: 0, y: 0 },
    radius: undefined,
    size: undefined,
    alignment: undefined,
};
asteroidShape.radius = 40;
var Entity = /** @class */ (function () {
    function Entity(position, orientation) {
        if (orientation === void 0) { orientation = 0; }
        this.position = position;
        this.orientation = orientation;
        this.shapes = [];
        this.forces = [];
        this.mass = 1;
        this.color = "";
    }
    return Entity;
}());
_peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.initialize({
    ctx: model.canvas.getContext("2d"),
    showAreas: true,
});
var player = new Entity(new _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Vector(250, 250));
player.shapes = [playerShape];
player.forces = [];
player.maxSpeed = 500;
player.color = "blue";
var asteroid = new Entity(new _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Vector(450, 450));
asteroid.shapes = [asteroidShape];
asteroid.forces = [];
asteroid.maxSpeed = 500;
asteroid.color = "red";
var entities = _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.addEntities([player, asteroid]);
player = entities[0];
entities[0].colliding = function (entity, intersection) {
    console.log("collision: ", entity);
    sound.play("bounce");
    return "collide";
};
asteroid = entities[1];
player.mass = 3;
asteroid.mass = 10;
var ang2Rad = function (a) {
    return a * (Math.PI / 180);
};
var thrust = function () {
    var tempX = THRUSTFORCE * Math.cos(ang2Rad(_peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[0].orientation));
    var tempY = THRUSTFORCE * Math.sin(ang2Rad(_peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[0].orientation));
    var dir = new _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Vector(tempX, tempY);
    _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[0].addForce({
        name: "thrust",
        direction: dir,
        duration: 0,
        magnitude: 500,
    });
};
var reverse = function () {
    var currentAngle = _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[0].orientation;
    var reverseAngle = currentAngle + 180;
    var tempX = THRUSTFORCE * Math.cos(ang2Rad(reverseAngle));
    var tempY = THRUSTFORCE * Math.sin(ang2Rad(reverseAngle));
    var dir = new _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Vector(tempX, tempY);
    _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[0].addForce({
        name: "reverse",
        direction: dir,
        duration: 0,
        magnitude: 500,
    });
};
var turnLeft = function () {
    _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[0].orientation += -3;
    console.log("turn L");
};
var turnRight = function () {
    _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[0].orientation += 3;
    console.log("turn R");
};
/*************************************************/
// Peasy-Input
/*************************************************/
var mapping = _peasy_lib_peasy_input__WEBPACK_IMPORTED_MODULE_5__.Input.map({
    ArrowUp: "thrust",
    ArrowDown: "reverse",
    ArrowLeft: "turnL",
    ArrowRight: "turnR",
});
/**************************************************
 *  Screen Collision Management
 **************************************************/
var playerScreenCollision = function () {
    //check for screen collision
    if (model.player.position.x > screenWidth) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[0].position.x = -10;
        model.player.position.x = -10;
    }
    if (model.player.position.x < -25) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[0].position.x = screenWidth;
        model.player.position.x = screenWidth;
    }
    if (model.player.position.y > screenHeight) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[0].position.y = -10;
        model.player.position.y = -10;
    }
    if (model.player.position.y < -25) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[0].position.y = screenHeight;
        model.player.position.y = screenHeight;
    }
};
var asteroidScreenCollision = function () {
    //check for screen collision
    if (model.asteroid.position.x > screenWidth) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[1].position.x = -10;
        model.asteroid.position.x = -10;
    }
    if (model.asteroid.position.x < -25) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[1].position.x = screenWidth;
        model.asteroid.position.x = screenWidth;
    }
    if (model.asteroid.position.y > screenHeight) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[1].position.y = -10;
        model.asteroid.position.y = -10;
    }
    if (model.asteroid.position.y < -25) {
        _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[1].position.y = screenHeight;
        model.asteroid.position.y = screenHeight;
    }
};
/********************************************** */
//Game Loop
/************************************************/
var startime, lasttime;
var game_loop = function (timestamp) {
    if (startime == undefined) {
        startime = timestamp;
        lasttime = timestamp;
    }
    var deltaTime = (timestamp - lasttime) / 1000;
    if (deltaTime > 1.5) {
        deltaTime = 0;
        lasttime = timestamp;
    }
    //check inputs
    if (_peasy_lib_peasy_input__WEBPACK_IMPORTED_MODULE_5__.Input.is("thrust"))
        thrust();
    if (_peasy_lib_peasy_input__WEBPACK_IMPORTED_MODULE_5__.Input.is("reverse"))
        reverse();
    if (_peasy_lib_peasy_input__WEBPACK_IMPORTED_MODULE_5__.Input.is("turnL"))
        turnLeft();
    if (_peasy_lib_peasy_input__WEBPACK_IMPORTED_MODULE_5__.Input.is("turnR"))
        turnRight();
    _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.update(deltaTime, timestamp);
    model.player.position = _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[0].position;
    model.player.angle = _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[0].orientation;
    model.asteroid.position = _peasy_lib_peasy_physics__WEBPACK_IMPORTED_MODULE_4__.Physics.entities[1].position;
    playerScreenCollision();
    asteroidScreenCollision();
    _peasy_lib_peasy_ui__WEBPACK_IMPORTED_MODULE_3__.UI.update();
    requestAnimationFrame(game_loop);
    lasttime = timestamp;
};
requestAnimationFrame(game_loop);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlFQUFpRSxpQ0FBaUMsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsS0FBSyxlQUFlLHlCQUF5Qix1QkFBdUIsbUJBQW1CLG9CQUFvQixLQUFLLGlCQUFpQix5QkFBeUIsa0JBQWtCLG1CQUFtQixrQ0FBa0Msd0VBQXdFLG1DQUFtQyw2QkFBNkIsK0JBQStCLEtBQUssbUJBQW1CLHlCQUF5QixrQkFBa0IsbUJBQW1CLGtDQUFrQyx5QkFBeUIsK0JBQStCLEtBQUssV0FBVyxxRkFBcUYsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGlEQUFpRCxpQ0FBaUMsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsS0FBSyxlQUFlLHlCQUF5Qix1QkFBdUIsbUJBQW1CLG9CQUFvQixLQUFLLGlCQUFpQix5QkFBeUIsa0JBQWtCLG1CQUFtQixrQ0FBa0Msb0RBQW9ELG1DQUFtQyw2QkFBNkIsK0JBQStCLEtBQUssbUJBQW1CLHlCQUF5QixrQkFBa0IsbUJBQW1CLGtDQUFrQyx5QkFBeUIsK0JBQStCLEtBQUssdUJBQXVCO0FBQ3h6RDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQSxrREFBa0Q7QUFDbEQsaURBQWlEO0FBQ2pELGlEQUFpRDtBQUNqRCxrREFBa0Q7QUFDbEQsZ0RBQWdEO0FBQ2hELGtEQUFrRDtBQUNsRCxtREFBbUQsdUNBQXVDLHVDQUF1QztBQUNqSSxtREFBbUQsdUNBQXVDLHVDQUF1QztBQUNqSSxtREFBbUQsdUNBQXVDLHVDQUF1QztBQUNqSSxvRUFBb0U7QUFDcEUsb0VBQW9FO0FBQ3BFLG1EQUFtRDtBQUNuRCxxREFBcUQsd0NBQXdDO0FBQzdGOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQSx3QkFBd0IsaUNBQWlDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDLGtDQUFrQyxhQUFhO0FBQy9DLGtDQUFrQyxhQUFhO0FBQy9DLDRDQUE0QyxrQkFBa0I7QUFDOUQsNENBQTRDLGtCQUFrQjtBQUM5RCxvQ0FBb0MsY0FBYztBQUNsRCxrQ0FBa0MsYUFBYTtBQUMvQyxrQ0FBa0MsYUFBYTtBQUMvQyxrQ0FBa0MsYUFBYTtBQUMvQyxzQ0FBc0MsZUFBZTtBQUNyRCxrQ0FBa0MsYUFBYTtBQUMvQyxrQ0FBa0MsYUFBYTtBQUMvQyxzQ0FBc0MsZUFBZTtBQUNyRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxLQUFLO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsU0FBUztBQUN6QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsY0FBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQixVQUFVO0FBQzFCLGdCQUFnQixVQUFVO0FBQzFCLGdCQUFnQixVQUFVO0FBQzFCLGdCQUFnQixVQUFVO0FBQzFCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qiw0QkFBNEIsR0FBRyxlQUFlO0FBQzFFOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVU7QUFDMUIsZ0JBQWdCLFVBQVU7QUFDMUIsZ0JBQWdCLFVBQVU7QUFDMUIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQixVQUFVO0FBQzFCLGdCQUFnQixVQUFVO0FBQzFCLGdCQUFnQixVQUFVO0FBQzFCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxNQUFNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyxNQUFNO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQW9EO0FBQ3BFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsR0FBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQztBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0IsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sSUFBMEM7QUFDaEQsSUFBSSxpQ0FBTyxFQUFFLG1DQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUEsa0dBQUM7QUFDTjs7QUFFQTtBQUNBLE1BQU0sSUFBOEI7QUFDcEMsSUFBSSxjQUFjO0FBQ2xCLElBQUksWUFBWTtBQUNoQjs7QUFFQTtBQUNBLGFBQWEscUJBQU07QUFDbkIsSUFBSSxxQkFBTTtBQUNWLElBQUkscUJBQU07QUFDVixJQUFJLHFCQUFNO0FBQ1YsSUFBSSxxQkFBTTtBQUNWLElBQUksMkNBQTJDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsTUFBTTtBQUMzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxnQkFBZ0I7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsa0JBQWtCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsVUFBVTtBQUN4QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyxlQUFlO0FBQ3JELGdDQUFnQyxZQUFZO0FBQzVDLGdEQUFnRCxvQkFBb0I7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxnQkFBZ0I7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsVUFBVTtBQUN4QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGNBQWMsVUFBVTtBQUN4QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBSTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVEQUF1RDtBQUN4RjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTyxJQUFJLE9BQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjLEtBQUssVUFBVTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWMsS0FBSyxVQUFVO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaVRBQWlUO0FBQ2pUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNk9BQTZPO0FBQzdPO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTyxxQkFBcUIsT0FBTyxlQUFlLEVBQUUsR0FBRyxFQUFFO0FBQ2pGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsT0FBTztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELE9BQU87QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZELHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUV1SDtBQUN2SDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0NBQWdDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUMsT0FBTyxDQUFDO1FBQUUsU0FBUyxFQUFFLENBQUM7SUFFbkMsb0VBQWMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsa0ZBQTRCLENBQUM7SUFDckQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcscUZBQStCLENBQUM7SUFDckQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsa0ZBQTRCLENBQUM7SUFFdkQscUJBQXFCLEVBQUUsQ0FBQztJQUN4Qix1QkFBdUIsRUFBRSxDQUFDO0lBRTFCLDBEQUFTLEVBQUUsQ0FBQztJQUNaLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLFFBQVEsR0FBRyxTQUFTLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUYscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGVhc3ktcGh5c2ljcy8uL25vZGVfbW9kdWxlcy9ob3dsZXIvZGlzdC9ob3dsZXIuanMiLCJ3ZWJwYWNrOi8vcGVhc3ktcGh5c2ljcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BlYXN5LXBoeXNpY3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BlYXN5LXBoeXNpY3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGVhc3ktcGh5c2ljcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGVhc3ktcGh5c2ljcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BlYXN5LXBoeXNpY3MvLi9ub2RlX21vZHVsZXMvQHBlYXN5LWxpYi9wZWFzeS1pbnB1dC9kaXN0L2VzbS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vcGVhc3ktcGh5c2ljcy8uL25vZGVfbW9kdWxlcy9AcGVhc3ktbGliL3BlYXN5LXBoeXNpY3MvZGlzdC9lc20vaW5kZXgubWpzIiwid2VicGFjazovL3BlYXN5LXBoeXNpY3MvLi9ub2RlX21vZHVsZXMvQHBlYXN5LWxpYi9wZWFzeS11aS9kaXN0L2VzbS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vcGVhc3ktcGh5c2ljcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BlYXN5LXBoeXNpY3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BlYXN5LXBoeXNpY3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGVhc3ktcGh5c2ljcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BlYXN5LXBoeXNpY3Mvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcGVhc3ktcGh5c2ljcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wZWFzeS1waHlzaWNzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9hcnJvdy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKnN0eWxlLmNzcyovXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFzdGVyb2lkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFlBQVk7QUFDWjtFQUNFLDBCQUEwQjtFQUMxQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQix5REFBMkM7RUFDM0MsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKnN0eWxlLmNzcyovXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvYXJyb3cucG5nXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFzdGVyb2lkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKiFcbiAqICBob3dsZXIuanMgdjIuMi4zXG4gKiAgaG93bGVyanMuY29tXG4gKlxuICogIChjKSAyMDEzLTIwMjAsIEphbWVzIFNpbXBzb24gb2YgR29sZEZpcmUgU3R1ZGlvc1xuICogIGdvbGRmaXJlc3R1ZGlvcy5jb21cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKiBHbG9iYWwgTWV0aG9kcyAqKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBnbG9iYWwgY29udHJvbGxlci4gQWxsIGNvbnRhaW5lZCBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFwcGx5XG4gICAqIHRvIGFsbCBzb3VuZHMgdGhhdCBhcmUgY3VycmVudGx5IHBsYXlpbmcgb3Igd2lsbCBiZSBpbiB0aGUgZnV0dXJlLlxuICAgKi9cbiAgdmFyIEhvd2xlckdsb2JhbCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9O1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhlIGdsb2JhbCBIb3dsZXIgb2JqZWN0LlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIC8vIENyZWF0ZSBhIGdsb2JhbCBJRCBjb3VudGVyLlxuICAgICAgc2VsZi5fY291bnRlciA9IDEwMDA7XG5cbiAgICAgIC8vIFBvb2wgb2YgdW5sb2NrZWQgSFRNTDUgQXVkaW8gb2JqZWN0cy5cbiAgICAgIHNlbGYuX2h0bWw1QXVkaW9Qb29sID0gW107XG4gICAgICBzZWxmLmh0bWw1UG9vbFNpemUgPSAxMDtcblxuICAgICAgLy8gSW50ZXJuYWwgcHJvcGVydGllcy5cbiAgICAgIHNlbGYuX2NvZGVjcyA9IHt9O1xuICAgICAgc2VsZi5faG93bHMgPSBbXTtcbiAgICAgIHNlbGYuX211dGVkID0gZmFsc2U7XG4gICAgICBzZWxmLl92b2x1bWUgPSAxO1xuICAgICAgc2VsZi5fY2FuUGxheUV2ZW50ID0gJ2NhbnBsYXl0aHJvdWdoJztcbiAgICAgIHNlbGYuX25hdmlnYXRvciA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yKSA/IHdpbmRvdy5uYXZpZ2F0b3IgOiBudWxsO1xuXG4gICAgICAvLyBQdWJsaWMgcHJvcGVydGllcy5cbiAgICAgIHNlbGYubWFzdGVyR2FpbiA9IG51bGw7XG4gICAgICBzZWxmLm5vQXVkaW8gPSBmYWxzZTtcbiAgICAgIHNlbGYudXNpbmdXZWJBdWRpbyA9IHRydWU7XG4gICAgICBzZWxmLmF1dG9TdXNwZW5kID0gdHJ1ZTtcbiAgICAgIHNlbGYuY3R4ID0gbnVsbDtcblxuICAgICAgLy8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIGF1dG8gYXVkaW8gdW5sb2NrZXIuXG4gICAgICBzZWxmLmF1dG9VbmxvY2sgPSB0cnVlO1xuXG4gICAgICAvLyBTZXR1cCB0aGUgdmFyaW91cyBzdGF0ZSB2YWx1ZXMgZm9yIGdsb2JhbCB0cmFja2luZy5cbiAgICAgIHNlbGYuX3NldHVwKCk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQvc2V0IHRoZSBnbG9iYWwgdm9sdW1lIGZvciBhbGwgc291bmRzLlxuICAgICAqIEBwYXJhbSAge0Zsb2F0fSB2b2wgVm9sdW1lIGZyb20gMC4wIHRvIDEuMC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXIvRmxvYXR9ICAgICBSZXR1cm5zIHNlbGYgb3IgY3VycmVudCB2b2x1bWUuXG4gICAgICovXG4gICAgdm9sdW1lOiBmdW5jdGlvbih2b2wpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG4gICAgICB2b2wgPSBwYXJzZUZsb2F0KHZvbCk7XG5cbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYW4gQXVkaW9Db250ZXh0IGNyZWF0ZWQgeWV0LCBydW4gdGhlIHNldHVwLlxuICAgICAgaWYgKCFzZWxmLmN0eCkge1xuICAgICAgICBzZXR1cEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdm9sID49IDAgJiYgdm9sIDw9IDEpIHtcbiAgICAgICAgc2VsZi5fdm9sdW1lID0gdm9sO1xuXG4gICAgICAgIC8vIERvbid0IHVwZGF0ZSBhbnkgb2YgdGhlIG5vZGVzIGlmIHdlIGFyZSBtdXRlZC5cbiAgICAgICAgaWYgKHNlbGYuX211dGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXaGVuIHVzaW5nIFdlYiBBdWRpbywgd2UganVzdCBuZWVkIHRvIGFkanVzdCB0aGUgbWFzdGVyIGdhaW4uXG4gICAgICAgIGlmIChzZWxmLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgICAgICBzZWxmLm1hc3RlckdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZSh2b2wsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFuZCBjaGFuZ2Ugdm9sdW1lIGZvciBhbGwgSFRNTDUgYXVkaW8gbm9kZXMuXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICghc2VsZi5faG93bHNbaV0uX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgICAvLyBHZXQgYWxsIG9mIHRoZSBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAgICAgICAgdmFyIGlkcyA9IHNlbGYuX2hvd2xzW2ldLl9nZXRTb3VuZElkcygpO1xuXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHNvdW5kcyBhbmQgY2hhbmdlIHRoZSB2b2x1bWVzLlxuICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPGlkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9ob3dsc1tpXS5fc291bmRCeUlkKGlkc1tqXSk7XG5cbiAgICAgICAgICAgICAgaWYgKHNvdW5kICYmIHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICAgICAgc291bmQuX25vZGUudm9sdW1lID0gc291bmQuX3ZvbHVtZSAqIHZvbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZi5fdm9sdW1lO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgbXV0aW5nIGFuZCB1bm11dGluZyBnbG9iYWxseS5cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBtdXRlZCBJcyBtdXRlZCBvciBub3QuXG4gICAgICovXG4gICAgbXV0ZTogZnVuY3Rpb24obXV0ZWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYW4gQXVkaW9Db250ZXh0IGNyZWF0ZWQgeWV0LCBydW4gdGhlIHNldHVwLlxuICAgICAgaWYgKCFzZWxmLmN0eCkge1xuICAgICAgICBzZXR1cEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLl9tdXRlZCA9IG11dGVkO1xuXG4gICAgICAvLyBXaXRoIFdlYiBBdWRpbywgd2UganVzdCBuZWVkIHRvIG11dGUgdGhlIG1hc3RlciBnYWluLlxuICAgICAgaWYgKHNlbGYudXNpbmdXZWJBdWRpbykge1xuICAgICAgICBzZWxmLm1hc3RlckdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZShtdXRlZCA/IDAgOiBzZWxmLl92b2x1bWUsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgfVxuXG4gICAgICAvLyBMb29wIHRocm91Z2ggYW5kIG11dGUgYWxsIEhUTUw1IEF1ZGlvIG5vZGVzLlxuICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX2hvd2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghc2VsZi5faG93bHNbaV0uX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgLy8gR2V0IGFsbCBvZiB0aGUgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgICAgICB2YXIgaWRzID0gc2VsZi5faG93bHNbaV0uX2dldFNvdW5kSWRzKCk7XG5cbiAgICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHNvdW5kcyBhbmQgbWFyayB0aGUgYXVkaW8gbm9kZSBhcyBtdXRlZC5cbiAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8aWRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9ob3dsc1tpXS5fc291bmRCeUlkKGlkc1tqXSk7XG5cbiAgICAgICAgICAgIGlmIChzb3VuZCAmJiBzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5tdXRlZCA9IChtdXRlZCkgPyB0cnVlIDogc291bmQuX211dGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHN0b3BwaW5nIGFsbCBzb3VuZHMgZ2xvYmFsbHkuXG4gICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggYWxsIEhvd2xzIGFuZCBzdG9wIHRoZW0uXG4gICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5faG93bHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2VsZi5faG93bHNbaV0uc3RvcCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5sb2FkIGFuZCBkZXN0cm95IGFsbCBjdXJyZW50bHkgbG9hZGVkIEhvd2wgb2JqZWN0cy5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgdW5sb2FkOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIGZvciAodmFyIGk9c2VsZi5faG93bHMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICBzZWxmLl9ob3dsc1tpXS51bmxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IEF1ZGlvQ29udGV4dCB0byBtYWtlIHN1cmUgaXQgaXMgZnVsbHkgcmVzZXQuXG4gICAgICBpZiAoc2VsZi51c2luZ1dlYkF1ZGlvICYmIHNlbGYuY3R4ICYmIHR5cGVvZiBzZWxmLmN0eC5jbG9zZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5jdHguY2xvc2UoKTtcbiAgICAgICAgc2VsZi5jdHggPSBudWxsO1xuICAgICAgICBzZXR1cEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGNvZGVjIHN1cHBvcnQgb2Ygc3BlY2lmaWMgZXh0ZW5zaW9uLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZXh0IEF1ZGlvIGZpbGUgZXh0ZW50aW9uLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgY29kZWNzOiBmdW5jdGlvbihleHQpIHtcbiAgICAgIHJldHVybiAodGhpcyB8fCBIb3dsZXIpLl9jb2RlY3NbZXh0LnJlcGxhY2UoL154LS8sICcnKV07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHVwIHZhcmlvdXMgc3RhdGUgdmFsdWVzIGZvciBnbG9iYWwgdHJhY2tpbmcuXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIF9zZXR1cDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuXG4gICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgc3VzcGVuZC9yZXN1bWUgc3RhdGUgb2YgdGhlIEF1ZGlvQ29udGV4dC5cbiAgICAgIHNlbGYuc3RhdGUgPSBzZWxmLmN0eCA/IHNlbGYuY3R4LnN0YXRlIHx8ICdzdXNwZW5kZWQnIDogJ3N1c3BlbmRlZCc7XG5cbiAgICAgIC8vIEF1dG9tYXRpY2FsbHkgYmVnaW4gdGhlIDMwLXNlY29uZCBzdXNwZW5kIHByb2Nlc3NcbiAgICAgIHNlbGYuX2F1dG9TdXNwZW5kKCk7XG5cbiAgICAgIC8vIENoZWNrIGlmIGF1ZGlvIGlzIGF2YWlsYWJsZS5cbiAgICAgIGlmICghc2VsZi51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICAgIC8vIE5vIGF1ZGlvIGlzIGF2YWlsYWJsZSBvbiB0aGlzIHN5c3RlbSBpZiBub0F1ZGlvIGlzIHNldCB0byB0cnVlLlxuICAgICAgICBpZiAodHlwZW9mIEF1ZGlvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdGVzdCA9IG5ldyBBdWRpbygpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2FucGxheXRocm91Z2ggZXZlbnQgaXMgYXZhaWxhYmxlLlxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXN0Lm9uY2FucGxheXRocm91Z2ggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2NhblBsYXlFdmVudCA9ICdjYW5wbGF5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHNlbGYubm9BdWRpbyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYubm9BdWRpbyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGVzdCB0byBtYWtlIHN1cmUgYXVkaW8gaXNuJ3QgZGlzYWJsZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgdGVzdCA9IG5ldyBBdWRpbygpO1xuICAgICAgICBpZiAodGVzdC5tdXRlZCkge1xuICAgICAgICAgIHNlbGYubm9BdWRpbyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIC8vIENoZWNrIGZvciBzdXBwb3J0ZWQgY29kZWNzLlxuICAgICAgaWYgKCFzZWxmLm5vQXVkaW8pIHtcbiAgICAgICAgc2VsZi5fc2V0dXBDb2RlY3MoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBicm93c2VyIHN1cHBvcnQgZm9yIHZhcmlvdXMgY29kZWNzIGFuZCBjYWNoZSB0aGUgcmVzdWx0cy5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgX3NldHVwQ29kZWNzOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG4gICAgICB2YXIgYXVkaW9UZXN0ID0gbnVsbDtcblxuICAgICAgLy8gTXVzdCB3cmFwIGluIGEgdHJ5L2NhdGNoIGJlY2F1c2UgSUUxMSBpbiBzZXJ2ZXIgbW9kZSB0aHJvd3MgYW4gZXJyb3IuXG4gICAgICB0cnkge1xuICAgICAgICBhdWRpb1Rlc3QgPSAodHlwZW9mIEF1ZGlvICE9PSAndW5kZWZpbmVkJykgPyBuZXcgQXVkaW8oKSA6IG51bGw7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIGlmICghYXVkaW9UZXN0IHx8IHR5cGVvZiBhdWRpb1Rlc3QuY2FuUGxheVR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIHZhciBtcGVnVGVzdCA9IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vbXBlZzsnKS5yZXBsYWNlKC9ebm8kLywgJycpO1xuXG4gICAgICAvLyBPcGVyYSB2ZXJzaW9uIDwzMyBoYXMgbWl4ZWQgTVAzIHN1cHBvcnQsIHNvIHdlIG5lZWQgdG8gY2hlY2sgZm9yIGFuZCBibG9jayBpdC5cbiAgICAgIHZhciB1YSA9IHNlbGYuX25hdmlnYXRvciA/IHNlbGYuX25hdmlnYXRvci51c2VyQWdlbnQgOiAnJztcbiAgICAgIHZhciBjaGVja09wZXJhID0gdWEubWF0Y2goL09QUlxcLyhbMC02XS4pL2cpO1xuICAgICAgdmFyIGlzT2xkT3BlcmEgPSAoY2hlY2tPcGVyYSAmJiBwYXJzZUludChjaGVja09wZXJhWzBdLnNwbGl0KCcvJylbMV0sIDEwKSA8IDMzKTtcbiAgICAgIHZhciBjaGVja1NhZmFyaSA9IHVhLmluZGV4T2YoJ1NhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTE7XG4gICAgICB2YXIgc2FmYXJpVmVyc2lvbiA9IHVhLm1hdGNoKC9WZXJzaW9uXFwvKC4qPykgLyk7XG4gICAgICB2YXIgaXNPbGRTYWZhcmkgPSAoY2hlY2tTYWZhcmkgJiYgc2FmYXJpVmVyc2lvbiAmJiBwYXJzZUludChzYWZhcmlWZXJzaW9uWzFdLCAxMCkgPCAxNSk7XG5cbiAgICAgIHNlbGYuX2NvZGVjcyA9IHtcbiAgICAgICAgbXAzOiAhISghaXNPbGRPcGVyYSAmJiAobXBlZ1Rlc3QgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9tcDM7JykucmVwbGFjZSgvXm5vJC8sICcnKSkpLFxuICAgICAgICBtcGVnOiAhIW1wZWdUZXN0LFxuICAgICAgICBvcHVzOiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJvcHVzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBvZ2c6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgb2dhOiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIHdhdjogISEoYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby93YXY7IGNvZGVjcz1cIjFcIicpIHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vd2F2JykpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIGFhYzogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL2FhYzsnKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBjYWY6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby94LWNhZjsnKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBtNGE6ICEhKGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8veC1tNGE7JykgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9tNGE7JykgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9hYWM7JykpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIG00YjogISEoYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby94LW00YjsnKSB8fCBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL200YjsnKSB8fCBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL2FhYzsnKSkucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgbXA0OiAhIShhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL3gtbXA0OycpIHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vbXA0OycpIHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vYWFjOycpKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICB3ZWJhOiAhISghaXNPbGRTYWZhcmkgJiYgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby93ZWJtOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpLFxuICAgICAgICB3ZWJtOiAhISghaXNPbGRTYWZhcmkgJiYgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby93ZWJtOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJykpLFxuICAgICAgICBkb2xieTogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL21wNDsgY29kZWNzPVwiZWMtM1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgZmxhYzogISEoYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby94LWZsYWM7JykgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9mbGFjOycpKS5yZXBsYWNlKC9ebm8kLywgJycpXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU29tZSBicm93c2Vycy9kZXZpY2VzIHdpbGwgb25seSBhbGxvdyBhdWRpbyB0byBiZSBwbGF5ZWQgYWZ0ZXIgYSB1c2VyIGludGVyYWN0aW9uLlxuICAgICAqIEF0dGVtcHQgdG8gYXV0b21hdGljYWxseSB1bmxvY2sgYXVkaW8gb24gdGhlIGZpcnN0IHVzZXIgaW50ZXJhY3Rpb24uXG4gICAgICogQ29uY2VwdCBmcm9tOiBodHRwOi8vcGF1bGJha2F1cy5jb20vdHV0b3JpYWxzL2h0bWw1L3dlYi1hdWRpby1vbi1pb3MvXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIF91bmxvY2tBdWRpbzogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuXG4gICAgICAvLyBPbmx5IHJ1biB0aGlzIGlmIFdlYiBBdWRpbyBpcyBzdXBwb3J0ZWQgYW5kIGl0IGhhc24ndCBhbHJlYWR5IGJlZW4gdW5sb2NrZWQuXG4gICAgICBpZiAoc2VsZi5fYXVkaW9VbmxvY2tlZCB8fCAhc2VsZi5jdHgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLl9hdWRpb1VubG9ja2VkID0gZmFsc2U7XG4gICAgICBzZWxmLmF1dG9VbmxvY2sgPSBmYWxzZTtcblxuICAgICAgLy8gU29tZSBtb2JpbGUgZGV2aWNlcy9wbGF0Zm9ybXMgaGF2ZSBkaXN0b3J0aW9uIGlzc3VlcyB3aGVuIG9wZW5pbmcvY2xvc2luZyB0YWJzIGFuZC9vciB3ZWIgdmlld3MuXG4gICAgICAvLyBCdWdzIGluIHRoZSBicm93c2VyIChlc3BlY2lhbGx5IE1vYmlsZSBTYWZhcmkpIGNhbiBjYXVzZSB0aGUgc2FtcGxlUmF0ZSB0byBjaGFuZ2UgZnJvbSA0NDEwMCB0byA0ODAwMC5cbiAgICAgIC8vIEJ5IGNhbGxpbmcgSG93bGVyLnVubG9hZCgpLCB3ZSBjcmVhdGUgYSBuZXcgQXVkaW9Db250ZXh0IHdpdGggdGhlIGNvcnJlY3Qgc2FtcGxlUmF0ZS5cbiAgICAgIGlmICghc2VsZi5fbW9iaWxlVW5sb2FkZWQgJiYgc2VsZi5jdHguc2FtcGxlUmF0ZSAhPT0gNDQxMDApIHtcbiAgICAgICAgc2VsZi5fbW9iaWxlVW5sb2FkZWQgPSB0cnVlO1xuICAgICAgICBzZWxmLnVubG9hZCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBTY3JhdGNoIGJ1ZmZlciBmb3IgZW5hYmxpbmcgaU9TIHRvIGRpc3Bvc2Ugb2Ygd2ViIGF1ZGlvIGJ1ZmZlcnMgY29ycmVjdGx5LCBhcyBwZXI6XG4gICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0MTE5Njg0XG4gICAgICBzZWxmLl9zY3JhdGNoQnVmZmVyID0gc2VsZi5jdHguY3JlYXRlQnVmZmVyKDEsIDEsIDIyMDUwKTtcblxuICAgICAgLy8gQ2FsbCB0aGlzIG1ldGhvZCBvbiB0b3VjaCBzdGFydCB0byBjcmVhdGUgYW5kIHBsYXkgYSBidWZmZXIsXG4gICAgICAvLyB0aGVuIGNoZWNrIGlmIHRoZSBhdWRpbyBhY3R1YWxseSBwbGF5ZWQgdG8gZGV0ZXJtaW5lIGlmXG4gICAgICAvLyBhdWRpbyBoYXMgbm93IGJlZW4gdW5sb2NrZWQgb24gaU9TLCBBbmRyb2lkLCBldGMuXG4gICAgICB2YXIgdW5sb2NrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBwb29sIG9mIHVubG9ja2VkIEhUTUw1IEF1ZGlvIG9iamVjdHMgdGhhdCBjYW5cbiAgICAgICAgLy8gYmUgdXNlZCBmb3IgcGxheWluZyBzb3VuZHMgd2l0aG91dCB1c2VyIGludGVyYWN0aW9uLiBIVE1MNVxuICAgICAgICAvLyBBdWRpbyBvYmplY3RzIG11c3QgYmUgaW5kaXZpZHVhbGx5IHVubG9ja2VkLCBhcyBvcHBvc2VkXG4gICAgICAgIC8vIHRvIHRoZSBXZWJBdWRpbyBBUEkgd2hpY2ggb25seSBuZWVkcyBhIHNpbmdsZSBhY3RpdmF0aW9uLlxuICAgICAgICAvLyBUaGlzIG11c3Qgb2NjdXIgYmVmb3JlIFdlYkF1ZGlvIHNldHVwIG9yIHRoZSBzb3VyY2Uub25lbmRlZFxuICAgICAgICAvLyBldmVudCB3aWxsIG5vdCBmaXJlLlxuICAgICAgICB3aGlsZSAoc2VsZi5faHRtbDVBdWRpb1Bvb2wubGVuZ3RoIDwgc2VsZi5odG1sNVBvb2xTaXplKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhdWRpb05vZGUgPSBuZXcgQXVkaW8oKTtcblxuICAgICAgICAgICAgLy8gTWFyayB0aGlzIEF1ZGlvIG9iamVjdCBhcyB1bmxvY2tlZCB0byBlbnN1cmUgaXQgY2FuIGdldCByZXR1cm5lZFxuICAgICAgICAgICAgLy8gdG8gdGhlIHVubG9ja2VkIHBvb2wgd2hlbiByZWxlYXNlZC5cbiAgICAgICAgICAgIGF1ZGlvTm9kZS5fdW5sb2NrZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBBZGQgdGhlIGF1ZGlvIG5vZGUgdG8gdGhlIHBvb2wuXG4gICAgICAgICAgICBzZWxmLl9yZWxlYXNlSHRtbDVBdWRpbyhhdWRpb05vZGUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHNlbGYubm9BdWRpbyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYW55IGFzc2lnbmVkIGF1ZGlvIG5vZGVzIGFuZCB1bmxvY2sgdGhlbS5cbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX2hvd2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFzZWxmLl9ob3dsc1tpXS5fd2ViQXVkaW8pIHtcbiAgICAgICAgICAgIC8vIEdldCBhbGwgb2YgdGhlIHNvdW5kcyBpbiB0aGlzIEhvd2wgZ3JvdXAuXG4gICAgICAgICAgICB2YXIgaWRzID0gc2VsZi5faG93bHNbaV0uX2dldFNvdW5kSWRzKCk7XG5cbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgc291bmRzIGFuZCB1bmxvY2sgdGhlIGF1ZGlvIG5vZGVzLlxuICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPGlkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9ob3dsc1tpXS5fc291bmRCeUlkKGlkc1tqXSk7XG5cbiAgICAgICAgICAgICAgaWYgKHNvdW5kICYmIHNvdW5kLl9ub2RlICYmICFzb3VuZC5fbm9kZS5fdW5sb2NrZWQpIHtcbiAgICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5fdW5sb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmxvYWQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpeCBBbmRyb2lkIGNhbiBub3QgcGxheSBpbiBzdXNwZW5kIHN0YXRlLlxuICAgICAgICBzZWxmLl9hdXRvUmVzdW1lKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuIGVtcHR5IGJ1ZmZlci5cbiAgICAgICAgdmFyIHNvdXJjZSA9IHNlbGYuY3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICBzb3VyY2UuYnVmZmVyID0gc2VsZi5fc2NyYXRjaEJ1ZmZlcjtcbiAgICAgICAgc291cmNlLmNvbm5lY3Qoc2VsZi5jdHguZGVzdGluYXRpb24pO1xuXG4gICAgICAgIC8vIFBsYXkgdGhlIGVtcHR5IGJ1ZmZlci5cbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2Uuc3RhcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgc291cmNlLm5vdGVPbigwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3VyY2Uuc3RhcnQoMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsaW5nIHJlc3VtZSgpIG9uIGEgc3RhY2sgaW5pdGlhdGVkIGJ5IHVzZXIgZ2VzdHVyZSBpcyB3aGF0IGFjdHVhbGx5IHVubG9ja3MgdGhlIGF1ZGlvIG9uIEFuZHJvaWQgQ2hyb21lID49IDU1LlxuICAgICAgICBpZiAodHlwZW9mIHNlbGYuY3R4LnJlc3VtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHNlbGYuY3R4LnJlc3VtZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0dXAgYSB0aW1lb3V0IHRvIGNoZWNrIHRoYXQgd2UgYXJlIHVubG9ja2VkIG9uIHRoZSBuZXh0IGV2ZW50IGxvb3AuXG4gICAgICAgIHNvdXJjZS5vbmVuZGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc291cmNlLmRpc2Nvbm5lY3QoMCk7XG5cbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHVubG9ja2VkIHN0YXRlIGFuZCBwcmV2ZW50IHRoaXMgY2hlY2sgZnJvbSBoYXBwZW5pbmcgYWdhaW4uXG4gICAgICAgICAgc2VsZi5fYXVkaW9VbmxvY2tlZCA9IHRydWU7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgdGhlIHRvdWNoIHN0YXJ0IGxpc3RlbmVyLlxuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB1bmxvY2ssIHRydWUpO1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdW5sb2NrLCB0cnVlKTtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHVubG9jaywgdHJ1ZSk7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHVubG9jaywgdHJ1ZSk7XG5cbiAgICAgICAgICAvLyBMZXQgYWxsIHNvdW5kcyBrbm93IHRoYXQgYXVkaW8gaGFzIGJlZW4gdW5sb2NrZWQuXG4gICAgICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX2hvd2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZWxmLl9ob3dsc1tpXS5fZW1pdCgndW5sb2NrJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgLy8gU2V0dXAgYSB0b3VjaCBzdGFydCBsaXN0ZW5lciB0byBhdHRlbXB0IGFuIHVubG9jayBpbi5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB1bmxvY2ssIHRydWUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB1bmxvY2ssIHRydWUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1bmxvY2ssIHRydWUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHVubG9jaywgdHJ1ZSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgYW4gdW5sb2NrZWQgSFRNTDUgQXVkaW8gb2JqZWN0IGZyb20gdGhlIHBvb2wuIElmIG5vbmUgYXJlIGxlZnQsXG4gICAgICogcmV0dXJuIGEgbmV3IEF1ZGlvIG9iamVjdCBhbmQgdGhyb3cgYSB3YXJuaW5nLlxuICAgICAqIEByZXR1cm4ge0F1ZGlvfSBIVE1MNSBBdWRpbyBvYmplY3QuXG4gICAgICovXG4gICAgX29idGFpbkh0bWw1QXVkaW86IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcblxuICAgICAgLy8gUmV0dXJuIHRoZSBuZXh0IG9iamVjdCBmcm9tIHRoZSBwb29sIGlmIG9uZSBleGlzdHMuXG4gICAgICBpZiAoc2VsZi5faHRtbDVBdWRpb1Bvb2wubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBzZWxmLl9odG1sNUF1ZGlvUG9vbC5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgLy8uQ2hlY2sgaWYgdGhlIGF1ZGlvIGlzIGxvY2tlZCBhbmQgdGhyb3cgYSB3YXJuaW5nLlxuICAgICAgdmFyIHRlc3RQbGF5ID0gbmV3IEF1ZGlvKCkucGxheSgpO1xuICAgICAgaWYgKHRlc3RQbGF5ICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAodGVzdFBsYXkgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHR5cGVvZiB0ZXN0UGxheS50aGVuID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICB0ZXN0UGxheS5jYXRjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0hUTUw1IEF1ZGlvIHBvb2wgZXhoYXVzdGVkLCByZXR1cm5pbmcgcG90ZW50aWFsbHkgbG9ja2VkIGF1ZGlvIG9iamVjdC4nKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgQXVkaW8oKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIGFjdGl2YXRlZCBIVE1MNSBBdWRpbyBvYmplY3QgdG8gdGhlIHBvb2wuXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIF9yZWxlYXNlSHRtbDVBdWRpbzogZnVuY3Rpb24oYXVkaW8pIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIC8vIERvbid0IGFkZCBhdWRpbyB0byB0aGUgcG9vbCBpZiB3ZSBkb24ndCBrbm93IGlmIGl0IGhhcyBiZWVuIHVubG9ja2VkLlxuICAgICAgaWYgKGF1ZGlvLl91bmxvY2tlZCkge1xuICAgICAgICBzZWxmLl9odG1sNUF1ZGlvUG9vbC5wdXNoKGF1ZGlvKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF1dG9tYXRpY2FsbHkgc3VzcGVuZCB0aGUgV2ViIEF1ZGlvIEF1ZGlvQ29udGV4dCBhZnRlciBubyBzb3VuZCBoYXMgcGxheWVkIGZvciAzMCBzZWNvbmRzLlxuICAgICAqIFRoaXMgc2F2ZXMgcHJvY2Vzc2luZy9lbmVyZ3kgYW5kIGZpeGVzIHZhcmlvdXMgYnJvd3Nlci1zcGVjaWZpYyBidWdzIHdpdGggYXVkaW8gZ2V0dGluZyBzdHVjay5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgX2F1dG9TdXNwZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKCFzZWxmLmF1dG9TdXNwZW5kIHx8ICFzZWxmLmN0eCB8fCB0eXBlb2Ygc2VsZi5jdHguc3VzcGVuZCA9PT0gJ3VuZGVmaW5lZCcgfHwgIUhvd2xlci51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgYW55IHNvdW5kcyBhcmUgcGxheWluZy5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5faG93bHNbaV0uX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgZm9yICh2YXIgaj0wOyBqPHNlbGYuX2hvd2xzW2ldLl9zb3VuZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmICghc2VsZi5faG93bHNbaV0uX3NvdW5kc1tqXS5fcGF1c2VkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5fc3VzcGVuZFRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzZWxmLl9zdXNwZW5kVGltZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBzb3VuZCBoYXMgcGxheWVkIGFmdGVyIDMwIHNlY29uZHMsIHN1c3BlbmQgdGhlIGNvbnRleHQuXG4gICAgICBzZWxmLl9zdXNwZW5kVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXNlbGYuYXV0b1N1c3BlbmQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLl9zdXNwZW5kVGltZXIgPSBudWxsO1xuICAgICAgICBzZWxmLnN0YXRlID0gJ3N1c3BlbmRpbmcnO1xuXG4gICAgICAgIC8vIEhhbmRsZSB1cGRhdGluZyB0aGUgc3RhdGUgb2YgdGhlIGF1ZGlvIGNvbnRleHQgYWZ0ZXIgc3VzcGVuZGluZy5cbiAgICAgICAgdmFyIGhhbmRsZVN1c3BlbnNpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLnN0YXRlID0gJ3N1c3BlbmRlZCc7XG5cbiAgICAgICAgICBpZiAoc2VsZi5fcmVzdW1lQWZ0ZXJTdXNwZW5kKSB7XG4gICAgICAgICAgICBkZWxldGUgc2VsZi5fcmVzdW1lQWZ0ZXJTdXNwZW5kO1xuICAgICAgICAgICAgc2VsZi5fYXV0b1Jlc3VtZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBFaXRoZXIgdGhlIHN0YXRlIGdldHMgc3VzcGVuZGVkIG9yIGl0IGlzIGludGVycnVwdGVkLlxuICAgICAgICAvLyBFaXRoZXIgd2F5LCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgc3RhdGUgdG8gc3VzcGVuZGVkLlxuICAgICAgICBzZWxmLmN0eC5zdXNwZW5kKCkudGhlbihoYW5kbGVTdXNwZW5zaW9uLCBoYW5kbGVTdXNwZW5zaW9uKTtcbiAgICAgIH0sIDMwMDAwKTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF1dG9tYXRpY2FsbHkgcmVzdW1lIHRoZSBXZWIgQXVkaW8gQXVkaW9Db250ZXh0IHdoZW4gYSBuZXcgc291bmQgaXMgcGxheWVkLlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBfYXV0b1Jlc3VtZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmICghc2VsZi5jdHggfHwgdHlwZW9mIHNlbGYuY3R4LnJlc3VtZSA9PT0gJ3VuZGVmaW5lZCcgfHwgIUhvd2xlci51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYuc3RhdGUgPT09ICdydW5uaW5nJyAmJiBzZWxmLmN0eC5zdGF0ZSAhPT0gJ2ludGVycnVwdGVkJyAmJiBzZWxmLl9zdXNwZW5kVGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX3N1c3BlbmRUaW1lcik7XG4gICAgICAgIHNlbGYuX3N1c3BlbmRUaW1lciA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuc3RhdGUgPT09ICdzdXNwZW5kZWQnIHx8IHNlbGYuc3RhdGUgPT09ICdydW5uaW5nJyAmJiBzZWxmLmN0eC5zdGF0ZSA9PT0gJ2ludGVycnVwdGVkJykge1xuICAgICAgICBzZWxmLmN0eC5yZXN1bWUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYuc3RhdGUgPSAncnVubmluZyc7XG5cbiAgICAgICAgICAvLyBFbWl0IHRvIGFsbCBIb3dscyB0aGF0IHRoZSBhdWRpbyBoYXMgcmVzdW1lZC5cbiAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5faG93bHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNlbGYuX2hvd2xzW2ldLl9lbWl0KCdyZXN1bWUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzZWxmLl9zdXNwZW5kVGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5fc3VzcGVuZFRpbWVyKTtcbiAgICAgICAgICBzZWxmLl9zdXNwZW5kVGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuc3RhdGUgPT09ICdzdXNwZW5kaW5nJykge1xuICAgICAgICBzZWxmLl9yZXN1bWVBZnRlclN1c3BlbmQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2V0dXAgdGhlIGdsb2JhbCBhdWRpbyBjb250cm9sbGVyLlxuICB2YXIgSG93bGVyID0gbmV3IEhvd2xlckdsb2JhbCgpO1xuXG4gIC8qKiBHcm91cCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gYXVkaW8gZ3JvdXAgY29udHJvbGxlci5cbiAgICogQHBhcmFtIHtPYmplY3R9IG8gUGFzc2VkIGluIHByb3BlcnRpZXMgZm9yIHRoaXMgZ3JvdXAuXG4gICAqL1xuICB2YXIgSG93bCA9IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiBubyBzb3VyY2UgaXMgcHJvdmlkZWQuXG4gICAgaWYgKCFvLnNyYyB8fCBvLnNyYy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGFycmF5IG9mIHNvdXJjZSBmaWxlcyBtdXN0IGJlIHBhc3NlZCB3aXRoIGFueSBuZXcgSG93bC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLmluaXQobyk7XG4gIH07XG4gIEhvd2wucHJvdG90eXBlID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgYSBuZXcgSG93bCBncm91cCBvYmplY3QuXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvIFBhc3NlZCBpbiBwcm9wZXJ0aWVzIGZvciB0aGlzIGdyb3VwLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24obykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGFuIEF1ZGlvQ29udGV4dCBjcmVhdGVkIHlldCwgcnVuIHRoZSBzZXR1cC5cbiAgICAgIGlmICghSG93bGVyLmN0eCkge1xuICAgICAgICBzZXR1cEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXR1cCB1c2VyLWRlZmluZWQgZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5fYXV0b3BsYXkgPSBvLmF1dG9wbGF5IHx8IGZhbHNlO1xuICAgICAgc2VsZi5fZm9ybWF0ID0gKHR5cGVvZiBvLmZvcm1hdCAhPT0gJ3N0cmluZycpID8gby5mb3JtYXQgOiBbby5mb3JtYXRdO1xuICAgICAgc2VsZi5faHRtbDUgPSBvLmh0bWw1IHx8IGZhbHNlO1xuICAgICAgc2VsZi5fbXV0ZWQgPSBvLm11dGUgfHwgZmFsc2U7XG4gICAgICBzZWxmLl9sb29wID0gby5sb29wIHx8IGZhbHNlO1xuICAgICAgc2VsZi5fcG9vbCA9IG8ucG9vbCB8fCA1O1xuICAgICAgc2VsZi5fcHJlbG9hZCA9ICh0eXBlb2Ygby5wcmVsb2FkID09PSAnYm9vbGVhbicgfHwgby5wcmVsb2FkID09PSAnbWV0YWRhdGEnKSA/IG8ucHJlbG9hZCA6IHRydWU7XG4gICAgICBzZWxmLl9yYXRlID0gby5yYXRlIHx8IDE7XG4gICAgICBzZWxmLl9zcHJpdGUgPSBvLnNwcml0ZSB8fCB7fTtcbiAgICAgIHNlbGYuX3NyYyA9ICh0eXBlb2Ygby5zcmMgIT09ICdzdHJpbmcnKSA/IG8uc3JjIDogW28uc3JjXTtcbiAgICAgIHNlbGYuX3ZvbHVtZSA9IG8udm9sdW1lICE9PSB1bmRlZmluZWQgPyBvLnZvbHVtZSA6IDE7XG4gICAgICBzZWxmLl94aHIgPSB7XG4gICAgICAgIG1ldGhvZDogby54aHIgJiYgby54aHIubWV0aG9kID8gby54aHIubWV0aG9kIDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IG8ueGhyICYmIG8ueGhyLmhlYWRlcnMgPyBvLnhoci5oZWFkZXJzIDogbnVsbCxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBvLnhociAmJiBvLnhoci53aXRoQ3JlZGVudGlhbHMgPyBvLnhoci53aXRoQ3JlZGVudGlhbHMgOiBmYWxzZSxcbiAgICAgIH07XG5cbiAgICAgIC8vIFNldHVwIGFsbCBvdGhlciBkZWZhdWx0IHByb3BlcnRpZXMuXG4gICAgICBzZWxmLl9kdXJhdGlvbiA9IDA7XG4gICAgICBzZWxmLl9zdGF0ZSA9ICd1bmxvYWRlZCc7XG4gICAgICBzZWxmLl9zb3VuZHMgPSBbXTtcbiAgICAgIHNlbGYuX2VuZFRpbWVycyA9IHt9O1xuICAgICAgc2VsZi5fcXVldWUgPSBbXTtcbiAgICAgIHNlbGYuX3BsYXlMb2NrID0gZmFsc2U7XG5cbiAgICAgIC8vIFNldHVwIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgIHNlbGYuX29uZW5kID0gby5vbmVuZCA/IFt7Zm46IG8ub25lbmR9XSA6IFtdO1xuICAgICAgc2VsZi5fb25mYWRlID0gby5vbmZhZGUgPyBbe2ZuOiBvLm9uZmFkZX1dIDogW107XG4gICAgICBzZWxmLl9vbmxvYWQgPSBvLm9ubG9hZCA/IFt7Zm46IG8ub25sb2FkfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ubG9hZGVycm9yID0gby5vbmxvYWRlcnJvciA/IFt7Zm46IG8ub25sb2FkZXJyb3J9XSA6IFtdO1xuICAgICAgc2VsZi5fb25wbGF5ZXJyb3IgPSBvLm9ucGxheWVycm9yID8gW3tmbjogby5vbnBsYXllcnJvcn1dIDogW107XG4gICAgICBzZWxmLl9vbnBhdXNlID0gby5vbnBhdXNlID8gW3tmbjogby5vbnBhdXNlfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ucGxheSA9IG8ub25wbGF5ID8gW3tmbjogby5vbnBsYXl9XSA6IFtdO1xuICAgICAgc2VsZi5fb25zdG9wID0gby5vbnN0b3AgPyBbe2ZuOiBvLm9uc3RvcH1dIDogW107XG4gICAgICBzZWxmLl9vbm11dGUgPSBvLm9ubXV0ZSA/IFt7Zm46IG8ub25tdXRlfV0gOiBbXTtcbiAgICAgIHNlbGYuX29udm9sdW1lID0gby5vbnZvbHVtZSA/IFt7Zm46IG8ub252b2x1bWV9XSA6IFtdO1xuICAgICAgc2VsZi5fb25yYXRlID0gby5vbnJhdGUgPyBbe2ZuOiBvLm9ucmF0ZX1dIDogW107XG4gICAgICBzZWxmLl9vbnNlZWsgPSBvLm9uc2VlayA/IFt7Zm46IG8ub25zZWVrfV0gOiBbXTtcbiAgICAgIHNlbGYuX29udW5sb2NrID0gby5vbnVubG9jayA/IFt7Zm46IG8ub251bmxvY2t9XSA6IFtdO1xuICAgICAgc2VsZi5fb25yZXN1bWUgPSBbXTtcblxuICAgICAgLy8gV2ViIEF1ZGlvIG9yIEhUTUw1IEF1ZGlvP1xuICAgICAgc2VsZi5fd2ViQXVkaW8gPSBIb3dsZXIudXNpbmdXZWJBdWRpbyAmJiAhc2VsZi5faHRtbDU7XG5cbiAgICAgIC8vIEF1dG9tYXRpY2FsbHkgdHJ5IHRvIGVuYWJsZSBhdWRpby5cbiAgICAgIGlmICh0eXBlb2YgSG93bGVyLmN0eCAhPT0gJ3VuZGVmaW5lZCcgJiYgSG93bGVyLmN0eCAmJiBIb3dsZXIuYXV0b1VubG9jaykge1xuICAgICAgICBIb3dsZXIuX3VubG9ja0F1ZGlvKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhpcyBIb3dsIGdyb3VwIGluIHRoZSBnbG9iYWwgY29udHJvbGxlci5cbiAgICAgIEhvd2xlci5faG93bHMucHVzaChzZWxmKTtcblxuICAgICAgLy8gSWYgdGhleSBzZWxlY3RlZCBhdXRvcGxheSwgYWRkIGEgcGxheSBldmVudCB0byB0aGUgbG9hZCBxdWV1ZS5cbiAgICAgIGlmIChzZWxmLl9hdXRvcGxheSkge1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3BsYXknLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBMb2FkIHRoZSBzb3VyY2UgZmlsZSB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAgICAgIGlmIChzZWxmLl9wcmVsb2FkICYmIHNlbGYuX3ByZWxvYWQgIT09ICdub25lJykge1xuICAgICAgICBzZWxmLmxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIGF1ZGlvIGZpbGUuXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIGxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHVybCA9IG51bGw7XG5cbiAgICAgIC8vIElmIG5vIGF1ZGlvIGlzIGF2YWlsYWJsZSwgcXVpdCBpbW1lZGlhdGVseS5cbiAgICAgIGlmIChIb3dsZXIubm9BdWRpbykge1xuICAgICAgICBzZWxmLl9lbWl0KCdsb2FkZXJyb3InLCBudWxsLCAnTm8gYXVkaW8gc3VwcG9ydC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIHN1cmUgb3VyIHNvdXJjZSBpcyBpbiBhbiBhcnJheS5cbiAgICAgIGlmICh0eXBlb2Ygc2VsZi5fc3JjID09PSAnc3RyaW5nJykge1xuICAgICAgICBzZWxmLl9zcmMgPSBbc2VsZi5fc3JjXTtcbiAgICAgIH1cblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBzb3VyY2VzIGFuZCBwaWNrIHRoZSBmaXJzdCBvbmUgdGhhdCBpcyBjb21wYXRpYmxlLlxuICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX3NyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXh0LCBzdHI7XG5cbiAgICAgICAgaWYgKHNlbGYuX2Zvcm1hdCAmJiBzZWxmLl9mb3JtYXRbaV0pIHtcbiAgICAgICAgICAvLyBJZiBhbiBleHRlbnNpb24gd2FzIHNwZWNpZmllZCwgdXNlIHRoYXQgaW5zdGVhZC5cbiAgICAgICAgICBleHQgPSBzZWxmLl9mb3JtYXRbaV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBzb3VyY2UgaXMgYSBzdHJpbmcuXG4gICAgICAgICAgc3RyID0gc2VsZi5fc3JjW2ldO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc2VsZi5fZW1pdCgnbG9hZGVycm9yJywgbnVsbCwgJ05vbi1zdHJpbmcgZm91bmQgaW4gc2VsZWN0ZWQgYXVkaW8gc291cmNlcyAtIGlnbm9yaW5nLicpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRXh0cmFjdCB0aGUgZmlsZSBleHRlbnNpb24gZnJvbSB0aGUgVVJMIG9yIGJhc2U2NCBkYXRhIFVSSS5cbiAgICAgICAgICBleHQgPSAvXmRhdGE6YXVkaW9cXC8oW147LF0rKTsvaS5leGVjKHN0cik7XG4gICAgICAgICAgaWYgKCFleHQpIHtcbiAgICAgICAgICAgIGV4dCA9IC9cXC4oW14uXSspJC8uZXhlYyhzdHIuc3BsaXQoJz8nLCAxKVswXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGV4dCkge1xuICAgICAgICAgICAgZXh0ID0gZXh0WzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9nIGEgd2FybmluZyBpZiBubyBleHRlbnNpb24gd2FzIGZvdW5kLlxuICAgICAgICBpZiAoIWV4dCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignTm8gZmlsZSBleHRlbnNpb24gd2FzIGZvdW5kLiBDb25zaWRlciB1c2luZyB0aGUgXCJmb3JtYXRcIiBwcm9wZXJ0eSBvciBzcGVjaWZ5IGFuIGV4dGVuc2lvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoaXMgZXh0ZW5zaW9uIGlzIGF2YWlsYWJsZS5cbiAgICAgICAgaWYgKGV4dCAmJiBIb3dsZXIuY29kZWNzKGV4dCkpIHtcbiAgICAgICAgICB1cmwgPSBzZWxmLl9zcmNbaV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgc2VsZi5fZW1pdCgnbG9hZGVycm9yJywgbnVsbCwgJ05vIGNvZGVjIHN1cHBvcnQgZm9yIHNlbGVjdGVkIGF1ZGlvIHNvdXJjZXMuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fc3JjID0gdXJsO1xuICAgICAgc2VsZi5fc3RhdGUgPSAnbG9hZGluZyc7XG5cbiAgICAgIC8vIElmIHRoZSBob3N0aW5nIHBhZ2UgaXMgSFRUUFMgYW5kIHRoZSBzb3VyY2UgaXNuJ3QsXG4gICAgICAvLyBkcm9wIGRvd24gdG8gSFRNTDUgQXVkaW8gdG8gYXZvaWQgTWl4ZWQgQ29udGVudCBlcnJvcnMuXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyAmJiB1cmwuc2xpY2UoMCwgNSkgPT09ICdodHRwOicpIHtcbiAgICAgICAgc2VsZi5faHRtbDUgPSB0cnVlO1xuICAgICAgICBzZWxmLl93ZWJBdWRpbyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgYSBuZXcgc291bmQgb2JqZWN0IGFuZCBhZGQgaXQgdG8gdGhlIHBvb2wuXG4gICAgICBuZXcgU291bmQoc2VsZik7XG5cbiAgICAgIC8vIExvYWQgYW5kIGRlY29kZSB0aGUgYXVkaW8gZGF0YSBmb3IgcGxheWJhY2suXG4gICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgbG9hZEJ1ZmZlcihzZWxmKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBsYXkgYSBzb3VuZCBvciByZXN1bWUgcHJldmlvdXMgcGxheWJhY2suXG4gICAgICogQHBhcmFtICB7U3RyaW5nL051bWJlcn0gc3ByaXRlICAgU3ByaXRlIG5hbWUgZm9yIHNwcml0ZSBwbGF5YmFjayBvciBzb3VuZCBpZCB0byBjb250aW51ZSBwcmV2aW91cy5cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBpbnRlcm5hbCBJbnRlcm5hbCBVc2U6IHRydWUgcHJldmVudHMgZXZlbnQgZmlyaW5nLlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgU291bmQgSUQuXG4gICAgICovXG4gICAgcGxheTogZnVuY3Rpb24oc3ByaXRlLCBpbnRlcm5hbCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGlkID0gbnVsbDtcblxuICAgICAgLy8gRGV0ZXJtaW5lIGlmIGEgc3ByaXRlLCBzb3VuZCBpZCBvciBub3RoaW5nIHdhcyBwYXNzZWRcbiAgICAgIGlmICh0eXBlb2Ygc3ByaXRlID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZCA9IHNwcml0ZTtcbiAgICAgICAgc3ByaXRlID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNwcml0ZSA9PT0gJ3N0cmluZycgJiYgc2VsZi5fc3RhdGUgPT09ICdsb2FkZWQnICYmICFzZWxmLl9zcHJpdGVbc3ByaXRlXSkge1xuICAgICAgICAvLyBJZiB0aGUgcGFzc2VkIHNwcml0ZSBkb2Vzbid0IGV4aXN0LCBkbyBub3RoaW5nLlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNwcml0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBkZWZhdWx0IHNvdW5kIHNwcml0ZSAocGxheXMgdGhlIGZ1bGwgYXVkaW8gbGVuZ3RoKS5cbiAgICAgICAgc3ByaXRlID0gJ19fZGVmYXVsdCc7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBzaW5nbGUgcGF1c2VkIHNvdW5kIHRoYXQgaXNuJ3QgZW5kZWQuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzLCBwbGF5IHRoYXQgc291bmQuIElmIG5vdCwgY29udGludWUgYXMgdXN1YWwuXG4gICAgICAgIGlmICghc2VsZi5fcGxheUxvY2spIHtcbiAgICAgICAgICB2YXIgbnVtID0gMDtcbiAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5fc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fc291bmRzW2ldLl9wYXVzZWQgJiYgIXNlbGYuX3NvdW5kc1tpXS5fZW5kZWQpIHtcbiAgICAgICAgICAgICAgbnVtKys7XG4gICAgICAgICAgICAgIGlkID0gc2VsZi5fc291bmRzW2ldLl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobnVtID09PSAxKSB7XG4gICAgICAgICAgICBzcHJpdGUgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCB0aGUgc2VsZWN0ZWQgbm9kZSwgb3IgZ2V0IG9uZSBmcm9tIHRoZSBwb29sLlxuICAgICAgdmFyIHNvdW5kID0gaWQgPyBzZWxmLl9zb3VuZEJ5SWQoaWQpIDogc2VsZi5faW5hY3RpdmVTb3VuZCgpO1xuXG4gICAgICAvLyBJZiB0aGUgc291bmQgZG9lc24ndCBleGlzdCwgZG8gbm90aGluZy5cbiAgICAgIGlmICghc291bmQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlbGVjdCB0aGUgc3ByaXRlIGRlZmluaXRpb24uXG4gICAgICBpZiAoaWQgJiYgIXNwcml0ZSkge1xuICAgICAgICBzcHJpdGUgPSBzb3VuZC5fc3ByaXRlIHx8ICdfX2RlZmF1bHQnO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgd2UgbXVzdCB3YWl0IHRvIGdldCB0aGUgYXVkaW8ncyBkdXJhdGlvbi5cbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byB3YWl0IHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBydW4gaW50byByYWNlIGNvbmRpdGlvbnMgd2l0aFxuICAgICAgLy8gdGhlIG9yZGVyIG9mIGZ1bmN0aW9uIGNhbGxzLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgICAvLyBTZXQgdGhlIHNwcml0ZSB2YWx1ZSBvbiB0aGlzIHNvdW5kLlxuICAgICAgICBzb3VuZC5fc3ByaXRlID0gc3ByaXRlO1xuXG4gICAgICAgIC8vIE1hcmsgdGhpcyBzb3VuZCBhcyBub3QgZW5kZWQgaW4gY2FzZSBhbm90aGVyIHNvdW5kIGlzIHBsYXllZCBiZWZvcmUgdGhpcyBvbmUgbG9hZHMuXG4gICAgICAgIHNvdW5kLl9lbmRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgc291bmQgdG8gdGhlIHF1ZXVlIHRvIGJlIHBsYXllZCBvbiBsb2FkLlxuICAgICAgICB2YXIgc291bmRJZCA9IHNvdW5kLl9pZDtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdwbGF5JyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5wbGF5KHNvdW5kSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNvdW5kSWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIERvbid0IHBsYXkgdGhlIHNvdW5kIGlmIGFuIGlkIHdhcyBwYXNzZWQgYW5kIGl0IGlzIGFscmVhZHkgcGxheWluZy5cbiAgICAgIGlmIChpZCAmJiAhc291bmQuX3BhdXNlZCkge1xuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwbGF5IGV2ZW50LCBpbiBvcmRlciB0byBrZWVwIGl0ZXJhdGluZyB0aHJvdWdoIHF1ZXVlLlxuICAgICAgICBpZiAoIWludGVybmFsKSB7XG4gICAgICAgICAgc2VsZi5fbG9hZFF1ZXVlKCdwbGF5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc291bmQuX2lkO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIEF1ZGlvQ29udGV4dCBpc24ndCBzdXNwZW5kZWQsIGFuZCByZXN1bWUgaXQgaWYgaXQgaXMuXG4gICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgSG93bGVyLl9hdXRvUmVzdW1lKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIERldGVybWluZSBob3cgbG9uZyB0byBwbGF5IGZvciBhbmQgd2hlcmUgdG8gc3RhcnQgcGxheWluZy5cbiAgICAgIHZhciBzZWVrID0gTWF0aC5tYXgoMCwgc291bmQuX3NlZWsgPiAwID8gc291bmQuX3NlZWsgOiBzZWxmLl9zcHJpdGVbc3ByaXRlXVswXSAvIDEwMDApO1xuICAgICAgdmFyIGR1cmF0aW9uID0gTWF0aC5tYXgoMCwgKChzZWxmLl9zcHJpdGVbc3ByaXRlXVswXSArIHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzFdKSAvIDEwMDApIC0gc2Vlayk7XG4gICAgICB2YXIgdGltZW91dCA9IChkdXJhdGlvbiAqIDEwMDApIC8gTWF0aC5hYnMoc291bmQuX3JhdGUpO1xuICAgICAgdmFyIHN0YXJ0ID0gc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMF0gLyAxMDAwO1xuICAgICAgdmFyIHN0b3AgPSAoc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMF0gKyBzZWxmLl9zcHJpdGVbc3ByaXRlXVsxXSkgLyAxMDAwO1xuICAgICAgc291bmQuX3Nwcml0ZSA9IHNwcml0ZTtcblxuICAgICAgLy8gTWFyayB0aGUgc291bmQgYXMgZW5kZWQgaW5zdGFudGx5IHNvIHRoYXQgdGhpcyBhc3luYyBwbGF5YmFja1xuICAgICAgLy8gZG9lc24ndCBnZXQgZ3JhYmJlZCBieSBhbm90aGVyIGNhbGwgdG8gcGxheSB3aGlsZSB0aGlzIG9uZSB3YWl0cyB0byBzdGFydC5cbiAgICAgIHNvdW5kLl9lbmRlZCA9IGZhbHNlO1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIHNvdW5kLlxuICAgICAgdmFyIHNldFBhcmFtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzb3VuZC5fcGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHNvdW5kLl9zZWVrID0gc2VlaztcbiAgICAgICAgc291bmQuX3N0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHNvdW5kLl9zdG9wID0gc3RvcDtcbiAgICAgICAgc291bmQuX2xvb3AgPSAhIShzb3VuZC5fbG9vcCB8fCBzZWxmLl9zcHJpdGVbc3ByaXRlXVsyXSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBFbmQgdGhlIHNvdW5kIGluc3RhbnRseSBpZiBzZWVrIGlzIGF0IHRoZSBlbmQuXG4gICAgICBpZiAoc2VlayA+PSBzdG9wKSB7XG4gICAgICAgIHNlbGYuX2VuZGVkKHNvdW5kKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBCZWdpbiB0aGUgYWN0dWFsIHBsYXliYWNrLlxuICAgICAgdmFyIG5vZGUgPSBzb3VuZC5fbm9kZTtcbiAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAvLyBGaXJlIHRoaXMgd2hlbiB0aGUgc291bmQgaXMgcmVhZHkgdG8gcGxheSB0byBiZWdpbiBXZWIgQXVkaW8gcGxheWJhY2suXG4gICAgICAgIHZhciBwbGF5V2ViQXVkaW8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLl9wbGF5TG9jayA9IGZhbHNlO1xuICAgICAgICAgIHNldFBhcmFtcygpO1xuICAgICAgICAgIHNlbGYuX3JlZnJlc2hCdWZmZXIoc291bmQpO1xuXG4gICAgICAgICAgLy8gU2V0dXAgdGhlIHBsYXliYWNrIHBhcmFtcy5cbiAgICAgICAgICB2YXIgdm9sID0gKHNvdW5kLl9tdXRlZCB8fCBzZWxmLl9tdXRlZCkgPyAwIDogc291bmQuX3ZvbHVtZTtcbiAgICAgICAgICBub2RlLmdhaW4uc2V0VmFsdWVBdFRpbWUodm9sLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICBzb3VuZC5fcGxheVN0YXJ0ID0gSG93bGVyLmN0eC5jdXJyZW50VGltZTtcblxuICAgICAgICAgIC8vIFBsYXkgdGhlIHNvdW5kIHVzaW5nIHRoZSBzdXBwb3J0ZWQgbWV0aG9kLlxuICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZS5idWZmZXJTb3VyY2Uuc3RhcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBzb3VuZC5fbG9vcCA/IG5vZGUuYnVmZmVyU291cmNlLm5vdGVHcmFpbk9uKDAsIHNlZWssIDg2NDAwKSA6IG5vZGUuYnVmZmVyU291cmNlLm5vdGVHcmFpbk9uKDAsIHNlZWssIGR1cmF0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc291bmQuX2xvb3AgPyBub2RlLmJ1ZmZlclNvdXJjZS5zdGFydCgwLCBzZWVrLCA4NjQwMCkgOiBub2RlLmJ1ZmZlclNvdXJjZS5zdGFydCgwLCBzZWVrLCBkdXJhdGlvbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU3RhcnQgYSBuZXcgdGltZXIgaWYgbm9uZSBpcyBwcmVzZW50LlxuICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0gPSBzZXRUaW1lb3V0KHNlbGYuX2VuZGVkLmJpbmQoc2VsZiwgc291bmQpLCB0aW1lb3V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWludGVybmFsKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzZWxmLl9lbWl0KCdwbGF5Jywgc291bmQuX2lkKTtcbiAgICAgICAgICAgICAgc2VsZi5fbG9hZFF1ZXVlKCk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKEhvd2xlci5zdGF0ZSA9PT0gJ3J1bm5pbmcnICYmIEhvd2xlci5jdHguc3RhdGUgIT09ICdpbnRlcnJ1cHRlZCcpIHtcbiAgICAgICAgICBwbGF5V2ViQXVkaW8oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLl9wbGF5TG9jayA9IHRydWU7XG5cbiAgICAgICAgICAvLyBXYWl0IGZvciB0aGUgYXVkaW8gY29udGV4dCB0byByZXN1bWUgYmVmb3JlIHBsYXlpbmcuXG4gICAgICAgICAgc2VsZi5vbmNlKCdyZXN1bWUnLCBwbGF5V2ViQXVkaW8pO1xuXG4gICAgICAgICAgLy8gQ2FuY2VsIHRoZSBlbmQgdGltZXIuXG4gICAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihzb3VuZC5faWQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGaXJlIHRoaXMgd2hlbiB0aGUgc291bmQgaXMgcmVhZHkgdG8gcGxheSB0byBiZWdpbiBIVE1MNSBBdWRpbyBwbGF5YmFjay5cbiAgICAgICAgdmFyIHBsYXlIdG1sNSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG5vZGUuY3VycmVudFRpbWUgPSBzZWVrO1xuICAgICAgICAgIG5vZGUubXV0ZWQgPSBzb3VuZC5fbXV0ZWQgfHwgc2VsZi5fbXV0ZWQgfHwgSG93bGVyLl9tdXRlZCB8fCBub2RlLm11dGVkO1xuICAgICAgICAgIG5vZGUudm9sdW1lID0gc291bmQuX3ZvbHVtZSAqIEhvd2xlci52b2x1bWUoKTtcbiAgICAgICAgICBub2RlLnBsYXliYWNrUmF0ZSA9IHNvdW5kLl9yYXRlO1xuXG4gICAgICAgICAgLy8gU29tZSBicm93c2VycyB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoaXMgaXMgY2FsbGVkIHdpdGhvdXQgdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHBsYXkgPSBub2RlLnBsYXkoKTtcblxuICAgICAgICAgICAgLy8gU3VwcG9ydCBvbGRlciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgcHJvbWlzZXMsIGFuZCB0aHVzIGRvbid0IGhhdmUgdGhpcyBpc3N1ZS5cbiAgICAgICAgICAgIGlmIChwbGF5ICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAocGxheSBpbnN0YW5jZW9mIFByb21pc2UgfHwgdHlwZW9mIHBsYXkudGhlbiA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgICAgLy8gSW1wbGVtZW50cyBhIGxvY2sgdG8gcHJldmVudCBET01FeGNlcHRpb246IFRoZSBwbGF5KCkgcmVxdWVzdCB3YXMgaW50ZXJydXB0ZWQgYnkgYSBjYWxsIHRvIHBhdXNlKCkuXG4gICAgICAgICAgICAgIHNlbGYuX3BsYXlMb2NrID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAvLyBTZXQgcGFyYW0gdmFsdWVzIGltbWVkaWF0ZWx5LlxuICAgICAgICAgICAgICBzZXRQYXJhbXMoKTtcblxuICAgICAgICAgICAgICAvLyBSZWxlYXNlcyB0aGUgbG9jayBhbmQgZXhlY3V0ZXMgcXVldWVkIGFjdGlvbnMuXG4gICAgICAgICAgICAgIHBsYXlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuX3BsYXlMb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBub2RlLl91bmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBpZiAoIWludGVybmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3BsYXknLCBzb3VuZC5faWQpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fbG9hZFF1ZXVlKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLl9wbGF5TG9jayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgc2VsZi5fZW1pdCgncGxheWVycm9yJywgc291bmQuX2lkLCAnUGxheWJhY2sgd2FzIHVuYWJsZSB0byBzdGFydC4gVGhpcyBpcyBtb3N0IGNvbW1vbmx5IGFuIGlzc3VlICcgK1xuICAgICAgICAgICAgICAgICAgICAnb24gbW9iaWxlIGRldmljZXMgYW5kIENocm9tZSB3aGVyZSBwbGF5YmFjayB3YXMgbm90IHdpdGhpbiBhIHVzZXIgaW50ZXJhY3Rpb24uJyk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBlbmRlZCBhbmQgcGF1c2VkIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgIHNvdW5kLl9lbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBzb3VuZC5fcGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWludGVybmFsKSB7XG4gICAgICAgICAgICAgIHNlbGYuX3BsYXlMb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgIHNldFBhcmFtcygpO1xuICAgICAgICAgICAgICBzZWxmLl9lbWl0KCdwbGF5Jywgc291bmQuX2lkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0dGluZyByYXRlIGJlZm9yZSBwbGF5aW5nIHdvbid0IHdvcmsgaW4gSUUsIHNvIHdlIHNldCBpdCBhZ2FpbiBoZXJlLlxuICAgICAgICAgICAgbm9kZS5wbGF5YmFja1JhdGUgPSBzb3VuZC5fcmF0ZTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIG5vZGUgaXMgc3RpbGwgcGF1c2VkLCB0aGVuIHdlIGNhbiBhc3N1bWUgdGhlcmUgd2FzIGEgcGxheWJhY2sgaXNzdWUuXG4gICAgICAgICAgICBpZiAobm9kZS5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgc2VsZi5fZW1pdCgncGxheWVycm9yJywgc291bmQuX2lkLCAnUGxheWJhY2sgd2FzIHVuYWJsZSB0byBzdGFydC4gVGhpcyBpcyBtb3N0IGNvbW1vbmx5IGFuIGlzc3VlICcgK1xuICAgICAgICAgICAgICAgICdvbiBtb2JpbGUgZGV2aWNlcyBhbmQgQ2hyb21lIHdoZXJlIHBsYXliYWNrIHdhcyBub3Qgd2l0aGluIGEgdXNlciBpbnRlcmFjdGlvbi4nKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXR1cCB0aGUgZW5kIHRpbWVyIG9uIHNwcml0ZXMgb3IgbGlzdGVuIGZvciB0aGUgZW5kZWQgZXZlbnQuXG4gICAgICAgICAgICBpZiAoc3ByaXRlICE9PSAnX19kZWZhdWx0JyB8fCBzb3VuZC5fbG9vcCkge1xuICAgICAgICAgICAgICBzZWxmLl9lbmRUaW1lcnNbc291bmQuX2lkXSA9IHNldFRpbWVvdXQoc2VsZi5fZW5kZWQuYmluZChzZWxmLCBzb3VuZCksIHRpbWVvdXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyBGaXJlIGVuZGVkIG9uIHRoaXMgYXVkaW8gbm9kZS5cbiAgICAgICAgICAgICAgICBzZWxmLl9lbmRlZChzb3VuZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDbGVhciB0aGlzIGxpc3RlbmVyLlxuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBzZWxmLl9lbmRUaW1lcnNbc291bmQuX2lkXSwgZmFsc2UpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3BsYXllcnJvcicsIHNvdW5kLl9pZCwgZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBzdHJlYW1pbmcgYXVkaW8sIG1ha2Ugc3VyZSB0aGUgc3JjIGlzIHNldCBhbmQgbG9hZCBhZ2Fpbi5cbiAgICAgICAgaWYgKG5vZGUuc3JjID09PSAnZGF0YTphdWRpby93YXY7YmFzZTY0LFVrbEdSaWdBQUFCWFFWWkZabTEwSUJJQUFBQUJBQUVBUkt3QUFJaFlBUUFDQUJBQUFBQmtZWFJoQWdBQUFBRUEnKSB7XG4gICAgICAgICAgbm9kZS5zcmMgPSBzZWxmLl9zcmM7XG4gICAgICAgICAgbm9kZS5sb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQbGF5IGltbWVkaWF0ZWx5IGlmIHJlYWR5LCBvciB3YWl0IGZvciB0aGUgJ2NhbnBsYXl0aHJvdWdoJ2UgdmVudC5cbiAgICAgICAgdmFyIGxvYWRlZE5vUmVhZHlTdGF0ZSA9ICh3aW5kb3cgJiYgd2luZG93LmVqZWN0YSkgfHwgKCFub2RlLnJlYWR5U3RhdGUgJiYgSG93bGVyLl9uYXZpZ2F0b3IuaXNDb2Nvb25KUyk7XG4gICAgICAgIGlmIChub2RlLnJlYWR5U3RhdGUgPj0gMyB8fCBsb2FkZWROb1JlYWR5U3RhdGUpIHtcbiAgICAgICAgICBwbGF5SHRtbDUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLl9wbGF5TG9jayA9IHRydWU7XG4gICAgICAgICAgc2VsZi5fc3RhdGUgPSAnbG9hZGluZyc7XG5cbiAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuX3N0YXRlID0gJ2xvYWRlZCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEJlZ2luIHBsYXliYWNrLlxuICAgICAgICAgICAgcGxheUh0bWw1KCk7XG5cbiAgICAgICAgICAgIC8vIENsZWFyIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoSG93bGVyLl9jYW5QbGF5RXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoSG93bGVyLl9jYW5QbGF5RXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG5cbiAgICAgICAgICAvLyBDYW5jZWwgdGhlIGVuZCB0aW1lci5cbiAgICAgICAgICBzZWxmLl9jbGVhclRpbWVyKHNvdW5kLl9pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNvdW5kLl9pZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGF1c2UgcGxheWJhY2sgYW5kIHNhdmUgY3VycmVudCBwb3NpdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFRoZSBzb3VuZCBJRCAoZW1wdHkgdG8gcGF1c2UgYWxsIGluIGdyb3VwKS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIHBhdXNlOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCBvciBhIHBsYXkoKSBwcm9taXNlIGlzIHBlbmRpbmcsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBwYXVzZSB3aGVuIGNhcGFibGUuXG4gICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnIHx8IHNlbGYuX3BsYXlMb2NrKSB7XG4gICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAncGF1c2UnLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnBhdXNlKGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBpZCBpcyBwYXNzZWQsIGdldCBhbGwgSUQncyB0byBiZSBwYXVzZWQuXG4gICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIENsZWFyIHRoZSBlbmQgdGltZXIuXG4gICAgICAgIHNlbGYuX2NsZWFyVGltZXIoaWRzW2ldKTtcblxuICAgICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgICBpZiAoc291bmQgJiYgIXNvdW5kLl9wYXVzZWQpIHtcbiAgICAgICAgICAvLyBSZXNldCB0aGUgc2VlayBwb3NpdGlvbi5cbiAgICAgICAgICBzb3VuZC5fc2VlayA9IHNlbGYuc2VlayhpZHNbaV0pO1xuICAgICAgICAgIHNvdW5kLl9yYXRlU2VlayA9IDA7XG4gICAgICAgICAgc291bmQuX3BhdXNlZCA9IHRydWU7XG5cbiAgICAgICAgICAvLyBTdG9wIGN1cnJlbnRseSBydW5uaW5nIGZhZGVzLlxuICAgICAgICAgIHNlbGYuX3N0b3BGYWRlKGlkc1tpXSk7XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHNvdW5kIGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICAgICAgICAgIGlmICghc291bmQuX25vZGUuYnVmZmVyU291cmNlKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5zdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5ub3RlT2ZmKDApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5zdG9wKDApO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGJ1ZmZlciBzb3VyY2UuXG4gICAgICAgICAgICAgIHNlbGYuX2NsZWFuQnVmZmVyKHNvdW5kLl9ub2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKHNvdW5kLl9ub2RlLmR1cmF0aW9uKSB8fCBzb3VuZC5fbm9kZS5kdXJhdGlvbiA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIHRoZSBwYXVzZSBldmVudCwgdW5sZXNzIGB0cnVlYCBpcyBwYXNzZWQgYXMgdGhlIDJuZCBhcmd1bWVudC5cbiAgICAgICAgaWYgKCFhcmd1bWVudHNbMV0pIHtcbiAgICAgICAgICBzZWxmLl9lbWl0KCdwYXVzZScsIHNvdW5kID8gc291bmQuX2lkIDogbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0b3AgcGxheWJhY2sgYW5kIHJlc2V0IHRvIHN0YXJ0LlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgVGhlIHNvdW5kIElEIChlbXB0eSB0byBzdG9wIGFsbCBpbiBncm91cCkuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gaW50ZXJuYWwgSW50ZXJuYWwgVXNlOiB0cnVlIHByZXZlbnRzIGV2ZW50IGZpcmluZy5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uKGlkLCBpbnRlcm5hbCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIHN0b3Agd2hlbiBjYXBhYmxlLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJyB8fCBzZWxmLl9wbGF5TG9jaykge1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3N0b3AnLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnN0b3AoaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIGlkIGlzIHBhc3NlZCwgZ2V0IGFsbCBJRCdzIHRvIGJlIHN0b3BwZWQuXG4gICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIENsZWFyIHRoZSBlbmQgdGltZXIuXG4gICAgICAgIHNlbGYuX2NsZWFyVGltZXIoaWRzW2ldKTtcblxuICAgICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgICAvLyBSZXNldCB0aGUgc2VlayBwb3NpdGlvbi5cbiAgICAgICAgICBzb3VuZC5fc2VlayA9IHNvdW5kLl9zdGFydCB8fCAwO1xuICAgICAgICAgIHNvdW5kLl9yYXRlU2VlayA9IDA7XG4gICAgICAgICAgc291bmQuX3BhdXNlZCA9IHRydWU7XG4gICAgICAgICAgc291bmQuX2VuZGVkID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIFN0b3AgY3VycmVudGx5IHJ1bm5pbmcgZmFkZXMuXG4gICAgICAgICAgc2VsZi5fc3RvcEZhZGUoaWRzW2ldKTtcblxuICAgICAgICAgIGlmIChzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgc291bmQncyBBdWRpb0J1ZmZlclNvdXJjZU5vZGUgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICAgICAgICAgICAgaWYgKHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQuX25vZGUuYnVmZmVyU291cmNlLnN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2Uubm90ZU9mZigwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLnN0b3AoMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGJ1ZmZlciBzb3VyY2UuXG4gICAgICAgICAgICAgICAgc2VsZi5fY2xlYW5CdWZmZXIoc291bmQuX25vZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc05hTihzb3VuZC5fbm9kZS5kdXJhdGlvbikgfHwgc291bmQuX25vZGUuZHVyYXRpb24gPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmN1cnJlbnRUaW1lID0gc291bmQuX3N0YXJ0IHx8IDA7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLnBhdXNlKCk7XG5cbiAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIGxpdmUgc3RyZWFtLCBzdG9wIGRvd25sb2FkIG9uY2UgdGhlIGF1ZGlvIGlzIHN0b3BwZWQuXG4gICAgICAgICAgICAgIGlmIChzb3VuZC5fbm9kZS5kdXJhdGlvbiA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9jbGVhclNvdW5kKHNvdW5kLl9ub2RlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghaW50ZXJuYWwpIHtcbiAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3N0b3AnLCBzb3VuZC5faWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTXV0ZS91bm11dGUgYSBzaW5nbGUgc291bmQgb3IgYWxsIHNvdW5kcyBpbiB0aGlzIEhvd2wgZ3JvdXAuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbXV0ZWQgU2V0IHRvIHRydWUgdG8gbXV0ZSBhbmQgZmFsc2UgdG8gdW5tdXRlLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgICAgVGhlIHNvdW5kIElEIHRvIHVwZGF0ZSAob21pdCB0byBtdXRlL3VubXV0ZSBhbGwpLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgbXV0ZTogZnVuY3Rpb24obXV0ZWQsIGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gbXV0ZSB3aGVuIGNhcGFibGUuXG4gICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnfHwgc2VsZi5fcGxheUxvY2spIHtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdtdXRlJyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5tdXRlKG11dGVkLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXBwbHlpbmcgbXV0ZS91bm11dGUgdG8gYWxsIHNvdW5kcywgdXBkYXRlIHRoZSBncm91cCdzIHZhbHVlLlxuICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtdXRlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgc2VsZi5fbXV0ZWQgPSBtdXRlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5fbXV0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gaWQgaXMgcGFzc2VkLCBnZXQgYWxsIElEJ3MgdG8gYmUgbXV0ZWQuXG4gICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAgIHNvdW5kLl9tdXRlZCA9IG11dGVkO1xuXG4gICAgICAgICAgLy8gQ2FuY2VsIGFjdGl2ZSBmYWRlIGFuZCBzZXQgdGhlIHZvbHVtZSB0byB0aGUgZW5kIHZhbHVlLlxuICAgICAgICAgIGlmIChzb3VuZC5faW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHNlbGYuX3N0b3BGYWRlKHNvdW5kLl9pZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmIHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKG11dGVkID8gMCA6IHNvdW5kLl92b2x1bWUsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLm11dGVkID0gSG93bGVyLl9tdXRlZCA/IHRydWUgOiBtdXRlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLl9lbWl0KCdtdXRlJywgc291bmQuX2lkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0L3NldCB0aGUgdm9sdW1lIG9mIHRoaXMgc291bmQgb3Igb2YgdGhlIEhvd2wgZ3JvdXAuIFRoaXMgbWV0aG9kIGNhbiBvcHRpb25hbGx5IHRha2UgMCwgMSBvciAyIGFyZ3VtZW50cy5cbiAgICAgKiAgIHZvbHVtZSgpIC0+IFJldHVybnMgdGhlIGdyb3VwJ3Mgdm9sdW1lIHZhbHVlLlxuICAgICAqICAgdm9sdW1lKGlkKSAtPiBSZXR1cm5zIHRoZSBzb3VuZCBpZCdzIGN1cnJlbnQgdm9sdW1lLlxuICAgICAqICAgdm9sdW1lKHZvbCkgLT4gU2V0cyB0aGUgdm9sdW1lIG9mIGFsbCBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAqICAgdm9sdW1lKHZvbCwgaWQpIC0+IFNldHMgdGhlIHZvbHVtZSBvZiBwYXNzZWQgc291bmQgaWQuXG4gICAgICogQHJldHVybiB7SG93bC9OdW1iZXJ9IFJldHVybnMgc2VsZiBvciBjdXJyZW50IHZvbHVtZS5cbiAgICAgKi9cbiAgICB2b2x1bWU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgdm9sLCBpZDtcblxuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSB2YWx1ZXMgYmFzZWQgb24gYXJndW1lbnRzLlxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIFJldHVybiB0aGUgdmFsdWUgb2YgdGhlIGdyb3Vwcycgdm9sdW1lLlxuICAgICAgICByZXR1cm4gc2VsZi5fdm9sdW1lO1xuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSB8fCBhcmdzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgYXJnc1sxXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhpcyBpcyBhbiBJRCwgYW5kIGlmIG5vdCwgYXNzdW1lIGl0IGlzIGEgbmV3IHZvbHVtZS5cbiAgICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKCk7XG4gICAgICAgIHZhciBpbmRleCA9IGlkcy5pbmRleE9mKGFyZ3NbMF0pO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIGlkID0gcGFyc2VJbnQoYXJnc1swXSwgMTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZvbCA9IHBhcnNlRmxvYXQoYXJnc1swXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPj0gMikge1xuICAgICAgICB2b2wgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHRoZSB2b2x1bWUgb3IgcmV0dXJuIHRoZSBjdXJyZW50IHZvbHVtZS5cbiAgICAgIHZhciBzb3VuZDtcbiAgICAgIGlmICh0eXBlb2Ygdm9sICE9PSAndW5kZWZpbmVkJyAmJiB2b2wgPj0gMCAmJiB2b2wgPD0gMSkge1xuICAgICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIGNoYW5nZSB2b2x1bWUgd2hlbiBjYXBhYmxlLlxuICAgICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnfHwgc2VsZi5fcGxheUxvY2spIHtcbiAgICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiAndm9sdW1lJyxcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYudm9sdW1lLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGhlIGdyb3VwIHZvbHVtZS5cbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBzZWxmLl92b2x1bWUgPSB2b2w7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgb25lIG9yIGFsbCB2b2x1bWVzLlxuICAgICAgICBpZCA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZFtpXSk7XG5cbiAgICAgICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgICAgIHNvdW5kLl92b2x1bWUgPSB2b2w7XG5cbiAgICAgICAgICAgIC8vIFN0b3AgY3VycmVudGx5IHJ1bm5pbmcgZmFkZXMuXG4gICAgICAgICAgICBpZiAoIWFyZ3NbMl0pIHtcbiAgICAgICAgICAgICAgc2VsZi5fc3RvcEZhZGUoaWRbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgc291bmQuX25vZGUgJiYgIXNvdW5kLl9tdXRlZCkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKHZvbCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvdW5kLl9ub2RlICYmICFzb3VuZC5fbXV0ZWQpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUudm9sdW1lID0gdm9sICogSG93bGVyLnZvbHVtZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLl9lbWl0KCd2b2x1bWUnLCBzb3VuZC5faWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291bmQgPSBpZCA/IHNlbGYuX3NvdW5kQnlJZChpZCkgOiBzZWxmLl9zb3VuZHNbMF07XG4gICAgICAgIHJldHVybiBzb3VuZCA/IHNvdW5kLl92b2x1bWUgOiAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmFkZSBhIGN1cnJlbnRseSBwbGF5aW5nIHNvdW5kIGJldHdlZW4gdHdvIHZvbHVtZXMgKGlmIG5vIGlkIGlzIHBhc3NlZCwgYWxsIHNvdW5kcyB3aWxsIGZhZGUpLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gZnJvbSBUaGUgdmFsdWUgdG8gZmFkZSBmcm9tICgwLjAgdG8gMS4wKS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRvICAgVGhlIHZvbHVtZSB0byBmYWRlIHRvICgwLjAgdG8gMS4wKS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGxlbiAgVGltZSBpbiBtaWxsaXNlY29uZHMgdG8gZmFkZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkICAgVGhlIHNvdW5kIGlkIChvbWl0IHRvIGZhZGUgYWxsIHNvdW5kcykuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBmYWRlOiBmdW5jdGlvbihmcm9tLCB0bywgbGVuLCBpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIGZhZGUgd2hlbiBjYXBhYmxlLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJyB8fCBzZWxmLl9wbGF5TG9jaykge1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ2ZhZGUnLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmZhZGUoZnJvbSwgdG8sIGxlbiwgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdG8vZnJvbS9sZW4gdmFsdWVzIGFyZSBudW1iZXJzLlxuICAgICAgZnJvbSA9IE1hdGgubWluKE1hdGgubWF4KDAsIHBhcnNlRmxvYXQoZnJvbSkpLCAxKTtcbiAgICAgIHRvID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgcGFyc2VGbG9hdCh0bykpLCAxKTtcbiAgICAgIGxlbiA9IHBhcnNlRmxvYXQobGVuKTtcblxuICAgICAgLy8gU2V0IHRoZSB2b2x1bWUgdG8gdGhlIHN0YXJ0IHBvc2l0aW9uLlxuICAgICAgc2VsZi52b2x1bWUoZnJvbSwgaWQpO1xuXG4gICAgICAvLyBGYWRlIHRoZSB2b2x1bWUgb2Ygb25lIG9yIGFsbCBzb3VuZHMuXG4gICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBsaW5lYXIgZmFkZSBvciBmYWxsIGJhY2sgdG8gdGltZW91dHMgd2l0aCBIVE1MNSBBdWRpby5cbiAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgLy8gU3RvcCB0aGUgcHJldmlvdXMgZmFkZSBpZiBubyBzcHJpdGUgaXMgYmVpbmcgdXNlZCAob3RoZXJ3aXNlLCB2b2x1bWUgaGFuZGxlcyB0aGlzKS5cbiAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICBzZWxmLl9zdG9wRmFkZShpZHNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHdlIGFyZSB1c2luZyBXZWIgQXVkaW8sIGxldCB0aGUgbmF0aXZlIG1ldGhvZHMgZG8gdGhlIGFjdHVhbCBmYWRlLlxuICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiAhc291bmQuX211dGVkKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdmFyIGVuZCA9IGN1cnJlbnRUaW1lICsgKGxlbiAvIDEwMDApO1xuICAgICAgICAgICAgc291bmQuX3ZvbHVtZSA9IGZyb207XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKGZyb20sIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUodG8sIGVuZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fc3RhcnRGYWRlSW50ZXJ2YWwoc291bmQsIGZyb20sIHRvLCBsZW4sIGlkc1tpXSwgdHlwZW9mIGlkID09PSAndW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgaW50ZXJuYWwgaW50ZXJ2YWwgdG8gZmFkZSBhIHNvdW5kLlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gc291bmQgUmVmZXJlbmNlIHRvIHNvdW5kIHRvIGZhZGUuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBmcm9tIFRoZSB2YWx1ZSB0byBmYWRlIGZyb20gKDAuMCB0byAxLjApLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdG8gICBUaGUgdm9sdW1lIHRvIGZhZGUgdG8gKDAuMCB0byAxLjApLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbGVuICBUaW1lIGluIG1pbGxpc2Vjb25kcyB0byBmYWRlLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgICBUaGUgc291bmQgaWQgdG8gZmFkZS5cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBpc0dyb3VwICAgSWYgdHJ1ZSwgc2V0IHRoZSB2b2x1bWUgb24gdGhlIGdyb3VwLlxuICAgICAqL1xuICAgIF9zdGFydEZhZGVJbnRlcnZhbDogZnVuY3Rpb24oc291bmQsIGZyb20sIHRvLCBsZW4sIGlkLCBpc0dyb3VwKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgdm9sID0gZnJvbTtcbiAgICAgIHZhciBkaWZmID0gdG8gLSBmcm9tO1xuICAgICAgdmFyIHN0ZXBzID0gTWF0aC5hYnMoZGlmZiAvIDAuMDEpO1xuICAgICAgdmFyIHN0ZXBMZW4gPSBNYXRoLm1heCg0LCAoc3RlcHMgPiAwKSA/IGxlbiAvIHN0ZXBzIDogbGVuKTtcbiAgICAgIHZhciBsYXN0VGljayA9IERhdGUubm93KCk7XG5cbiAgICAgIC8vIFN0b3JlIHRoZSB2YWx1ZSBiZWluZyBmYWRlZCB0by5cbiAgICAgIHNvdW5kLl9mYWRlVG8gPSB0bztcblxuICAgICAgLy8gVXBkYXRlIHRoZSB2b2x1bWUgdmFsdWUgb24gZWFjaCBpbnRlcnZhbCB0aWNrLlxuICAgICAgc291bmQuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdm9sdW1lIGJhc2VkIG9uIHRoZSB0aW1lIHNpbmNlIHRoZSBsYXN0IHRpY2suXG4gICAgICAgIHZhciB0aWNrID0gKERhdGUubm93KCkgLSBsYXN0VGljaykgLyBsZW47XG4gICAgICAgIGxhc3RUaWNrID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdm9sICs9IGRpZmYgKiB0aWNrO1xuXG4gICAgICAgIC8vIFJvdW5kIHRvIHdpdGhpbiAyIGRlY2ltYWwgcG9pbnRzLlxuICAgICAgICB2b2wgPSBNYXRoLnJvdW5kKHZvbCAqIDEwMCkgLyAxMDA7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSB2b2x1bWUgaXMgaW4gdGhlIHJpZ2h0IGJvdW5kcy5cbiAgICAgICAgaWYgKGRpZmYgPCAwKSB7XG4gICAgICAgICAgdm9sID0gTWF0aC5tYXgodG8sIHZvbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdm9sID0gTWF0aC5taW4odG8sIHZvbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGFuZ2UgdGhlIHZvbHVtZS5cbiAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgc291bmQuX3ZvbHVtZSA9IHZvbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLnZvbHVtZSh2b2wsIHNvdW5kLl9pZCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGhlIGdyb3VwJ3Mgdm9sdW1lLlxuICAgICAgICBpZiAoaXNHcm91cCkge1xuICAgICAgICAgIHNlbGYuX3ZvbHVtZSA9IHZvbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gdGhlIGZhZGUgaXMgY29tcGxldGUsIHN0b3AgaXQgYW5kIGZpcmUgZXZlbnQuXG4gICAgICAgIGlmICgodG8gPCBmcm9tICYmIHZvbCA8PSB0bykgfHwgKHRvID4gZnJvbSAmJiB2b2wgPj0gdG8pKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChzb3VuZC5faW50ZXJ2YWwpO1xuICAgICAgICAgIHNvdW5kLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICAgICAgc291bmQuX2ZhZGVUbyA9IG51bGw7XG4gICAgICAgICAgc2VsZi52b2x1bWUodG8sIHNvdW5kLl9pZCk7XG4gICAgICAgICAgc2VsZi5fZW1pdCgnZmFkZScsIHNvdW5kLl9pZCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHN0ZXBMZW4pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBtZXRob2QgdGhhdCBzdG9wcyB0aGUgY3VycmVudGx5IHBsYXlpbmcgZmFkZSB3aGVuXG4gICAgICogYSBuZXcgZmFkZSBzdGFydHMsIHZvbHVtZSBpcyBjaGFuZ2VkIG9yIHRoZSBzb3VuZCBpcyBzdG9wcGVkLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgVGhlIHNvdW5kIGlkLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX3N0b3BGYWRlOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcblxuICAgICAgaWYgKHNvdW5kICYmIHNvdW5kLl9pbnRlcnZhbCkge1xuICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICBzb3VuZC5fbm9kZS5nYWluLmNhbmNlbFNjaGVkdWxlZFZhbHVlcyhIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc291bmQuX2ludGVydmFsKTtcbiAgICAgICAgc291bmQuX2ludGVydmFsID0gbnVsbDtcbiAgICAgICAgc2VsZi52b2x1bWUoc291bmQuX2ZhZGVUbywgaWQpO1xuICAgICAgICBzb3VuZC5fZmFkZVRvID0gbnVsbDtcbiAgICAgICAgc2VsZi5fZW1pdCgnZmFkZScsIGlkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldC9zZXQgdGhlIGxvb3AgcGFyYW1ldGVyIG9uIGEgc291bmQuIFRoaXMgbWV0aG9kIGNhbiBvcHRpb25hbGx5IHRha2UgMCwgMSBvciAyIGFyZ3VtZW50cy5cbiAgICAgKiAgIGxvb3AoKSAtPiBSZXR1cm5zIHRoZSBncm91cCdzIGxvb3AgdmFsdWUuXG4gICAgICogICBsb29wKGlkKSAtPiBSZXR1cm5zIHRoZSBzb3VuZCBpZCdzIGxvb3AgdmFsdWUuXG4gICAgICogICBsb29wKGxvb3ApIC0+IFNldHMgdGhlIGxvb3AgdmFsdWUgZm9yIGFsbCBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAqICAgbG9vcChsb29wLCBpZCkgLT4gU2V0cyB0aGUgbG9vcCB2YWx1ZSBvZiBwYXNzZWQgc291bmQgaWQuXG4gICAgICogQHJldHVybiB7SG93bC9Cb29sZWFufSBSZXR1cm5zIHNlbGYgb3IgY3VycmVudCBsb29wIHZhbHVlLlxuICAgICAqL1xuICAgIGxvb3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgbG9vcCwgaWQsIHNvdW5kO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIHZhbHVlcyBmb3IgbG9vcCBhbmQgaWQuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBncm91J3MgbG9vcCB2YWx1ZS5cbiAgICAgICAgcmV0dXJuIHNlbGYuX2xvb3A7XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgbG9vcCA9IGFyZ3NbMF07XG4gICAgICAgICAgc2VsZi5fbG9vcCA9IGxvb3A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUmV0dXJuIHRoaXMgc291bmQncyBsb29wIHZhbHVlLlxuICAgICAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKHBhcnNlSW50KGFyZ3NbMF0sIDEwKSk7XG4gICAgICAgICAgcmV0dXJuIHNvdW5kID8gc291bmQuX2xvb3AgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBsb29wID0gYXJnc1swXTtcbiAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIGlkIGlzIHBhc3NlZCwgZ2V0IGFsbCBJRCdzIHRvIGJlIGxvb3BlZC5cbiAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgc291bmQuX2xvb3AgPSBsb29wO1xuICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBzb3VuZC5fbm9kZSAmJiBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UpIHtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wID0gbG9vcDtcbiAgICAgICAgICAgIGlmIChsb29wKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wU3RhcnQgPSBzb3VuZC5fc3RhcnQgfHwgMDtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmxvb3BFbmQgPSBzb3VuZC5fc3RvcDtcblxuICAgICAgICAgICAgICAvLyBJZiBwbGF5aW5nLCByZXN0YXJ0IHBsYXliYWNrIHRvIGVuc3VyZSBsb29waW5nIHVwZGF0ZXMuXG4gICAgICAgICAgICAgIGlmIChzZWxmLnBsYXlpbmcoaWRzW2ldKSkge1xuICAgICAgICAgICAgICAgIHNlbGYucGF1c2UoaWRzW2ldLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXkoaWRzW2ldLCB0cnVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0L3NldCB0aGUgcGxheWJhY2sgcmF0ZSBvZiBhIHNvdW5kLiBUaGlzIG1ldGhvZCBjYW4gb3B0aW9uYWxseSB0YWtlIDAsIDEgb3IgMiBhcmd1bWVudHMuXG4gICAgICogICByYXRlKCkgLT4gUmV0dXJucyB0aGUgZmlyc3Qgc291bmQgbm9kZSdzIGN1cnJlbnQgcGxheWJhY2sgcmF0ZS5cbiAgICAgKiAgIHJhdGUoaWQpIC0+IFJldHVybnMgdGhlIHNvdW5kIGlkJ3MgY3VycmVudCBwbGF5YmFjayByYXRlLlxuICAgICAqICAgcmF0ZShyYXRlKSAtPiBTZXRzIHRoZSBwbGF5YmFjayByYXRlIG9mIGFsbCBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAqICAgcmF0ZShyYXRlLCBpZCkgLT4gU2V0cyB0aGUgcGxheWJhY2sgcmF0ZSBvZiBwYXNzZWQgc291bmQgaWQuXG4gICAgICogQHJldHVybiB7SG93bC9OdW1iZXJ9IFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCBwbGF5YmFjayByYXRlLlxuICAgICAqL1xuICAgIHJhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgcmF0ZSwgaWQ7XG5cbiAgICAgIC8vIERldGVybWluZSB0aGUgdmFsdWVzIGJhc2VkIG9uIGFyZ3VtZW50cy5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBXZSB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgcmF0ZSBvZiB0aGUgZmlyc3Qgbm9kZS5cbiAgICAgICAgaWQgPSBzZWxmLl9zb3VuZHNbMF0uX2lkO1xuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBGaXJzdCBjaGVjayBpZiB0aGlzIGlzIGFuIElELCBhbmQgaWYgbm90LCBhc3N1bWUgaXQgaXMgYSBuZXcgcmF0ZSB2YWx1ZS5cbiAgICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKCk7XG4gICAgICAgIHZhciBpbmRleCA9IGlkcy5pbmRleE9mKGFyZ3NbMF0pO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIGlkID0gcGFyc2VJbnQoYXJnc1swXSwgMTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJhdGUgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHJhdGUgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHRoZSBwbGF5YmFjayByYXRlIG9yIHJldHVybiB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICAgIHZhciBzb3VuZDtcbiAgICAgIGlmICh0eXBlb2YgcmF0ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBjaGFuZ2UgcGxheWJhY2sgcmF0ZSB3aGVuIGNhcGFibGUuXG4gICAgICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcgfHwgc2VsZi5fcGxheUxvY2spIHtcbiAgICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiAncmF0ZScsXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzZWxmLnJhdGUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aGUgZ3JvdXAgcmF0ZS5cbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBzZWxmLl9yYXRlID0gcmF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBvbmUgb3IgYWxsIHZvbHVtZXMuXG4gICAgICAgIGlkID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8aWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkW2ldKTtcblxuICAgICAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAgICAgLy8gS2VlcCB0cmFjayBvZiBvdXIgcG9zaXRpb24gd2hlbiB0aGUgcmF0ZSBjaGFuZ2VkIGFuZCB1cGRhdGUgdGhlIHBsYXliYWNrXG4gICAgICAgICAgICAvLyBzdGFydCBwb3NpdGlvbiBzbyB3ZSBjYW4gcHJvcGVybHkgYWRqdXN0IHRoZSBzZWVrIHBvc2l0aW9uIGZvciB0aW1lIGVsYXBzZWQuXG4gICAgICAgICAgICBpZiAoc2VsZi5wbGF5aW5nKGlkW2ldKSkge1xuICAgICAgICAgICAgICBzb3VuZC5fcmF0ZVNlZWsgPSBzZWxmLnNlZWsoaWRbaV0pO1xuICAgICAgICAgICAgICBzb3VuZC5fcGxheVN0YXJ0ID0gc2VsZi5fd2ViQXVkaW8gPyBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lIDogc291bmQuX3BsYXlTdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNvdW5kLl9yYXRlID0gcmF0ZTtcblxuICAgICAgICAgICAgLy8gQ2hhbmdlIHRoZSBwbGF5YmFjayByYXRlLlxuICAgICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmIHNvdW5kLl9ub2RlICYmIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZSkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UucGxheWJhY2tSYXRlLnNldFZhbHVlQXRUaW1lKHJhdGUsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5wbGF5YmFja1JhdGUgPSByYXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgdGltZXJzLlxuICAgICAgICAgICAgdmFyIHNlZWsgPSBzZWxmLnNlZWsoaWRbaV0pO1xuICAgICAgICAgICAgdmFyIGR1cmF0aW9uID0gKChzZWxmLl9zcHJpdGVbc291bmQuX3Nwcml0ZV1bMF0gKyBzZWxmLl9zcHJpdGVbc291bmQuX3Nwcml0ZV1bMV0pIC8gMTAwMCkgLSBzZWVrO1xuICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSAoZHVyYXRpb24gKiAxMDAwKSAvIE1hdGguYWJzKHNvdW5kLl9yYXRlKTtcblxuICAgICAgICAgICAgLy8gU3RhcnQgYSBuZXcgZW5kIHRpbWVyIGlmIHNvdW5kIGlzIGFscmVhZHkgcGxheWluZy5cbiAgICAgICAgICAgIGlmIChzZWxmLl9lbmRUaW1lcnNbaWRbaV1dIHx8ICFzb3VuZC5fcGF1c2VkKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2NsZWFyVGltZXIoaWRbaV0pO1xuICAgICAgICAgICAgICBzZWxmLl9lbmRUaW1lcnNbaWRbaV1dID0gc2V0VGltZW91dChzZWxmLl9lbmRlZC5iaW5kKHNlbGYsIHNvdW5kKSwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3JhdGUnLCBzb3VuZC5faWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWQpO1xuICAgICAgICByZXR1cm4gc291bmQgPyBzb3VuZC5fcmF0ZSA6IHNlbGYuX3JhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQvc2V0IHRoZSBzZWVrIHBvc2l0aW9uIG9mIGEgc291bmQuIFRoaXMgbWV0aG9kIGNhbiBvcHRpb25hbGx5IHRha2UgMCwgMSBvciAyIGFyZ3VtZW50cy5cbiAgICAgKiAgIHNlZWsoKSAtPiBSZXR1cm5zIHRoZSBmaXJzdCBzb3VuZCBub2RlJ3MgY3VycmVudCBzZWVrIHBvc2l0aW9uLlxuICAgICAqICAgc2VlayhpZCkgLT4gUmV0dXJucyB0aGUgc291bmQgaWQncyBjdXJyZW50IHNlZWsgcG9zaXRpb24uXG4gICAgICogICBzZWVrKHNlZWspIC0+IFNldHMgdGhlIHNlZWsgcG9zaXRpb24gb2YgdGhlIGZpcnN0IHNvdW5kIG5vZGUuXG4gICAgICogICBzZWVrKHNlZWssIGlkKSAtPiBTZXRzIHRoZSBzZWVrIHBvc2l0aW9uIG9mIHBhc3NlZCBzb3VuZCBpZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsL051bWJlcn0gUmV0dXJucyBzZWxmIG9yIHRoZSBjdXJyZW50IHNlZWsgcG9zaXRpb24uXG4gICAgICovXG4gICAgc2VlazogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHZhciBzZWVrLCBpZDtcblxuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSB2YWx1ZXMgYmFzZWQgb24gYXJndW1lbnRzLlxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIFdlIHdpbGwgc2ltcGx5IHJldHVybiB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgZmlyc3Qgbm9kZS5cbiAgICAgICAgaWYgKHNlbGYuX3NvdW5kcy5sZW5ndGgpIHtcbiAgICAgICAgICBpZCA9IHNlbGYuX3NvdW5kc1swXS5faWQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhpcyBpcyBhbiBJRCwgYW5kIGlmIG5vdCwgYXNzdW1lIGl0IGlzIGEgbmV3IHNlZWsgcG9zaXRpb24uXG4gICAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcygpO1xuICAgICAgICB2YXIgaW5kZXggPSBpZHMuaW5kZXhPZihhcmdzWzBdKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMF0sIDEwKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxmLl9zb3VuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgaWQgPSBzZWxmLl9zb3VuZHNbMF0uX2lkO1xuICAgICAgICAgIHNlZWsgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNlZWsgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gSUQsIGJhaWwgb3V0LlxuICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gc2VlayB3aGVuIGNhcGFibGUuXG4gICAgICBpZiAodHlwZW9mIHNlZWsgPT09ICdudW1iZXInICYmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcgfHwgc2VsZi5fcGxheUxvY2spKSB7XG4gICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAnc2VlaycsXG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuc2Vlay5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcblxuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VlayA9PT0gJ251bWJlcicgJiYgc2VlayA+PSAwKSB7XG4gICAgICAgICAgLy8gUGF1c2UgdGhlIHNvdW5kIGFuZCB1cGRhdGUgcG9zaXRpb24gZm9yIHJlc3RhcnRpbmcgcGxheWJhY2suXG4gICAgICAgICAgdmFyIHBsYXlpbmcgPSBzZWxmLnBsYXlpbmcoaWQpO1xuICAgICAgICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICAgICAgICBzZWxmLnBhdXNlKGlkLCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBNb3ZlIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJhY2sgYW5kIGNhbmNlbCB0aW1lci5cbiAgICAgICAgICBzb3VuZC5fc2VlayA9IHNlZWs7XG4gICAgICAgICAgc291bmQuX2VuZGVkID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihpZCk7XG5cbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHNlZWsgcG9zaXRpb24gZm9yIEhUTUw1IEF1ZGlvLlxuICAgICAgICAgIGlmICghc2VsZi5fd2ViQXVkaW8gJiYgc291bmQuX25vZGUgJiYgIWlzTmFOKHNvdW5kLl9ub2RlLmR1cmF0aW9uKSkge1xuICAgICAgICAgICAgc291bmQuX25vZGUuY3VycmVudFRpbWUgPSBzZWVrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNlZWsgYW5kIGVtaXQgd2hlbiByZWFkeS5cbiAgICAgICAgICB2YXIgc2Vla0FuZEVtaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFJlc3RhcnQgdGhlIHBsYXliYWNrIGlmIHRoZSBzb3VuZCB3YXMgcGxheWluZy5cbiAgICAgICAgICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICAgICAgICAgIHNlbGYucGxheShpZCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3NlZWsnLCBpZCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIFdhaXQgZm9yIHRoZSBwbGF5IGxvY2sgdG8gYmUgdW5zZXQgYmVmb3JlIGVtaXR0aW5nIChIVE1MNSBBdWRpbykuXG4gICAgICAgICAgaWYgKHBsYXlpbmcgJiYgIXNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgICB2YXIgZW1pdFNlZWsgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKCFzZWxmLl9wbGF5TG9jaykge1xuICAgICAgICAgICAgICAgIHNlZWtBbmRFbWl0KCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChlbWl0U2VlaywgMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVtaXRTZWVrLCAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vla0FuZEVtaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgICB2YXIgcmVhbFRpbWUgPSBzZWxmLnBsYXlpbmcoaWQpID8gSG93bGVyLmN0eC5jdXJyZW50VGltZSAtIHNvdW5kLl9wbGF5U3RhcnQgOiAwO1xuICAgICAgICAgICAgdmFyIHJhdGVTZWVrID0gc291bmQuX3JhdGVTZWVrID8gc291bmQuX3JhdGVTZWVrIC0gc291bmQuX3NlZWsgOiAwO1xuICAgICAgICAgICAgcmV0dXJuIHNvdW5kLl9zZWVrICsgKHJhdGVTZWVrICsgcmVhbFRpbWUgKiBNYXRoLmFicyhzb3VuZC5fcmF0ZSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc291bmQuX25vZGUuY3VycmVudFRpbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIHNwZWNpZmljIHNvdW5kIGlzIGN1cnJlbnRseSBwbGF5aW5nIG9yIG5vdCAoaWYgaWQgaXMgcHJvdmlkZWQpLCBvciBjaGVjayBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlIHNvdW5kcyBpbiB0aGUgZ3JvdXAgaXMgcGxheWluZyBvciBub3QuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgaWQgVGhlIHNvdW5kIGlkIHRvIGNoZWNrLiBJZiBub25lIGlzIHBhc3NlZCwgdGhlIHdob2xlIHNvdW5kIGdyb3VwIGlzIGNoZWNrZWQuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBwbGF5aW5nIGFuZCBmYWxzZSBpZiBub3QuXG4gICAgICovXG4gICAgcGxheWluZzogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gQ2hlY2sgdGhlIHBhc3NlZCBzb3VuZCBJRCAoaWYgYW55KS5cbiAgICAgIGlmICh0eXBlb2YgaWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG4gICAgICAgIHJldHVybiBzb3VuZCA/ICFzb3VuZC5fcGF1c2VkIDogZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgbG9vcCB0aHJvdWdoIGFsbCBzb3VuZHMgYW5kIGNoZWNrIGlmIGFueSBhcmUgcGxheWluZy5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9zb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFzZWxmLl9zb3VuZHNbaV0uX3BhdXNlZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkdXJhdGlvbiBvZiB0aGlzIHNvdW5kLiBQYXNzaW5nIGEgc291bmQgaWQgd2lsbCByZXR1cm4gdGhlIHNwcml0ZSBkdXJhdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFRoZSBzb3VuZCBpZCB0byBjaGVjay4gSWYgbm9uZSBpcyBwYXNzZWQsIHJldHVybiBmdWxsIHNvdXJjZSBkdXJhdGlvbi5cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEF1ZGlvIGR1cmF0aW9uIGluIHNlY29uZHMuXG4gICAgICovXG4gICAgZHVyYXRpb246IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgZHVyYXRpb24gPSBzZWxmLl9kdXJhdGlvbjtcblxuICAgICAgLy8gSWYgd2UgcGFzcyBhbiBJRCwgZ2V0IHRoZSBzb3VuZCBhbmQgcmV0dXJuIHRoZSBzcHJpdGUgbGVuZ3RoLlxuICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcbiAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICBkdXJhdGlvbiA9IHNlbGYuX3Nwcml0ZVtzb3VuZC5fc3ByaXRlXVsxXSAvIDEwMDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBsb2FkZWQgc3RhdGUgb2YgdGhpcyBIb3dsLlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gJ3VubG9hZGVkJywgJ2xvYWRpbmcnLCAnbG9hZGVkJ1xuICAgICAqL1xuICAgIHN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5sb2FkIGFuZCBkZXN0cm95IHRoZSBjdXJyZW50IEhvd2wgb2JqZWN0LlxuICAgICAqIFRoaXMgd2lsbCBpbW1lZGlhdGVseSBzdG9wIGFsbCBzb3VuZCBpbnN0YW5jZXMgYXR0YWNoZWQgdG8gdGhpcyBncm91cC5cbiAgICAgKi9cbiAgICB1bmxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBTdG9wIHBsYXlpbmcgYW55IGFjdGl2ZSBzb3VuZHMuXG4gICAgICB2YXIgc291bmRzID0gc2VsZi5fc291bmRzO1xuICAgICAgZm9yICh2YXIgaT0wOyBpPHNvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBTdG9wIHRoZSBzb3VuZCBpZiBpdCBpcyBjdXJyZW50bHkgcGxheWluZy5cbiAgICAgICAgaWYgKCFzb3VuZHNbaV0uX3BhdXNlZCkge1xuICAgICAgICAgIHNlbGYuc3RvcChzb3VuZHNbaV0uX2lkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgc291cmNlIG9yIGRpc2Nvbm5lY3QuXG4gICAgICAgIGlmICghc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICAvLyBTZXQgdGhlIHNvdXJjZSB0byAwLXNlY29uZCBzaWxlbmNlIHRvIHN0b3AgYW55IGRvd25sb2FkaW5nIChleGNlcHQgaW4gSUUpLlxuICAgICAgICAgIHNlbGYuX2NsZWFyU291bmQoc291bmRzW2ldLl9ub2RlKTtcblxuICAgICAgICAgIC8vIFJlbW92ZSBhbnkgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICAgIHNvdW5kc1tpXS5fbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHNvdW5kc1tpXS5fZXJyb3JGbiwgZmFsc2UpO1xuICAgICAgICAgIHNvdW5kc1tpXS5fbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKEhvd2xlci5fY2FuUGxheUV2ZW50LCBzb3VuZHNbaV0uX2xvYWRGbiwgZmFsc2UpO1xuICAgICAgICAgIHNvdW5kc1tpXS5fbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlbmRlZCcsIHNvdW5kc1tpXS5fZW5kRm4sIGZhbHNlKTtcblxuICAgICAgICAgIC8vIFJlbGVhc2UgdGhlIEF1ZGlvIG9iamVjdCBiYWNrIHRvIHRoZSBwb29sLlxuICAgICAgICAgIEhvd2xlci5fcmVsZWFzZUh0bWw1QXVkaW8oc291bmRzW2ldLl9ub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVtcHR5IG91dCBhbGwgb2YgdGhlIG5vZGVzLlxuICAgICAgICBkZWxldGUgc291bmRzW2ldLl9ub2RlO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgdGltZXJzIGFyZSBjbGVhcmVkIG91dC5cbiAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihzb3VuZHNbaV0uX2lkKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIHRoZSByZWZlcmVuY2VzIGluIHRoZSBnbG9iYWwgSG93bGVyIG9iamVjdC5cbiAgICAgIHZhciBpbmRleCA9IEhvd2xlci5faG93bHMuaW5kZXhPZihzZWxmKTtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIEhvd2xlci5faG93bHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgLy8gRGVsZXRlIHRoaXMgc291bmQgZnJvbSB0aGUgY2FjaGUgKGlmIG5vIG90aGVyIEhvd2wgaXMgdXNpbmcgaXQpLlxuICAgICAgdmFyIHJlbUNhY2hlID0gdHJ1ZTtcbiAgICAgIGZvciAoaT0wOyBpPEhvd2xlci5faG93bHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKEhvd2xlci5faG93bHNbaV0uX3NyYyA9PT0gc2VsZi5fc3JjIHx8IHNlbGYuX3NyYy5pbmRleE9mKEhvd2xlci5faG93bHNbaV0uX3NyYykgPj0gMCkge1xuICAgICAgICAgIHJlbUNhY2hlID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNhY2hlICYmIHJlbUNhY2hlKSB7XG4gICAgICAgIGRlbGV0ZSBjYWNoZVtzZWxmLl9zcmNdO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciBnbG9iYWwgZXJyb3JzLlxuICAgICAgSG93bGVyLm5vQXVkaW8gPSBmYWxzZTtcblxuICAgICAgLy8gQ2xlYXIgb3V0IGBzZWxmYC5cbiAgICAgIHNlbGYuX3N0YXRlID0gJ3VubG9hZGVkJztcbiAgICAgIHNlbGYuX3NvdW5kcyA9IFtdO1xuICAgICAgc2VsZiA9IG51bGw7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gYSBjdXN0b20gZXZlbnQuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50IEV2ZW50IG5hbWUuXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgIExpc3RlbmVyIHRvIGNhbGwuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgIGlkICAgIChvcHRpb25hbCkgT25seSBsaXN0ZW4gdG8gZXZlbnRzIGZvciB0aGlzIHNvdW5kLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gICBvbmNlICAoSU5URVJOQUwpIE1hcmtzIGV2ZW50IHRvIGZpcmUgb25seSBvbmNlLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgb246IGZ1bmN0aW9uKGV2ZW50LCBmbiwgaWQsIG9uY2UpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBldmVudHMgPSBzZWxmWydfb24nICsgZXZlbnRdO1xuXG4gICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKG9uY2UgPyB7aWQ6IGlkLCBmbjogZm4sIG9uY2U6IG9uY2V9IDoge2lkOiBpZCwgZm46IGZufSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBjdXN0b20gZXZlbnQuIENhbGwgd2l0aG91dCBwYXJhbWV0ZXJzIHRvIHJlbW92ZSBhbGwgZXZlbnRzLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudCBFdmVudCBuYW1lLlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICBMaXN0ZW5lciB0byByZW1vdmUuIExlYXZlIGVtcHR5IHRvIHJlbW92ZSBhbGwuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgIGlkICAgIChvcHRpb25hbCkgT25seSByZW1vdmUgZXZlbnRzIGZvciB0aGlzIHNvdW5kLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgb2ZmOiBmdW5jdGlvbihldmVudCwgZm4sIGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgZXZlbnRzID0gc2VsZlsnX29uJyArIGV2ZW50XTtcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgLy8gQWxsb3cgcGFzc2luZyBqdXN0IGFuIGV2ZW50IGFuZCBJRC5cbiAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlkID0gZm47XG4gICAgICAgIGZuID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGZuIHx8IGlkKSB7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBldmVudCBzdG9yZSBhbmQgcmVtb3ZlIHRoZSBwYXNzZWQgZnVuY3Rpb24uXG4gICAgICAgIGZvciAoaT0wOyBpPGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpc0lkID0gKGlkID09PSBldmVudHNbaV0uaWQpO1xuICAgICAgICAgIGlmIChmbiA9PT0gZXZlbnRzW2ldLmZuICYmIGlzSWQgfHwgIWZuICYmIGlzSWQpIHtcbiAgICAgICAgICAgIGV2ZW50cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IGFsbCBldmVudHMgb2YgdGhpcyB0eXBlLlxuICAgICAgICBzZWxmWydfb24nICsgZXZlbnRdID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDbGVhciBvdXQgYWxsIGV2ZW50cyBvZiBldmVyeSB0eXBlLlxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNlbGYpO1xuICAgICAgICBmb3IgKGk9MDsgaTxrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKChrZXlzW2ldLmluZGV4T2YoJ19vbicpID09PSAwKSAmJiBBcnJheS5pc0FycmF5KHNlbGZba2V5c1tpXV0pKSB7XG4gICAgICAgICAgICBzZWxmW2tleXNbaV1dID0gW107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gYSBjdXN0b20gZXZlbnQgYW5kIHJlbW92ZSBpdCBvbmNlIGZpcmVkLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudCBFdmVudCBuYW1lLlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICBMaXN0ZW5lciB0byBjYWxsLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gICBpZCAgICAob3B0aW9uYWwpIE9ubHkgbGlzdGVuIHRvIGV2ZW50cyBmb3IgdGhpcyBzb3VuZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIG9uY2U6IGZ1bmN0aW9uKGV2ZW50LCBmbiwgaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gU2V0dXAgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgc2VsZi5vbihldmVudCwgZm4sIGlkLCAxKTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVtaXQgYWxsIGV2ZW50cyBvZiBhIHNwZWNpZmljIHR5cGUgYW5kIHBhc3MgdGhlIHNvdW5kIGlkLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZXZlbnQgRXZlbnQgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkICAgIFNvdW5kIElELlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbXNnICAgTWVzc2FnZSB0byBnbyB3aXRoIGV2ZW50LlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX2VtaXQ6IGZ1bmN0aW9uKGV2ZW50LCBpZCwgbXNnKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgZXZlbnRzID0gc2VsZlsnX29uJyArIGV2ZW50XTtcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGV2ZW50IHN0b3JlIGFuZCBmaXJlIGFsbCBmdW5jdGlvbnMuXG4gICAgICBmb3IgKHZhciBpPWV2ZW50cy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgIC8vIE9ubHkgZmlyZSB0aGUgbGlzdGVuZXIgaWYgdGhlIGNvcnJlY3QgSUQgaXMgdXNlZC5cbiAgICAgICAgaWYgKCFldmVudHNbaV0uaWQgfHwgZXZlbnRzW2ldLmlkID09PSBpZCB8fCBldmVudCA9PT0gJ2xvYWQnKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbihmbikge1xuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBpZCwgbXNnKTtcbiAgICAgICAgICB9LmJpbmQoc2VsZiwgZXZlbnRzW2ldLmZuKSwgMCk7XG5cbiAgICAgICAgICAvLyBJZiB0aGlzIGV2ZW50IHdhcyBzZXR1cCB3aXRoIGBvbmNlYCwgcmVtb3ZlIGl0LlxuICAgICAgICAgIGlmIChldmVudHNbaV0ub25jZSkge1xuICAgICAgICAgICAgc2VsZi5vZmYoZXZlbnQsIGV2ZW50c1tpXS5mbiwgZXZlbnRzW2ldLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUGFzcyB0aGUgZXZlbnQgdHlwZSBpbnRvIGxvYWQgcXVldWUgc28gdGhhdCBpdCBjYW4gY29udGludWUgc3RlcHBpbmcuXG4gICAgICBzZWxmLl9sb2FkUXVldWUoZXZlbnQpO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUXVldWUgb2YgYWN0aW9ucyBpbml0aWF0ZWQgYmVmb3JlIHRoZSBzb3VuZCBoYXMgbG9hZGVkLlxuICAgICAqIFRoZXNlIHdpbGwgYmUgY2FsbGVkIGluIHNlcXVlbmNlLCB3aXRoIHRoZSBuZXh0IG9ubHkgZmlyaW5nXG4gICAgICogYWZ0ZXIgdGhlIHByZXZpb3VzIGhhcyBmaW5pc2hlZCBleGVjdXRpbmcgKGV2ZW4gaWYgYXN5bmMgbGlrZSBwbGF5KS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9sb2FkUXVldWU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmIChzZWxmLl9xdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciB0YXNrID0gc2VsZi5fcXVldWVbMF07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoaXMgdGFzayBpZiBhIG1hdGNoaW5nIGV2ZW50IHdhcyBwYXNzZWQuXG4gICAgICAgIGlmICh0YXNrLmV2ZW50ID09PSBldmVudCkge1xuICAgICAgICAgIHNlbGYuX3F1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgc2VsZi5fbG9hZFF1ZXVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSdW4gdGhlIHRhc2sgaWYgbm8gZXZlbnQgdHlwZSBpcyBwYXNzZWQuXG4gICAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgICB0YXNrLmFjdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHBsYXliYWNrIGVuZHMgYXQgdGhlIGVuZCBvZiB0aGUgZHVyYXRpb24uXG4gICAgICogQHBhcmFtICB7U291bmR9IHNvdW5kIFRoZSBzb3VuZCBvYmplY3QgdG8gd29yayB3aXRoLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX2VuZGVkOiBmdW5jdGlvbihzb3VuZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHNwcml0ZSA9IHNvdW5kLl9zcHJpdGU7XG5cbiAgICAgIC8vIElmIHdlIGFyZSB1c2luZyBJRSBhbmQgdGhlcmUgd2FzIG5ldHdvcmsgbGF0ZW5jeSB3ZSBtYXkgYmUgY2xpcHBpbmdcbiAgICAgIC8vIGF1ZGlvIGJlZm9yZSBpdCBjb21wbGV0ZXMgcGxheWluZy4gTGV0cyBjaGVjayB0aGUgbm9kZSB0byBtYWtlIHN1cmUgaXRcbiAgICAgIC8vIGJlbGlldmVzIGl0IGhhcyBjb21wbGV0ZWQsIGJlZm9yZSBlbmRpbmcgdGhlIHBsYXliYWNrLlxuICAgICAgaWYgKCFzZWxmLl93ZWJBdWRpbyAmJiBzb3VuZC5fbm9kZSAmJiAhc291bmQuX25vZGUucGF1c2VkICYmICFzb3VuZC5fbm9kZS5lbmRlZCAmJiBzb3VuZC5fbm9kZS5jdXJyZW50VGltZSA8IHNvdW5kLl9zdG9wKSB7XG4gICAgICAgIHNldFRpbWVvdXQoc2VsZi5fZW5kZWQuYmluZChzZWxmLCBzb3VuZCksIDEwMCk7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBTaG91bGQgdGhpcyBzb3VuZCBsb29wP1xuICAgICAgdmFyIGxvb3AgPSAhIShzb3VuZC5fbG9vcCB8fCBzZWxmLl9zcHJpdGVbc3ByaXRlXVsyXSk7XG5cbiAgICAgIC8vIEZpcmUgdGhlIGVuZGVkIGV2ZW50LlxuICAgICAgc2VsZi5fZW1pdCgnZW5kJywgc291bmQuX2lkKTtcblxuICAgICAgLy8gUmVzdGFydCB0aGUgcGxheWJhY2sgZm9yIEhUTUw1IEF1ZGlvIGxvb3AuXG4gICAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvICYmIGxvb3ApIHtcbiAgICAgICAgc2VsZi5zdG9wKHNvdW5kLl9pZCwgdHJ1ZSkucGxheShzb3VuZC5faWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXN0YXJ0IHRoaXMgdGltZXIgaWYgb24gYSBXZWIgQXVkaW8gbG9vcC5cbiAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBsb29wKSB7XG4gICAgICAgIHNlbGYuX2VtaXQoJ3BsYXknLCBzb3VuZC5faWQpO1xuICAgICAgICBzb3VuZC5fc2VlayA9IHNvdW5kLl9zdGFydCB8fCAwO1xuICAgICAgICBzb3VuZC5fcmF0ZVNlZWsgPSAwO1xuICAgICAgICBzb3VuZC5fcGxheVN0YXJ0ID0gSG93bGVyLmN0eC5jdXJyZW50VGltZTtcblxuICAgICAgICB2YXIgdGltZW91dCA9ICgoc291bmQuX3N0b3AgLSBzb3VuZC5fc3RhcnQpICogMTAwMCkgLyBNYXRoLmFicyhzb3VuZC5fcmF0ZSk7XG4gICAgICAgIHNlbGYuX2VuZFRpbWVyc1tzb3VuZC5faWRdID0gc2V0VGltZW91dChzZWxmLl9lbmRlZC5iaW5kKHNlbGYsIHNvdW5kKSwgdGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1hcmsgdGhlIG5vZGUgYXMgcGF1c2VkLlxuICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmICFsb29wKSB7XG4gICAgICAgIHNvdW5kLl9wYXVzZWQgPSB0cnVlO1xuICAgICAgICBzb3VuZC5fZW5kZWQgPSB0cnVlO1xuICAgICAgICBzb3VuZC5fc2VlayA9IHNvdW5kLl9zdGFydCB8fCAwO1xuICAgICAgICBzb3VuZC5fcmF0ZVNlZWsgPSAwO1xuICAgICAgICBzZWxmLl9jbGVhclRpbWVyKHNvdW5kLl9pZCk7XG5cbiAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGJ1ZmZlciBzb3VyY2UuXG4gICAgICAgIHNlbGYuX2NsZWFuQnVmZmVyKHNvdW5kLl9ub2RlKTtcblxuICAgICAgICAvLyBBdHRlbXB0IHRvIGF1dG8tc3VzcGVuZCBBdWRpb0NvbnRleHQgaWYgbm8gc291bmRzIGFyZSBzdGlsbCBwbGF5aW5nLlxuICAgICAgICBIb3dsZXIuX2F1dG9TdXNwZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdoZW4gdXNpbmcgYSBzcHJpdGUsIGVuZCB0aGUgdHJhY2suXG4gICAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvICYmICFsb29wKSB7XG4gICAgICAgIHNlbGYuc3RvcChzb3VuZC5faWQsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgdGhlIGVuZCB0aW1lciBmb3IgYSBzb3VuZCBwbGF5YmFjay5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFRoZSBzb3VuZCBJRC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9jbGVhclRpbWVyOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoc2VsZi5fZW5kVGltZXJzW2lkXSkge1xuICAgICAgICAvLyBDbGVhciB0aGUgdGltZW91dCBvciByZW1vdmUgdGhlIGVuZGVkIGxpc3RlbmVyLlxuICAgICAgICBpZiAodHlwZW9mIHNlbGYuX2VuZFRpbWVyc1tpZF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5fZW5kVGltZXJzW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcbiAgICAgICAgICBpZiAoc291bmQgJiYgc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgc2VsZi5fZW5kVGltZXJzW2lkXSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzZWxmLl9lbmRUaW1lcnNbaWRdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBzb3VuZCBpZGVudGlmaWVkIGJ5IHRoaXMgSUQsIG9yIHJldHVybiBudWxsLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgU291bmQgSURcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgIFNvdW5kIG9iamVjdCBvciBudWxsLlxuICAgICAqL1xuICAgIF9zb3VuZEJ5SWQ6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgc291bmRzIGFuZCBmaW5kIHRoZSBvbmUgd2l0aCB0aGlzIElELlxuICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX3NvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaWQgPT09IHNlbGYuX3NvdW5kc1tpXS5faWQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5fc291bmRzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gaW5hY3RpdmUgc291bmQgZnJvbSB0aGUgcG9vbCBvciBjcmVhdGUgYSBuZXcgb25lLlxuICAgICAqIEByZXR1cm4ge1NvdW5kfSBTb3VuZCBwbGF5YmFjayBvYmplY3QuXG4gICAgICovXG4gICAgX2luYWN0aXZlU291bmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBzZWxmLl9kcmFpbigpO1xuXG4gICAgICAvLyBGaW5kIHRoZSBmaXJzdCBpbmFjdGl2ZSBub2RlIHRvIHJlY3ljbGUuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5fc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxmLl9zb3VuZHNbaV0uX2VuZGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuX3NvdW5kc1tpXS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIGluYWN0aXZlIG5vZGUgd2FzIGZvdW5kLCBjcmVhdGUgYSBuZXcgb25lLlxuICAgICAgcmV0dXJuIG5ldyBTb3VuZChzZWxmKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRHJhaW4gZXhjZXNzIGluYWN0aXZlIHNvdW5kcyBmcm9tIHRoZSBwb29sLlxuICAgICAqL1xuICAgIF9kcmFpbjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgbGltaXQgPSBzZWxmLl9wb29sO1xuICAgICAgdmFyIGNudCA9IDA7XG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIC8vIElmIHRoZXJlIGFyZSBsZXNzIHNvdW5kcyB0aGFuIHRoZSBtYXggcG9vbCBzaXplLCB3ZSBhcmUgZG9uZS5cbiAgICAgIGlmIChzZWxmLl9zb3VuZHMubGVuZ3RoIDwgbGltaXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDb3VudCB0aGUgbnVtYmVyIG9mIGluYWN0aXZlIHNvdW5kcy5cbiAgICAgIGZvciAoaT0wOyBpPHNlbGYuX3NvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5fc291bmRzW2ldLl9lbmRlZCkge1xuICAgICAgICAgIGNudCsrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBleGNlc3MgaW5hY3RpdmUgc291bmRzLCBnb2luZyBpbiByZXZlcnNlIG9yZGVyLlxuICAgICAgZm9yIChpPXNlbGYuX3NvdW5kcy5sZW5ndGggLSAxOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgaWYgKGNudCA8PSBsaW1pdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLl9zb3VuZHNbaV0uX2VuZGVkKSB7XG4gICAgICAgICAgLy8gRGlzY29ubmVjdCB0aGUgYXVkaW8gc291cmNlIHdoZW4gdXNpbmcgV2ViIEF1ZGlvLlxuICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBzZWxmLl9zb3VuZHNbaV0uX25vZGUpIHtcbiAgICAgICAgICAgIHNlbGYuX3NvdW5kc1tpXS5fbm9kZS5kaXNjb25uZWN0KDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92ZSBzb3VuZHMgdW50aWwgd2UgaGF2ZSB0aGUgcG9vbCBzaXplLlxuICAgICAgICAgIHNlbGYuX3NvdW5kcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgY250LS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBJRCdzIGZyb20gdGhlIHNvdW5kcyBwb29sLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgT25seSByZXR1cm4gb25lIElEIGlmIG9uZSBpcyBwYXNzZWQuXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgIEFycmF5IG9mIElEcy5cbiAgICAgKi9cbiAgICBfZ2V0U291bmRJZHM6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBpZHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX3NvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlkcy5wdXNoKHNlbGYuX3NvdW5kc1tpXS5faWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlkcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbaWRdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHRoZSBzb3VuZCBiYWNrIGludG8gdGhlIGJ1ZmZlciBzb3VyY2UuXG4gICAgICogQHBhcmFtICB7U291bmR9IHNvdW5kIFRoZSBzb3VuZCBvYmplY3QgdG8gd29yayB3aXRoLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX3JlZnJlc2hCdWZmZXI6IGZ1bmN0aW9uKHNvdW5kKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIFNldHVwIHRoZSBidWZmZXIgc291cmNlIGZvciBwbGF5YmFjay5cbiAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZSA9IEhvd2xlci5jdHguY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UuYnVmZmVyID0gY2FjaGVbc2VsZi5fc3JjXTtcblxuICAgICAgLy8gQ29ubmVjdCB0byB0aGUgY29ycmVjdCBub2RlLlxuICAgICAgaWYgKHNvdW5kLl9wYW5uZXIpIHtcbiAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmNvbm5lY3Qoc291bmQuX3Bhbm5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UuY29ubmVjdChzb3VuZC5fbm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldHVwIGxvb3BpbmcgYW5kIHBsYXliYWNrIHJhdGUuXG4gICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UubG9vcCA9IHNvdW5kLl9sb29wO1xuICAgICAgaWYgKHNvdW5kLl9sb29wKSB7XG4gICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wU3RhcnQgPSBzb3VuZC5fc3RhcnQgfHwgMDtcbiAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmxvb3BFbmQgPSBzb3VuZC5fc3RvcCB8fCAwO1xuICAgICAgfVxuICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLnBsYXliYWNrUmF0ZS5zZXRWYWx1ZUF0VGltZShzb3VuZC5fcmF0ZSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQcmV2ZW50IG1lbW9yeSBsZWFrcyBieSBjbGVhbmluZyB1cCB0aGUgYnVmZmVyIHNvdXJjZSBhZnRlciBwbGF5YmFjay5cbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG5vZGUgU291bmQncyBhdWRpbyBub2RlIGNvbnRhaW5pbmcgdGhlIGJ1ZmZlciBzb3VyY2UuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBfY2xlYW5CdWZmZXI6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBpc0lPUyA9IEhvd2xlci5fbmF2aWdhdG9yICYmIEhvd2xlci5fbmF2aWdhdG9yLnZlbmRvci5pbmRleE9mKCdBcHBsZScpID49IDA7XG5cbiAgICAgIGlmIChIb3dsZXIuX3NjcmF0Y2hCdWZmZXIgJiYgbm9kZS5idWZmZXJTb3VyY2UpIHtcbiAgICAgICAgbm9kZS5idWZmZXJTb3VyY2Uub25lbmRlZCA9IG51bGw7XG4gICAgICAgIG5vZGUuYnVmZmVyU291cmNlLmRpc2Nvbm5lY3QoMCk7XG4gICAgICAgIGlmIChpc0lPUykge1xuICAgICAgICAgIHRyeSB7IG5vZGUuYnVmZmVyU291cmNlLmJ1ZmZlciA9IEhvd2xlci5fc2NyYXRjaEJ1ZmZlcjsgfSBjYXRjaChlKSB7fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBub2RlLmJ1ZmZlclNvdXJjZSA9IG51bGw7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHNvdXJjZSB0byBhIDAtc2Vjb25kIHNpbGVuY2UgdG8gc3RvcCBhbnkgZG93bmxvYWRpbmcgKGV4Y2VwdCBpbiBJRSkuXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBub2RlIEF1ZGlvIG5vZGUgdG8gY2xlYXIuXG4gICAgICovXG4gICAgX2NsZWFyU291bmQ6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBjaGVja0lFID0gL01TSUUgfFRyaWRlbnRcXC8vLnRlc3QoSG93bGVyLl9uYXZpZ2F0b3IgJiYgSG93bGVyLl9uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIGlmICghY2hlY2tJRSkge1xuICAgICAgICBub2RlLnNyYyA9ICdkYXRhOmF1ZGlvL3dhdjtiYXNlNjQsVWtsR1JpZ0FBQUJYUVZaRlptMTBJQklBQUFBQkFBRUFSS3dBQUloWUFRQUNBQkFBQUFCa1lYUmhBZ0FBQUFFQSc7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKiBTaW5nbGUgU291bmQgTWV0aG9kcyAqKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogU2V0dXAgdGhlIHNvdW5kIG9iamVjdCwgd2hpY2ggZWFjaCBub2RlIGF0dGFjaGVkIHRvIGEgSG93bCBncm91cCBpcyBjb250YWluZWQgaW4uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBob3dsIFRoZSBIb3dsIHBhcmVudCBncm91cC5cbiAgICovXG4gIHZhciBTb3VuZCA9IGZ1bmN0aW9uKGhvd2wpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSBob3dsO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9O1xuICBTb3VuZC5wcm90b3R5cGUgPSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBhIG5ldyBTb3VuZCBvYmplY3QuXG4gICAgICogQHJldHVybiB7U291bmR9XG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcGFyZW50ID0gc2VsZi5fcGFyZW50O1xuXG4gICAgICAvLyBTZXR1cCB0aGUgZGVmYXVsdCBwYXJhbWV0ZXJzLlxuICAgICAgc2VsZi5fbXV0ZWQgPSBwYXJlbnQuX211dGVkO1xuICAgICAgc2VsZi5fbG9vcCA9IHBhcmVudC5fbG9vcDtcbiAgICAgIHNlbGYuX3ZvbHVtZSA9IHBhcmVudC5fdm9sdW1lO1xuICAgICAgc2VsZi5fcmF0ZSA9IHBhcmVudC5fcmF0ZTtcbiAgICAgIHNlbGYuX3NlZWsgPSAwO1xuICAgICAgc2VsZi5fcGF1c2VkID0gdHJ1ZTtcbiAgICAgIHNlbGYuX2VuZGVkID0gdHJ1ZTtcbiAgICAgIHNlbGYuX3Nwcml0ZSA9ICdfX2RlZmF1bHQnO1xuXG4gICAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgdGhpcyBzb3VuZC5cbiAgICAgIHNlbGYuX2lkID0gKytIb3dsZXIuX2NvdW50ZXI7XG5cbiAgICAgIC8vIEFkZCBpdHNlbGYgdG8gdGhlIHBhcmVudCdzIHBvb2wuXG4gICAgICBwYXJlbnQuX3NvdW5kcy5wdXNoKHNlbGYpO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIG5ldyBub2RlLlxuICAgICAgc2VsZi5jcmVhdGUoKTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbmQgc2V0dXAgYSBuZXcgc291bmQgb2JqZWN0LCB3aGV0aGVyIEhUTUw1IEF1ZGlvIG9yIFdlYiBBdWRpby5cbiAgICAgKiBAcmV0dXJuIHtTb3VuZH1cbiAgICAgKi9cbiAgICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHBhcmVudCA9IHNlbGYuX3BhcmVudDtcbiAgICAgIHZhciB2b2x1bWUgPSAoSG93bGVyLl9tdXRlZCB8fCBzZWxmLl9tdXRlZCB8fCBzZWxmLl9wYXJlbnQuX211dGVkKSA/IDAgOiBzZWxmLl92b2x1bWU7XG5cbiAgICAgIGlmIChwYXJlbnQuX3dlYkF1ZGlvKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZ2FpbiBub2RlIGZvciBjb250cm9sbGluZyB2b2x1bWUgKHRoZSBzb3VyY2Ugd2lsbCBjb25uZWN0IHRvIHRoaXMpLlxuICAgICAgICBzZWxmLl9ub2RlID0gKHR5cGVvZiBIb3dsZXIuY3R4LmNyZWF0ZUdhaW4gPT09ICd1bmRlZmluZWQnKSA/IEhvd2xlci5jdHguY3JlYXRlR2Fpbk5vZGUoKSA6IEhvd2xlci5jdHguY3JlYXRlR2FpbigpO1xuICAgICAgICBzZWxmLl9ub2RlLmdhaW4uc2V0VmFsdWVBdFRpbWUodm9sdW1lLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgc2VsZi5fbm9kZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICBzZWxmLl9ub2RlLmNvbm5lY3QoSG93bGVyLm1hc3RlckdhaW4pO1xuICAgICAgfSBlbHNlIGlmICghSG93bGVyLm5vQXVkaW8pIHtcbiAgICAgICAgLy8gR2V0IGFuIHVubG9ja2VkIEF1ZGlvIG9iamVjdCBmcm9tIHRoZSBwb29sLlxuICAgICAgICBzZWxmLl9ub2RlID0gSG93bGVyLl9vYnRhaW5IdG1sNUF1ZGlvKCk7XG5cbiAgICAgICAgLy8gTGlzdGVuIGZvciBlcnJvcnMgKGh0dHA6Ly9kZXYudzMub3JnL2h0bWw1L3NwZWMtYXV0aG9yLXZpZXcvc3BlYy5odG1sI21lZGlhZXJyb3IpLlxuICAgICAgICBzZWxmLl9lcnJvckZuID0gc2VsZi5fZXJyb3JMaXN0ZW5lci5iaW5kKHNlbGYpO1xuICAgICAgICBzZWxmLl9ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgc2VsZi5fZXJyb3JGbiwgZmFsc2UpO1xuXG4gICAgICAgIC8vIExpc3RlbiBmb3IgJ2NhbnBsYXl0aHJvdWdoJyBldmVudCB0byBsZXQgdXMga25vdyB0aGUgc291bmQgaXMgcmVhZHkuXG4gICAgICAgIHNlbGYuX2xvYWRGbiA9IHNlbGYuX2xvYWRMaXN0ZW5lci5iaW5kKHNlbGYpO1xuICAgICAgICBzZWxmLl9ub2RlLmFkZEV2ZW50TGlzdGVuZXIoSG93bGVyLl9jYW5QbGF5RXZlbnQsIHNlbGYuX2xvYWRGbiwgZmFsc2UpO1xuXG4gICAgICAgIC8vIExpc3RlbiBmb3IgdGhlICdlbmRlZCcgZXZlbnQgb24gdGhlIHNvdW5kIHRvIGFjY291bnQgZm9yIGVkZ2UtY2FzZSB3aGVyZVxuICAgICAgICAvLyBhIGZpbml0ZSBzb3VuZCBoYXMgYSBkdXJhdGlvbiBvZiBJbmZpbml0eS5cbiAgICAgICAgc2VsZi5fZW5kRm4gPSBzZWxmLl9lbmRMaXN0ZW5lci5iaW5kKHNlbGYpO1xuICAgICAgICBzZWxmLl9ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgc2VsZi5fZW5kRm4sIGZhbHNlKTtcblxuICAgICAgICAvLyBTZXR1cCB0aGUgbmV3IGF1ZGlvIG5vZGUuXG4gICAgICAgIHNlbGYuX25vZGUuc3JjID0gcGFyZW50Ll9zcmM7XG4gICAgICAgIHNlbGYuX25vZGUucHJlbG9hZCA9IHBhcmVudC5fcHJlbG9hZCA9PT0gdHJ1ZSA/ICdhdXRvJyA6IHBhcmVudC5fcHJlbG9hZDtcbiAgICAgICAgc2VsZi5fbm9kZS52b2x1bWUgPSB2b2x1bWUgKiBIb3dsZXIudm9sdW1lKCk7XG5cbiAgICAgICAgLy8gQmVnaW4gbG9hZGluZyB0aGUgc291cmNlLlxuICAgICAgICBzZWxmLl9ub2RlLmxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBwYXJhbWV0ZXJzIG9mIHRoaXMgc291bmQgdG8gdGhlIG9yaWdpbmFsIHN0YXRlIChmb3IgcmVjeWNsZSkuXG4gICAgICogQHJldHVybiB7U291bmR9XG4gICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHBhcmVudCA9IHNlbGYuX3BhcmVudDtcblxuICAgICAgLy8gUmVzZXQgYWxsIG9mIHRoZSBwYXJhbWV0ZXJzIG9mIHRoaXMgc291bmQuXG4gICAgICBzZWxmLl9tdXRlZCA9IHBhcmVudC5fbXV0ZWQ7XG4gICAgICBzZWxmLl9sb29wID0gcGFyZW50Ll9sb29wO1xuICAgICAgc2VsZi5fdm9sdW1lID0gcGFyZW50Ll92b2x1bWU7XG4gICAgICBzZWxmLl9yYXRlID0gcGFyZW50Ll9yYXRlO1xuICAgICAgc2VsZi5fc2VlayA9IDA7XG4gICAgICBzZWxmLl9yYXRlU2VlayA9IDA7XG4gICAgICBzZWxmLl9wYXVzZWQgPSB0cnVlO1xuICAgICAgc2VsZi5fZW5kZWQgPSB0cnVlO1xuICAgICAgc2VsZi5fc3ByaXRlID0gJ19fZGVmYXVsdCc7XG5cbiAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IElEIHNvIHRoYXQgaXQgaXNuJ3QgY29uZnVzZWQgd2l0aCB0aGUgcHJldmlvdXMgc291bmQuXG4gICAgICBzZWxmLl9pZCA9ICsrSG93bGVyLl9jb3VudGVyO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSFRNTDUgQXVkaW8gZXJyb3IgbGlzdGVuZXIgY2FsbGJhY2suXG4gICAgICovXG4gICAgX2Vycm9yTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBGaXJlIGFuIGVycm9yIGV2ZW50IGFuZCBwYXNzIGJhY2sgdGhlIGNvZGUuXG4gICAgICBzZWxmLl9wYXJlbnQuX2VtaXQoJ2xvYWRlcnJvcicsIHNlbGYuX2lkLCBzZWxmLl9ub2RlLmVycm9yID8gc2VsZi5fbm9kZS5lcnJvci5jb2RlIDogMCk7XG5cbiAgICAgIC8vIENsZWFyIHRoZSBldmVudCBsaXN0ZW5lci5cbiAgICAgIHNlbGYuX25vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBzZWxmLl9lcnJvckZuLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhUTUw1IEF1ZGlvIGNhbnBsYXl0aHJvdWdoIGxpc3RlbmVyIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIF9sb2FkTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHBhcmVudCA9IHNlbGYuX3BhcmVudDtcblxuICAgICAgLy8gUm91bmQgdXAgdGhlIGR1cmF0aW9uIHRvIGFjY291bnQgZm9yIHRoZSBsb3dlciBwcmVjaXNpb24gaW4gSFRNTDUgQXVkaW8uXG4gICAgICBwYXJlbnQuX2R1cmF0aW9uID0gTWF0aC5jZWlsKHNlbGYuX25vZGUuZHVyYXRpb24gKiAxMCkgLyAxMDtcblxuICAgICAgLy8gU2V0dXAgYSBzcHJpdGUgaWYgbm9uZSBpcyBkZWZpbmVkLlxuICAgICAgaWYgKE9iamVjdC5rZXlzKHBhcmVudC5fc3ByaXRlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcGFyZW50Ll9zcHJpdGUgPSB7X19kZWZhdWx0OiBbMCwgcGFyZW50Ll9kdXJhdGlvbiAqIDEwMDBdfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmVudC5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICAgIHBhcmVudC5fc3RhdGUgPSAnbG9hZGVkJztcbiAgICAgICAgcGFyZW50Ll9lbWl0KCdsb2FkJyk7XG4gICAgICAgIHBhcmVudC5fbG9hZFF1ZXVlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFyIHRoZSBldmVudCBsaXN0ZW5lci5cbiAgICAgIHNlbGYuX25vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihIb3dsZXIuX2NhblBsYXlFdmVudCwgc2VsZi5fbG9hZEZuLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhUTUw1IEF1ZGlvIGVuZGVkIGxpc3RlbmVyIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIF9lbmRMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcGFyZW50ID0gc2VsZi5fcGFyZW50O1xuXG4gICAgICAvLyBPbmx5IGhhbmRsZSB0aGUgYGVuZGVkYGAgZXZlbnQgaWYgdGhlIGR1cmF0aW9uIGlzIEluZmluaXR5LlxuICAgICAgaWYgKHBhcmVudC5fZHVyYXRpb24gPT09IEluZmluaXR5KSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgcGFyZW50IGR1cmF0aW9uIHRvIG1hdGNoIHRoZSByZWFsIGF1ZGlvIGR1cmF0aW9uLlxuICAgICAgICAvLyBSb3VuZCB1cCB0aGUgZHVyYXRpb24gdG8gYWNjb3VudCBmb3IgdGhlIGxvd2VyIHByZWNpc2lvbiBpbiBIVE1MNSBBdWRpby5cbiAgICAgICAgcGFyZW50Ll9kdXJhdGlvbiA9IE1hdGguY2VpbChzZWxmLl9ub2RlLmR1cmF0aW9uICogMTApIC8gMTA7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBzcHJpdGUgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgcmVhbCBkdXJhdGlvbi5cbiAgICAgICAgaWYgKHBhcmVudC5fc3ByaXRlLl9fZGVmYXVsdFsxXSA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICBwYXJlbnQuX3Nwcml0ZS5fX2RlZmF1bHRbMV0gPSBwYXJlbnQuX2R1cmF0aW9uICogMTAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJ1biB0aGUgcmVndWxhciBlbmRlZCBtZXRob2QuXG4gICAgICAgIHBhcmVudC5fZW5kZWQoc2VsZik7XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFyIHRoZSBldmVudCBsaXN0ZW5lciBzaW5jZSB0aGUgZHVyYXRpb24gaXMgbm93IGNvcnJlY3QuXG4gICAgICBzZWxmLl9ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgc2VsZi5fZW5kRm4sIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqIEhlbHBlciBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIHZhciBjYWNoZSA9IHt9O1xuXG4gIC8qKlxuICAgKiBCdWZmZXIgYSBzb3VuZCBmcm9tIFVSTCwgRGF0YSBVUkkgb3IgY2FjaGUgYW5kIGRlY29kZSB0byBhdWRpbyBzb3VyY2UgKFdlYiBBdWRpbyBBUEkpLlxuICAgKiBAcGFyYW0gIHtIb3dsfSBzZWxmXG4gICAqL1xuICB2YXIgbG9hZEJ1ZmZlciA9IGZ1bmN0aW9uKHNlbGYpIHtcbiAgICB2YXIgdXJsID0gc2VsZi5fc3JjO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGJ1ZmZlciBoYXMgYWxyZWFkeSBiZWVuIGNhY2hlZCBhbmQgdXNlIGl0IGluc3RlYWQuXG4gICAgaWYgKGNhY2hlW3VybF0pIHtcbiAgICAgIC8vIFNldCB0aGUgZHVyYXRpb24gZnJvbSB0aGUgY2FjaGUuXG4gICAgICBzZWxmLl9kdXJhdGlvbiA9IGNhY2hlW3VybF0uZHVyYXRpb247XG5cbiAgICAgIC8vIExvYWQgdGhlIHNvdW5kIGludG8gdGhpcyBIb3dsLlxuICAgICAgbG9hZFNvdW5kKHNlbGYpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKC9eZGF0YTpbXjtdKztiYXNlNjQsLy50ZXN0KHVybCkpIHtcbiAgICAgIC8vIERlY29kZSB0aGUgYmFzZTY0IGRhdGEgVVJJIHdpdGhvdXQgWEhSLCBzaW5jZSBzb21lIGJyb3dzZXJzIGRvbid0IHN1cHBvcnQgaXQuXG4gICAgICB2YXIgZGF0YSA9IGF0b2IodXJsLnNwbGl0KCcsJylbMV0pO1xuICAgICAgdmFyIGRhdGFWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaT0wOyBpPGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZGF0YVZpZXdbaV0gPSBkYXRhLmNoYXJDb2RlQXQoaSk7XG4gICAgICB9XG5cbiAgICAgIGRlY29kZUF1ZGlvRGF0YShkYXRhVmlldy5idWZmZXIsIHNlbGYpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMb2FkIHRoZSBidWZmZXIgZnJvbSB0aGUgVVJMLlxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9wZW4oc2VsZi5feGhyLm1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBzZWxmLl94aHIud2l0aENyZWRlbnRpYWxzO1xuICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG5cbiAgICAgIC8vIEFwcGx5IGFueSBjdXN0b20gaGVhZGVycyB0byB0aGUgcmVxdWVzdC5cbiAgICAgIGlmIChzZWxmLl94aHIuaGVhZGVycykge1xuICAgICAgICBPYmplY3Qua2V5cyhzZWxmLl94aHIuaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHNlbGYuX3hoci5oZWFkZXJzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZ2V0IGEgc3VjY2Vzc2Z1bCByZXNwb25zZSBiYWNrLlxuICAgICAgICB2YXIgY29kZSA9ICh4aHIuc3RhdHVzICsgJycpWzBdO1xuICAgICAgICBpZiAoY29kZSAhPT0gJzAnICYmIGNvZGUgIT09ICcyJyAmJiBjb2RlICE9PSAnMycpIHtcbiAgICAgICAgICBzZWxmLl9lbWl0KCdsb2FkZXJyb3InLCBudWxsLCAnRmFpbGVkIGxvYWRpbmcgYXVkaW8gZmlsZSB3aXRoIHN0YXR1czogJyArIHhoci5zdGF0dXMgKyAnLicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlY29kZUF1ZGlvRGF0YSh4aHIucmVzcG9uc2UsIHNlbGYpO1xuICAgICAgfTtcbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGFuIGVycm9yLCBzd2l0Y2ggdG8gSFRNTDUgQXVkaW8uXG4gICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgIHNlbGYuX2h0bWw1ID0gdHJ1ZTtcbiAgICAgICAgICBzZWxmLl93ZWJBdWRpbyA9IGZhbHNlO1xuICAgICAgICAgIHNlbGYuX3NvdW5kcyA9IFtdO1xuICAgICAgICAgIGRlbGV0ZSBjYWNoZVt1cmxdO1xuICAgICAgICAgIHNlbGYubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgc2FmZVhoclNlbmQoeGhyKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNlbmQgdGhlIFhIUiByZXF1ZXN0IHdyYXBwZWQgaW4gYSB0cnkvY2F0Y2guXG4gICAqIEBwYXJhbSAge09iamVjdH0geGhyIFhIUiB0byBzZW5kLlxuICAgKi9cbiAgdmFyIHNhZmVYaHJTZW5kID0gZnVuY3Rpb24oeGhyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHhoci5zZW5kKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgeGhyLm9uZXJyb3IoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERlY29kZSBhdWRpbyBkYXRhIGZyb20gYW4gYXJyYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0gIHtBcnJheUJ1ZmZlcn0gYXJyYXlidWZmZXIgVGhlIGF1ZGlvIGRhdGEuXG4gICAqIEBwYXJhbSAge0hvd2x9ICAgICAgICBzZWxmXG4gICAqL1xuICB2YXIgZGVjb2RlQXVkaW9EYXRhID0gZnVuY3Rpb24oYXJyYXlidWZmZXIsIHNlbGYpIHtcbiAgICAvLyBGaXJlIGEgbG9hZCBlcnJvciBpZiBzb21ldGhpbmcgYnJva2UuXG4gICAgdmFyIGVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLl9lbWl0KCdsb2FkZXJyb3InLCBudWxsLCAnRGVjb2RpbmcgYXVkaW8gZGF0YSBmYWlsZWQuJyk7XG4gICAgfTtcblxuICAgIC8vIExvYWQgdGhlIHNvdW5kIG9uIHN1Y2Nlc3MuXG4gICAgdmFyIHN1Y2Nlc3MgPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgIGlmIChidWZmZXIgJiYgc2VsZi5fc291bmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2FjaGVbc2VsZi5fc3JjXSA9IGJ1ZmZlcjtcbiAgICAgICAgbG9hZFNvdW5kKHNlbGYsIGJ1ZmZlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvcigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBEZWNvZGUgdGhlIGJ1ZmZlciBpbnRvIGFuIGF1ZGlvIHNvdXJjZS5cbiAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIEhvd2xlci5jdHguZGVjb2RlQXVkaW9EYXRhLmxlbmd0aCA9PT0gMSkge1xuICAgICAgSG93bGVyLmN0eC5kZWNvZGVBdWRpb0RhdGEoYXJyYXlidWZmZXIpLnRoZW4oc3VjY2VzcykuY2F0Y2goZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBIb3dsZXIuY3R4LmRlY29kZUF1ZGlvRGF0YShhcnJheWJ1ZmZlciwgc3VjY2VzcywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTb3VuZCBpcyBub3cgbG9hZGVkLCBzbyBmaW5pc2ggc2V0dGluZyBldmVyeXRoaW5nIHVwIGFuZCBmaXJlIHRoZSBsb2FkZWQgZXZlbnQuXG4gICAqIEBwYXJhbSAge0hvd2x9IHNlbGZcbiAgICogQHBhcmFtICB7T2JqZWN0fSBidWZmZXIgVGhlIGRlY29kZWQgYnVmZmVyIHNvdW5kIHNvdXJjZS5cbiAgICovXG4gIHZhciBsb2FkU291bmQgPSBmdW5jdGlvbihzZWxmLCBidWZmZXIpIHtcbiAgICAvLyBTZXQgdGhlIGR1cmF0aW9uLlxuICAgIGlmIChidWZmZXIgJiYgIXNlbGYuX2R1cmF0aW9uKSB7XG4gICAgICBzZWxmLl9kdXJhdGlvbiA9IGJ1ZmZlci5kdXJhdGlvbjtcbiAgICB9XG5cbiAgICAvLyBTZXR1cCBhIHNwcml0ZSBpZiBub25lIGlzIGRlZmluZWQuXG4gICAgaWYgKE9iamVjdC5rZXlzKHNlbGYuX3Nwcml0ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZWxmLl9zcHJpdGUgPSB7X19kZWZhdWx0OiBbMCwgc2VsZi5fZHVyYXRpb24gKiAxMDAwXX07XG4gICAgfVxuXG4gICAgLy8gRmlyZSB0aGUgbG9hZGVkIGV2ZW50LlxuICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgIHNlbGYuX3N0YXRlID0gJ2xvYWRlZCc7XG4gICAgICBzZWxmLl9lbWl0KCdsb2FkJyk7XG4gICAgICBzZWxmLl9sb2FkUXVldWUoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBhdWRpbyBjb250ZXh0IHdoZW4gYXZhaWxhYmxlLCBvciBzd2l0Y2ggdG8gSFRNTDUgQXVkaW8gbW9kZS5cbiAgICovXG4gIHZhciBzZXR1cEF1ZGlvQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIHdlIGhhdmUgYWxyZWFkeSBkZXRlY3RlZCB0aGF0IFdlYiBBdWRpbyBpc24ndCBzdXBwb3J0ZWQsIGRvbid0IHJ1biB0aGlzIHN0ZXAgYWdhaW4uXG4gICAgaWYgKCFIb3dsZXIudXNpbmdXZWJBdWRpbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHdlIGFyZSB1c2luZyBXZWIgQXVkaW8gYW5kIHNldHVwIHRoZSBBdWRpb0NvbnRleHQgaWYgd2UgYXJlLlxuICAgIHRyeSB7XG4gICAgICBpZiAodHlwZW9mIEF1ZGlvQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgSG93bGVyLmN0eCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHdlYmtpdEF1ZGlvQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgSG93bGVyLmN0eCA9IG5ldyB3ZWJraXRBdWRpb0NvbnRleHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEhvd2xlci51c2luZ1dlYkF1ZGlvID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBIb3dsZXIudXNpbmdXZWJBdWRpbyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBhdWRpbyBjb250ZXh0IGNyZWF0aW9uIHN0aWxsIGZhaWxlZCwgc2V0IHVzaW5nIHdlYiBhdWRpbyB0byBmYWxzZS5cbiAgICBpZiAoIUhvd2xlci5jdHgpIHtcbiAgICAgIEhvd2xlci51c2luZ1dlYkF1ZGlvID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgYSB3ZWJ2aWV3IGlzIGJlaW5nIHVzZWQgb24gaU9TOCBvciBlYXJsaWVyIChyYXRoZXIgdGhhbiB0aGUgYnJvd3NlcikuXG4gICAgLy8gSWYgaXQgaXMsIGRpc2FibGUgV2ViIEF1ZGlvIGFzIGl0IGNhdXNlcyBjcmFzaGluZy5cbiAgICB2YXIgaU9TID0gKC9pUChob25lfG9kfGFkKS8udGVzdChIb3dsZXIuX25hdmlnYXRvciAmJiBIb3dsZXIuX25hdmlnYXRvci5wbGF0Zm9ybSkpO1xuICAgIHZhciBhcHBWZXJzaW9uID0gSG93bGVyLl9uYXZpZ2F0b3IgJiYgSG93bGVyLl9uYXZpZ2F0b3IuYXBwVmVyc2lvbi5tYXRjaCgvT1MgKFxcZCspXyhcXGQrKV8/KFxcZCspPy8pO1xuICAgIHZhciB2ZXJzaW9uID0gYXBwVmVyc2lvbiA/IHBhcnNlSW50KGFwcFZlcnNpb25bMV0sIDEwKSA6IG51bGw7XG4gICAgaWYgKGlPUyAmJiB2ZXJzaW9uICYmIHZlcnNpb24gPCA5KSB7XG4gICAgICB2YXIgc2FmYXJpID0gL3NhZmFyaS8udGVzdChIb3dsZXIuX25hdmlnYXRvciAmJiBIb3dsZXIuX25hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICBpZiAoSG93bGVyLl9uYXZpZ2F0b3IgJiYgIXNhZmFyaSkge1xuICAgICAgICBIb3dsZXIudXNpbmdXZWJBdWRpbyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhbmQgZXhwb3NlIHRoZSBtYXN0ZXIgR2Fpbk5vZGUgd2hlbiB1c2luZyBXZWIgQXVkaW8gKHVzZWZ1bCBmb3IgcGx1Z2lucyBvciBhZHZhbmNlZCB1c2FnZSkuXG4gICAgaWYgKEhvd2xlci51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICBIb3dsZXIubWFzdGVyR2FpbiA9ICh0eXBlb2YgSG93bGVyLmN0eC5jcmVhdGVHYWluID09PSAndW5kZWZpbmVkJykgPyBIb3dsZXIuY3R4LmNyZWF0ZUdhaW5Ob2RlKCkgOiBIb3dsZXIuY3R4LmNyZWF0ZUdhaW4oKTtcbiAgICAgIEhvd2xlci5tYXN0ZXJHYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUoSG93bGVyLl9tdXRlZCA/IDAgOiBIb3dsZXIuX3ZvbHVtZSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICBIb3dsZXIubWFzdGVyR2Fpbi5jb25uZWN0KEhvd2xlci5jdHguZGVzdGluYXRpb24pO1xuICAgIH1cblxuICAgIC8vIFJlLXJ1biB0aGUgc2V0dXAgb24gSG93bGVyLlxuICAgIEhvd2xlci5fc2V0dXAoKTtcbiAgfTtcblxuICAvLyBBZGQgc3VwcG9ydCBmb3IgQU1EIChBc3luY2hyb25vdXMgTW9kdWxlIERlZmluaXRpb24pIGxpYnJhcmllcyBzdWNoIGFzIHJlcXVpcmUuanMuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgSG93bGVyOiBIb3dsZXIsXG4gICAgICAgIEhvd2w6IEhvd2xcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvLyBBZGQgc3VwcG9ydCBmb3IgQ29tbW9uSlMgbGlicmFyaWVzIHN1Y2ggYXMgYnJvd3NlcmlmeS5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGV4cG9ydHMuSG93bGVyID0gSG93bGVyO1xuICAgIGV4cG9ydHMuSG93bCA9IEhvd2w7XG4gIH1cblxuICAvLyBBZGQgdG8gZ2xvYmFsIGluIE5vZGUuanMgKGZvciB0ZXN0aW5nLCBldGMpLlxuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuSG93bGVyR2xvYmFsID0gSG93bGVyR2xvYmFsO1xuICAgIGdsb2JhbC5Ib3dsZXIgPSBIb3dsZXI7XG4gICAgZ2xvYmFsLkhvd2wgPSBIb3dsO1xuICAgIGdsb2JhbC5Tb3VuZCA9IFNvdW5kO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7ICAvLyBEZWZpbmUgZ2xvYmFsbHkgaW4gY2FzZSBBTUQgaXMgbm90IGF2YWlsYWJsZSBvciB1bnVzZWQuXG4gICAgd2luZG93Lkhvd2xlckdsb2JhbCA9IEhvd2xlckdsb2JhbDtcbiAgICB3aW5kb3cuSG93bGVyID0gSG93bGVyO1xuICAgIHdpbmRvdy5Ib3dsID0gSG93bDtcbiAgICB3aW5kb3cuU291bmQgPSBTb3VuZDtcbiAgfVxufSkoKTtcblxuXG4vKiFcbiAqICBTcGF0aWFsIFBsdWdpbiAtIEFkZHMgc3VwcG9ydCBmb3Igc3RlcmVvIGFuZCAzRCBhdWRpbyB3aGVyZSBXZWIgQXVkaW8gaXMgc3VwcG9ydGVkLlxuICogIFxuICogIGhvd2xlci5qcyB2Mi4yLjNcbiAqICBob3dsZXJqcy5jb21cbiAqXG4gKiAgKGMpIDIwMTMtMjAyMCwgSmFtZXMgU2ltcHNvbiBvZiBHb2xkRmlyZSBTdHVkaW9zXG4gKiAgZ29sZGZpcmVzdHVkaW9zLmNvbVxuICpcbiAqICBNSVQgTGljZW5zZVxuICovXG5cbihmdW5jdGlvbigpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gU2V0dXAgZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlLl9wb3MgPSBbMCwgMCwgMF07XG4gIEhvd2xlckdsb2JhbC5wcm90b3R5cGUuX29yaWVudGF0aW9uID0gWzAsIDAsIC0xLCAwLCAxLCAwXTtcblxuICAvKiogR2xvYmFsIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gdXBkYXRlIHRoZSBzdGVyZW8gcGFubmluZyBwb3NpdGlvbiBvZiBhbGwgY3VycmVudCBIb3dscy5cbiAgICogRnV0dXJlIEhvd2xzIHdpbGwgbm90IHVzZSB0aGlzIHZhbHVlIHVubGVzcyBleHBsaWNpdGx5IHNldC5cbiAgICogQHBhcmFtICB7TnVtYmVyfSBwYW4gQSB2YWx1ZSBvZiAtMS4wIGlzIGFsbCB0aGUgd2F5IGxlZnQgYW5kIDEuMCBpcyBhbGwgdGhlIHdheSByaWdodC5cbiAgICogQHJldHVybiB7SG93bGVyL051bWJlcn0gICAgIFNlbGYgb3IgY3VycmVudCBzdGVyZW8gcGFubmluZyB2YWx1ZS5cbiAgICovXG4gIEhvd2xlckdsb2JhbC5wcm90b3R5cGUuc3RlcmVvID0gZnVuY3Rpb24ocGFuKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gU3RvcCByaWdodCBoZXJlIGlmIG5vdCB1c2luZyBXZWIgQXVkaW8uXG4gICAgaWYgKCFzZWxmLmN0eCB8fCAhc2VsZi5jdHgubGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgSG93bHMgYW5kIHVwZGF0ZSB0aGVpciBzdGVyZW8gcGFubmluZy5cbiAgICBmb3IgKHZhciBpPXNlbGYuX2hvd2xzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgIHNlbGYuX2hvd2xzW2ldLnN0ZXJlbyhwYW4pO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQvc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIgaW4gM0QgY2FydGVzaWFuIHNwYWNlLiBTb3VuZHMgdXNpbmdcbiAgICogM0QgcG9zaXRpb24gd2lsbCBiZSByZWxhdGl2ZSB0byB0aGUgbGlzdGVuZXIncyBwb3NpdGlvbi5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB4IFRoZSB4LXBvc2l0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5IFRoZSB5LXBvc2l0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB6IFRoZSB6LXBvc2l0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHJldHVybiB7SG93bGVyL0FycmF5fSAgIFNlbGYgb3IgY3VycmVudCBsaXN0ZW5lciBwb3NpdGlvbi5cbiAgICovXG4gIEhvd2xlckdsb2JhbC5wcm90b3R5cGUucG9zID0gZnVuY3Rpb24oeCwgeSwgeikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5jdHggfHwgIXNlbGYuY3R4Lmxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHRzIGZvciBvcHRpb25hbCAneScgJiAneicuXG4gICAgeSA9ICh0eXBlb2YgeSAhPT0gJ251bWJlcicpID8gc2VsZi5fcG9zWzFdIDogeTtcbiAgICB6ID0gKHR5cGVvZiB6ICE9PSAnbnVtYmVyJykgPyBzZWxmLl9wb3NbMl0gOiB6O1xuXG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgc2VsZi5fcG9zID0gW3gsIHksIHpdO1xuXG4gICAgICBpZiAodHlwZW9mIHNlbGYuY3R4Lmxpc3RlbmVyLnBvc2l0aW9uWCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5jdHgubGlzdGVuZXIucG9zaXRpb25YLnNldFRhcmdldEF0VGltZShzZWxmLl9wb3NbMF0sIEhvd2xlci5jdHguY3VycmVudFRpbWUsIDAuMSk7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnBvc2l0aW9uWS5zZXRUYXJnZXRBdFRpbWUoc2VsZi5fcG9zWzFdLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lLCAwLjEpO1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5wb3NpdGlvblouc2V0VGFyZ2V0QXRUaW1lKHNlbGYuX3Bvc1syXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSwgMC4xKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnNldFBvc2l0aW9uKHNlbGYuX3Bvc1swXSwgc2VsZi5fcG9zWzFdLCBzZWxmLl9wb3NbMl0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2VsZi5fcG9zO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQvc2V0IHRoZSBkaXJlY3Rpb24gdGhlIGxpc3RlbmVyIGlzIHBvaW50aW5nIGluIHRoZSAzRCBjYXJ0ZXNpYW4gc3BhY2UuXG4gICAqIEEgZnJvbnQgYW5kIHVwIHZlY3RvciBtdXN0IGJlIHByb3ZpZGVkLiBUaGUgZnJvbnQgaXMgdGhlIGRpcmVjdGlvbiB0aGVcbiAgICogZmFjZSBvZiB0aGUgbGlzdGVuZXIgaXMgcG9pbnRpbmcsIGFuZCB1cCBpcyB0aGUgZGlyZWN0aW9uIHRoZSB0b3Agb2YgdGhlXG4gICAqIGxpc3RlbmVyIGlzIHBvaW50aW5nLiBUaHVzLCB0aGVzZSB2YWx1ZXMgYXJlIGV4cGVjdGVkIHRvIGJlIGF0IHJpZ2h0IGFuZ2xlc1xuICAgKiBmcm9tIGVhY2ggb3RoZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geCAgIFRoZSB4LW9yaWVudGF0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5ICAgVGhlIHktb3JpZW50YXRpb24gb2YgdGhlIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHogICBUaGUgei1vcmllbnRhdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geFVwIFRoZSB4LW9yaWVudGF0aW9uIG9mIHRoZSB0b3Agb2YgdGhlIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHlVcCBUaGUgeS1vcmllbnRhdGlvbiBvZiB0aGUgdG9wIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB6VXAgVGhlIHotb3JpZW50YXRpb24gb2YgdGhlIHRvcCBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge0hvd2xlci9BcnJheX0gICAgIFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCBvcmllbnRhdGlvbiB2ZWN0b3JzLlxuICAgKi9cbiAgSG93bGVyR2xvYmFsLnByb3RvdHlwZS5vcmllbnRhdGlvbiA9IGZ1bmN0aW9uKHgsIHksIHosIHhVcCwgeVVwLCB6VXApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuY3R4IHx8ICFzZWxmLmN0eC5saXN0ZW5lcikge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0cyBmb3Igb3B0aW9uYWwgJ3knICYgJ3onLlxuICAgIHZhciBvciA9IHNlbGYuX29yaWVudGF0aW9uO1xuICAgIHkgPSAodHlwZW9mIHkgIT09ICdudW1iZXInKSA/IG9yWzFdIDogeTtcbiAgICB6ID0gKHR5cGVvZiB6ICE9PSAnbnVtYmVyJykgPyBvclsyXSA6IHo7XG4gICAgeFVwID0gKHR5cGVvZiB4VXAgIT09ICdudW1iZXInKSA/IG9yWzNdIDogeFVwO1xuICAgIHlVcCA9ICh0eXBlb2YgeVVwICE9PSAnbnVtYmVyJykgPyBvcls0XSA6IHlVcDtcbiAgICB6VXAgPSAodHlwZW9mIHpVcCAhPT0gJ251bWJlcicpID8gb3JbNV0gOiB6VXA7XG5cbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICBzZWxmLl9vcmllbnRhdGlvbiA9IFt4LCB5LCB6LCB4VXAsIHlVcCwgelVwXTtcblxuICAgICAgaWYgKHR5cGVvZiBzZWxmLmN0eC5saXN0ZW5lci5mb3J3YXJkWCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5jdHgubGlzdGVuZXIuZm9yd2FyZFguc2V0VGFyZ2V0QXRUaW1lKHgsIEhvd2xlci5jdHguY3VycmVudFRpbWUsIDAuMSk7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLmZvcndhcmRZLnNldFRhcmdldEF0VGltZSh5LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lLCAwLjEpO1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5mb3J3YXJkWi5zZXRUYXJnZXRBdFRpbWUoeiwgSG93bGVyLmN0eC5jdXJyZW50VGltZSwgMC4xKTtcbiAgICAgICAgc2VsZi5jdHgubGlzdGVuZXIudXBYLnNldFRhcmdldEF0VGltZSh4VXAsIEhvd2xlci5jdHguY3VycmVudFRpbWUsIDAuMSk7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnVwWS5zZXRUYXJnZXRBdFRpbWUoeVVwLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lLCAwLjEpO1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci51cFouc2V0VGFyZ2V0QXRUaW1lKHpVcCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSwgMC4xKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnNldE9yaWVudGF0aW9uKHgsIHksIHosIHhVcCwgeVVwLCB6VXApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgLyoqIEdyb3VwIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgcHJvcGVydGllcyB0byB0aGUgY29yZSBpbml0LlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gX3N1cGVyIENvcmUgaW5pdCBtZXRob2QuXG4gICAqIEByZXR1cm4ge0hvd2x9XG4gICAqL1xuICBIb3dsLnByb3RvdHlwZS5pbml0ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbihvKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIFNldHVwIHVzZXItZGVmaW5lZCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gICAgICBzZWxmLl9vcmllbnRhdGlvbiA9IG8ub3JpZW50YXRpb24gfHwgWzEsIDAsIDBdO1xuICAgICAgc2VsZi5fc3RlcmVvID0gby5zdGVyZW8gfHwgbnVsbDtcbiAgICAgIHNlbGYuX3BvcyA9IG8ucG9zIHx8IG51bGw7XG4gICAgICBzZWxmLl9wYW5uZXJBdHRyID0ge1xuICAgICAgICBjb25lSW5uZXJBbmdsZTogdHlwZW9mIG8uY29uZUlubmVyQW5nbGUgIT09ICd1bmRlZmluZWQnID8gby5jb25lSW5uZXJBbmdsZSA6IDM2MCxcbiAgICAgICAgY29uZU91dGVyQW5nbGU6IHR5cGVvZiBvLmNvbmVPdXRlckFuZ2xlICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZU91dGVyQW5nbGUgOiAzNjAsXG4gICAgICAgIGNvbmVPdXRlckdhaW46IHR5cGVvZiBvLmNvbmVPdXRlckdhaW4gIT09ICd1bmRlZmluZWQnID8gby5jb25lT3V0ZXJHYWluIDogMCxcbiAgICAgICAgZGlzdGFuY2VNb2RlbDogdHlwZW9mIG8uZGlzdGFuY2VNb2RlbCAhPT0gJ3VuZGVmaW5lZCcgPyBvLmRpc3RhbmNlTW9kZWwgOiAnaW52ZXJzZScsXG4gICAgICAgIG1heERpc3RhbmNlOiB0eXBlb2Ygby5tYXhEaXN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLm1heERpc3RhbmNlIDogMTAwMDAsXG4gICAgICAgIHBhbm5pbmdNb2RlbDogdHlwZW9mIG8ucGFubmluZ01vZGVsICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmluZ01vZGVsIDogJ0hSVEYnLFxuICAgICAgICByZWZEaXN0YW5jZTogdHlwZW9mIG8ucmVmRGlzdGFuY2UgIT09ICd1bmRlZmluZWQnID8gby5yZWZEaXN0YW5jZSA6IDEsXG4gICAgICAgIHJvbGxvZmZGYWN0b3I6IHR5cGVvZiBvLnJvbGxvZmZGYWN0b3IgIT09ICd1bmRlZmluZWQnID8gby5yb2xsb2ZmRmFjdG9yIDogMVxuICAgICAgfTtcblxuICAgICAgLy8gU2V0dXAgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgc2VsZi5fb25zdGVyZW8gPSBvLm9uc3RlcmVvID8gW3tmbjogby5vbnN0ZXJlb31dIDogW107XG4gICAgICBzZWxmLl9vbnBvcyA9IG8ub25wb3MgPyBbe2ZuOiBvLm9ucG9zfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ub3JpZW50YXRpb24gPSBvLm9ub3JpZW50YXRpb24gPyBbe2ZuOiBvLm9ub3JpZW50YXRpb259XSA6IFtdO1xuXG4gICAgICAvLyBDb21wbGV0ZSBpbml0aWxpemF0aW9uIHdpdGggaG93bGVyLmpzIGNvcmUncyBpbml0IGZ1bmN0aW9uLlxuICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIG8pO1xuICAgIH07XG4gIH0pKEhvd2wucHJvdG90eXBlLmluaXQpO1xuXG4gIC8qKlxuICAgKiBHZXQvc2V0IHRoZSBzdGVyZW8gcGFubmluZyBvZiB0aGUgYXVkaW8gc291cmNlIGZvciB0aGlzIHNvdW5kIG9yIGFsbCBpbiB0aGUgZ3JvdXAuXG4gICAqIEBwYXJhbSAge051bWJlcn0gcGFuICBBIHZhbHVlIG9mIC0xLjAgaXMgYWxsIHRoZSB3YXkgbGVmdCBhbmQgMS4wIGlzIGFsbCB0aGUgd2F5IHJpZ2h0LlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIChvcHRpb25hbCkgVGhlIHNvdW5kIElELiBJZiBub25lIGlzIHBhc3NlZCwgYWxsIGluIGdyb3VwIHdpbGwgYmUgdXBkYXRlZC5cbiAgICogQHJldHVybiB7SG93bC9OdW1iZXJ9ICAgIFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCBzdGVyZW8gcGFubmluZyB2YWx1ZS5cbiAgICovXG4gIEhvd2wucHJvdG90eXBlLnN0ZXJlbyA9IGZ1bmN0aW9uKHBhbiwgaWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIGNoYW5nZSBzdGVyZW8gcGFuIHdoZW4gY2FwYWJsZS5cbiAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgZXZlbnQ6ICdzdGVyZW8nLFxuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYuc3RlcmVvKHBhbiwgaWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIFBhbm5lclN0ZXJlb05vZGUgc3VwcG9ydCBhbmQgZmFsbGJhY2sgdG8gUGFubmVyTm9kZSBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuICAgIHZhciBwYW5uZXJUeXBlID0gKHR5cGVvZiBIb3dsZXIuY3R4LmNyZWF0ZVN0ZXJlb1Bhbm5lciA9PT0gJ3VuZGVmaW5lZCcpID8gJ3NwYXRpYWwnIDogJ3N0ZXJlbyc7XG5cbiAgICAvLyBTZXR1cCB0aGUgZ3JvdXAncyBzdGVyZW8gcGFubmluZyBpZiBubyBJRCBpcyBwYXNzZWQuXG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFJldHVybiB0aGUgZ3JvdXAncyBzdGVyZW8gcGFubmluZyBpZiBubyBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQuXG4gICAgICBpZiAodHlwZW9mIHBhbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgc2VsZi5fc3RlcmVvID0gcGFuO1xuICAgICAgICBzZWxmLl9wb3MgPSBbcGFuLCAwLCAwXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzZWxmLl9zdGVyZW87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBzdHJlbyBwYW5uaW5nIG9mIG9uZSBvciBhbGwgc291bmRzIGluIGdyb3VwLlxuICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYW4gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgc291bmQuX3N0ZXJlbyA9IHBhbjtcbiAgICAgICAgICBzb3VuZC5fcG9zID0gW3BhbiwgMCwgMF07XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGFyZSBmYWxsaW5nIGJhY2ssIG1ha2Ugc3VyZSB0aGUgcGFubmluZ01vZGVsIGlzIGVxdWFscG93ZXIuXG4gICAgICAgICAgICBzb3VuZC5fcGFubmVyQXR0ci5wYW5uaW5nTW9kZWwgPSAnZXF1YWxwb3dlcic7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgcGFubmVyIHNldHVwIGFuZCBjcmVhdGUgYSBuZXcgb25lIGlmIG5vdC5cbiAgICAgICAgICAgIGlmICghc291bmQuX3Bhbm5lciB8fCAhc291bmQuX3Bhbm5lci5wYW4pIHtcbiAgICAgICAgICAgICAgc2V0dXBQYW5uZXIoc291bmQsIHBhbm5lclR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFubmVyVHlwZSA9PT0gJ3NwYXRpYWwnKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQuX3Bhbm5lci5wb3NpdGlvblggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblguc2V0VmFsdWVBdFRpbWUocGFuLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWS5zZXRWYWx1ZUF0VGltZSgwLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWi5zZXRWYWx1ZUF0VGltZSgwLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnNldFBvc2l0aW9uKHBhbiwgMCwgMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIucGFuLnNldFZhbHVlQXRUaW1lKHBhbiwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fZW1pdCgnc3RlcmVvJywgc291bmQuX2lkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc291bmQuX3N0ZXJlbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQvc2V0IHRoZSAzRCBzcGF0aWFsIHBvc2l0aW9uIG9mIHRoZSBhdWRpbyBzb3VyY2UgZm9yIHRoaXMgc291bmQgb3IgZ3JvdXAgcmVsYXRpdmUgdG8gdGhlIGdsb2JhbCBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB4ICBUaGUgeC1wb3NpdGlvbiBvZiB0aGUgYXVkaW8gc291cmNlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHkgIFRoZSB5LXBvc2l0aW9uIG9mIHRoZSBhdWRpbyBzb3VyY2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0geiAgVGhlIHotcG9zaXRpb24gb2YgdGhlIGF1ZGlvIHNvdXJjZS5cbiAgICogQHBhcmFtICB7TnVtYmVyfSBpZCAob3B0aW9uYWwpIFRoZSBzb3VuZCBJRC4gSWYgbm9uZSBpcyBwYXNzZWQsIGFsbCBpbiBncm91cCB3aWxsIGJlIHVwZGF0ZWQuXG4gICAqIEByZXR1cm4ge0hvd2wvQXJyYXl9ICAgIFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCAzRCBzcGF0aWFsIHBvc2l0aW9uOiBbeCwgeSwgel0uXG4gICAqL1xuICBIb3dsLnByb3RvdHlwZS5wb3MgPSBmdW5jdGlvbih4LCB5LCB6LCBpZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gY2hhbmdlIHBvc2l0aW9uIHdoZW4gY2FwYWJsZS5cbiAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgZXZlbnQ6ICdwb3MnLFxuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYucG9zKHgsIHksIHosIGlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdHMgZm9yIG9wdGlvbmFsICd5JyAmICd6Jy5cbiAgICB5ID0gKHR5cGVvZiB5ICE9PSAnbnVtYmVyJykgPyAwIDogeTtcbiAgICB6ID0gKHR5cGVvZiB6ICE9PSAnbnVtYmVyJykgPyAtMC41IDogejtcblxuICAgIC8vIFNldHVwIHRoZSBncm91cCdzIHNwYXRpYWwgcG9zaXRpb24gaWYgbm8gSUQgaXMgcGFzc2VkLlxuICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBSZXR1cm4gdGhlIGdyb3VwJ3Mgc3BhdGlhbCBwb3NpdGlvbiBpZiBubyBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQuXG4gICAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNlbGYuX3BvcyA9IFt4LCB5LCB6XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzZWxmLl9wb3M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBzcGF0aWFsIHBvc2l0aW9uIG9mIG9uZSBvciBhbGwgc291bmRzIGluIGdyb3VwLlxuICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHNvdW5kLl9wb3MgPSBbeCwgeSwgel07XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgcGFubmVyIHNldHVwIGFuZCBjcmVhdGUgYSBuZXcgb25lIGlmIG5vdC5cbiAgICAgICAgICAgIGlmICghc291bmQuX3Bhbm5lciB8fCBzb3VuZC5fcGFubmVyLnBhbikge1xuICAgICAgICAgICAgICBzZXR1cFBhbm5lcihzb3VuZCwgJ3NwYXRpYWwnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblguc2V0VmFsdWVBdFRpbWUoeCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIucG9zaXRpb25ZLnNldFZhbHVlQXRUaW1lKHksIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWi5zZXRWYWx1ZUF0VGltZSh6LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIuc2V0UG9zaXRpb24oeCwgeSwgeik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fZW1pdCgncG9zJywgc291bmQuX2lkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc291bmQuX3BvcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQvc2V0IHRoZSBkaXJlY3Rpb24gdGhlIGF1ZGlvIHNvdXJjZSBpcyBwb2ludGluZyBpbiB0aGUgM0QgY2FydGVzaWFuIGNvb3JkaW5hdGVcbiAgICogc3BhY2UuIERlcGVuZGluZyBvbiBob3cgZGlyZWN0aW9uIHRoZSBzb3VuZCBpcywgYmFzZWQgb24gdGhlIGBjb25lYCBhdHRyaWJ1dGVzLFxuICAgKiBhIHNvdW5kIHBvaW50aW5nIGF3YXkgZnJvbSB0aGUgbGlzdGVuZXIgY2FuIGJlIHF1aWV0IG9yIHNpbGVudC5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB4ICBUaGUgeC1vcmllbnRhdGlvbiBvZiB0aGUgc291cmNlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHkgIFRoZSB5LW9yaWVudGF0aW9uIG9mIHRoZSBzb3VyY2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0geiAgVGhlIHotb3JpZW50YXRpb24gb2YgdGhlIHNvdXJjZS5cbiAgICogQHBhcmFtICB7TnVtYmVyfSBpZCAob3B0aW9uYWwpIFRoZSBzb3VuZCBJRC4gSWYgbm9uZSBpcyBwYXNzZWQsIGFsbCBpbiBncm91cCB3aWxsIGJlIHVwZGF0ZWQuXG4gICAqIEByZXR1cm4ge0hvd2wvQXJyYXl9ICAgIFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCAzRCBzcGF0aWFsIG9yaWVudGF0aW9uOiBbeCwgeSwgel0uXG4gICAqL1xuICBIb3dsLnByb3RvdHlwZS5vcmllbnRhdGlvbiA9IGZ1bmN0aW9uKHgsIHksIHosIGlkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gU3RvcCByaWdodCBoZXJlIGlmIG5vdCB1c2luZyBXZWIgQXVkaW8uXG4gICAgaWYgKCFzZWxmLl93ZWJBdWRpbykge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBjaGFuZ2Ugb3JpZW50YXRpb24gd2hlbiBjYXBhYmxlLlxuICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICBldmVudDogJ29yaWVudGF0aW9uJyxcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLm9yaWVudGF0aW9uKHgsIHksIHosIGlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdHMgZm9yIG9wdGlvbmFsICd5JyAmICd6Jy5cbiAgICB5ID0gKHR5cGVvZiB5ICE9PSAnbnVtYmVyJykgPyBzZWxmLl9vcmllbnRhdGlvblsxXSA6IHk7XG4gICAgeiA9ICh0eXBlb2YgeiAhPT0gJ251bWJlcicpID8gc2VsZi5fb3JpZW50YXRpb25bMl0gOiB6O1xuXG4gICAgLy8gU2V0dXAgdGhlIGdyb3VwJ3Mgc3BhdGlhbCBvcmllbnRhdGlvbiBpZiBubyBJRCBpcyBwYXNzZWQuXG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFJldHVybiB0aGUgZ3JvdXAncyBzcGF0aWFsIG9yaWVudGF0aW9uIGlmIG5vIHBhcmFtZXRlcnMgYXJlIHBhc3NlZC5cbiAgICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgc2VsZi5fb3JpZW50YXRpb24gPSBbeCwgeSwgel07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc2VsZi5fb3JpZW50YXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBzcGF0aWFsIG9yaWVudGF0aW9uIG9mIG9uZSBvciBhbGwgc291bmRzIGluIGdyb3VwLlxuICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHNvdW5kLl9vcmllbnRhdGlvbiA9IFt4LCB5LCB6XTtcblxuICAgICAgICAgIGlmIChzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBwYW5uZXIgc2V0dXAgYW5kIGNyZWF0ZSBhIG5ldyBvbmUgaWYgbm90LlxuICAgICAgICAgICAgaWYgKCFzb3VuZC5fcGFubmVyKSB7XG4gICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgcG9zaXRpb24gdG8gc2V0dXAgdGhlIG5vZGUgd2l0aC5cbiAgICAgICAgICAgICAgaWYgKCFzb3VuZC5fcG9zKSB7XG4gICAgICAgICAgICAgICAgc291bmQuX3BvcyA9IHNlbGYuX3BvcyB8fCBbMCwgMCwgLTAuNV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzZXR1cFBhbm5lcihzb3VuZCwgJ3NwYXRpYWwnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5vcmllbnRhdGlvblguc2V0VmFsdWVBdFRpbWUoeCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIub3JpZW50YXRpb25ZLnNldFZhbHVlQXRUaW1lKHksIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWi5zZXRWYWx1ZUF0VGltZSh6LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIuc2V0T3JpZW50YXRpb24oeCwgeSwgeik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fZW1pdCgnb3JpZW50YXRpb24nLCBzb3VuZC5faWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzb3VuZC5fb3JpZW50YXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgcGFubmVyIG5vZGUncyBhdHRyaWJ1dGVzIGZvciBhIHNvdW5kIG9yIGdyb3VwIG9mIHNvdW5kcy5cbiAgICogVGhpcyBtZXRob2QgY2FuIG9wdGlvbmFsbCB0YWtlIDAsIDEgb3IgMiBhcmd1bWVudHMuXG4gICAqICAgcGFubmVyQXR0cigpIC0+IFJldHVybnMgdGhlIGdyb3VwJ3MgdmFsdWVzLlxuICAgKiAgIHBhbm5lckF0dHIoaWQpIC0+IFJldHVybnMgdGhlIHNvdW5kIGlkJ3MgdmFsdWVzLlxuICAgKiAgIHBhbm5lckF0dHIobykgLT4gU2V0J3MgdGhlIHZhbHVlcyBvZiBhbGwgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICogICBwYW5uZXJBdHRyKG8sIGlkKSAtPiBTZXQncyB0aGUgdmFsdWVzIG9mIHBhc3NlZCBzb3VuZCBpZC5cbiAgICpcbiAgICogICBBdHRyaWJ1dGVzOlxuICAgKiAgICAgY29uZUlubmVyQW5nbGUgLSAoMzYwIGJ5IGRlZmF1bHQpIEEgcGFyYW1ldGVyIGZvciBkaXJlY3Rpb25hbCBhdWRpbyBzb3VyY2VzLCB0aGlzIGlzIGFuIGFuZ2xlLCBpbiBkZWdyZWVzLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICBpbnNpZGUgb2Ygd2hpY2ggdGhlcmUgd2lsbCBiZSBubyB2b2x1bWUgcmVkdWN0aW9uLlxuICAgKiAgICAgY29uZU91dGVyQW5nbGUgLSAoMzYwIGJ5IGRlZmF1bHQpIEEgcGFyYW1ldGVyIGZvciBkaXJlY3Rpb25hbCBhdWRpbyBzb3VyY2VzLCB0aGlzIGlzIGFuIGFuZ2xlLCBpbiBkZWdyZWVzLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICBvdXRzaWRlIG9mIHdoaWNoIHRoZSB2b2x1bWUgd2lsbCBiZSByZWR1Y2VkIHRvIGEgY29uc3RhbnQgdmFsdWUgb2YgYGNvbmVPdXRlckdhaW5gLlxuICAgKiAgICAgY29uZU91dGVyR2FpbiAtICgwIGJ5IGRlZmF1bHQpIEEgcGFyYW1ldGVyIGZvciBkaXJlY3Rpb25hbCBhdWRpbyBzb3VyY2VzLCB0aGlzIGlzIHRoZSBnYWluIG91dHNpZGUgb2YgdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgYGNvbmVPdXRlckFuZ2xlYC4gSXQgaXMgYSBsaW5lYXIgdmFsdWUgaW4gdGhlIHJhbmdlIGBbMCwgMV1gLlxuICAgKiAgICAgZGlzdGFuY2VNb2RlbCAtICgnaW52ZXJzZScgYnkgZGVmYXVsdCkgRGV0ZXJtaW5lcyBhbGdvcml0aG0gdXNlZCB0byByZWR1Y2Ugdm9sdW1lIGFzIGF1ZGlvIG1vdmVzIGF3YXkgZnJvbVxuICAgKiAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLiBDYW4gYmUgYGxpbmVhcmAsIGBpbnZlcnNlYCBvciBgZXhwb25lbnRpYWwuXG4gICAqICAgICBtYXhEaXN0YW5jZSAtICgxMDAwMCBieSBkZWZhdWx0KSBUaGUgbWF4aW11bSBkaXN0YW5jZSBiZXR3ZWVuIHNvdXJjZSBhbmQgbGlzdGVuZXIsIGFmdGVyIHdoaWNoIHRoZSB2b2x1bWVcbiAgICogICAgICAgICAgICAgICAgICAgd2lsbCBub3QgYmUgcmVkdWNlZCBhbnkgZnVydGhlci5cbiAgICogICAgIHJlZkRpc3RhbmNlIC0gKDEgYnkgZGVmYXVsdCkgQSByZWZlcmVuY2UgZGlzdGFuY2UgZm9yIHJlZHVjaW5nIHZvbHVtZSBhcyBzb3VyY2UgbW92ZXMgZnVydGhlciBmcm9tIHRoZSBsaXN0ZW5lci5cbiAgICogICAgICAgICAgICAgICAgICAgVGhpcyBpcyBzaW1wbHkgYSB2YXJpYWJsZSBvZiB0aGUgZGlzdGFuY2UgbW9kZWwgYW5kIGhhcyBhIGRpZmZlcmVudCBlZmZlY3QgZGVwZW5kaW5nIG9uIHdoaWNoIG1vZGVsXG4gICAqICAgICAgICAgICAgICAgICAgIGlzIHVzZWQgYW5kIHRoZSBzY2FsZSBvZiB5b3VyIGNvb3JkaW5hdGVzLiBHZW5lcmFsbHksIHZvbHVtZSB3aWxsIGJlIGVxdWFsIHRvIDEgYXQgdGhpcyBkaXN0YW5jZS5cbiAgICogICAgIHJvbGxvZmZGYWN0b3IgLSAoMSBieSBkZWZhdWx0KSBIb3cgcXVpY2tseSB0aGUgdm9sdW1lIHJlZHVjZXMgYXMgc291cmNlIG1vdmVzIGZyb20gbGlzdGVuZXIuIFRoaXMgaXMgc2ltcGx5IGFcbiAgICogICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZSBvZiB0aGUgZGlzdGFuY2UgbW9kZWwgYW5kIGNhbiBiZSBpbiB0aGUgcmFuZ2Ugb2YgYFswLCAxXWAgd2l0aCBgbGluZWFyYCBhbmQgYFswLCDiiJ5dYFxuICAgKiAgICAgICAgICAgICAgICAgICAgIHdpdGggYGludmVyc2VgIGFuZCBgZXhwb25lbnRpYWxgLlxuICAgKiAgICAgcGFubmluZ01vZGVsIC0gKCdIUlRGJyBieSBkZWZhdWx0KSBEZXRlcm1pbmVzIHdoaWNoIHNwYXRpYWxpemF0aW9uIGFsZ29yaXRobSBpcyB1c2VkIHRvIHBvc2l0aW9uIGF1ZGlvLlxuICAgKiAgICAgICAgICAgICAgICAgICAgIENhbiBiZSBgSFJURmAgb3IgYGVxdWFscG93ZXJgLlxuICAgKlxuICAgKiBAcmV0dXJuIHtIb3dsL09iamVjdH0gUmV0dXJucyBzZWxmIG9yIGN1cnJlbnQgcGFubmVyIGF0dHJpYnV0ZXMuXG4gICAqL1xuICBIb3dsLnByb3RvdHlwZS5wYW5uZXJBdHRyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBvLCBpZCwgc291bmQ7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIHZhbHVlcyBiYXNlZCBvbiBhcmd1bWVudHMuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBSZXR1cm4gdGhlIGdyb3VwJ3MgcGFubmVyIGF0dHJpYnV0ZSB2YWx1ZXMuXG4gICAgICByZXR1cm4gc2VsZi5fcGFubmVyQXR0cjtcbiAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG8gPSBhcmdzWzBdO1xuXG4gICAgICAgIC8vIFNldCB0aGUgZ3JvdSdzIHBhbm5lciBhdHRyaWJ1dGUgdmFsdWVzLlxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGlmICghby5wYW5uZXJBdHRyKSB7XG4gICAgICAgICAgICBvLnBhbm5lckF0dHIgPSB7XG4gICAgICAgICAgICAgIGNvbmVJbm5lckFuZ2xlOiBvLmNvbmVJbm5lckFuZ2xlLFxuICAgICAgICAgICAgICBjb25lT3V0ZXJBbmdsZTogby5jb25lT3V0ZXJBbmdsZSxcbiAgICAgICAgICAgICAgY29uZU91dGVyR2Fpbjogby5jb25lT3V0ZXJHYWluLFxuICAgICAgICAgICAgICBkaXN0YW5jZU1vZGVsOiBvLmRpc3RhbmNlTW9kZWwsXG4gICAgICAgICAgICAgIG1heERpc3RhbmNlOiBvLm1heERpc3RhbmNlLFxuICAgICAgICAgICAgICByZWZEaXN0YW5jZTogby5yZWZEaXN0YW5jZSxcbiAgICAgICAgICAgICAgcm9sbG9mZkZhY3Rvcjogby5yb2xsb2ZmRmFjdG9yLFxuICAgICAgICAgICAgICBwYW5uaW5nTW9kZWw6IG8ucGFubmluZ01vZGVsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX3Bhbm5lckF0dHIgPSB7XG4gICAgICAgICAgICBjb25lSW5uZXJBbmdsZTogdHlwZW9mIG8ucGFubmVyQXR0ci5jb25lSW5uZXJBbmdsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIuY29uZUlubmVyQW5nbGUgOiBzZWxmLl9jb25lSW5uZXJBbmdsZSxcbiAgICAgICAgICAgIGNvbmVPdXRlckFuZ2xlOiB0eXBlb2Ygby5wYW5uZXJBdHRyLmNvbmVPdXRlckFuZ2xlICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5jb25lT3V0ZXJBbmdsZSA6IHNlbGYuX2NvbmVPdXRlckFuZ2xlLFxuICAgICAgICAgICAgY29uZU91dGVyR2FpbjogdHlwZW9mIG8ucGFubmVyQXR0ci5jb25lT3V0ZXJHYWluICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5jb25lT3V0ZXJHYWluIDogc2VsZi5fY29uZU91dGVyR2FpbixcbiAgICAgICAgICAgIGRpc3RhbmNlTW9kZWw6IHR5cGVvZiBvLnBhbm5lckF0dHIuZGlzdGFuY2VNb2RlbCAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIuZGlzdGFuY2VNb2RlbCA6IHNlbGYuX2Rpc3RhbmNlTW9kZWwsXG4gICAgICAgICAgICBtYXhEaXN0YW5jZTogdHlwZW9mIG8ucGFubmVyQXR0ci5tYXhEaXN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIubWF4RGlzdGFuY2UgOiBzZWxmLl9tYXhEaXN0YW5jZSxcbiAgICAgICAgICAgIHJlZkRpc3RhbmNlOiB0eXBlb2Ygby5wYW5uZXJBdHRyLnJlZkRpc3RhbmNlICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5yZWZEaXN0YW5jZSA6IHNlbGYuX3JlZkRpc3RhbmNlLFxuICAgICAgICAgICAgcm9sbG9mZkZhY3RvcjogdHlwZW9mIG8ucGFubmVyQXR0ci5yb2xsb2ZmRmFjdG9yICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5yb2xsb2ZmRmFjdG9yIDogc2VsZi5fcm9sbG9mZkZhY3RvcixcbiAgICAgICAgICAgIHBhbm5pbmdNb2RlbDogdHlwZW9mIG8ucGFubmVyQXR0ci5wYW5uaW5nTW9kZWwgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLnBhbm5pbmdNb2RlbCA6IHNlbGYuX3Bhbm5pbmdNb2RlbFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiB0aGlzIHNvdW5kJ3MgcGFubmVyIGF0dHJpYnV0ZSB2YWx1ZXMuXG4gICAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKHBhcnNlSW50KGFyZ3NbMF0sIDEwKSk7XG4gICAgICAgIHJldHVybiBzb3VuZCA/IHNvdW5kLl9wYW5uZXJBdHRyIDogc2VsZi5fcGFubmVyQXR0cjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgICBvID0gYXJnc1swXTtcbiAgICAgIGlkID0gcGFyc2VJbnQoYXJnc1sxXSwgMTApO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgdmFsdWVzIG9mIHRoZSBzcGVjaWZpZWQgc291bmRzLlxuICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIC8vIE1lcmdlIHRoZSBuZXcgdmFsdWVzIGludG8gdGhlIHNvdW5kLlxuICAgICAgICB2YXIgcGEgPSBzb3VuZC5fcGFubmVyQXR0cjtcbiAgICAgICAgcGEgPSB7XG4gICAgICAgICAgY29uZUlubmVyQW5nbGU6IHR5cGVvZiBvLmNvbmVJbm5lckFuZ2xlICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZUlubmVyQW5nbGUgOiBwYS5jb25lSW5uZXJBbmdsZSxcbiAgICAgICAgICBjb25lT3V0ZXJBbmdsZTogdHlwZW9mIG8uY29uZU91dGVyQW5nbGUgIT09ICd1bmRlZmluZWQnID8gby5jb25lT3V0ZXJBbmdsZSA6IHBhLmNvbmVPdXRlckFuZ2xlLFxuICAgICAgICAgIGNvbmVPdXRlckdhaW46IHR5cGVvZiBvLmNvbmVPdXRlckdhaW4gIT09ICd1bmRlZmluZWQnID8gby5jb25lT3V0ZXJHYWluIDogcGEuY29uZU91dGVyR2FpbixcbiAgICAgICAgICBkaXN0YW5jZU1vZGVsOiB0eXBlb2Ygby5kaXN0YW5jZU1vZGVsICE9PSAndW5kZWZpbmVkJyA/IG8uZGlzdGFuY2VNb2RlbCA6IHBhLmRpc3RhbmNlTW9kZWwsXG4gICAgICAgICAgbWF4RGlzdGFuY2U6IHR5cGVvZiBvLm1heERpc3RhbmNlICE9PSAndW5kZWZpbmVkJyA/IG8ubWF4RGlzdGFuY2UgOiBwYS5tYXhEaXN0YW5jZSxcbiAgICAgICAgICByZWZEaXN0YW5jZTogdHlwZW9mIG8ucmVmRGlzdGFuY2UgIT09ICd1bmRlZmluZWQnID8gby5yZWZEaXN0YW5jZSA6IHBhLnJlZkRpc3RhbmNlLFxuICAgICAgICAgIHJvbGxvZmZGYWN0b3I6IHR5cGVvZiBvLnJvbGxvZmZGYWN0b3IgIT09ICd1bmRlZmluZWQnID8gby5yb2xsb2ZmRmFjdG9yIDogcGEucm9sbG9mZkZhY3RvcixcbiAgICAgICAgICBwYW5uaW5nTW9kZWw6IHR5cGVvZiBvLnBhbm5pbmdNb2RlbCAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5pbmdNb2RlbCA6IHBhLnBhbm5pbmdNb2RlbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgcGFubmVyIHZhbHVlcyBvciBjcmVhdGUgYSBuZXcgcGFubmVyIGlmIG5vbmUgZXhpc3RzLlxuICAgICAgICB2YXIgcGFubmVyID0gc291bmQuX3Bhbm5lcjtcbiAgICAgICAgaWYgKHBhbm5lcikge1xuICAgICAgICAgIHBhbm5lci5jb25lSW5uZXJBbmdsZSA9IHBhLmNvbmVJbm5lckFuZ2xlO1xuICAgICAgICAgIHBhbm5lci5jb25lT3V0ZXJBbmdsZSA9IHBhLmNvbmVPdXRlckFuZ2xlO1xuICAgICAgICAgIHBhbm5lci5jb25lT3V0ZXJHYWluID0gcGEuY29uZU91dGVyR2FpbjtcbiAgICAgICAgICBwYW5uZXIuZGlzdGFuY2VNb2RlbCA9IHBhLmRpc3RhbmNlTW9kZWw7XG4gICAgICAgICAgcGFubmVyLm1heERpc3RhbmNlID0gcGEubWF4RGlzdGFuY2U7XG4gICAgICAgICAgcGFubmVyLnJlZkRpc3RhbmNlID0gcGEucmVmRGlzdGFuY2U7XG4gICAgICAgICAgcGFubmVyLnJvbGxvZmZGYWN0b3IgPSBwYS5yb2xsb2ZmRmFjdG9yO1xuICAgICAgICAgIHBhbm5lci5wYW5uaW5nTW9kZWwgPSBwYS5wYW5uaW5nTW9kZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYSBwb3NpdGlvbiB0byBzZXR1cCB0aGUgbm9kZSB3aXRoLlxuICAgICAgICAgIGlmICghc291bmQuX3Bvcykge1xuICAgICAgICAgICAgc291bmQuX3BvcyA9IHNlbGYuX3BvcyB8fCBbMCwgMCwgLTAuNV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHBhbm5lciBub2RlLlxuICAgICAgICAgIHNldHVwUGFubmVyKHNvdW5kLCAnc3BhdGlhbCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgLyoqIFNpbmdsZSBTb3VuZCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHByb3BlcnRpZXMgdG8gdGhlIGNvcmUgU291bmQgaW5pdC5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IF9zdXBlciBDb3JlIFNvdW5kIGluaXQgbWV0aG9kLlxuICAgKiBAcmV0dXJuIHtTb3VuZH1cbiAgICovXG4gIFNvdW5kLnByb3RvdHlwZS5pbml0ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBwYXJlbnQgPSBzZWxmLl9wYXJlbnQ7XG5cbiAgICAgIC8vIFNldHVwIHVzZXItZGVmaW5lZCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gICAgICBzZWxmLl9vcmllbnRhdGlvbiA9IHBhcmVudC5fb3JpZW50YXRpb247XG4gICAgICBzZWxmLl9zdGVyZW8gPSBwYXJlbnQuX3N0ZXJlbztcbiAgICAgIHNlbGYuX3BvcyA9IHBhcmVudC5fcG9zO1xuICAgICAgc2VsZi5fcGFubmVyQXR0ciA9IHBhcmVudC5fcGFubmVyQXR0cjtcblxuICAgICAgLy8gQ29tcGxldGUgaW5pdGlsaXphdGlvbiB3aXRoIGhvd2xlci5qcyBjb3JlIFNvdW5kJ3MgaW5pdCBmdW5jdGlvbi5cbiAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuXG4gICAgICAvLyBJZiBhIHN0ZXJlbyBvciBwb3NpdGlvbiB3YXMgc3BlY2lmaWVkLCBzZXQgaXQgdXAuXG4gICAgICBpZiAoc2VsZi5fc3RlcmVvKSB7XG4gICAgICAgIHBhcmVudC5zdGVyZW8oc2VsZi5fc3RlcmVvKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5fcG9zKSB7XG4gICAgICAgIHBhcmVudC5wb3Moc2VsZi5fcG9zWzBdLCBzZWxmLl9wb3NbMV0sIHNlbGYuX3Bvc1syXSwgc2VsZi5faWQpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKFNvdW5kLnByb3RvdHlwZS5pbml0KTtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIFNvdW5kLnJlc2V0IG1ldGhvZCB0byBjbGVhbiB1cCBwcm9wZXJ0aWVzIGZyb20gdGhlIHNwYXRpYWwgcGx1Z2luLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gX3N1cGVyIFNvdW5kIHJlc2V0IG1ldGhvZC5cbiAgICogQHJldHVybiB7U291bmR9XG4gICAqL1xuICBTb3VuZC5wcm90b3R5cGUucmVzZXQgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHBhcmVudCA9IHNlbGYuX3BhcmVudDtcblxuICAgICAgLy8gUmVzZXQgYWxsIHNwYXRpYWwgcGx1Z2luIHByb3BlcnRpZXMgb24gdGhpcyBzb3VuZC5cbiAgICAgIHNlbGYuX29yaWVudGF0aW9uID0gcGFyZW50Ll9vcmllbnRhdGlvbjtcbiAgICAgIHNlbGYuX3N0ZXJlbyA9IHBhcmVudC5fc3RlcmVvO1xuICAgICAgc2VsZi5fcG9zID0gcGFyZW50Ll9wb3M7XG4gICAgICBzZWxmLl9wYW5uZXJBdHRyID0gcGFyZW50Ll9wYW5uZXJBdHRyO1xuXG4gICAgICAvLyBJZiBhIHN0ZXJlbyBvciBwb3NpdGlvbiB3YXMgc3BlY2lmaWVkLCBzZXQgaXQgdXAuXG4gICAgICBpZiAoc2VsZi5fc3RlcmVvKSB7XG4gICAgICAgIHBhcmVudC5zdGVyZW8oc2VsZi5fc3RlcmVvKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5fcG9zKSB7XG4gICAgICAgIHBhcmVudC5wb3Moc2VsZi5fcG9zWzBdLCBzZWxmLl9wb3NbMV0sIHNlbGYuX3Bvc1syXSwgc2VsZi5faWQpO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLl9wYW5uZXIpIHtcbiAgICAgICAgLy8gRGlzY29ubmVjdCB0aGUgcGFubmVyLlxuICAgICAgICBzZWxmLl9wYW5uZXIuZGlzY29ubmVjdCgwKTtcbiAgICAgICAgc2VsZi5fcGFubmVyID0gdW5kZWZpbmVkO1xuICAgICAgICBwYXJlbnQuX3JlZnJlc2hCdWZmZXIoc2VsZik7XG4gICAgICB9XG5cbiAgICAgIC8vIENvbXBsZXRlIHJlc2V0dGluZyBvZiB0aGUgc291bmQuXG4gICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgfSkoU291bmQucHJvdG90eXBlLnJlc2V0KTtcblxuICAvKiogSGVscGVyIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBwYW5uZXIgbm9kZSBhbmQgc2F2ZSBpdCBvbiB0aGUgc291bmQuXG4gICAqIEBwYXJhbSAge1NvdW5kfSBzb3VuZCBTcGVjaWZpYyBzb3VuZCB0byBzZXR1cCBwYW5uaW5nIG9uLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUeXBlIG9mIHBhbm5lciB0byBjcmVhdGU6ICdzdGVyZW8nIG9yICdzcGF0aWFsJy5cbiAgICovXG4gIHZhciBzZXR1cFBhbm5lciA9IGZ1bmN0aW9uKHNvdW5kLCB0eXBlKSB7XG4gICAgdHlwZSA9IHR5cGUgfHwgJ3NwYXRpYWwnO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgcGFubmVyIG5vZGUuXG4gICAgaWYgKHR5cGUgPT09ICdzcGF0aWFsJykge1xuICAgICAgc291bmQuX3Bhbm5lciA9IEhvd2xlci5jdHguY3JlYXRlUGFubmVyKCk7XG4gICAgICBzb3VuZC5fcGFubmVyLmNvbmVJbm5lckFuZ2xlID0gc291bmQuX3Bhbm5lckF0dHIuY29uZUlubmVyQW5nbGU7XG4gICAgICBzb3VuZC5fcGFubmVyLmNvbmVPdXRlckFuZ2xlID0gc291bmQuX3Bhbm5lckF0dHIuY29uZU91dGVyQW5nbGU7XG4gICAgICBzb3VuZC5fcGFubmVyLmNvbmVPdXRlckdhaW4gPSBzb3VuZC5fcGFubmVyQXR0ci5jb25lT3V0ZXJHYWluO1xuICAgICAgc291bmQuX3Bhbm5lci5kaXN0YW5jZU1vZGVsID0gc291bmQuX3Bhbm5lckF0dHIuZGlzdGFuY2VNb2RlbDtcbiAgICAgIHNvdW5kLl9wYW5uZXIubWF4RGlzdGFuY2UgPSBzb3VuZC5fcGFubmVyQXR0ci5tYXhEaXN0YW5jZTtcbiAgICAgIHNvdW5kLl9wYW5uZXIucmVmRGlzdGFuY2UgPSBzb3VuZC5fcGFubmVyQXR0ci5yZWZEaXN0YW5jZTtcbiAgICAgIHNvdW5kLl9wYW5uZXIucm9sbG9mZkZhY3RvciA9IHNvdW5kLl9wYW5uZXJBdHRyLnJvbGxvZmZGYWN0b3I7XG4gICAgICBzb3VuZC5fcGFubmVyLnBhbm5pbmdNb2RlbCA9IHNvdW5kLl9wYW5uZXJBdHRyLnBhbm5pbmdNb2RlbDtcblxuICAgICAgaWYgKHR5cGVvZiBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblguc2V0VmFsdWVBdFRpbWUoc291bmQuX3Bvc1swXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgIHNvdW5kLl9wYW5uZXIucG9zaXRpb25ZLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9wb3NbMV0sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWi5zZXRWYWx1ZUF0VGltZShzb3VuZC5fcG9zWzJdLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdW5kLl9wYW5uZXIuc2V0UG9zaXRpb24oc291bmQuX3Bvc1swXSwgc291bmQuX3Bvc1sxXSwgc291bmQuX3Bvc1syXSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygc291bmQuX3Bhbm5lci5vcmllbnRhdGlvblggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNvdW5kLl9wYW5uZXIub3JpZW50YXRpb25YLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9vcmllbnRhdGlvblswXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgIHNvdW5kLl9wYW5uZXIub3JpZW50YXRpb25ZLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9vcmllbnRhdGlvblsxXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgIHNvdW5kLl9wYW5uZXIub3JpZW50YXRpb25aLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9vcmllbnRhdGlvblsyXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VuZC5fcGFubmVyLnNldE9yaWVudGF0aW9uKHNvdW5kLl9vcmllbnRhdGlvblswXSwgc291bmQuX29yaWVudGF0aW9uWzFdLCBzb3VuZC5fb3JpZW50YXRpb25bMl0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzb3VuZC5fcGFubmVyID0gSG93bGVyLmN0eC5jcmVhdGVTdGVyZW9QYW5uZXIoKTtcbiAgICAgIHNvdW5kLl9wYW5uZXIucGFuLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9zdGVyZW8sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgIH1cblxuICAgIHNvdW5kLl9wYW5uZXIuY29ubmVjdChzb3VuZC5fbm9kZSk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGNvbm5lY3Rpb25zLlxuICAgIGlmICghc291bmQuX3BhdXNlZCkge1xuICAgICAgc291bmQuX3BhcmVudC5wYXVzZShzb3VuZC5faWQsIHRydWUpLnBsYXkoc291bmQuX2lkLCB0cnVlKTtcbiAgICB9XG4gIH07XG59KSgpO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIEtleWJvYXJkTWFwcGluZyB7XG4gIGNvbnN0cnVjdG9yKG1hcHBpbmdzLCBjYWxsYmFjaywgZWZmZWN0TW9kZSwga2V5bWFwTW9kZSkge1xuICAgIHRoaXMubWFwcGluZ3MgPSBtYXBwaW5ncztcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5lZmZlY3RNb2RlID0gZWZmZWN0TW9kZTtcbiAgICB0aGlzLmtleW1hcE1vZGUgPSBrZXltYXBNb2RlO1xuICAgIGlmICh0eXBlb2YgdGhpcy5tYXBwaW5ncyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhpcy5tYXBwaW5ncyA9IFt0aGlzLm1hcHBpbmdzXTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5tYXBwaW5ncykpIHtcbiAgICAgIHRoaXMubWFwcGluZ3MgPSBbLi4udGhpcy5tYXBwaW5nc10ucmVkdWNlKChtYXBwaW5nczIsIHZhbHVlKSA9PiB7XG4gICAgICAgIG1hcHBpbmdzMlt2YWx1ZV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG1hcHBpbmdzMjtcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5tYXBwaW5ncykge1xuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5tYXBwaW5nc1trZXldO1xuICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhpcy5tYXBwaW5nc1trZXldID0ge1xuICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICByZXBlYXQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMubWFwcGluZ3Nba2V5XS5tYXBwaW5nID0gdGhpcztcbiAgICB9XG4gIH1cbiAgbWFwcyhrZXlzKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwcGluZ3Nba2V5c107XG4gIH1cbiAgdW5tYXAoKSB7XG4gICAgS2V5Ym9hcmQudW5tYXAodGhpcyk7XG4gIH1cbn1cblxuY29uc3QgX0tleWJvYXJkID0gY2xhc3Mge1xuICBzdGF0aWMgaW5pdGlhbGl6ZShlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlDaGFuZ2UpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlDaGFuZ2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHN0YXRpYyB0ZXJtaW5hdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleUNoYW5nZSk7XG4gICAgdGhpcy5lbGVtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlDaGFuZ2UpO1xuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gIH1cbiAgc3RhdGljIG1hcChtYXBwaW5ncywgY2FsbGJhY2ssIGVmZmVjdE1vZGUgPSBcImludGVydmFsXCIsIGtleW1hcE1vZGUgPSBcImFkZFwiKSB7XG4gICAgY29uc3QgbWFwcGluZyA9IG5ldyBLZXlib2FyZE1hcHBpbmcobWFwcGluZ3MsIGNhbGxiYWNrLCBlZmZlY3RNb2RlLCBrZXltYXBNb2RlKTtcbiAgICB0aGlzLm1hcHBpbmdzLnVuc2hpZnQobWFwcGluZyk7XG4gICAgcmV0dXJuIG1hcHBpbmc7XG4gIH1cbiAgc3RhdGljIHVubWFwKG1hcHBpbmcpIHtcbiAgICB0aGlzLm1hcHBpbmdzID0gdGhpcy5tYXBwaW5ncy5maWx0ZXIoKG0pID0+IG0gIT09IG1hcHBpbmcpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMucHJlc3NlZC5rZXlzKCkpIHtcbiAgICAgIGlmICh0aGlzLnByZXNzZWQuZ2V0KGtleSk/LmtleW1hcC5tYXBwaW5nID09PSBtYXBwaW5nKSB7XG4gICAgICAgIHRoaXMucHJlc3NlZC5kZWxldGUoa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sYXN0UHJlc3NlZCA9IFsuLi50aGlzLnByZXNzZWQua2V5cygpXTtcbiAgfVxuICBzdGF0aWMgcmVzb2x2ZShrZXlzLCBldmVudFR5cGUpIHtcbiAgICBjb25zdCBtYXBwZWQgPSB0aGlzLm1hcHBlZChrZXlzKTtcbiAgICBpZiAobWFwcGVkID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1hcHBlZC5tYXBwaW5nPy5lZmZlY3RNb2RlID09PSBcImluc3RhbnRcIikge1xuICAgICAgbWFwcGVkLm1hcHBpbmcuY2FsbGJhY2s/LihtYXBwZWQuYWN0aW9uLCBldmVudFR5cGUgPT09IFwia2V5ZG93blwiLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gXCJrZXlkb3duXCIpIHtcbiAgICAgIGlmICghdGhpcy5wcmVzc2VkLmhhcyhrZXlzKSkge1xuICAgICAgICB0aGlzLnByZXNzZWQuc2V0KGtleXMsIHsga2V5bWFwOiBtYXBwZWQsIHJlcGVhdDogMCwgZG9uZTogZmFsc2UsIGRvbmVJczogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09IFwia2V5dXBcIikge1xuICAgICAgdGhpcy5wcmVzc2VkLmRlbGV0ZShrZXlzKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgICB0aGlzLnByZXNzZWQuZm9yRWFjaCgobWFwcGVkLCBrZXkpID0+IHtcbiAgICAgIGlmIChtYXBwZWQucmVwZWF0ID09PSAwIHx8IG1hcHBlZC5rZXltYXAucmVwZWF0ICYmIG1hcHBlZC5yZXBlYXQgPD0gMCkge1xuICAgICAgICBtYXBwZWQua2V5bWFwLm1hcHBpbmc/LmNhbGxiYWNrPy4obWFwcGVkLmtleW1hcC5hY3Rpb24sIHRydWUsIGRlbHRhVGltZSk7XG4gICAgICAgIG1hcHBlZC5yZXBlYXQgKz0gSW5wdXQucnBzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFtYXBwZWQua2V5bWFwLnJlcGVhdCkge1xuICAgICAgICAgIGlmICghbWFwcGVkLmRvbmUpIHtcbiAgICAgICAgICAgIG1hcHBlZC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWFwcGVkLnJlcGVhdCAtPSBkZWx0YVRpbWUgKiAxZTM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmxhc3RQcmVzc2VkLmZvckVhY2goKGtleXMpID0+IHtcbiAgICAgIGlmICghdGhpcy5wcmVzc2VkLmhhcyhrZXlzKSkge1xuICAgICAgICBjb25zdCBtYXBwZWQgPSB0aGlzLm1hcHBlZChrZXlzKTtcbiAgICAgICAgbWFwcGVkPy5tYXBwaW5nLmNhbGxiYWNrPy4obWFwcGVkLmFjdGlvbiwgZmFsc2UsIGRlbHRhVGltZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5sYXN0UHJlc3NlZCA9IFsuLi50aGlzLnByZXNzZWQua2V5cygpXTtcbiAgfVxuICBzdGF0aWMgbWFwcGVkKGtleXMpIHtcbiAgICBsZXQgbWFwcGVkO1xuICAgIGZvciAoY29uc3QgbWFwcGluZyBvZiB0aGlzLm1hcHBpbmdzKSB7XG4gICAgICBtYXBwZWQgPSBtYXBwaW5nLm1hcHMoa2V5cyk7XG4gICAgICBpZiAobWFwcGVkICE9IG51bGwgfHwgbWFwcGluZy5rZXltYXBNb2RlID09PSBcInJlcGxhY2VcIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hcHBlZDtcbiAgfVxuICBzdGF0aWMgaXMoYWN0aW9uKSB7XG4gICAgZm9yIChjb25zdCBwcmVzc2VkIG9mIHRoaXMucHJlc3NlZC52YWx1ZXMoKSkge1xuICAgICAgaWYgKHByZXNzZWQua2V5bWFwLmFjdGlvbiAhPT0gYWN0aW9uKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHByZXNzZWQucmVwZWF0ID09PSAwIHx8IHByZXNzZWQua2V5bWFwLnJlcGVhdCAmJiBwcmVzc2VkLnJlcGVhdCA8PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFwcmVzc2VkLmtleW1hcC5yZXBlYXQgJiYgIXByZXNzZWQuZG9uZUlzKSB7XG4gICAgICAgICAgcHJlc3NlZC5kb25lSXMgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbmxldCBLZXlib2FyZCA9IF9LZXlib2FyZDtcbktleWJvYXJkLm1hcHBpbmdzID0gW107XG5LZXlib2FyZC5wcmVzc2VkID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbktleWJvYXJkLmxhc3RQcmVzc2VkID0gW107XG5LZXlib2FyZC5rZXlDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgbGV0IGtleXMgPSBldmVudC5rZXk7XG4gIGlmIChbXCJDb250cm9sXCIsIFwiQWx0XCIsIFwiU2hpZnRcIl0uaW5jbHVkZXMoa2V5cykpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJrZXlkb3duXCIpIHtcbiAgICAgIGZvciAoY29uc3QgcHJlc3NlZCBvZiBfS2V5Ym9hcmQucHJlc3NlZC5rZXlzKCkpIHtcbiAgICAgICAgY29uc3QgcHJlc3NlZEtleXMgPSBwcmVzc2VkLnNwbGl0KFwiK1wiKTtcbiAgICAgICAgaWYgKHByZXNzZWRLZXlzLmluY2x1ZGVzKGtleXMpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vZGlmaWVkUHJlc3NlZCA9IHByZXNzZWRLZXlzLnBvcCgpO1xuICAgICAgICBmb3IgKGNvbnN0IG1vZGlmaWVyIG9mIFtcIlNoaWZ0XCIsIFwiQWx0XCIsIFwiQ29udHJvbFwiXSkge1xuICAgICAgICAgIGlmIChrZXlzID09PSBtb2RpZmllciB8fCBwcmVzc2VkS2V5cy5pbmNsdWRlcyhtb2RpZmllcikpIHtcbiAgICAgICAgICAgIG1vZGlmaWVkUHJlc3NlZCA9IGAke21vZGlmaWVyfSske21vZGlmaWVkUHJlc3NlZH1gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfS2V5Ym9hcmQucmVzb2x2ZShwcmVzc2VkLCBcImtleXVwXCIpO1xuICAgICAgICBfS2V5Ym9hcmQucmVzb2x2ZShtb2RpZmllZFByZXNzZWQsIFwia2V5ZG93blwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IFwia2V5dXBcIikge1xuICAgICAgZm9yIChjb25zdCBwcmVzc2VkIG9mIF9LZXlib2FyZC5wcmVzc2VkLmtleXMoKSkge1xuICAgICAgICBjb25zdCBwcmVzc2VkS2V5cyA9IHByZXNzZWQuc3BsaXQoXCIrXCIpO1xuICAgICAgICBpZiAoIXByZXNzZWRLZXlzLmluY2x1ZGVzKGtleXMpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kaWZpZWRQcmVzc2VkID0gcHJlc3NlZEtleXMuZmlsdGVyKChrZXkpID0+IGtleSAhPT0ga2V5cykuam9pbihcIitcIik7XG4gICAgICAgIF9LZXlib2FyZC5yZXNvbHZlKHByZXNzZWQsIFwia2V5dXBcIik7XG4gICAgICAgIF9LZXlib2FyZC5yZXNvbHZlKG1vZGlmaWVkUHJlc3NlZCwgXCJrZXlkb3duXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgIGtleXMgPSBgU2hpZnQrJHtrZXlzfWA7XG4gICAgfVxuICAgIGlmIChldmVudC5hbHRLZXkpIHtcbiAgICAgIGtleXMgPSBgQWx0KyR7a2V5c31gO1xuICAgIH1cbiAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAga2V5cyA9IGBDb250cm9sKyR7a2V5c31gO1xuICAgIH1cbiAgICBfS2V5Ym9hcmQucmVzb2x2ZShrZXlzLCBldmVudC50eXBlKTtcbiAgfVxufTtcblxuY2xhc3MgTW91c2VNYXBwaW5nIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgdW5tYXAoKSB7XG4gICAgTW91c2UudW5tYXAodGhpcyk7XG4gIH1cbn1cblxuY2xhc3MgTW91c2Uge1xuICBzdGF0aWMgaW5pdGlhbGl6ZSgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzdGF0aWMgdGVybWluYXRlKCkge1xuICB9XG4gIHN0YXRpYyBtYXAoKSB7XG4gICAgY29uc3QgbWFwcGluZyA9IG5ldyBNb3VzZU1hcHBpbmcoKTtcbiAgICB0aGlzLm1hcHBpbmdzLnVuc2hpZnQobWFwcGluZyk7XG4gICAgcmV0dXJuIG1hcHBpbmc7XG4gIH1cbiAgc3RhdGljIHVubWFwKG1hcHBpbmcpIHtcbiAgICB0aGlzLm1hcHBpbmdzID0gdGhpcy5tYXBwaW5ncy5maWx0ZXIoKG0pID0+IG0gIT09IG1hcHBpbmcpO1xuICB9XG4gIHN0YXRpYyB1cGRhdGUoZGVsdGFUaW1lKSB7XG4gIH1cbiAgc3RhdGljIGlzKGFjdGlvbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuTW91c2UubWFwcGluZ3MgPSBbXTtcblxuY29uc3QgX0lucHV0ID0gY2xhc3Mge1xuICBzdGF0aWMgaW5pdGlhbGl6ZShycHMsIHJBRiA9IHRydWUsIGVsZW1lbnQgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgX0lucHV0LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLnJwcyA9IHJwcztcbiAgICBLZXlib2FyZC5pbml0aWFsaXplKGVsZW1lbnQpO1xuICAgIGlmIChyQUYgPT09IHRydWUpIHtcbiAgICAgIGxldCBsYXN0O1xuICAgICAgY29uc3Qgc3RhcnQgPSAobm93KSA9PiB7XG4gICAgICAgIGxhc3QgPSBub3c7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcbiAgICAgIH07XG4gICAgICBjb25zdCB0aWNrID0gKG5vdykgPT4ge1xuICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSAobm93IC0gbGFzdCkgLyAxZTM7XG4gICAgICAgIGxhc3QgPSBub3c7XG4gICAgICAgIF9JbnB1dC51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgICAgfTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGFydCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHN0YXRpYyB0ZXJtaW5hdGUoKSB7XG4gICAgS2V5Ym9hcmQudGVybWluYXRlKCk7XG4gIH1cbiAgc3RhdGljIG1hcChtYXBwaW5ncywgY2FsbGJhY2ssIGVmZmVjdE1vZGUgPSBcImludGVydmFsXCIsIGtleW1hcE1vZGUgPSBcImFkZFwiKSB7XG4gICAgaWYgKCFfSW5wdXQuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIF9JbnB1dC5pbml0aWFsaXplKDYwKTtcbiAgICB9XG4gICAgcmV0dXJuIEtleWJvYXJkLm1hcChtYXBwaW5ncywgY2FsbGJhY2ssIGVmZmVjdE1vZGUsIGtleW1hcE1vZGUpO1xuICB9XG4gIHN0YXRpYyB1bm1hcChtYXBwaW5nKSB7XG4gICAgaWYgKG1hcHBpbmcgaW5zdGFuY2VvZiBLZXlib2FyZE1hcHBpbmcpIHtcbiAgICAgIEtleWJvYXJkLnVubWFwKG1hcHBpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBNb3VzZS51bm1hcChtYXBwaW5nKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgICBLZXlib2FyZC51cGRhdGUoZGVsdGFUaW1lKTtcbiAgfVxuICBzdGF0aWMgaXMoYWN0aW9uKSB7XG4gICAgaWYgKCFfSW5wdXQuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIF9JbnB1dC5pbml0aWFsaXplKDYwKTtcbiAgICB9XG4gICAgcmV0dXJuIEtleWJvYXJkLmlzKGFjdGlvbikgfHwgTW91c2UuaXMoYWN0aW9uKTtcbiAgfVxufTtcbmxldCBJbnB1dCA9IF9JbnB1dDtcbklucHV0LmluaXRpYWxpemVkID0gZmFsc2U7XG5cbmV4cG9ydCB7IElucHV0LCBLZXlib2FyZCwgS2V5Ym9hcmRNYXBwaW5nIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1Yldweklpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YTJWNVltOWhjbVF0YldGd2NHbHVaeTUwY3lJc0lpNHVMeTR1TDNOeVl5OXJaWGxpYjJGeVpDNTBjeUlzSWk0dUx5NHVMM055WXk5dGIzVnpaUzF0WVhCd2FXNW5MblJ6SWl3aUxpNHZMaTR2YzNKakwyMXZkWE5sTG5Seklpd2lMaTR2TGk0dmMzSmpMMmx1Y0hWMExuUnpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUVsTFpYbE5ZWEJ3YVc1bkxDQkxaWGxpYjJGeVpDd2dTMlY1UTJGc2JHSmhZMnNzSUV0bGVVVm1abVZqZEUxdlpHVXNJRXRsZVcxaGNFMXZaR1VnZlNCbWNtOXRJRndpTGk5clpYbGliMkZ5WkZ3aU8xeHVYRzVsZUhCdmNuUWdZMnhoYzNNZ1MyVjVZbTloY21STllYQndhVzVuSUh0Y2JpQWdjSFZpYkdsaklHTnZibk4wY25WamRHOXlLRnh1SUNBZ0lIQjFZbXhwWXlCdFlYQndhVzVuY3pvZ2MzUnlhVzVuSUh3Z2MzUnlhVzVuVzEwZ2ZDQlNaV052Y21ROGMzUnlhVzVuTENCSlMyVjVUV0Z3Y0dsdVp6NHNYRzRnSUNBZ2NIVmliR2xqSUdOaGJHeGlZV05yT2lCTFpYbERZV3hzWW1GamF5QjhJSFZ1WkdWbWFXNWxaQ3hjYmlBZ0lDQndkV0pzYVdNZ1pXWm1aV04wVFc5a1pUb2dTMlY1UldabVpXTjBUVzlrWlN4Y2JpQWdJQ0J3ZFdKc2FXTWdhMlY1YldGd1RXOWtaVG9nUzJWNWJXRndUVzlrWlN4Y2JpQWdLU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUIwYUdsekxtMWhjSEJwYm1keklEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEJ3YVc1bmN5QTlJRnQwYUdsekxtMWhjSEJwYm1kelhUdGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tFRnljbUY1TG1selFYSnlZWGtvZEdocGN5NXRZWEJ3YVc1bmN5a3BJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXRndjR2x1WjNNZ1BTQmJMaTR1ZEdocGN5NXRZWEJ3YVc1bmMxMHVjbVZrZFdObEtDaHRZWEJ3YVc1bmN5d2dkbUZzZFdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnS0cxaGNIQnBibWR6SUdGeklHRnVlU2xiZG1Gc2RXVmRJRDBnZG1Gc2RXVTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnRZWEJ3YVc1bmN6dGNiaUFnSUNBZ0lIMHNJSHQ5S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdabTl5SUNoamIyNXpkQ0JyWlhrZ2FXNGdkR2hwY3k1dFlYQndhVzVuY3lrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnWVdOMGFXOXVJRDBnZEdocGN5NXRZWEJ3YVc1bmMxdHJaWGxkTzF4dUlDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCaFkzUnBiMjRnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXRndjR2x1WjNOYmEyVjVYU0E5SUh0Y2JpQWdJQ0FnSUNBZ0lDQmhZM1JwYjI0NklHRmpkR2x2Yml4Y2JpQWdJQ0FnSUNBZ0lDQnlaWEJsWVhRNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCMGFHbHpMbTFoY0hCcGJtZHpXMnRsZVYwdWJXRndjR2x1WnlBOUlIUm9hWE03WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY0hWaWJHbGpJRzFoY0hNb2EyVjVjem9nYzNSeWFXNW5LVG9nU1V0bGVVMWhjSEJwYm1jZ2ZDQjFibVJsWm1sdVpXUWdlMXh1SUNBZ0lISmxkSFZ5YmlBb2RHaHBjeTV0WVhCd2FXNW5jeUJoY3lCaGJua3BXMnRsZVhOZE8xeHVJQ0I5WEc1Y2JpQWdjSFZpYkdsaklIVnViV0Z3S0NrNklIWnZhV1FnZTF4dUlDQWdJRXRsZVdKdllYSmtMblZ1YldGd0tIUm9hWE1wTzF4dUlDQjlYRzVjYmlBZ0x5OGdjSFZpYkdsaklHRmtaRTFoY0hCcGJtY29hMlY1Y3pvZ2MzUnlhVzVuSUh3Z2MzUnlhVzVuVzEwc0lHTmhiR3hpWVdOck9pQkxaWGxEWVd4c1ltRmpheWtnZTF4dUlDQXZMeUFnSUdsbUlDZ2hRWEp5WVhrdWFYTkJjbkpoZVNoclpYbHpLU2tnZTF4dUlDQXZMeUFnSUNBZ2EyVjVjeUE5SUZ0clpYbHpYVHRjYmlBZ0x5OGdJQ0I5WEc0Z0lDOHZJQ0FnYTJWNWN5NW1iM0pGWVdOb0tHdGxlU0E5UGlCMGFHbHpMbTFoY0hCcGJtZHpMbk5sZENoclpYa3NJR05oYkd4aVlXTnJLU2s3WEc0Z0lDOHZJSDFjYmlBZ0x5OGdjSFZpYkdsaklISmxiVzkyWlUxaGNIQnBibWNvYTJWNU9pQnpkSEpwYm1jcElIdGNiaUFnTHk4Z0lDQjBhR2x6TG0xaGNIQnBibWR6TG1SbGJHVjBaU2hyWlhrcE8xeHVJQ0F2THlCOVhHNTlYRzRpTENKcGJYQnZjblFnZXlCSmJuQjFkQ0I5SUdaeWIyMGdYQ0l1TDJsdWNIVjBYQ0k3WEc1cGJYQnZjblFnZXlCTFpYbGliMkZ5WkUxaGNIQnBibWNnZlNCbWNtOXRJRndpTGk5clpYbGliMkZ5WkMxdFlYQndhVzVuWENJN1hHNWNibVY0Y0c5eWRDQjBlWEJsSUV0bGVVTmhiR3hpWVdOcklEMGdLR3RsZVRvZ2MzUnlhVzVuTENCd2NtVnpjMlZrT2lCaWIyOXNaV0Z1TENCa1pXeDBZVlJwYldVNklHNTFiV0psY2lrZ1BUNGdkbTlwWkR0Y2JtVjRjRzl5ZENCMGVYQmxJRXRsZVcxaGNFMXZaR1VnUFNBbllXUmtKeUI4SUNkeVpYQnNZV05sSnp0Y2JtVjRjRzl5ZENCMGVYQmxJRXRsZVVWbVptVmpkRTF2WkdVZ1BTQW5hVzV6ZEdGdWRDY2dmQ0FuYVc1MFpYSjJZV3duTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFbExaWGxOWVhCd2FXNW5JSHRjYmlBZ1lXTjBhVzl1T2lCemRISnBibWM3WEc0Z0lISmxjR1ZoZERvZ1ltOXZiR1ZoYmp0Y2JpQWdiV0Z3Y0dsdVp6ODZJRXRsZVdKdllYSmtUV0Z3Y0dsdVp6dGNibjFjYmk4dklGUlBSRTg2SUVGa1pDQnpkWEJ3YjNKMElHWnZjaUJ0ZFd4MGFYQnNaU0JyWlhseklHWnZjaUJ2Ym1VZ1lXTjBhVzl1WEc1bGVIQnZjblFnWTJ4aGMzTWdTMlY1WW05aGNtUWdlMXh1SUNCd2NtbDJZWFJsSUhOMFlYUnBZeUJsYkdWdFpXNTBPaUJJVkUxTVJXeGxiV1Z1ZENCOElHNTFiR3c3WEc0Z0lIQnlhWFpoZEdVZ2MzUmhkR2xqSUcxaGNIQnBibWR6T2lCTFpYbGliMkZ5WkUxaGNIQnBibWRiWFNBOUlGdGRPMXh1SUNBdkx5QndjbWwyWVhSbElITjBZWFJwWXlCdFlYQndhVzVuY3pvZ1RXRndQSE4wY21sdVp5d2dTMlY1UTJGc2JHSmhZMnMrSUQwZ2JtVjNJRTFoY0NncE8xeHVJQ0J3Y21sMllYUmxJSE4wWVhScFl5QnlaV0ZrYjI1c2VTQndjbVZ6YzJWa09pQk5ZWEE4YzNSeWFXNW5MQ0I3SUd0bGVXMWhjRG9nU1V0bGVVMWhjSEJwYm1jc0lISmxjR1ZoZERvZ2JuVnRZbVZ5TENCa2IyNWxPaUJpYjI5c1pXRnVMQ0JrYjI1bFNYTTZJR0p2YjJ4bFlXNGdmVDRnUFNCdVpYY2dUV0Z3S0NrN1hHNGdJSEJ5YVhaaGRHVWdjM1JoZEdsaklHeGhjM1JRY21WemMyVmtPaUJ6ZEhKcGJtZGJYU0E5SUZ0ZE8xeHVYRzRnSUhCMVlteHBZeUJ6ZEdGMGFXTWdhVzVwZEdsaGJHbDZaU2hsYkdWdFpXNTBPaUJJVkUxTVJXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRDQTlJR1ZzWlcxbGJuUTdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMnRsZVdSdmQyNG5MQ0IwYUdsekxtdGxlVU5vWVc1blpTazdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMnRsZVhWd0p5d2dkR2hwY3k1clpYbERhR0Z1WjJVcE8xeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdjSFZpYkdsaklITjBZWFJwWXlCMFpYSnRhVzVoZEdVb0tTQjdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBQeTV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0NkclpYbGtiM2R1Snl3Z2RHaHBjeTVyWlhsRGFHRnVaMlVwTzF4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEQ4dWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpZ25hMlY1ZFhBbkxDQjBhR2x6TG10bGVVTm9ZVzVuWlNrN1hHNGdJQ0FnZEdocGN5NWxiR1Z0Wlc1MElEMGdiblZzYkR0Y2JpQWdmVnh1WEc0Z0lIQjFZbXhwWXlCemRHRjBhV01nYldGd0tHMWhjSEJwYm1kek9pQnpkSEpwYm1jZ2ZDQnpkSEpwYm1kYlhTQjhJRkpsWTI5eVpEeHpkSEpwYm1jc0lFbExaWGxOWVhCd2FXNW5QaXdnWTJGc2JHSmhZMnMvT2lCTFpYbERZV3hzWW1GamF5d2daV1ptWldOMFRXOWtaVG9nUzJWNVJXWm1aV04wVFc5a1pTQTlJQ2RwYm5SbGNuWmhiQ2NzSUd0bGVXMWhjRTF2WkdVNklFdGxlVzFoY0UxdlpHVWdQU0FuWVdSa0p5azZJRXRsZVdKdllYSmtUV0Z3Y0dsdVp5QjdYRzRnSUNBZ1kyOXVjM1FnYldGd2NHbHVaeUE5SUc1bGR5QkxaWGxpYjJGeVpFMWhjSEJwYm1jb2JXRndjR2x1WjNNc0lHTmhiR3hpWVdOckxDQmxabVpsWTNSTmIyUmxMQ0JyWlhsdFlYQk5iMlJsS1R0Y2JpQWdJQ0IwYUdsekxtMWhjSEJwYm1kekxuVnVjMmhwWm5Rb2JXRndjR2x1WnlrN1hHNGdJQ0FnY21WMGRYSnVJRzFoY0hCcGJtYzdYRzRnSUgxY2JpQWdjSFZpYkdsaklITjBZWFJwWXlCMWJtMWhjQ2h0WVhCd2FXNW5PaUJMWlhsaWIyRnlaRTFoY0hCcGJtY3BPaUIyYjJsa0lIdGNiaUFnSUNCMGFHbHpMbTFoY0hCcGJtZHpJRDBnZEdocGN5NXRZWEJ3YVc1bmN5NW1hV3gwWlhJb2JTQTlQaUJ0SUNFOVBTQnRZWEJ3YVc1bktUdGNiaUFnSUNCbWIzSWdLR052Ym5OMElHdGxlU0J2WmlCMGFHbHpMbkJ5WlhOelpXUXVhMlY1Y3lncEtTQjdYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NXdjbVZ6YzJWa0xtZGxkQ2hyWlhrcFB5NXJaWGx0WVhBdWJXRndjR2x1WnlBOVBUMGdiV0Z3Y0dsdVp5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuQnlaWE56WldRdVpHVnNaWFJsS0d0bGVTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXViR0Z6ZEZCeVpYTnpaV1FnUFNCYkxpNHVkR2hwY3k1d2NtVnpjMlZrTG10bGVYTW9LVjA3WEc0Z0lIMWNibHh1SUNCd2RXSnNhV01nYzNSaGRHbGpJR3RsZVVOb1lXNW5aU0E5SUNobGRtVnVkRG9nUzJWNVltOWhjbVJGZG1WdWRDazZJSFp2YVdRZ1BUNGdlMXh1SUNBZ0lHeGxkQ0JyWlhseklEMGdaWFpsYm5RdWEyVjVPMXh1SUNBZ0lHbG1JQ2hiSjBOdmJuUnliMnduTENBblFXeDBKeXdnSjFOb2FXWjBKMTB1YVc1amJIVmtaWE1vYTJWNWN5a3BJSHRjYmlBZ0lDQWdJR2xtSUNobGRtVnVkQzUwZVhCbElEMDlQU0FuYTJWNVpHOTNiaWNwSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hqYjI1emRDQndjbVZ6YzJWa0lHOW1JSFJvYVhNdWNISmxjM05sWkM1clpYbHpLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCd2NtVnpjMlZrUzJWNWN5QTlJSEJ5WlhOelpXUXVjM0JzYVhRb0p5c25LVHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9jSEpsYzNObFpFdGxlWE11YVc1amJIVmtaWE1vYTJWNWN5a3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJwYm5WbE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCc1pYUWdiVzlrYVdacFpXUlFjbVZ6YzJWa0lEMGdjSEpsYzNObFpFdGxlWE11Y0c5d0tDazdYRzRnSUNBZ0lDQWdJQ0FnWm05eUlDaGpiMjV6ZENCdGIyUnBabWxsY2lCdlppQmJKMU5vYVdaMEp5d2dKMEZzZENjc0lDZERiMjUwY205c0oxMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hyWlhseklEMDlQU0J0YjJScFptbGxjaUI4ZkNCd2NtVnpjMlZrUzJWNWN5NXBibU5zZFdSbGN5aHRiMlJwWm1sbGNpa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdiVzlrYVdacFpXUlFjbVZ6YzJWa0lEMGdZQ1I3Ylc5a2FXWnBaWEo5S3lSN2JXOWthV1pwWldSUWNtVnpjMlZrZldBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnUzJWNVltOWhjbVF1Y21WemIyeDJaU2h3Y21WemMyVmtMQ0FuYTJWNWRYQW5LVHRjYmlBZ0lDQWdJQ0FnSUNCTFpYbGliMkZ5WkM1eVpYTnZiSFpsS0cxdlpHbG1hV1ZrVUhKbGMzTmxaQ0JoY3lCemRISnBibWNzSUNkclpYbGtiM2R1SnlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMGdaV3h6WlNCcFppQW9aWFpsYm5RdWRIbHdaU0E5UFQwZ0oydGxlWFZ3SnlrZ2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0dOdmJuTjBJSEJ5WlhOelpXUWdiMllnZEdocGN5NXdjbVZ6YzJWa0xtdGxlWE1vS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnlaWE56WldSTFpYbHpJRDBnY0hKbGMzTmxaQzV6Y0d4cGRDZ25LeWNwTzF4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2doY0hKbGMzTmxaRXRsZVhNdWFXNWpiSFZrWlhNb2EyVjVjeWtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5ScGJuVmxPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCdGIyUnBabWxsWkZCeVpYTnpaV1FnUFNCd2NtVnpjMlZrUzJWNWN5NW1hV3gwWlhJb2EyVjVJRDArSUd0bGVTQWhQVDBnYTJWNWN5a3VhbTlwYmlnbkt5Y3BPMXh1WEc0Z0lDQWdJQ0FnSUNBZ1MyVjVZbTloY21RdWNtVnpiMngyWlNod2NtVnpjMlZrTENBbmEyVjVkWEFuS1R0Y2JpQWdJQ0FnSUNBZ0lDQkxaWGxpYjJGeVpDNXlaWE52YkhabEtHMXZaR2xtYVdWa1VISmxjM05sWkN3Z0oydGxlV1J2ZDI0bktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCcFppQW9aWFpsYm5RdWMyaHBablJMWlhrcElIdGNiaUFnSUNBZ0lDQWdhMlY1Y3lBOUlHQlRhR2xtZENza2UydGxlWE45WUR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdsbUlDaGxkbVZ1ZEM1aGJIUkxaWGtwSUh0Y2JpQWdJQ0FnSUNBZ2EyVjVjeUE5SUdCQmJIUXJKSHRyWlhsemZXQTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnBaaUFvWlhabGJuUXVZM1J5YkV0bGVTa2dlMXh1SUNBZ0lDQWdJQ0JyWlhseklEMGdZRU52Ym5SeWIyd3JKSHRyWlhsemZXQTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQkxaWGxpYjJGeVpDNXlaWE52YkhabEtHdGxlWE1zSUdWMlpXNTBMblI1Y0dVcE8xeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQndkV0pzYVdNZ2MzUmhkR2xqSUhKbGMyOXNkbVVvYTJWNWN6b2djM1J5YVc1bkxDQmxkbVZ1ZEZSNWNHVTZJSE4wY21sdVp5a2dlMXh1SUNBZ0lHTnZibk4wSUcxaGNIQmxaQ0E5SUhSb2FYTXViV0Z3Y0dWa0tHdGxlWE1wTzF4dUlDQWdJR2xtSUNodFlYQndaV1FnUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h0WVhCd1pXUXViV0Z3Y0dsdVp6OHVaV1ptWldOMFRXOWtaU0E5UFQwZ0oybHVjM1JoYm5RbktTQjdYRzRnSUNBZ0lDQnRZWEJ3WldRdWJXRndjR2x1Wnk1allXeHNZbUZqYXo4dUtHMWhjSEJsWkM1aFkzUnBiMjRzSUdWMlpXNTBWSGx3WlNBOVBUMGdKMnRsZVdSdmQyNG5MQ0F3S1R0Y2JpQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvWlhabGJuUlVlWEJsSUQwOVBTQW5hMlY1Wkc5M2JpY3BJSHRjYmlBZ0lDQWdJR2xtSUNnaGRHaHBjeTV3Y21WemMyVmtMbWhoY3loclpYbHpLU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJ5WlhOelpXUXVjMlYwS0d0bGVYTXNJSHNnYTJWNWJXRndPaUJ0WVhCd1pXUXNJSEpsY0dWaGREb2dNQ3dnWkc5dVpUb2dabUZzYzJVc0lHUnZibVZKY3pvZ1ptRnNjMlVnZlNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNobGRtVnVkRlI1Y0dVZ1BUMDlJQ2RyWlhsMWNDY3BJSHRjYmlBZ0lDQWdJSFJvYVhNdWNISmxjM05sWkM1a1pXeGxkR1VvYTJWNWN5azdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjSFZpYkdsaklITjBZWFJwWXlCMWNHUmhkR1VvWkdWc2RHRlVhVzFsT2lCdWRXMWlaWElwSUh0Y2JpQWdJQ0IwYUdsekxuQnlaWE56WldRdVptOXlSV0ZqYUNnb2JXRndjR1ZrTENCclpYa3BJRDArSUh0Y2JpQWdJQ0FnSUdsbUlDaHRZWEJ3WldRdWNtVndaV0YwSUQwOVBTQXdJSHg4SUNodFlYQndaV1F1YTJWNWJXRndMbkpsY0dWaGRDQW1KaUJ0WVhCd1pXUXVjbVZ3WldGMElEdzlJREFwS1NCN1hHNGdJQ0FnSUNBZ0lHMWhjSEJsWkM1clpYbHRZWEF1YldGd2NHbHVaejh1WTJGc2JHSmhZMnMvTGlodFlYQndaV1F1YTJWNWJXRndMbUZqZEdsdmJpd2dkSEoxWlN3Z1pHVnNkR0ZVYVcxbEtUdGNiaUFnSUNBZ0lDQWdiV0Z3Y0dWa0xuSmxjR1ZoZENBclBTQkpibkIxZEM1eWNITTdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJqYjI1emIyeGxMbXh2WnlnblRrOGdVa1ZRUlVGVUp5d2diV0Z3Y0dWa0xuSmxjR1ZoZENrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doYldGd2NHVmtMbXRsZVcxaGNDNXlaWEJsWVhRcElIdGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb0lXMWhjSEJsWkM1a2IyNWxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJ0WVhCd1pXUXVhMlY1YldGd0xtMWhjSEJwYm1jdVkyRnNiR0poWTJzb2JXRndjR1ZrTG10bGVXMWhjQzVoWTNScGIyNHNJR1poYkhObExDQmtaV3gwWVZScGJXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JXRndjR1ZrTG1SdmJtVWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNCdFlYQndaV1F1Y21Wd1pXRjBJQzA5SUdSbGJIUmhWR2x0WlNBcUlERXdNREE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5S1R0Y2JpQWdJQ0IwYUdsekxteGhjM1JRY21WemMyVmtMbVp2Y2tWaFkyZ29hMlY1Y3lBOVBpQjdYRzRnSUNBZ0lDQnBaaUFvSVhSb2FYTXVjSEpsYzNObFpDNW9ZWE1vYTJWNWN5a3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdiV0Z3Y0dWa0lEMGdkR2hwY3k1dFlYQndaV1FvYTJWNWN5azdYRzRnSUNBZ0lDQWdJRzFoY0hCbFpEOHViV0Z3Y0dsdVp5RXVZMkZzYkdKaFkycy9MaWh0WVhCd1pXUXVZV04wYVc5dUxDQm1ZV3h6WlN3Z1pHVnNkR0ZVYVcxbEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUtUdGNiaUFnSUNCMGFHbHpMbXhoYzNSUWNtVnpjMlZrSUQwZ1d5NHVMblJvYVhNdWNISmxjM05sWkM1clpYbHpLQ2xkTzF4dUlDQjlYRzVjYmlBZ2NIVmliR2xqSUhOMFlYUnBZeUJ0WVhCd1pXUW9hMlY1Y3pvZ2MzUnlhVzVuS1RvZ1NVdGxlVTFoY0hCcGJtY2dmQ0IxYm1SbFptbHVaV1FnZTF4dUlDQWdJR3hsZENCdFlYQndaV1E3WEc0Z0lDQWdabTl5SUNoamIyNXpkQ0J0WVhCd2FXNW5JRzltSUhSb2FYTXViV0Z3Y0dsdVozTXBJSHRjYmlBZ0lDQWdJRzFoY0hCbFpDQTlJRzFoY0hCcGJtY3ViV0Z3Y3loclpYbHpLVHRjYmlBZ0lDQWdJR2xtSUNodFlYQndaV1FnSVQwZ2JuVnNiQ0I4ZkNCdFlYQndhVzVuTG10bGVXMWhjRTF2WkdVZ1BUMDlJQ2R5WlhCc1lXTmxKeWtnZTF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUcxaGNIQmxaRHRjYmlBZ2ZWeHVYRzRnSUhCMVlteHBZeUJ6ZEdGMGFXTWdhWE1vWVdOMGFXOXVPaUJ6ZEhKcGJtY3BPaUJpYjI5c1pXRnVJSHRjYmlBZ0lDQm1iM0lnS0dOdmJuTjBJSEJ5WlhOelpXUWdiMllnZEdocGN5NXdjbVZ6YzJWa0xuWmhiSFZsY3lncEtTQjdYRzRnSUNBZ0lDQnBaaUFvY0hKbGMzTmxaQzVyWlhsdFlYQXVZV04wYVc5dUlDRTlQU0JoWTNScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWRHbHVkV1U3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JwWmlBb2NISmxjM05sWkM1eVpYQmxZWFFnUFQwOUlEQWdmSHdnS0hCeVpYTnpaV1F1YTJWNWJXRndMbkpsY0dWaGRDQW1KaUJ3Y21WemMyVmtMbkpsY0dWaGRDQThQU0F3S1NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnaGNISmxjM05sWkM1clpYbHRZWEF1Y21Wd1pXRjBJQ1ltSUNGd2NtVnpjMlZrTG1SdmJtVkpjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lIQnlaWE56WldRdVpHOXVaVWx6SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lIMWNibjFjYmlJc0ltbHRjRzl5ZENCN0lFMXZkWE5sSUgwZ1puSnZiU0JjSWk0dmJXOTFjMlZjSWp0Y2NseHVYSEpjYm1WNGNHOXlkQ0JqYkdGemN5Qk5iM1Z6WlUxaGNIQnBibWNnZTF4eVhHNGdJSEIxWW14cFl5QmpiMjV6ZEhKMVkzUnZjaWhjY2x4dUlDQXBJSHRjY2x4dUlDQjlYSEpjYmlBZ2NIVmliR2xqSUhWdWJXRndLQ2s2SUhadmFXUWdlMXh5WEc0Z0lDQWdUVzkxYzJVdWRXNXRZWEFvZEdocGN5azdYSEpjYmlBZ2ZWeHlYRzU5WEhKY2JpSXNJbWx0Y0c5eWRDQjdJRTF2ZFhObFRXRndjR2x1WnlCOUlHWnliMjBnWENJdUwyMXZkWE5sTFcxaGNIQnBibWRjSWp0Y2NseHVYSEpjYm1WNGNHOXlkQ0IwZVhCbElFMXZkWE5sUTJGc2JHSmhZMnNnUFNBb2EyVjVPaUJ6ZEhKcGJtY3NJSEJ5WlhOelpXUTZJR0p2YjJ4bFlXNHNJR1JsYkhSaFZHbHRaVG9nYm5WdFltVnlLU0E5UGlCMmIybGtPMXh5WEc1bGVIQnZjblFnZEhsd1pTQk5iM1Z6WlVWbVptVmpkRTF2WkdVZ1BTQW5hVzV6ZEdGdWRDY2dmQ0FuYVc1MFpYSjJZV3duTzF4eVhHNWNjbHh1Wlhod2IzSjBJR05zWVhOeklFMXZkWE5sSUh0Y2NseHVJQ0J3Y21sMllYUmxJSE4wWVhScFl5QnRZWEJ3YVc1bmN6b2dUVzkxYzJWTllYQndhVzVuVzEwZ1BTQmJYVHRjY2x4dVhISmNiaUFnY0hWaWJHbGpJSE4wWVhScFl5QnBibWwwYVdGc2FYcGxLQ2tnZTF4eVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCd2RXSnNhV01nYzNSaGRHbGpJSFJsY20xcGJtRjBaU2dwSUhzZ2ZWeHlYRzVjY2x4dUlDQndkV0pzYVdNZ2MzUmhkR2xqSUcxaGNDZ3BPaUJOYjNWelpVMWhjSEJwYm1jZ2UxeHlYRzRnSUNBZ1kyOXVjM1FnYldGd2NHbHVaeUE5SUc1bGR5Qk5iM1Z6WlUxaGNIQnBibWNvS1R0Y2NseHVJQ0FnSUhSb2FYTXViV0Z3Y0dsdVozTXVkVzV6YUdsbWRDaHRZWEJ3YVc1bktUdGNjbHh1SUNBZ0lISmxkSFZ5YmlCdFlYQndhVzVuTzF4eVhHNGdJSDFjY2x4dUlDQndkV0pzYVdNZ2MzUmhkR2xqSUhWdWJXRndLRzFoY0hCcGJtYzZJRTF2ZFhObFRXRndjR2x1WnlrNklIWnZhV1FnZTF4eVhHNGdJQ0FnZEdocGN5NXRZWEJ3YVc1bmN5QTlJSFJvYVhNdWJXRndjR2x1WjNNdVptbHNkR1Z5S0cwZ1BUNGdiU0FoUFQwZ2JXRndjR2x1WnlrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCd2RXSnNhV01nYzNSaGRHbGpJSFZ3WkdGMFpTaGtaV3gwWVZScGJXVTZJRzUxYldKbGNpa2dleUI5WEhKY2JseHlYRzRnSUhCMVlteHBZeUJ6ZEdGMGFXTWdhWE1vWVdOMGFXOXVPaUJ6ZEhKcGJtY3BPaUJpYjI5c1pXRnVJSHRjY2x4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2NseHVJQ0I5WEhKY2JuMWNjbHh1SWl3aWFXMXdiM0owSUhzZ1NVdGxlVTFoY0hCcGJtY3NJRXRsZVdKdllYSmtMQ0JMWlhsRFlXeHNZbUZqYXl3Z1MyVjVSV1ptWldOMFRXOWtaU3dnUzJWNWJXRndUVzlrWlNCOUlHWnliMjBnWENJdUwydGxlV0p2WVhKa1hDSTdYRzVwYlhCdmNuUWdleUJMWlhsaWIyRnlaRTFoY0hCcGJtY2dmU0JtY205dElGd2lMaTlyWlhsaWIyRnlaQzF0WVhCd2FXNW5YQ0k3WEc1cGJYQnZjblFnZXlCTmIzVnpaU0I5SUdaeWIyMGdYQ0l1TDIxdmRYTmxYQ0k3WEc1cGJYQnZjblFnZXlCTmIzVnpaVTFoY0hCcGJtY2dmU0JtY205dElGd2lMaTl0YjNWelpTMXRZWEJ3YVc1blhDSTdYRzVjYm1WNGNHOXlkQ0IwZVhCbElFbHVjSFYwUTJGc2JHSmhZMnNnUFNCTFpYbERZV3hzWW1GamF6dGNibVY0Y0c5eWRDQjBlWEJsSUVsdWNIVjBSV1ptWldOMFRXOWtaU0E5SUV0bGVVVm1abVZqZEUxdlpHVTdYRzVjYm1WNGNHOXlkQ0JqYkdGemN5QkpibkIxZENCN1hHNGdJSEJ5YVhaaGRHVWdjM1JoZEdsaklHbHVhWFJwWVd4cGVtVmtJRDBnWm1Gc2MyVTdYRzRnSUhCMVlteHBZeUJ6ZEdGMGFXTWdjbkJ6T2lCdWRXMWlaWEk3WEc1Y2JpQWdjSFZpYkdsaklITjBZWFJwWXlCcGJtbDBhV0ZzYVhwbEtISndjem9nYm5WdFltVnlMQ0J5UVVZZ1BTQjBjblZsTENCbGJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVltOWtlU2tnZTF4dUlDQWdJRWx1Y0hWMExtbHVhWFJwWVd4cGVtVmtJRDBnZEhKMVpUdGNiaUFnSUNCMGFHbHpMbkp3Y3lBOUlISndjenRjYmlBZ0lDQkxaWGxpYjJGeVpDNXBibWwwYVdGc2FYcGxLR1ZzWlcxbGJuUXBPMXh1SUNBZ0lFMXZkWE5sTG1sdWFYUnBZV3hwZW1Vb0tUdGNibHh1SUNBZ0lHbG1JQ2h5UVVZZ1BUMDlJSFJ5ZFdVcElIdGNiaUFnSUNBZ0lHeGxkQ0JzWVhOME9pQnVkVzFpWlhJN1hHNGdJQ0FnSUNCamIyNXpkQ0J6ZEdGeWRDQTlJQ2h1YjNjNklHNTFiV0psY2lrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JzWVhOMElEMGdibTkzTzF4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVW9kR2xqYXlrN1hHNGdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ1kyOXVjM1FnZEdsamF5QTlJQ2h1YjNjNklHNTFiV0psY2lrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmtaV3gwWVZScGJXVWdQU0FvYm05M0lDMGdiR0Z6ZENrZ0x5QXhNREF3TzF4dUlDQWdJQ0FnSUNCc1lYTjBJRDBnYm05M08xeHVJQ0FnSUNBZ0lDQkpibkIxZEM1MWNHUmhkR1VvWkdWc2RHRlVhVzFsS1R0Y2JpQWdJQ0FnSUNBZ2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLSFJwWTJzcE8xeHVJQ0FnSUNBZ2ZUdGNiaUFnSUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU2h6ZEdGeWRDazdYRzRnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2NIVmliR2xqSUhOMFlYUnBZeUIwWlhKdGFXNWhkR1VvS1NCN1hHNGdJQ0FnUzJWNVltOWhjbVF1ZEdWeWJXbHVZWFJsS0NrN1hHNGdJQ0FnVFc5MWMyVXVkR1Z5YldsdVlYUmxLQ2s3WEc0Z0lIMWNibHh1SUNCd2RXSnNhV01nYzNSaGRHbGpJRzFoY0NodFlYQndhVzVuY3pvZ1lXNTVMQ0JqWVd4c1ltRmphejg2SUVsdWNIVjBRMkZzYkdKaFkyc3NJR1ZtWm1WamRFMXZaR1U2SUVsdWNIVjBSV1ptWldOMFRXOWtaU0E5SUNkcGJuUmxjblpoYkNjc0lHdGxlVzFoY0UxdlpHVTZJRXRsZVcxaGNFMXZaR1VnUFNBbllXUmtKeWs2SUV0bGVXSnZZWEprVFdGd2NHbHVaeUI3WEc0Z0lDQWdhV1lnS0NGSmJuQjFkQzVwYm1sMGFXRnNhWHBsWkNrZ2UxeHVJQ0FnSUNBZ1NXNXdkWFF1YVc1cGRHbGhiR2w2WlNnMk1DazdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJMWlhsaWIyRnlaQzV0WVhBb2JXRndjR2x1WjNNc0lHTmhiR3hpWVdOckxDQmxabVpsWTNSTmIyUmxMQ0JyWlhsdFlYQk5iMlJsS1R0Y2JpQWdmVnh1SUNCd2RXSnNhV01nYzNSaGRHbGpJSFZ1YldGd0tHMWhjSEJwYm1jNklFdGxlV0p2WVhKa1RXRndjR2x1WnlCOElFMXZkWE5sVFdGd2NHbHVaeWs2SUhadmFXUWdlMXh1SUNBZ0lHbG1JQ2h0WVhCd2FXNW5JR2x1YzNSaGJtTmxiMllnUzJWNVltOWhjbVJOWVhCd2FXNW5LU0I3WEc0Z0lDQWdJQ0JMWlhsaWIyRnlaQzUxYm0xaGNDaHRZWEJ3YVc1bktUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnVFc5MWMyVXVkVzV0WVhBb2JXRndjR2x1WnlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NIVmliR2xqSUhOMFlYUnBZeUIxY0dSaGRHVW9aR1ZzZEdGVWFXMWxPaUJ1ZFcxaVpYSXBJSHRjYmlBZ0lDQkxaWGxpYjJGeVpDNTFjR1JoZEdVb1pHVnNkR0ZVYVcxbEtUdGNiaUFnSUNCTmIzVnpaUzUxY0dSaGRHVW9aR1ZzZEdGVWFXMWxLVHRjYmlBZ2ZWeHVYRzRnSUhCMVlteHBZeUJ6ZEdGMGFXTWdhWE1vWVdOMGFXOXVPaUJ6ZEhKcGJtY3BPaUJpYjI5c1pXRnVJSHRjYmlBZ0lDQnBaaUFvSVVsdWNIVjBMbWx1YVhScFlXeHBlbVZrS1NCN1hHNGdJQ0FnSUNCSmJuQjFkQzVwYm1sMGFXRnNhWHBsS0RZd0tUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJRXRsZVdKdllYSmtMbWx6S0dGamRHbHZiaWtnZkh3Z1RXOTFjMlV1YVhNb1lXTjBhVzl1S1R0Y2JpQWdmVnh1ZlZ4dUlsMHNJbTVoYldWeklqcGJJbTFoY0hCcGJtZHpJbDBzSW0xaGNIQnBibWR6SWpvaVFVRkZUeXhOUVVGTkxHVkJRV2RDTEVOQlFVRTdRVUZCUVN4RlFVTndRaXhYUVVORkxFTkJRVUVzVVVGQlFTeEZRVU5CTEZGQlEwRXNSVUZCUVN4VlFVRkJMRVZCUTBFc1ZVRkRVQ3hGUVVGQk8wRkJTazhzU1VGQlFTeEpRVUZCTEVOQlFVRXNVVUZCUVN4SFFVRkJMRkZCUVVFc1EwRkJRVHRCUVVOQkxFbEJRVUVzU1VGQlFTeERRVUZCTEZGQlFVRXNSMEZCUVN4UlFVRkJMRU5CUVVFN1FVRkRRU3hKUVVGQkxFbEJRVUVzUTBGQlFTeFZRVUZCTEVkQlFVRXNWVUZCUVN4RFFVRkJPMEZCUTBFc1NVRkJRU3hKUVVGQkxFTkJRVUVzVlVGQlFTeEhRVUZCTEZWQlFVRXNRMEZCUVR0QlFVVlFMRWxCUVVrc1NVRkJRU3hQUVVGUExFbEJRVXNzUTBGQlFTeFJRVUZCTEV0QlFXRXNVVUZCVlN4RlFVRkJPMEZCUTNKRExFMUJRVXNzU1VGQlFTeERRVUZCTEZGQlFVRXNSMEZCVnl4RFFVRkRMRWxCUVVFc1EwRkJTeXhSUVVGUkxFTkJRVUVzUTBGQlFUdEJRVUZCTEV0QlEyaERPMEZCUTBFc1NVRkJRU3hKUVVGSkxFdEJRVTBzUTBGQlFTeFBRVUZCTEVOQlFWRXNTVUZCU3l4RFFVRkJMRkZCUVZFc1EwRkJSeXhGUVVGQk8wRkJRMmhETEUxQlFVc3NTVUZCUVN4RFFVRkJMRkZCUVVFc1IwRkJWeXhEUVVGRExFZEJRVWNzU1VGQlFTeERRVUZMTEZGQlFWRXNRMEZCUlN4RFFVRkJMRTFCUVVFc1EwRkJUeXhEUVVGRFFTeFRRVUZCUVN4RlFVRlZMRXRCUVZVc1MwRkJRVHRCUVVNM1JDeFJRVUZEUVN4VlFVRnBRaXhMUVVGVExFTkJRVUVzUjBGQlFTeExRVUZCTEVOQlFVRTdRVUZETTBJc1VVRkJUMEVzVDBGQlFVRXNVMEZCUVVFc1EwRkJRVUU3UVVGQlFTeFBRVU5VTEVWQlFVY3NSVUZCUlN4RFFVRkJMRU5CUVVFN1FVRkJRU3hMUVVOUU8wRkJRMEVzU1VGQlZ5eExRVUZCTEUxQlFVRXNSMEZCUVN4SlFVRlBMRXRCUVVzc1VVRkJWU3hGUVVGQk8wRkJReTlDTEUxQlFVMHNUVUZCUVN4TlFVRkJMRWRCUVZNc1MwRkJTeXhSUVVGVExFTkJRVUVzUjBGQlFTeERRVUZCTEVOQlFVRTdRVUZETjBJc1RVRkJTU3hKUVVGQkxFOUJRVThzVjBGQlZ5eFJRVUZWTEVWQlFVRTdRVUZET1VJc1VVRkJRU3hKUVVGQkxFTkJRVXNzVTBGQlV5eEhRVUZQTEVOQlFVRXNSMEZCUVR0QlFVRkJMRlZCUTI1Q0xFMUJRVUU3UVVGQlFTeFZRVU5CTEUxQlFWRXNSVUZCUVN4SlFVRkJPMEZCUVVFc1UwRkRWaXhEUVVGQk8wRkJRVUVzVDBGRFJqdEJRVU5CTEUxQlFVc3NTVUZCUVN4RFFVRkJMRkZCUVVFc1EwRkJVeXhMUVVGTExFOUJRVlVzUjBGQlFTeEpRVUZCTEVOQlFVRTdRVUZCUVN4TFFVTXZRanRCUVVGQkxFZEJRMFk3UVVGQlFTeEZRVVZQTEV0QlFVc3NTVUZCZFVNc1JVRkJRVHRCUVVOcVJDeEpRVUZCTEU5QlFWRXNTMEZCU3l4UlFVRnBRaXhEUVVGQkxFbEJRVUVzUTBGQlFTeERRVUZCTzBGQlFVRXNSMEZEYUVNN1FVRkJRU3hGUVVWUExFdEJRV01zUjBGQlFUdEJRVU51UWl4SlFVRkJMRkZCUVVFc1EwRkJVeXhOUVVGTkxFbEJRVWtzUTBGQlFTeERRVUZCTzBGQlFVRXNSMEZEY2tJN1FVRlhSanM3UVVOc1EwOHNUVUZCVFN4WlFVRk9MRTFCUVdVN1FVRkJRU3hGUVU5d1FpeFBRVUZqTEZkQlFWY3NUMEZCYzBJc1JVRkJRVHRCUVVNM1F5eEpRVUZCTEVsQlFVRXNRMEZCU3l4UFFVRlZMRWRCUVVFc1QwRkJRU3hEUVVGQk8wRkJRMllzU1VGQlFTeEpRVUZCTEVOQlFVc3NUMEZCVVN4RFFVRkJMR2RDUVVGQkxFTkJRV2xDTEZOQlFWY3NSVUZCUVN4SlFVRkJMRU5CUVVzc1UwRkJVeXhEUVVGQkxFTkJRVUU3UVVGRGRrUXNTVUZCUVN4SlFVRkJMRU5CUVVzc1QwRkJVU3hEUVVGQkxHZENRVUZCTEVOQlFXbENMRTlCUVZNc1JVRkJRU3hKUVVGQkxFTkJRVXNzVTBGQlV5eERRVUZCTEVOQlFVRTdRVUZEY2tRc1NVRkJUeXhQUVVGQkxFbEJRVUVzUTBGQlFUdEJRVUZCTEVkQlExUTdRVUZCUVN4RlFVVkJMRTlCUVdNc1UwRkJXU3hIUVVGQk8wRkJRM2hDTEVsQlFVRXNTVUZCUVN4RFFVRkxMRTlCUVZNc1JVRkJRU3h0UWtGQlFTeERRVUZ2UWl4VFFVRlhMRVZCUVVFc1NVRkJRU3hEUVVGTExGTkJRVk1zUTBGQlFTeERRVUZCTzBGQlF6TkVMRWxCUVVFc1NVRkJRU3hEUVVGTExFOUJRVk1zUlVGQlFTeHRRa0ZCUVN4RFFVRnZRaXhQUVVGVExFVkJRVUVzU1VGQlFTeERRVUZMTEZOQlFWTXNRMEZCUVN4RFFVRkJPMEZCUTNwRUxFbEJRVUVzU1VGQlFTeERRVUZMTEU5QlFWVXNSMEZCUVN4SlFVRkJMRU5CUVVFN1FVRkJRU3hIUVVOcVFqdEJRVUZCTEVWQlJVRXNUMEZCWXl4SFFVRkpMRU5CUVVFc1VVRkJRU3hGUVVFeVJDeFZRVUYzUWl4VlFVRTBRaXhIUVVGQkxGVkJRVUVzUlVGQldTeGhRVUY1UWl4TFFVRjNRaXhGUVVGQk8wRkJRelZNTEVsQlFVRXNUVUZCVFN4VlFVRlZMRWxCUVVrc1pVRkJRU3hEUVVGblFpeFJRVUZWTEVWQlFVRXNVVUZCUVN4RlFVRlZMRmxCUVZrc1ZVRkJWU3hEUVVGQkxFTkJRVUU3UVVGRE9VVXNTVUZCU3l4SlFVRkJMRU5CUVVFc1VVRkJRU3hEUVVGVExGRkJRVkVzVDBGQlR5eERRVUZCTEVOQlFVRTdRVUZETjBJc1NVRkJUeXhQUVVGQkxFOUJRVUVzUTBGQlFUdEJRVUZCTEVkQlExUTdRVUZCUVN4RlFVTkJMRTlCUVdNc1RVRkJUU3hQUVVGblF5eEZRVUZCTzBGQlEyeEVMRWxCUVVFc1NVRkJRU3hEUVVGTExGZEJRVmNzU1VGQlN5eERRVUZCTEZGQlFVRXNRMEZCVXl4TlFVRlBMRU5CUVVFc1EwRkJRU3hEUVVGQkxFdEJRVXNzVFVGQlRTeFBRVUZQTEVOQlFVRXNRMEZCUVR0QlFVTjJSQ3hKUVVGQkxFdEJRVUVzVFVGQlZ5eEhRVUZQTEVsQlFVRXNTVUZCUVN4RFFVRkxMRTlCUVZFc1EwRkJRU3hKUVVGQkxFVkJRVkVzUlVGQlFUdEJRVU55UXl4TlFVRkJMRWxCUVVrc1MwRkJTeXhQUVVGUkxFTkJRVUVzUjBGQlFTeERRVUZKTEVkQlFVY3NRMEZCUnl4RlFVRkJMRTFCUVVFc1EwRkJUeXhaUVVGWkxFOUJRVk1zUlVGQlFUdEJRVU55UkN4UlFVRkxMRWxCUVVFc1EwRkJRU3hQUVVGQkxFTkJRVkVzVDBGQlR5eEhRVUZITEVOQlFVRXNRMEZCUVR0QlFVRkJMRTlCUTNwQ08wRkJRVUVzUzBGRFJqdEJRVU5CTEVsQlFVRXNTVUZCUVN4RFFVRkxMR05CUVdNc1EwRkJReXhIUVVGSExFbEJRVXNzUTBGQlFTeFBRVUZCTEVOQlFWRXNUVUZCVFN4RFFVRkJMRU5CUVVFN1FVRkJRU3hIUVVNMVF6dEJRVUZCTEVWQkswTkJMRTlCUVdNc1QwRkJVU3hEUVVGQkxFbEJRVUVzUlVGQll5eFRRVUZ0UWl4RlFVRkJPMEZCUTNKRUxFbEJRVTBzVFVGQlFTeE5RVUZCTEVkQlFWTXNTVUZCU3l4RFFVRkJMRTFCUVVFc1EwRkJUeXhKUVVGSkxFTkJRVUVzUTBGQlFUdEJRVU12UWl4SlFVRkJMRWxCUVVrc1ZVRkJWU3hKUVVGTkxFVkJRVUU3UVVGRGJFSXNUVUZCUVN4UFFVRkJPMEZCUVVFc1MwRkRSanRCUVVWQkxFbEJRVWtzU1VGQlFTeE5RVUZCTEVOQlFVOHNUMEZCVXl4RlFVRkJMRlZCUVVFc1MwRkJaU3hUUVVGWExFVkJRVUU3UVVGRE5VTXNUVUZCUVN4TlFVRkJMRU5CUVU4c1VVRkJVU3hSUVVGWExFZEJRVUVzVFVGQlFTeERRVUZQTEUxQlFWRXNSVUZCUVN4VFFVRkJMRXRCUVdNc1YwRkJWeXhEUVVGRExFTkJRVUVzUTBGQlFUdEJRVU51UlN4TlFVRkJMRTlCUVVFN1FVRkJRU3hMUVVOR08wRkJSVUVzU1VGQlFTeEpRVUZKTEdOQlFXTXNVMEZCVnl4RlFVRkJPMEZCUXpOQ0xFMUJRVUVzU1VGQlNTeERRVUZETEVsQlFVRXNRMEZCU3l4UFFVRlJMRU5CUVVFc1IwRkJRU3hEUVVGSkxFbEJRVWtzUTBGQlJ5eEZRVUZCTzBGQlF6TkNMRkZCUVVFc1NVRkJRU3hEUVVGTExFOUJRVkVzUTBGQlFTeEhRVUZCTEVOQlFVa3NTVUZCVFN4RlFVRkJMRVZCUVVVc1RVRkJVU3hGUVVGQkxFMUJRVUVzUlVGQlVTeE5RVUZSTEVWQlFVRXNRMEZCUVN4RlFVRkhMRWxCUVUwc1JVRkJRU3hMUVVGQkxFVkJRVThzVFVGQlVTeEZRVUZCTEV0QlFVRXNSVUZCVHl4RFFVRkJMRU5CUVVFN1FVRkJRU3hQUVVOc1JqdEJRVUZCTEV0QlEwWXNUVUZCUVN4SlFVRlhMR05CUVdNc1QwRkJVeXhGUVVGQk8wRkJRMmhETEUxQlFVc3NTVUZCUVN4RFFVRkJMRTlCUVVFc1EwRkJVU3hQUVVGUExFbEJRVWtzUTBGQlFTeERRVUZCTzBGQlFVRXNTMEZETVVJN1FVRkJRU3hIUVVOR08wRkJRVUVzUlVGRlFTeFBRVUZqTEU5QlFVOHNVMEZCYlVJc1JVRkJRVHRCUVVOMFF5eEpRVUZCTEVsQlFVRXNRMEZCU3l4UFFVRlJMRU5CUVVFc1QwRkJRU3hEUVVGUkxFTkJRVU1zVFVGQlFTeEZRVUZSTEVkQlFWRXNTMEZCUVR0QlFVTndReXhOUVVGSkxFbEJRVUVzVFVGQlFTeERRVUZQTEZkQlFWY3NRMEZCVFN4SlFVRkJMRTFCUVVFc1EwRkJUeXhQUVVGUExFMUJRVlVzU1VGQlFTeE5RVUZCTEVOQlFVOHNWVUZCVlN4RFFVRkpMRVZCUVVFN1FVRkRka1VzVVVGQlFTeE5RVUZCTEVOQlFVOHNUMEZCVHl4UFFVRlRMRVZCUVVFc1VVRkJRU3hIUVVGWExFOUJRVThzVFVGQlR5eERRVUZCTEUxQlFVRXNSVUZCVVN4TlFVRk5MRk5CUVZNc1EwRkJRU3hEUVVGQk8wRkJRM1pGTEZGQlFVRXNUVUZCUVN4RFFVRlBMRlZCUVZVc1MwRkJUU3hEUVVGQkxFZEJRVUVzUTBGQlFUdEJRVUZCTEU5QlEyeENMRTFCUVVFN1FVRkZUQ3hSUVVGSkxFbEJRVUVzUTBGQlF5eE5RVUZQTEVOQlFVRXNUVUZCUVN4RFFVRlBMRTFCUVZFc1JVRkJRVHRCUVVONlFpeFZRVUZKTEVsQlFVRXNRMEZCUXl4UFFVRlBMRWxCUVUwc1JVRkJRVHRCUVVWb1FpeFpRVUZCTEUxQlFVRXNRMEZCVHl4SlFVRlBMRWRCUVVFc1NVRkJRU3hEUVVGQk8wRkJRVUVzVjBGRGFFSTdRVUZCUVN4VFFVTkxMRTFCUVVFN1FVRkRUQ3hWUVVGQkxFMUJRVUVzUTBGQlR5eFZRVUZWTEZOQlFWa3NSMEZCUVN4SFFVRkJMRU5CUVVFN1FVRkJRU3hUUVVNdlFqdEJRVUZCTEU5QlEwWTdRVUZCUVN4TFFVTkVMRU5CUVVFc1EwRkJRVHRCUVVORUxFbEJRVXNzU1VGQlFTeERRVUZCTEZkQlFVRXNRMEZCV1N4UlFVRlJMRU5CUVZFc1NVRkJRU3hMUVVGQk8wRkJReTlDTEUxQlFVRXNTVUZCU1N4RFFVRkRMRWxCUVVFc1EwRkJTeXhQUVVGUkxFTkJRVUVzUjBGQlFTeERRVUZKTEVsQlFVa3NRMEZCUnl4RlFVRkJPMEZCUXpOQ0xGRkJRVTBzVFVGQlFTeE5RVUZCTEVkQlFWTXNTVUZCU3l4RFFVRkJMRTFCUVVFc1EwRkJUeXhKUVVGSkxFTkJRVUVzUTBGQlFUdEJRVU12UWl4UlFVRkJMRTFCUVVFc1JVRkJVU3hQUVVGVExFTkJRVUVzVVVGQlFTeEhRVUZYTEUxQlFVOHNRMEZCUVN4TlFVRkJMRVZCUVZFc1QwRkJUeXhUUVVGVExFTkJRVUVzUTBGQlFUdEJRVUZCTEU5QlF6ZEVPMEZCUVVFc1MwRkRSQ3hEUVVGQkxFTkJRVUU3UVVGRFJDeEpRVUZCTEVsQlFVRXNRMEZCU3l4alFVRmpMRU5CUVVNc1IwRkJSeXhKUVVGTExFTkJRVUVzVDBGQlFTeERRVUZSTEUxQlFVMHNRMEZCUVN4RFFVRkJPMEZCUVVFc1IwRkROVU03UVVGQlFTeEZRVVZCTEU5QlFXTXNUMEZCVHl4SlFVRjFReXhGUVVGQk8wRkJRekZFTEVsQlFVa3NTVUZCUVN4TlFVRkJMRU5CUVVFN1FVRkRTaXhKUVVGWExFdEJRVUVzVFVGQlFTeFBRVUZCTEVsQlFWY3NTMEZCU3l4UlFVRlZMRVZCUVVFN1FVRkRia01zVFVGQlV5eE5RVUZCTEVkQlFVRXNUMEZCUVN4RFFVRlJMRXRCUVVzc1NVRkJTU3hEUVVGQkxFTkJRVUU3UVVGRE1VSXNUVUZCUVN4SlFVRkpMRTFCUVZVc1NVRkJRU3hKUVVGQkxFbEJRVkVzVDBGQlVTeERRVUZCTEZWQlFVRXNTMEZCWlN4VFFVRlhMRVZCUVVFN1FVRkRkRVFzVVVGQlFTeE5RVUZCTzBGQlFVRXNUMEZEUmp0QlFVRkJMRXRCUTBZN1FVRkRRU3hKUVVGUExFOUJRVUVzVFVGQlFTeERRVUZCTzBGQlFVRXNSMEZEVkR0QlFVRkJMRVZCUlVFc1QwRkJZeXhIUVVGSExFMUJRWGxDTEVWQlFVRTdRVUZEZUVNc1NVRkJRU3hMUVVGQkxFMUJRVmNzVDBGQlZ5eEpRVUZCTEVsQlFVRXNRMEZCU3l4UFFVRlJMRU5CUVVFc1RVRkJRU3hGUVVGVkxFVkJRVUU3UVVGRE0wTXNUVUZCU1N4SlFVRkJMRTlCUVVFc1EwRkJVU3hOUVVGUExFTkJRVUVzVFVGQlFTeExRVUZYTEUxQlFWRXNSVUZCUVR0QlFVTndReXhSUVVGQkxGTkJRVUU3UVVGQlFTeFBRVU5HTzBGQlEwRXNUVUZCU1N4SlFVRkJMRTlCUVVFc1EwRkJVU3hYUVVGWExFTkJRVTBzU1VGQlFTeFBRVUZCTEVOQlFWRXNUMEZCVHl4TlFVRlZMRWxCUVVFc1QwRkJRU3hEUVVGUkxGVkJRVlVzUTBGQlNTeEZRVUZCTzBGQlF6RkZMRkZCUVU4c1QwRkJRU3hKUVVGQkxFTkJRVUU3UVVGQlFTeFBRVU5HTEUxQlFVRTdRVUZEVEN4UlFVRkJMRWxCUVVrc1EwRkJReXhQUVVGUkxFTkJRVUVzVFVGQlFTeERRVUZQTEUxQlFWVXNTVUZCUVN4RFFVRkRMRkZCUVZFc1RVRkJVU3hGUVVGQk8wRkJRemRETEZWQlFVRXNUMEZCUVN4RFFVRlJMRTFCUVZNc1IwRkJRU3hKUVVGQkxFTkJRVUU3UVVGRGFrSXNWVUZCVHl4UFFVRkJMRWxCUVVFc1EwRkJRVHRCUVVGQkxGTkJRMVE3UVVGQlFTeFBRVU5HTzBGQlEwRXNUVUZCVHl4UFFVRkJMRXRCUVVFc1EwRkJRVHRCUVVGQkxFdEJRMVE3UVVGRFFTeEpRVUZQTEU5QlFVRXNTMEZCUVN4RFFVRkJPMEZCUVVFc1IwRkRWRHRCUVVOR0xFTkJRVUVzUTBGQlFUdEJRVEZLVHl4SlFVRk5MRkZCUVU0c1IwRkJRU3hWUVVGQk8wRkJRVTBzVVVGQlFTeERRVVZKTEZkQlFUaENMRVZCUVVNc1EwRkJRVHRCUVVadVF5eFJRVWxoTEVOQlFVRXNUMEZCUVN4MVFrRkJiMGNzUjBGQlNTeEZRVUZCTEVOQlFVRTdRVUZLY2tnc1VVRkJRU3hEUVV0SkxHTkJRWGRDTEVWQlFVTXNRMEZCUVR0QlFVdzNRaXhSUVcxRFJ5eERRVUZCTEZOQlFVRXNSMEZCV1N4RFFVRkRMRXRCUVN0Q0xFdEJRVUU3UVVGRGVFUXNSVUZCUVN4SlFVRkpMRTlCUVU4c1MwRkJUU3hEUVVGQkxFZEJRVUVzUTBGQlFUdEJRVU5xUWl4RlFVRkJMRWxCUVVrc1EwRkJReXhUUVVGWExFVkJRVUVzUzBGQlFTeEZRVUZQTEU5QlFVOHNRMEZCUlN4RFFVRkJMRkZCUVVFc1EwRkJVeXhKUVVGSkxFTkJRVWNzUlVGQlFUdEJRVU01UXl4SlFVRkpMRWxCUVVFc1MwRkJRU3hEUVVGTkxGTkJRVk1zVTBGQlZ5eEZRVUZCTzBGQlF6VkNMRTFCUVVFc1MwRkJRU3hOUVVGWExFOUJRVmNzU1VGQlFTeFRRVUZCTEVOQlFVc3NUMEZCVVN4RFFVRkJMRWxCUVVFc1JVRkJVU3hGUVVGQk8wRkJRM3BETEZGQlFVMHNUVUZCUVN4WFFVRkJMRWRCUVdNc1QwRkJVU3hEUVVGQkxFdEJRVUVzUTBGQlRTeEhRVUZITEVOQlFVRXNRMEZCUVR0QlFVTnlReXhSUVVGSkxFbEJRVUVzVjBGQlFTeERRVUZaTEZGQlFWTXNRMEZCUVN4SlFVRkpMRU5CUVVjc1JVRkJRVHRCUVVNNVFpeFZRVUZCTEZOQlFVRTdRVUZCUVN4VFFVTkdPMEZCUTBFc1VVRkJTU3hKUVVGQkxHVkJRVUVzUjBGQmEwSXNXVUZCV1N4SFFVRkpMRVZCUVVFc1EwRkJRVHRCUVVOMFF5eFJRVUZCTEV0QlFVRXNUVUZCVnl4UlFVRlpMRWxCUVVFc1EwRkJReXhQUVVGVExFVkJRVUVzUzBGQlFTeEZRVUZQTEZOQlFWTXNRMEZCUnl4RlFVRkJPMEZCUTJ4RUxGVkJRVUVzU1VGQlNTeEpRVUZUTEV0QlFVRXNVVUZCUVN4SlFVRlpMRmRCUVZrc1EwRkJRU3hSUVVGQkxFTkJRVk1zVVVGQlVTeERRVUZITEVWQlFVRTdRVUZEZGtRc1dVRkJRU3hsUVVGQkxFZEJRV3RDTEVkQlFVY3NVVUZCV1N4RFFVRkJMRU5CUVVFc1JVRkJRU3hsUVVGQkxFTkJRVUVzUTBGQlFTeERRVUZCTzBGQlFVRXNWMEZEYmtNN1FVRkJRU3hUUVVOR08wRkJSVUVzVVVGQlV5eFRRVUZCTEVOQlFVRXNUMEZCUVN4RFFVRlJMRk5CUVZNc1QwRkJUeXhEUVVGQkxFTkJRVUU3UVVGRGFrTXNVVUZCVXl4VFFVRkJMRU5CUVVFc1QwRkJRU3hEUVVGUkxHbENRVUV5UWl4VFFVRlRMRU5CUVVFc1EwRkJRVHRCUVVGQkxFOUJRM1pFTzBGQlFVRXNTMEZEUml4TlFVRkJMRWxCUVZjc1MwRkJUU3hEUVVGQkxFbEJRVUVzUzBGQlV5eFBRVUZUTEVWQlFVRTdRVUZEYWtNc1RVRkJRU3hMUVVGQkxFMUJRVmNzVDBGQlZ5eEpRVUZCTEZOQlFVRXNRMEZCU3l4UFFVRlJMRU5CUVVFc1NVRkJRU3hGUVVGUkxFVkJRVUU3UVVGRGVrTXNVVUZCVFN4TlFVRkJMRmRCUVVFc1IwRkJZeXhQUVVGUkxFTkJRVUVzUzBGQlFTeERRVUZOTEVkQlFVY3NRMEZCUVN4RFFVRkJPMEZCUTNKRExGRkJRVUVzU1VGQlNTeERRVUZETEZkQlFVRXNRMEZCV1N4UlFVRlRMRU5CUVVFc1NVRkJTU3hEUVVGSExFVkJRVUU3UVVGREwwSXNWVUZCUVN4VFFVRkJPMEZCUVVFc1UwRkRSanRCUVVOQkxGRkJRVTBzVFVGQlFTeGxRVUZCTEVkQlFXdENMRmxCUVZrc1RVRkJUeXhEUVVGQkxFTkJRVUVzUjBGQlFTeExRVUZQTEZGQlFWRXNTVUZCU1N4RFFVRkJMRU5CUVVVc1MwRkJTeXhIUVVGSExFTkJRVUVzUTBGQlFUdEJRVVY0UlN4UlFVRlRMRk5CUVVFc1EwRkJRU3hQUVVGQkxFTkJRVkVzVTBGQlV5eFBRVUZQTEVOQlFVRXNRMEZCUVR0QlFVTnFReXhSUVVGVExGTkJRVUVzUTBGQlFTeFBRVUZCTEVOQlFWRXNhVUpCUVdsQ0xGTkJRVk1zUTBGQlFTeERRVUZCTzBGQlFVRXNUMEZETjBNN1FVRkJRU3hMUVVOR08wRkJRVUVzUjBGRFN5eE5RVUZCTzBGQlEwd3NTVUZCUVN4SlFVRkpMRTFCUVUwc1VVRkJWU3hGUVVGQk8wRkJRMnhDTEUxQlFVRXNTVUZCUVN4SFFVRlBMRU5CUVZNc1RVRkJRU3hGUVVGQkxFbEJRVUVzUTBGQlFTeERRVUZCTEVOQlFVRTdRVUZCUVN4TFFVTnNRanRCUVVOQkxFbEJRVUVzU1VGQlNTeE5RVUZOTEUxQlFWRXNSVUZCUVR0QlFVTm9RaXhOUVVGQkxFbEJRVUVzUjBGQlR5eERRVUZQTEVsQlFVRXNSVUZCUVN4SlFVRkJMRU5CUVVFc1EwRkJRU3hEUVVGQk8wRkJRVUVzUzBGRGFFSTdRVUZEUVN4SlFVRkJMRWxCUVVrc1RVRkJUU3hQUVVGVExFVkJRVUU3UVVGRGFrSXNUVUZCUVN4SlFVRkJMRWRCUVU4c1EwRkJWeXhSUVVGQkxFVkJRVUVzU1VGQlFTeERRVUZCTEVOQlFVRXNRMEZCUVR0QlFVRkJMRXRCUTNCQ08wRkJRMEVzU1VGQlV5eFRRVUZCTEVOQlFVRXNUMEZCUVN4RFFVRlJMRWxCUVUwc1JVRkJRU3hMUVVGQkxFTkJRVTBzU1VGQlNTeERRVUZCTEVOQlFVRTdRVUZCUVN4SFFVTnVRenRCUVVOR0xFTkJRVUU3TzBGRGVrWkxMRTFCUVUwc1dVRkJZU3hEUVVGQk8wRkJRVUVzUlVGRGFrSXNWMEZEVEN4SFFVRkJPMEZCUVVFc1IwRkRSanRCUVVGQkxFVkJRMDhzUzBGQll5eEhRVUZCTzBGQlEyNUNMRWxCUVVFc1MwRkJRU3hEUVVGTkxFMUJRVTBzU1VGQlNTeERRVUZCTEVOQlFVRTdRVUZCUVN4SFFVTnNRanRCUVVOR096dEJRMHBQTEUxQlFVMHNTMEZCVFN4RFFVRkJPMEZCUVVFc1JVRkhha0lzVDBGQll5eFZRVUZoTEVkQlFVRTdRVUZEZWtJc1NVRkJUeXhQUVVGQkxFbEJRVUVzUTBGQlFUdEJRVUZCTEVkQlExUTdRVUZCUVN4RlFVVkJMRTlCUVdNc1UwRkJXU3hIUVVGQk8wRkJRVUVzUjBGQlJUdEJRVUZCTEVWQlJUVkNMRTlCUVdNc1IwRkJiMElzUjBGQlFUdEJRVU5vUXl4SlFVRk5MRTFCUVVFc1QwRkJRU3hIUVVGVkxFbEJRVWtzV1VGQllTeEZRVUZCTEVOQlFVRTdRVUZEYWtNc1NVRkJTeXhKUVVGQkxFTkJRVUVzVVVGQlFTeERRVUZUTEZGQlFWRXNUMEZCVHl4RFFVRkJMRU5CUVVFN1FVRkROMElzU1VGQlR5eFBRVUZCTEU5QlFVRXNRMEZCUVR0QlFVRkJMRWRCUTFRN1FVRkJRU3hGUVVOQkxFOUJRV01zVFVGQlRTeFBRVUUyUWl4RlFVRkJPMEZCUXk5RExFbEJRVUVzU1VGQlFTeERRVUZMTEZkQlFWY3NTVUZCU3l4RFFVRkJMRkZCUVVFc1EwRkJVeXhOUVVGUExFTkJRVUVzUTBGQlFTeERRVUZCTEV0QlFVc3NUVUZCVFN4UFFVRlBMRU5CUVVFc1EwRkJRVHRCUVVGQkxFZEJRM3BFTzBGQlFVRXNSVUZGUVN4UFFVRmpMRTlCUVU4c1UwRkJiVUlzUlVGQlFUdEJRVUZCTEVkQlFVVTdRVUZCUVN4RlFVVXhReXhQUVVGakxFZEJRVWNzVFVGQmVVSXNSVUZCUVR0QlFVTjRReXhKUVVGUExFOUJRVUVzUzBGQlFTeERRVUZCTzBGQlFVRXNSMEZEVkR0QlFVTkdMRU5CUVVFN1FVRjJRbUVzUzBGQlFTeERRVU5KTEZkQlFUSkNMRVZCUVVNN08wRkRSWFJETEUxQlFVMHNVMEZCVGl4TlFVRlpPMEZCUVVFc1JVRkpha0lzVDBGQll5eFZRVUZYTEVOQlFVRXNSMEZCUVN4RlFVRmhMRTFCUVUwc1NVRkJUU3hGUVVGQkxFOUJRVUVzUjBGQlZTeFRRVUZUTEVsQlFVMHNSVUZCUVR0QlFVTjZSU3hKUVVGQkxFMUJRVUVzUTBGQlRTeFhRVUZqTEVkQlFVRXNTVUZCUVN4RFFVRkJPMEZCUTNCQ0xFbEJRVUVzU1VGQlFTeERRVUZMTEVkQlFVMHNSMEZCUVN4SFFVRkJMRU5CUVVFN1FVRkRXQ3hKUVVGQkxGRkJRVUVzUTBGQlV5eFhRVUZYTEU5QlFVOHNRMEZCUVN4RFFVRkJPMEZCUnpOQ0xFbEJRVUVzU1VGQlNTeFJRVUZSTEVsQlFVMHNSVUZCUVR0QlFVTm9RaXhOUVVGSkxFbEJRVUVzU1VGQlFTeERRVUZCTzBGQlEwb3NUVUZCVFN4TlFVRkJMRXRCUVVFc1IwRkJVU3hEUVVGRExFZEJRV2RDTEV0QlFVRTdRVUZETjBJc1VVRkJUeXhKUVVGQkxFZEJRVUVzUjBGQlFTeERRVUZCTzBGQlExQXNVVUZCUVN4eFFrRkJRU3hEUVVGelFpeEpRVUZKTEVOQlFVRXNRMEZCUVR0QlFVRkJMRTlCUXpWQ0xFTkJRVUU3UVVGRFFTeE5RVUZOTEUxQlFVRXNTVUZCUVN4SFFVRlBMRU5CUVVNc1IwRkJaMElzUzBGQlFUdEJRVU0xUWl4UlFVRk5MRTFCUVVFc1UwRkJRU3hIUVVGQkxFTkJRV0VzVFVGQlRTeEpRVUZSTEVsQlFVRXNSMEZCUVN4RFFVRkJPMEZCUTJwRExGRkJRVThzU1VGQlFTeEhRVUZCTEVkQlFVRXNRMEZCUVR0QlFVTlFMRkZCUVVFc1RVRkJRU3hEUVVGTkxFOUJRVThzVTBGQlV5eERRVUZCTEVOQlFVRTdRVUZEZEVJc1VVRkJRU3h4UWtGQlFTeERRVUZ6UWl4SlFVRkpMRU5CUVVFc1EwRkJRVHRCUVVGQkxFOUJRelZDTEVOQlFVRTdRVUZEUVN4TlFVRkJMSEZDUVVGQkxFTkJRWE5DTEV0QlFVc3NRMEZCUVN4RFFVRkJPMEZCUXpOQ0xFMUJRVUVzVDBGQlFUdEJRVUZCTEV0QlEwWTdRVUZEUVN4SlFVRlBMRTlCUVVFc1NVRkJRU3hEUVVGQk8wRkJRVUVzUjBGRFZEdEJRVUZCTEVWQlJVRXNUMEZCWXl4VFFVRlpMRWRCUVVFN1FVRkRlRUlzU1VGQlFTeFJRVUZCTEVOQlFWTXNVMEZCVlN4RlFVRkJMRU5CUVVFN1FVRkRTQ3hIUVVOc1FqdEJRVUZCTEVWQlJVRXNUMEZCWXl4SFFVRkpMRU5CUVVFc1VVRkJRU3hGUVVGbExGVkJRVEJDTEZWQlFUaENMRWRCUVVFc1ZVRkJRU3hGUVVGWkxHRkJRWGxDTEV0QlFYZENMRVZCUVVFN1FVRkRjRW9zU1VGQlNTeEpRVUZCTEVOQlFVTXNUMEZCVFN4WFFVRmhMRVZCUVVFN1FVRkRkRUlzVFVGQlFTeE5RVUZCTEVOQlFVMHNWMEZCVnl4RlFVRkZMRU5CUVVFc1EwRkJRVHRCUVVGQkxFdEJRM0pDTzBGQlEwRXNTVUZCUVN4UFFVRlBMRkZCUVZNc1EwRkJRU3hIUVVGQkxFTkJRVWtzVVVGQlZTeEZRVUZCTEZGQlFVRXNSVUZCVlN4WlFVRlpMRlZCUVZVc1EwRkJRU3hEUVVGQk8wRkJRVUVzUjBGRGFFVTdRVUZCUVN4RlFVTkJMRTlCUVdNc1RVRkJUU3hQUVVFclF5eEZRVUZCTzBGQlEycEZMRWxCUVVFc1NVRkJTU3h0UWtGQmJVSXNaVUZCYVVJc1JVRkJRVHRCUVVOMFF5eE5RVUZCTEZGQlFVRXNRMEZCVXl4TlFVRk5MRTlCUVU4c1EwRkJRU3hEUVVGQk8wRkJRVUVzUzBGRGFrSXNUVUZCUVR0QlFVTk1MRTFCUVVFc1MwRkJRU3hEUVVGTkxFMUJRVTBzVDBGQlR5eERRVUZCTEVOQlFVRTdRVUZCUVN4TFFVTnlRanRCUVVGQkxFZEJRMFk3UVVGQlFTeEZRVVZCTEU5QlFXTXNUMEZCVHl4VFFVRnRRaXhGUVVGQk8wRkJRM1JETEVsQlFVRXNVVUZCUVN4RFFVRlRMRTlCUVU4c1UwRkJVeXhEUVVGQkxFTkJRVUU3UVVGRFNDeEhRVU40UWp0QlFVRkJMRVZCUlVFc1QwRkJZeXhIUVVGSExFMUJRWGxDTEVWQlFVRTdRVUZEZUVNc1NVRkJTU3hKUVVGQkxFTkJRVU1zVDBGQlRTeFhRVUZoTEVWQlFVRTdRVUZEZEVJc1RVRkJRU3hOUVVGQkxFTkJRVTBzVjBGQlZ5eEZRVUZGTEVOQlFVRXNRMEZCUVR0QlFVRkJMRXRCUTNKQ08wRkJRMEVzU1VGQlFTeFBRVUZQTEZOQlFWTXNSVUZCUnl4RFFVRkJMRTFCUVUwc1EwRkJTeXhKUVVGQkxFdEJRVUVzUTBGQlRTeEhRVUZITEUxQlFVMHNRMEZCUVN4RFFVRkJPMEZCUVVFc1IwRkRMME03UVVGRFJpeERRVUZCTEVOQlFVRTdRVUV4UkU4c1NVRkJUU3hMUVVGT0xFZEJRVUVzVDBGQlFUdEJRVUZOTEV0QlFVRXNRMEZEU1N4WFFVRmpMRWRCUVVFc1MwRkJRVHM3T3pzaWZRPT1cbiIsImNsYXNzIFZlY3RvcjMge1xuICAgIGNvbnN0cnVjdG9yKHQgPSAwLCBzID0gMCwgZSA9IDApIHtcbiAgICAgICAgdGhpcy54ID0gdDtcbiAgICAgICAgdGhpcy55ID0gcztcbiAgICAgICAgdGhpcy56ID0gZTtcbiAgICB9XG4gICAgZ2V0IHplcm8oKSB7XG4gICAgICAgIHJldHVybiAwID09PSBNYXRoLmFicyh0aGlzLngpICYmIDAgPT09IE1hdGguYWJzKHRoaXMueSkgJiYgMCA9PT0gTWF0aC5hYnModGhpcy56KTtcbiAgICB9XG4gICAgZ2V0IG1hZ25pdHVkZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnopO1xuICAgIH1cbiAgICBnZXQgaGFsZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHkoLjUpO1xuICAgIH1cbiAgICBnZXQgbmVnSGFsZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHkoLS41KTtcbiAgICB9XG4gICAgc3RhdGljIGZyb20odCA9IDAsIHMgPSAwLCBlID0gMCkge1xuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIFZlY3RvcjMpIHtcbiAgICAgICAgICAgIHMgPSB0Lnk7XG4gICAgICAgICAgICBlID0gdC56O1xuICAgICAgICAgICAgdCA9IHQueDtcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHQpKSB7XG4gICAgICAgICAgICBzID0gdFsxXTtcbiAgICAgICAgICAgIGUgPSB0WzJdO1xuICAgICAgICAgICAgdCA9IHRbMF07XG4gICAgICAgIH0gZWxzZSBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHQgJiYgdC5pbmNsdWRlcyhcIixcIikpIFt0LCBzLCBlXSA9IHQuc3BsaXQoXCIsXCIpLm1hcCgodCA9PiArdCkpOyBlbHNlIGlmIChcIm51bWJlclwiICE9PSB0eXBlb2YgdCAmJiBcInN0cmluZ1wiICE9PSB0eXBlb2YgdCAmJiBcInhcIiBpbiB0ICYmIFwieVwiIGluIHQgJiYgXCJ6XCIgaW4gdCkge1xuICAgICAgICAgICAgcyA9IHQueTtcbiAgICAgICAgICAgIGUgPSB0Lno7XG4gICAgICAgICAgICB0ID0gdC54O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh0LCBzLCBlKTtcbiAgICB9XG4gICAgZXF1YWxzKHQpIHtcbiAgICAgICAgaWYgKHRoaXMueCAhPT0gdC54IHx8IHRoaXMueSAhPT0gdC55IHx8IHRoaXMueiAhPT0gdC56KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBhZGQodCwgcyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGUgPSBzID8gdGhpcyA6IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgY29uc3Qge3g6IGksIHk6IG4sIHo6IGh9ID0gQXJyYXkuaXNBcnJheSh0KSA/IHtcbiAgICAgICAgICAgIHg6IHRbMF0sXG4gICAgICAgICAgICB5OiB0WzFdLFxuICAgICAgICAgICAgejogdFsyXVxuICAgICAgICB9IDogdDtcbiAgICAgICAgZS54ICs9IGk7XG4gICAgICAgIGUueSArPSBuO1xuICAgICAgICBlLnogKz0gaDtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIHN1YnRyYWN0KHQsIHMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBlID0gcyA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IHt4OiBpLCB5OiBuLCB6OiBofSA9IEFycmF5LmlzQXJyYXkodCkgPyB7XG4gICAgICAgICAgICB4OiB0WzBdLFxuICAgICAgICAgICAgeTogdFsxXSxcbiAgICAgICAgICAgIHo6IHRbMl1cbiAgICAgICAgfSA6IHQ7XG4gICAgICAgIGUueCAtPSBpO1xuICAgICAgICBlLnkgLT0gbjtcbiAgICAgICAgZS56IC09IGg7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBtdWx0aXBseSh0LCBzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZSA9IHMgPyB0aGlzIDogdGhpcy5jbG9uZSgpO1xuICAgICAgICBjb25zdCBpID0gdCBpbnN0YW5jZW9mIFZlY3RvcjMgPyB0IDogbmV3IFZlY3RvcjModCwgdCwgdCk7XG4gICAgICAgIGUueCAqPSBpLng7XG4gICAgICAgIGUueSAqPSBpLnk7XG4gICAgICAgIGUueiAqPSBpLno7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBkaXZpZGUodCwgcyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGUgPSBzID8gdGhpcyA6IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgY29uc3QgaSA9IHQgaW5zdGFuY2VvZiBWZWN0b3IzID8gdCA6IG5ldyBWZWN0b3IodCwgdCwgdCk7XG4gICAgICAgIGUueCAvPSBpLng7XG4gICAgICAgIGUueSAvPSBpLnk7XG4gICAgICAgIGUueiAvPSBpLno7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBtb2R1bHVzKHQsIHMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBlID0gcyA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGkgPSB0IGluc3RhbmNlb2YgVmVjdG9yMyA/IHQgOiBuZXcgVmVjdG9yMyh0LCB0LCB0KTtcbiAgICAgICAgZS54ICU9IGkueDtcbiAgICAgICAgZS55ICU9IGkueTtcbiAgICAgICAgZS56ICU9IGkuejtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIG5vcm1hbGl6ZSh0ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcyA9IHQgPyB0aGlzIDogdGhpcy5jbG9uZSgpO1xuICAgICAgICBjb25zdCBlID0gdGhpcy5tYWduaXR1ZGU7XG4gICAgICAgIGlmIChlID4gMCkgcy5kaXZpZGUoZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICBkb3QodCkge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdC54ICsgdGhpcy55ICogdC55ICsgdGhpcy56ICogdC56O1xuICAgIH1cbiAgICBzaWduKHQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBzID0gdCA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIHMueCA9IE1hdGguc2lnbihzLngpO1xuICAgICAgICBzLnkgPSBNYXRoLnNpZ24ocy55KTtcbiAgICAgICAgcy56ID0gTWF0aC5zaWduKHMueik7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICBjbGFtcCh0LCBzLCBlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgaSA9IGUgPyB0aGlzIDogdGhpcy5jbG9uZSgpO1xuICAgICAgICBpLnggPSBNYXRoLm1heCh0LngsIE1hdGgubWluKGkueCwgcy54KSk7XG4gICAgICAgIGkueSA9IE1hdGgubWF4KHQueSwgTWF0aC5taW4oaS55LCBzLnkpKTtcbiAgICAgICAgaS56ID0gTWF0aC5tYXgodC56LCBNYXRoLm1pbihpLnosIHMueikpO1xuICAgICAgICByZXR1cm4gaTtcbiAgICB9XG4gICAgZmxvb3IodCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHMgPSB0ID8gdGhpcyA6IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgcy54ID0gTWF0aC5mbG9vcihzLngpO1xuICAgICAgICBzLnkgPSBNYXRoLmZsb29yKHMueSk7XG4gICAgICAgIHMueiA9IE1hdGguZmxvb3Iocy56KTtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIHJvdGF0ZSh0LCBzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZSA9IHMgPyB0aGlzIDogdGhpcy5jbG9uZSgpO1xuICAgICAgICBjb25zdCBpID0gdCAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgY29uc3QgbiA9IE1hdGguc2luKGkpO1xuICAgICAgICBjb25zdCBoID0gTWF0aC5jb3MoaSk7XG4gICAgICAgIGNvbnN0IHt4OiByLCB5OiBvfSA9IGU7XG4gICAgICAgIGUueCA9IHIgKiBoIC0gbyAqIG47XG4gICAgICAgIGUueSA9IHIgKiBuICsgbyAqIGg7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xuICAgIH1cbiAgICB0b0FycmF5KCkge1xuICAgICAgICByZXR1cm4gWyB0aGlzLngsIHRoaXMueSwgdGhpcy56IF07XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy54fSwgJHt0aGlzLnl9LCR7dGhpcy56fWA7XG4gICAgfVxuICAgIHRvVmVjdG9yMigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnksIHRoaXMueik7XG4gICAgfVxufVxuXG5jbGFzcyBWZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHQgPSAwLCBzID0gMCwgZSA9IDApIHtcbiAgICAgICAgdGhpcy54ID0gdDtcbiAgICAgICAgdGhpcy55ID0gcztcbiAgICAgICAgdGhpcy56ID0gZTtcbiAgICB9XG4gICAgZ2V0IHplcm8oKSB7XG4gICAgICAgIHJldHVybiAwID09PSBNYXRoLmFicyh0aGlzLngpICYmIDAgPT09IE1hdGguYWJzKHRoaXMueSk7XG4gICAgfVxuICAgIGdldCBtYWduaXR1ZGUoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgICB9XG4gICAgZ2V0IGhhbGYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5KC41KTtcbiAgICB9XG4gICAgZ2V0IG5lZ0hhbGYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5KC0uNSk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tKHQgPSAwLCBzID0gMCwgZSA9IDApIHtcbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgICAgIHMgPSB0Lnk7XG4gICAgICAgICAgICBlID0gdC56O1xuICAgICAgICAgICAgdCA9IHQueDtcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHQpKSB7XG4gICAgICAgICAgICBzID0gdFsxXTtcbiAgICAgICAgICAgIGUgPSB0WzJdID8/IDA7XG4gICAgICAgICAgICB0ID0gdFswXTtcbiAgICAgICAgfSBlbHNlIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgdCAmJiB0LmluY2x1ZGVzKFwiLFwiKSkgW3QsIHMsIGVdID0gdC5zcGxpdChcIixcIikubWFwKCh0ID0+ICt0KSk7IGVsc2UgaWYgKFwibnVtYmVyXCIgIT09IHR5cGVvZiB0ICYmIFwic3RyaW5nXCIgIT09IHR5cGVvZiB0ICYmIFwieFwiIGluIHQgJiYgXCJ5XCIgaW4gdCkge1xuICAgICAgICAgICAgcyA9IHQueTtcbiAgICAgICAgICAgIGUgPSB0Lno7XG4gICAgICAgICAgICB0ID0gdC54O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHQsIHMsIGUpO1xuICAgIH1cbiAgICBlcXVhbHModCkge1xuICAgICAgICBpZiAodGhpcy54ICE9PSB0LnggfHwgdGhpcy55ICE9PSB0LnkgfHwgdGhpcy56ICE9PSB0LnopIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGFkZCh0LCBzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZSA9IHMgPyB0aGlzIDogdGhpcy5jbG9uZSgpO1xuICAgICAgICBjb25zdCB7eDogaSwgeTogbiwgejogaH0gPSBBcnJheS5pc0FycmF5KHQpID8ge1xuICAgICAgICAgICAgeDogdFswXSxcbiAgICAgICAgICAgIHk6IHRbMV0sXG4gICAgICAgICAgICB6OiB0WzJdXG4gICAgICAgIH0gOiB0O1xuICAgICAgICBlLnggKz0gaTtcbiAgICAgICAgZS55ICs9IG47XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBzdWJ0cmFjdCh0LCBzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZSA9IHMgPyB0aGlzIDogdGhpcy5jbG9uZSgpO1xuICAgICAgICBjb25zdCB7eDogaSwgeTogbiwgejogaH0gPSBBcnJheS5pc0FycmF5KHQpID8ge1xuICAgICAgICAgICAgeDogdFswXSxcbiAgICAgICAgICAgIHk6IHRbMV0sXG4gICAgICAgICAgICB6OiB0WzJdXG4gICAgICAgIH0gOiB0O1xuICAgICAgICBlLnggLT0gaTtcbiAgICAgICAgZS55IC09IG47XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBtdWx0aXBseSh0LCBzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZSA9IHMgPyB0aGlzIDogdGhpcy5jbG9uZSgpO1xuICAgICAgICBjb25zdCBpID0gdCBpbnN0YW5jZW9mIFZlY3RvciA/IHQgOiBuZXcgVmVjdG9yKHQsIHQsIHQpO1xuICAgICAgICBlLnggKj0gaS54O1xuICAgICAgICBlLnkgKj0gaS55O1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgZGl2aWRlKHQsIHMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBlID0gcyA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGkgPSB0IGluc3RhbmNlb2YgVmVjdG9yID8gdCA6IG5ldyBWZWN0b3IodCwgdCwgdCk7XG4gICAgICAgIGUueCAvPSBpLng7XG4gICAgICAgIGUueSAvPSBpLnk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBtb2R1bHVzKHQsIHMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBlID0gcyA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGkgPSB0IGluc3RhbmNlb2YgVmVjdG9yID8gdCA6IG5ldyBWZWN0b3IodCwgdCwgdCk7XG4gICAgICAgIGUueCAlPSBpLng7XG4gICAgICAgIGUueSAlPSBpLnk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBub3JtYWxpemUodCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHMgPSB0ID8gdGhpcyA6IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgY29uc3QgZSA9IHRoaXMubWFnbml0dWRlO1xuICAgICAgICBpZiAoZSA+IDApIHMuZGl2aWRlKGUsIHRydWUpO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgZG90KHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHQueCArIHRoaXMueSAqIHQueTtcbiAgICB9XG4gICAgc2lnbih0ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcyA9IHQgPyB0aGlzIDogdGhpcy5jbG9uZSgpO1xuICAgICAgICBzLnggPSBNYXRoLnNpZ24ocy54KTtcbiAgICAgICAgcy55ID0gTWF0aC5zaWduKHMueSk7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICBjbGFtcCh0LCBzLCBlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgaSA9IGUgPyB0aGlzIDogdGhpcy5jbG9uZSgpO1xuICAgICAgICBpLnggPSBNYXRoLm1heCh0LngsIE1hdGgubWluKGkueCwgcy54KSk7XG4gICAgICAgIGkueSA9IE1hdGgubWF4KHQueSwgTWF0aC5taW4oaS55LCBzLnkpKTtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIGZsb29yKHQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBzID0gdCA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIHMueCA9IE1hdGguZmxvb3Iocy54KTtcbiAgICAgICAgcy55ID0gTWF0aC5mbG9vcihzLnkpO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgcm90YXRlKHQsIHMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBlID0gcyA/IHRoaXMgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IGkgPSB0ICogKE1hdGguUEkgLyAxODApO1xuICAgICAgICBjb25zdCBuID0gTWF0aC5zaW4oaSk7XG4gICAgICAgIGNvbnN0IGggPSBNYXRoLmNvcyhpKTtcbiAgICAgICAgY29uc3Qge3g6IHIsIHk6IG99ID0gZTtcbiAgICAgICAgZS54ID0gciAqIGggLSBvICogbjtcbiAgICAgICAgZS55ID0gciAqIG4gKyBvICogaDtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSwgdGhpcy56KTtcbiAgICB9XG4gICAgdG9BcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIFsgdGhpcy54LCB0aGlzLnkgXTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnh9LCAke3RoaXMueX1gO1xuICAgIH1cbiAgICB0b1ZlY3RvcjMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLngsIHRoaXMueSwgdGhpcy56KTtcbiAgICB9XG59XG5cbmNsYXNzIFJvdW5kZWRSZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0LCBzLCBlLCBpID0gMCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdDtcbiAgICAgICAgdGhpcy5zaXplID0gcztcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBlO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gaTtcbiAgICAgICAgdGhpcy53b3JsZFNwYWNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudCA9IFtdO1xuICAgIH1cbiAgICBnZXQgaGFsZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS5oYWxmO1xuICAgIH1cbiAgICBnZXQgbGVmdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueCAtIHRoaXMuaGFsZi54O1xuICAgIH1cbiAgICBzZXQgbGVmdCh0KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHQgKyB0aGlzLmhhbGYueDtcbiAgICB9XG4gICAgZ2V0IHJpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5oYWxmLng7XG4gICAgfVxuICAgIHNldCByaWdodCh0KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHQgLSB0aGlzLmhhbGYueDtcbiAgICB9XG4gICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGFsZi55O1xuICAgIH1cbiAgICBzZXQgdG9wKHQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdCArIHRoaXMuaGFsZi55O1xuICAgIH1cbiAgICBnZXQgYm90dG9tKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oYWxmLnk7XG4gICAgfVxuICAgIHNldCBib3R0b20odCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0IC0gdGhpcy5oYWxmLnk7XG4gICAgfVxuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS54O1xuICAgIH1cbiAgICBzZXQgd2lkdGgodCkge1xuICAgICAgICB0aGlzLnNpemUueCA9IHQ7XG4gICAgfVxuICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpemUueTtcbiAgICB9XG4gICAgc2V0IGhlaWdodCh0KSB7XG4gICAgICAgIHRoaXMuc2l6ZS55ID0gdDtcbiAgICB9XG4gICAgZ2V0IHZlcnRpY2VzKCkge1xuICAgICAgICBpZiAodGhpcy50Lmxlbmd0aCA+IDApIHJldHVybiB0aGlzLnQ7XG4gICAgICAgIHRoaXMudCA9IFsgbmV3IFZlY3RvcigtdGhpcy5oYWxmLngsIC10aGlzLmhhbGYueSksIG5ldyBWZWN0b3IoK3RoaXMuaGFsZi54LCAtdGhpcy5oYWxmLnkpLCBuZXcgVmVjdG9yKCt0aGlzLmhhbGYueCwgK3RoaXMuaGFsZi55KSwgbmV3IFZlY3RvcigtdGhpcy5oYWxmLngsICt0aGlzLmhhbGYueSkgXTtcbiAgICAgICAgY29uc3QgdCA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IDA7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtKHQsIHMpO1xuICAgICAgICByZXR1cm4gdGhpcy50O1xuICAgIH1cbiAgICBlcXVhbHModCkge1xuICAgICAgICBpZiAoIXRoaXMucG9zaXRpb24uZXF1YWxzKHQucG9zaXRpb24pIHx8ICF0aGlzLnNpemUuZXF1YWxzKHQuc2l6ZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJvdGF0ZSh0KSB7XG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLnZlcnRpY2VzO1xuICAgICAgICBpZiAoMCAhPT0gTWF0aC5hYnModCkpIHtcbiAgICAgICAgICAgIHMuZm9yRWFjaCgocyA9PiBzLnJvdGF0ZSh0LCB0cnVlKSkpO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5yb3RhdGUodCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm9yaWVudGF0aW9uICs9IHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ID0gcztcbiAgICB9XG4gICAgdHJhbnNsYXRlKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMudmVydGljZXM7XG4gICAgICAgIHMuZm9yRWFjaCgocyA9PiBzLmFkZCh0LCB0cnVlKSkpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmFkZCh0LCB0cnVlKTtcbiAgICAgICAgdGhpcy50ID0gcztcbiAgICB9XG4gICAgdHJhbnNmb3JtKHQsIHMpIHtcbiAgICAgICAgdGhpcy5yb3RhdGUocyk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlKHQpO1xuICAgIH1cbiAgICByZXNldFZlcnRpY2VzKCkge1xuICAgICAgICB0aGlzLnQgPSBbXTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgWyR7dGhpcy5wb3NpdGlvbn1dICgke3RoaXMuc2l6ZX0pYDtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUm91bmRlZFJlY3QodGhpcy5wb3NpdGlvbi5jbG9uZSgpLCB0aGlzLnNpemUuY2xvbmUoKSwgdGhpcy5vcmllbnRhdGlvbik7XG4gICAgfVxufVxuXG5jbGFzcyBTdGFkaXVtIHtcbiAgICBjb25zdHJ1Y3Rvcih0LCBzLCBlLCBpID0gMCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdDtcbiAgICAgICAgdGhpcy5zaXplID0gcztcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IGk7XG4gICAgICAgIHRoaXMud29ybGRTcGFjZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnQgPSBbXTtcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsID0gXCJob3Jpem9udGFsXCIgPT09IGU7XG4gICAgfVxuICAgIGdldCByYWRpdXMoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5ob3Jpem9udGFsID8gdGhpcy5oZWlnaHQgOiB0aGlzLndpZHRoKSAvIDI7XG4gICAgfVxuICAgIGdldCBoYWxmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaXplLmhhbGY7XG4gICAgfVxuICAgIGdldCBsZWZ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5oYWxmLng7XG4gICAgfVxuICAgIHNldCBsZWZ0KHQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdCArIHRoaXMuaGFsZi54O1xuICAgIH1cbiAgICBnZXQgcmlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLmhhbGYueDtcbiAgICB9XG4gICAgc2V0IHJpZ2h0KHQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdCAtIHRoaXMuaGFsZi54O1xuICAgIH1cbiAgICBnZXQgdG9wKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oYWxmLnk7XG4gICAgfVxuICAgIHNldCB0b3AodCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0ICsgdGhpcy5oYWxmLnk7XG4gICAgfVxuICAgIGdldCBib3R0b20oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhhbGYueTtcbiAgICB9XG4gICAgc2V0IGJvdHRvbSh0KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHQgLSB0aGlzLmhhbGYueTtcbiAgICB9XG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaXplLng7XG4gICAgfVxuICAgIHNldCB3aWR0aCh0KSB7XG4gICAgICAgIHRoaXMuc2l6ZS54ID0gdDtcbiAgICB9XG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS55O1xuICAgIH1cbiAgICBzZXQgaGVpZ2h0KHQpIHtcbiAgICAgICAgdGhpcy5zaXplLnkgPSB0O1xuICAgIH1cbiAgICBnZXQgYXJlYSgpIHtcbiAgICAgICAgY29uc3QgdCA9IHRoaXMucmFkaXVzO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5QSSAqIHQgKiB0O1xuICAgICAgICBjb25zdCBlID0gdGhpcy5ob3Jpem9udGFsID8gKHRoaXMud2lkdGggLSAyICogdCkgKiB0aGlzLmhlaWdodCA6ICh0aGlzLmhlaWdodCAtIDIgKiB0KSAqIHRoaXMud2lkdGg7XG4gICAgICAgIHJldHVybiBzICsgZTtcbiAgICB9XG4gICAgZ2V0IGJvdW5kaW5nUmFkaXVzKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5oYWxmLngsIHRoaXMuaGFsZi55KTtcbiAgICB9XG4gICAgZ2V0IGJvdW5kaW5nQm94KCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlY3QodGhpcy5wb3NpdGlvbi5jbG9uZSgpLCB0aGlzLnNpemUuY2xvbmUoKSk7XG4gICAgfVxuICAgIGdldCB2ZXJ0aWNlcygpIHtcbiAgICAgICAgaWYgKHRoaXMudC5sZW5ndGggPiAwKSByZXR1cm4gdGhpcy50O1xuICAgICAgICB0aGlzLnQgPSBbIG5ldyBWZWN0b3IoLXRoaXMuaGFsZi54LCAtdGhpcy5oYWxmLnkpLCBuZXcgVmVjdG9yKCt0aGlzLmhhbGYueCwgLXRoaXMuaGFsZi55KSwgbmV3IFZlY3RvcigrdGhpcy5oYWxmLngsICt0aGlzLmhhbGYueSksIG5ldyBWZWN0b3IoLXRoaXMuaGFsZi54LCArdGhpcy5oYWxmLnkpIF07XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBzID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IoMCwgMCk7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSAwO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSh0LCBzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudDtcbiAgICB9XG4gICAgZXF1YWxzKHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBvc2l0aW9uLmVxdWFscyh0LnBvc2l0aW9uKSB8fCAhdGhpcy5zaXplLmVxdWFscyh0LnNpemUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByb3RhdGUodCkge1xuICAgICAgICBjb25zdCBzID0gdGhpcy52ZXJ0aWNlcztcbiAgICAgICAgaWYgKDAgIT09IE1hdGguYWJzKHQpKSB7XG4gICAgICAgICAgICBzLmZvckVhY2goKHMgPT4gcy5yb3RhdGUodCwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ucm90YXRlKHQsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5vcmllbnRhdGlvbiArPSB0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudCA9IHM7XG4gICAgfVxuICAgIHRyYW5zbGF0ZSh0KSB7XG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLnZlcnRpY2VzO1xuICAgICAgICBzLmZvckVhY2goKHMgPT4gcy5hZGQodCwgdHJ1ZSkpKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5hZGQodCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudCA9IHM7XG4gICAgfVxuICAgIHRyYW5zZm9ybSh0LCBzKSB7XG4gICAgICAgIHRoaXMucm90YXRlKHMpO1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSh0KTtcbiAgICB9XG4gICAgcmVzZXRWZXJ0aWNlcygpIHtcbiAgICAgICAgdGhpcy50ID0gW107XG4gICAgfVxuICAgIG92ZXJsYXBzKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IFBvaW50LmZyb20odGhpcy5wb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IGUgPSB0aGlzLmdldFN3ZXB0U2hhcGUodCk7XG4gICAgICAgIHJldHVybiBzLndpdGhpbihlKTtcbiAgICB9XG4gICAgZ2V0U3dlcHRTaGFwZSh0KSB7XG4gICAgICAgIGlmICh0IGluc3RhbmNlb2YgQ2lyY2xlKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gdGhpcy5jbG9uZSgpO1xuICAgICAgICAgICAgcy5zaXplLmFkZChuZXcgVmVjdG9yKDIgKiB0LnJhZGl1cywgMiAqIHQucmFkaXVzKSwgdHJ1ZSk7XG4gICAgICAgICAgICBzLnBvc2l0aW9uID0gdC5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBTdGFkaXVtKSB7XG4gICAgICAgICAgICBsZXQgcztcbiAgICAgICAgICAgIGlmICh0aGlzLmhvcml6b250YWwgPT09IHQuaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIHMgPSB0LmNsb25lKCk7XG4gICAgICAgICAgICAgICAgcy5zaXplLmFkZCh0aGlzLnNpemUsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHMgPSBuZXcgUm91bmRlZFJlY3QodC5wb3NpdGlvbi5jbG9uZSgpLCB0LnNpemUuYWRkKHRoaXMuc2l6ZSksIHRoaXMucmFkaXVzICsgdC5yYWRpdXMpO1xuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBSZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBzID0gbmV3IFJvdW5kZWRSZWN0KHQucG9zaXRpb24uY2xvbmUoKSwgdC5zaXplLmFkZCh0aGlzLnNpemUpLCB0aGlzLnJhZGl1cyk7XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgWyR7dGhpcy5wb3NpdGlvbn1dICgke3RoaXMuc2l6ZX0pYDtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3RhZGl1bSh0aGlzLnBvc2l0aW9uLmNsb25lKCksIHRoaXMuc2l6ZS5jbG9uZSgpLCB0aGlzLmhvcml6b250YWwgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWxcIiwgdGhpcy5vcmllbnRhdGlvbik7XG4gICAgfVxufVxuXG5jbGFzcyBQb2ludCBleHRlbmRzIFZlY3RvciB7XG4gICAgc3RhdGljIGZyb20odCA9IDAsIHMgPSAwLCBlID0gMCkge1xuICAgICAgICBjb25zdCBpID0gVmVjdG9yLmZyb20odCwgcywgZSk7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQoaS54LCBpLnksIGkueik7XG4gICAgfVxuICAgIHdpdGhpbih0KSB7XG4gICAgICAgIGlmICh0IGluc3RhbmNlb2YgUmVjdCkgcmV0dXJuICEodGhpcy54IDwgdC5sZWZ0IHx8IHRoaXMueCA+IHQucmlnaHQgfHwgdGhpcy55IDwgdC50b3AgfHwgdGhpcy55ID4gdC5ib3R0b20pO1xuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIENpcmNsZSkge1xuICAgICAgICAgICAgY29uc3QgcyA9IHQucG9zaXRpb24uc3VidHJhY3QodGhpcyk7XG4gICAgICAgICAgICBjb25zdCBlID0gcy5tYWduaXR1ZGU7XG4gICAgICAgICAgICByZXR1cm4gZSAqIGUgPCB0LnJhZGl1cyAqIHQucmFkaXVzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0IGluc3RhbmNlb2YgU3RhZGl1bSkgaWYgKHQuaG9yaXpvbnRhbCkgcmV0dXJuIHRoaXMud2l0aGluKG5ldyBSZWN0KHQucG9zaXRpb24sIHQuc2l6ZS5zdWJ0cmFjdChuZXcgVmVjdG9yKDIgKiB0LnJhZGl1cywgMCkpKSkgfHwgdGhpcy53aXRoaW4obmV3IENpcmNsZShuZXcgVmVjdG9yKHQubGVmdCArIHQucmFkaXVzLCB0LnBvc2l0aW9uLnkpLCB0LnJhZGl1cykpIHx8IHRoaXMud2l0aGluKG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LnJpZ2h0IC0gdC5yYWRpdXMsIHQucG9zaXRpb24ueSksIHQucmFkaXVzKSk7IGVsc2UgcmV0dXJuIHRoaXMud2l0aGluKG5ldyBSZWN0KHQucG9zaXRpb24sIHQuc2l6ZS5zdWJ0cmFjdChuZXcgVmVjdG9yKDAsIDIgKiB0LnJhZGl1cykpKSkgfHwgdGhpcy53aXRoaW4obmV3IENpcmNsZShuZXcgVmVjdG9yKHQucG9zaXRpb24ueCwgdC50b3AgKyB0LnJhZGl1cyksIHQucmFkaXVzKSkgfHwgdGhpcy53aXRoaW4obmV3IENpcmNsZShuZXcgVmVjdG9yKHQucG9zaXRpb24ueCwgdC5ib3R0b20gLSB0LnJhZGl1cyksIHQucmFkaXVzKSk7XG4gICAgICAgIGlmICh0IGluc3RhbmNlb2YgUm91bmRlZFJlY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0LnJhZGl1cztcbiAgICAgICAgICAgIGNvbnN0IGUgPSAyICogcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpdGhpbihuZXcgQ2lyY2xlKG5ldyBWZWN0b3IodC5sZWZ0ICsgcywgdC50b3AgKyBzKSwgcykpIHx8IHRoaXMud2l0aGluKG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LnJpZ2h0IC0gcywgdC50b3AgKyBzKSwgcykpIHx8IHRoaXMud2l0aGluKG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LnJpZ2h0IC0gcywgdC5ib3R0b20gLSBzKSwgcykpIHx8IHRoaXMud2l0aGluKG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LmxlZnQgKyBzLCB0LmJvdHRvbSAtIHMpLCBzKSkgfHwgdGhpcy53aXRoaW4obmV3IFJlY3QodC5wb3NpdGlvbiwgdC5zaXplLnN1YnRyYWN0KG5ldyBWZWN0b3IoZSwgMCkpKSkgfHwgdGhpcy53aXRoaW4obmV3IFJlY3QodC5wb3NpdGlvbiwgdC5zaXplLnN1YnRyYWN0KG5ldyBWZWN0b3IoMCwgZSkpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuY2xhc3MgQ2lyY2xlIHtcbiAgICBjb25zdHJ1Y3Rvcih0LCBzLCBlID0gMCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBzO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gZTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDIgKiB0aGlzLnJhZGl1cywgMiAqIHRoaXMucmFkaXVzKTtcbiAgICB9XG4gICAgZ2V0IGhhbGYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpemUuaGFsZjtcbiAgICB9XG4gICAgZ2V0IGxlZnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmhhbGYueDtcbiAgICB9XG4gICAgZ2V0IHJpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5oYWxmLng7XG4gICAgfVxuICAgIGdldCB0b3AoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmhhbGYueTtcbiAgICB9XG4gICAgZ2V0IGJvdHRvbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGFsZi55O1xuICAgIH1cbiAgICBnZXQgYXJlYSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguUEkgKiB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzO1xuICAgIH1cbiAgICBnZXQgYm91bmRpbmdSYWRpdXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhZGl1cztcbiAgICB9XG4gICAgZ2V0IGJvdW5kaW5nQm94KCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlY3QodGhpcy5wb3NpdGlvbi5jbG9uZSgpLCBuZXcgVmVjdG9yKDIgKiB0aGlzLnJhZGl1cywgMiAqIHRoaXMucmFkaXVzKSk7XG4gICAgfVxuICAgIGdldCB2ZXJ0aWNlcygpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBlcXVhbHModCkge1xuICAgICAgICBpZiAoIXRoaXMucG9zaXRpb24uZXF1YWxzKHQucG9zaXRpb24pIHx8IHRoaXMucmFkaXVzICE9PSB0LnJhZGl1cykgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcm90YXRlKHQpIHtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiArPSB0O1xuICAgIH1cbiAgICB0cmFuc2xhdGUodCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmFkZCh0LCB0cnVlKTtcbiAgICB9XG4gICAgdHJhbnNmb3JtKHQsIHMpIHtcbiAgICAgICAgdGhpcy5yb3RhdGUocyk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlKHQpO1xuICAgIH1cbiAgICBvdmVybGFwcyh0KSB7XG4gICAgICAgIGNvbnN0IHMgPSBQb2ludC5mcm9tKHRoaXMucG9zaXRpb24pO1xuICAgICAgICBjb25zdCBlID0gdGhpcy5nZXRTd2VwdFNoYXBlKHQpO1xuICAgICAgICByZXR1cm4gcy53aXRoaW4oZSk7XG4gICAgfVxuICAgIGdldFN3ZXB0U2hhcGUodCkge1xuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIENpcmNsZSkge1xuICAgICAgICAgICAgY29uc3QgcyA9IHQuY2xvbmUoKTtcbiAgICAgICAgICAgIHMucmFkaXVzICs9IHRoaXMucmFkaXVzO1xuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBTdGFkaXVtKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gdC5nZXRTd2VwdFNoYXBlKHRoaXMpO1xuICAgICAgICAgICAgcy5wb3NpdGlvbiA9IHQucG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0IGluc3RhbmNlb2YgUmVjdCkge1xuICAgICAgICAgICAgY29uc3QgcyA9IG5ldyBSb3VuZGVkUmVjdCh0LnBvc2l0aW9uLmNsb25lKCksIHQuc2l6ZS5hZGQobmV3IFZlY3RvcigyICogdGhpcy5yYWRpdXMsIDIgKiB0aGlzLnJhZGl1cykpLCB0aGlzLnJhZGl1cyk7XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2lyY2xlKHRoaXMucG9zaXRpb24uY2xvbmUoKSwgdGhpcy5yYWRpdXMpO1xuICAgIH1cbn1cblxuY2xhc3MgUmVjdCB7XG4gICAgY29uc3RydWN0b3IodCwgcywgZSA9IDApIHtcbiAgICAgICAgdGhpcy53b3JsZFNwYWNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaSA9IDA7XG4gICAgICAgIHRoaXMudCA9IFtdO1xuICAgICAgICB0aGlzLmggPSB0O1xuICAgICAgICB0aGlzLnUgPSBzO1xuICAgICAgICB0aGlzLmkgPSBlO1xuICAgIH1cbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmg7XG4gICAgfVxuICAgIHNldCBwb3NpdGlvbih0KSB7XG4gICAgICAgIHRoaXMuaCA9IHQ7XG4gICAgICAgIHRoaXMudCA9IFtdO1xuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudTtcbiAgICB9XG4gICAgc2V0IHNpemUodCkge1xuICAgICAgICB0aGlzLnUgPSB0O1xuICAgICAgICB0aGlzLnQgPSBbXTtcbiAgICB9XG4gICAgZ2V0IG9yaWVudGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pO1xuICAgIH1cbiAgICBzZXQgb3JpZW50YXRpb24odCkge1xuICAgICAgICB0aGlzLmkgPSB0O1xuICAgICAgICB0aGlzLnQgPSBbXTtcbiAgICB9XG4gICAgZ2V0IGhhbGYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnUuaGFsZjtcbiAgICB9XG4gICAgZ2V0IGxlZnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmgueCAtIHRoaXMuaGFsZi54O1xuICAgIH1cbiAgICBzZXQgbGVmdCh0KSB7XG4gICAgICAgIHRoaXMuaC54ID0gdCArIHRoaXMuaGFsZi54O1xuICAgICAgICB0aGlzLnQgPSBbXTtcbiAgICB9XG4gICAgZ2V0IHJpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oLnggKyB0aGlzLmhhbGYueDtcbiAgICB9XG4gICAgc2V0IHJpZ2h0KHQpIHtcbiAgICAgICAgdGhpcy5oLnggPSB0IC0gdGhpcy5oYWxmLng7XG4gICAgICAgIHRoaXMudCA9IFtdO1xuICAgIH1cbiAgICBnZXQgdG9wKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oLnkgLSB0aGlzLmhhbGYueTtcbiAgICB9XG4gICAgc2V0IHRvcCh0KSB7XG4gICAgICAgIHRoaXMuaC55ID0gdCArIHRoaXMuaGFsZi55O1xuICAgICAgICB0aGlzLnQgPSBbXTtcbiAgICB9XG4gICAgZ2V0IGJvdHRvbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaC55ICsgdGhpcy5oYWxmLnk7XG4gICAgfVxuICAgIHNldCBib3R0b20odCkge1xuICAgICAgICB0aGlzLmgueSA9IHQgLSB0aGlzLmhhbGYueTtcbiAgICAgICAgdGhpcy50ID0gW107XG4gICAgfVxuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudS54O1xuICAgIH1cbiAgICBzZXQgd2lkdGgodCkge1xuICAgICAgICB0aGlzLnUueCA9IHQ7XG4gICAgICAgIHRoaXMudCA9IFtdO1xuICAgIH1cbiAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy51Lnk7XG4gICAgfVxuICAgIHNldCBoZWlnaHQodCkge1xuICAgICAgICB0aGlzLnUueSA9IHQ7XG4gICAgICAgIHRoaXMudCA9IFtdO1xuICAgIH1cbiAgICBnZXQgYXJlYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnk7XG4gICAgfVxuICAgIGdldCBib3VuZGluZ1JhZGl1cygpIHtcbiAgICAgICAgY29uc3QgdCA9IHRoaXMuaGFsZi5tdWx0aXBseSh0aGlzLmhhbGYpO1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHQueCArIHQueSk7XG4gICAgfVxuICAgIGdldCBib3VuZGluZ0JveCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldCB2ZXJ0aWNlcygpIHtcbiAgICAgICAgaWYgKHRoaXMudC5sZW5ndGggPiAwKSByZXR1cm4gdGhpcy50O1xuICAgICAgICB0aGlzLnQgPSBbIG5ldyBWZWN0b3IoLXRoaXMuaGFsZi54LCAtdGhpcy5oYWxmLnkpLCBuZXcgVmVjdG9yKCt0aGlzLmhhbGYueCwgLXRoaXMuaGFsZi55KSwgbmV3IFZlY3RvcigrdGhpcy5oYWxmLngsICt0aGlzLmhhbGYueSksIG5ldyBWZWN0b3IoLXRoaXMuaGFsZi54LCArdGhpcy5oYWxmLnkpIF07XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzLmg7XG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLmk7XG4gICAgICAgIHRoaXMuaCA9IG5ldyBWZWN0b3IoMCwgMCk7XG4gICAgICAgIHRoaXMuaSA9IDA7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtKHQsIHMpO1xuICAgICAgICByZXR1cm4gdGhpcy50O1xuICAgIH1cbiAgICBlcXVhbHModCkge1xuICAgICAgICBpZiAoIXRoaXMuaC5lcXVhbHModC5wb3NpdGlvbikgfHwgIXRoaXMudS5lcXVhbHModC5zaXplKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcm90YXRlKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMudmVydGljZXM7XG4gICAgICAgIGlmICgwICE9PSBNYXRoLmFicyh0KSkge1xuICAgICAgICAgICAgcy5mb3JFYWNoKChzID0+IHMucm90YXRlKHQsIHRydWUpKSk7XG4gICAgICAgICAgICB0aGlzLmgucm90YXRlKHQsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5pICs9IHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ID0gcztcbiAgICB9XG4gICAgdHJhbnNsYXRlKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMudmVydGljZXM7XG4gICAgICAgIHMuZm9yRWFjaCgocyA9PiBzLmFkZCh0LCB0cnVlKSkpO1xuICAgICAgICB0aGlzLmguYWRkKHQsIHRydWUpO1xuICAgICAgICB0aGlzLnQgPSBzO1xuICAgIH1cbiAgICB0cmFuc2Zvcm0odCwgcykge1xuICAgICAgICB0aGlzLnJvdGF0ZShzKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUodCk7XG4gICAgfVxuICAgIHJlc2V0VmVydGljZXMoKSB7XG4gICAgICAgIHRoaXMudCA9IFtdO1xuICAgIH1cbiAgICBvdmVybGFwcyh0KSB7XG4gICAgICAgIGlmICh0IGluc3RhbmNlb2YgUmVjdCkgcmV0dXJuICEodGhpcy5sZWZ0ID4gdC5yaWdodCB8fCB0aGlzLnJpZ2h0IDwgdC5sZWZ0IHx8IHRoaXMudG9wID4gdC5ib3R0b20gfHwgdGhpcy5ib3R0b20gPCB0LnRvcCk7XG4gICAgICAgIGNvbnN0IHMgPSBQb2ludC5mcm9tKHRoaXMucG9zaXRpb24pO1xuICAgICAgICBjb25zdCBlID0gdGhpcy5nZXRTd2VwdFNoYXBlKHQpO1xuICAgICAgICByZXR1cm4gcy53aXRoaW4oZSk7XG4gICAgfVxuICAgIHdpdGhpbih0KSB7XG4gICAgICAgIHJldHVybiAhKHRoaXMubGVmdCA8IHQubGVmdCB8fCB0aGlzLnJpZ2h0ID4gdC5yaWdodCB8fCB0aGlzLnRvcCA8IHQudG9wIHx8IHRoaXMuYm90dG9tID4gdC5ib3R0b20pO1xuICAgIH1cbiAgICBnZXRTd2VwdFNoYXBlKHQpIHtcbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBTdGFkaXVtKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gdC5nZXRTd2VwdFNoYXBlKHRoaXMpO1xuICAgICAgICAgICAgcy5wb3NpdGlvbiA9IHQucG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0IGluc3RhbmNlb2YgUmVjdCkge1xuICAgICAgICAgICAgY29uc3QgcyA9IHQuY2xvbmUoKTtcbiAgICAgICAgICAgIHMuc2l6ZS5hZGQodGhpcy5zaXplLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0IGluc3RhbmNlb2YgQ2lyY2xlKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gdC5nZXRTd2VwdFNoYXBlKHRoaXMpO1xuICAgICAgICAgICAgcy5wb3NpdGlvbiA9IHQucG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBbJHt0aGlzLmh9XSAoJHt0aGlzLnV9KWA7XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlY3QodGhpcy5oLmNsb25lKCksIHRoaXMudS5jbG9uZSgpLCB0aGlzLmkpO1xuICAgIH1cbn1cblxudmFyIHQ7XG5cbmNsYXNzIFF1YWRUcmVlUmVzb2x2ZXIge1xuICAgIGNvbnN0cnVjdG9yKHQsIHMpIHtcbiAgICAgICAgdGhpcy5WID0gbmV3IFdlYWtNYXA7XG4gICAgICAgIHRoaXMuUiA9IG5ldyBRdWFkVHJlZShuZXcgUmVjdCh0LCBzKSk7XG4gICAgfVxuICAgIHVwZGF0ZUVudGl0eVByb3hpbWl0aWVzKHQsIHMpIHtcbiAgICAgICAgdC5mb3JFYWNoKCh0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgUmVjdCh0LnBvc2l0aW9uLCB0Lm1vdmVtZW50Qm94LnNpemUpO1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXMuUi5zZWFyY2goZSk7XG4gICAgICAgICAgICBpLmZvckVhY2goKGUgPT4ge1xuICAgICAgICAgICAgICAgIHQubmVhci5hZGQoZSk7XG4gICAgICAgICAgICAgICAgcy5wcm94aW1pdGllcysrO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdC5uZWFyLmRlbGV0ZSh0KTtcbiAgICAgICAgICAgIHMucHJveGltaXRpZXMtLTtcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBhZGRFbnRpdHkodCkge1xuICAgICAgICBjb25zdCBzID0gbmV3IFJlY3QodC5wb3NpdGlvbiwgdC5tb3ZlbWVudEJveC5zaXplKTtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBRdWFkVHJlZUl0ZW0odCwgcyk7XG4gICAgICAgIGUucXVhZHRyZWUgPSB0aGlzLlIuYWRkKGUpO1xuICAgICAgICB3aGlsZSAobnVsbCA9PSBlLnF1YWR0cmVlKSB7XG4gICAgICAgICAgICB0aGlzLlIgPSB0aGlzLlIuY3JlYXRlUGFyZW50KHQucG9zaXRpb24pO1xuICAgICAgICAgICAgZS5xdWFkdHJlZSA9IHRoaXMuUi5hZGQoZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5WLnNldCh0LCBlKTtcbiAgICB9XG4gICAgdXBkYXRlRW50aXR5KHQpIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuVi5nZXQodCk7XG4gICAgICAgIGNvbnN0IGUgPSBuZXcgUmVjdCh0LnBvc2l0aW9uLCB0Lm1vdmVtZW50Qm94LnNpemUpO1xuICAgICAgICBzLmFyZWEgPSBlO1xuICAgICAgICBzLnF1YWR0cmVlID0gcy5xdWFkdHJlZS51cGRhdGUocyk7XG4gICAgICAgIHdoaWxlIChudWxsID09IHMucXVhZHRyZWUpIHtcbiAgICAgICAgICAgIHRoaXMuUiA9IHRoaXMuUi5jcmVhdGVQYXJlbnQodC5wb3NpdGlvbik7XG4gICAgICAgICAgICBzLnF1YWR0cmVlID0gdGhpcy5SLnVwZGF0ZShzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlYuc2V0KHQsIHMpO1xuICAgIH1cbiAgICByZW1vdmVFbnRpdHkodCkge1xuICAgICAgICBjb25zdCBzID0gdGhpcy5WLmdldCh0KTtcbiAgICAgICAgcy5xdWFkdHJlZS5yZW1vdmUocyk7XG4gICAgICAgIHRoaXMuVi5kZWxldGUodCk7XG4gICAgfVxuICAgIGZpbmRFbnRpdGllcyh0KSB7XG4gICAgICAgIGNvbnN0IHMgPSBuZXcgUmVjdCh0LnBvc2l0aW9uLCBuZXcgVmVjdG9yKHQucmFkaXVzLCB0LnJhZGl1cykpO1xuICAgICAgICByZXR1cm4gdGhpcy5SLnNlYXJjaChzKTtcbiAgICB9XG59XG5cbmNsYXNzIFF1YWRUcmVlSXRlbSB7XG4gICAgY29uc3RydWN0b3IodCwgcywgZSkge1xuICAgICAgICB0aGlzLmVudGl0eSA9IHQ7XG4gICAgICAgIHRoaXMuYXJlYSA9IHM7XG4gICAgICAgIHRoaXMucXVhZHRyZWUgPSBlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0S2V5KHQpIHtcbiAgICAgICAgcmV0dXJuIGAke3QucG9zaXRpb24ueH0sJHt0LnBvc2l0aW9uLnl9LCR7dC5zaXplLnh9LCR7dC5zaXplLnl9YDtcbiAgICB9XG59XG5cbmNsYXNzIFF1YWRUcmVlIHtcbiAgICBjb25zdHJ1Y3RvcihzLCBlID0gbnVsbCkge1xuICAgICAgICB0aGlzLmFyZWEgPSBzO1xuICAgICAgICB0aGlzLnBhcmVudCA9IGU7XG4gICAgICAgIHQuYWRkKHRoaXMpO1xuICAgICAgICB0aGlzLk0gPSBbXTtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuYXJlYS5oYWxmO1xuICAgICAgICBjb25zdCBuID0gaS5oYWxmO1xuICAgICAgICB0aGlzLlAgPSBbIG5ldyBSZWN0KHRoaXMuYXJlYS5wb3NpdGlvbi5hZGQobmV3IFZlY3Rvcigrbi54LCAtbi55KSksIGkpLCBuZXcgUmVjdCh0aGlzLmFyZWEucG9zaXRpb24uYWRkKG5ldyBWZWN0b3IoLW4ueCwgK24ueSkpLCBpKSwgbmV3IFJlY3QodGhpcy5hcmVhLnBvc2l0aW9uLmFkZChuZXcgVmVjdG9yKCtuLngsICtuLnkpKSwgaSksIG5ldyBSZWN0KHRoaXMuYXJlYS5wb3NpdGlvbi5hZGQobmV3IFZlY3Rvcigtbi54LCAtbi55KSksIGkpIF07XG4gICAgICAgIHRoaXMuQyA9IFsgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCBdO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNyZWF0ZWQgbmV3IHF1YWR0cmVlXCIsIHMpO1xuICAgIH1cbiAgICBhZGQodCwgcykge1xuICAgICAgICBmb3IgKGxldCBlID0gMDsgZSA8IDQ7IGUrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuQ1tlXSA9PT0gcykgY29udGludWU7XG4gICAgICAgICAgICBpZiAodC5hcmVhLndpdGhpbih0aGlzLlBbZV0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgPT0gdGhpcy5DW2VdKSB0aGlzLkNbZV0gPSBuZXcgUXVhZFRyZWUodGhpcy5QW2VdLCB0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DW2VdPy5hZGQodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQuYXJlYS53aXRoaW4odGhpcy5hcmVhKSkge1xuICAgICAgICAgICAgdGhpcy5NLnB1c2godCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVsbCA9PSB0aGlzLnBhcmVudCkgY29uc29sZS5sb2coXCJDUkVBVEUgTkVXIFFVQURUUkVFIFJPT1RcIik7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudD8uYWRkKHQsIHRoaXMpO1xuICAgIH1cbiAgICByZW1vdmUodCkge1xuICAgICAgICBjb25zdCBzID0gdGhpcy5NLmluZGV4T2YodCk7XG4gICAgICAgIGlmIChzID4gLTEpIHRoaXMuTS5zcGxpY2UocywgMSk7XG4gICAgfVxuICAgIHVwZGF0ZSh0KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKHQpO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQodCk7XG4gICAgfVxuICAgIHNlYXJjaCh0KSB7XG4gICAgICAgIGNvbnN0IHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBlIG9mIHRoaXMuTSkgaWYgKHQub3ZlcmxhcHMoZS5hcmVhKSkgcy5wdXNoKGUuZW50aXR5KTtcbiAgICAgICAgZm9yIChjb25zdCBlIG9mIHRoaXMuQykge1xuICAgICAgICAgICAgaWYgKG51bGwgPT0gZSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoZS5hcmVhLndpdGhpbih0KSkgcy5wdXNoKC4uLmUuZW50aXRpZXMpOyBlbHNlIGlmICh0Lm92ZXJsYXBzKGUuYXJlYSkpIHMucHVzaCguLi5lLnNlYXJjaCh0KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIGdldCBlbnRpdGllcygpIHtcbiAgICAgICAgY29uc3QgdCA9IFsgLi4udGhpcy5NLm1hcCgodCA9PiB0LmVudGl0eSkpIF07XG4gICAgICAgIGZvciAoY29uc3QgcyBvZiB0aGlzLkMpIGlmIChudWxsICE9IHMpIHQucHVzaCguLi5zLmVudGl0aWVzKTtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuICAgIGNyZWF0ZVBhcmVudCh0KSB7XG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLmFyZWEuaGFsZjtcbiAgICAgICAgY29uc3QgZSA9IHMuaGFsZjtcbiAgICAgICAgdGhpcy5DLnB1c2gobmV3IFF1YWRUcmVlKG5ldyBSZWN0KHRoaXMuYXJlYS5wb3NpdGlvbi5hZGQobmV3IFZlY3RvcigtZS54LCAtZS55KSksIHMpLCB0aGlzKSk7XG4gICAgICAgIHRoaXMuQy5wdXNoKG5ldyBRdWFkVHJlZShuZXcgUmVjdCh0aGlzLmFyZWEucG9zaXRpb24uYWRkKG5ldyBWZWN0b3IoK2UueCwgLWUueSkpLCBzKSwgdGhpcykpO1xuICAgICAgICB0aGlzLkMucHVzaChuZXcgUXVhZFRyZWUobmV3IFJlY3QodGhpcy5hcmVhLnBvc2l0aW9uLmFkZChuZXcgVmVjdG9yKC1lLngsICtlLnkpKSwgcyksIHRoaXMpKTtcbiAgICAgICAgdGhpcy5DLnB1c2gobmV3IFF1YWRUcmVlKG5ldyBSZWN0KHRoaXMuYXJlYS5wb3NpdGlvbi5hZGQobmV3IFZlY3RvcigrZS54LCArZS55KSksIHMpLCB0aGlzKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxudCA9IG5ldyBXZWFrU2V0O1xuXG5jbGFzcyBGb3JjZSB7XG4gICAgY29uc3RydWN0b3IodCwgcykge1xuICAgICAgICB0aGlzLm5hbWUgPSB0O1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gcztcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1hZ25pdHVkZSA9IDA7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUodCkge1xuICAgICAgICBjb25zdCBzID0gbmV3IEZvcmNlKHQubmFtZSwgdC5kdXJhdGlvbiA/PyAwKTtcbiAgICAgICAgcy5kaXJlY3Rpb24gPSB0LmRpcmVjdGlvbjtcbiAgICAgICAgcy5tYXhNYWduaXR1ZGUgPSB0Lm1heE1hZ25pdHVkZSA/PyAxO1xuICAgICAgICBzLmFjY2VsZXJhdGlvbiA9IHQuYWNjZWxlcmF0aW9uO1xuICAgICAgICBzLmRlY2VsZXJhdGlvbiA9IHQuZGVjZWxlcmF0aW9uO1xuICAgICAgICBzLmNhbGxiYWNrID0gdC5jYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIHVwZGF0ZSh0LCBzKSB7XG4gICAgICAgIGlmICgwICE9PSB0aGlzLmR1cmF0aW9uICYmIHRoaXMuZHVyYXRpb24gIT09IDEgLyAwKSB7XG4gICAgICAgICAgICBpZiAobnVsbCA9PSB0aGlzLnN0YXJ0VGltZSkgdGhpcy5zdGFydFRpbWUgPSBzO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lICsgdGhpcy5kdXJhdGlvbiA+IHMpIGlmICh0aGlzLm1hZ25pdHVkZSA+IDApIGlmIChudWxsID09IHRoaXMuZGVjZWxlcmF0aW9uKSB0aGlzLm1hZ25pdHVkZSA9IDA7IGVsc2UgdGhpcy5tYWduaXR1ZGUgLT0gdGhpcy5kZWNlbGVyYXRpb24gKiB0OyBlbHNlIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVsbCAhPSB0aGlzLmNhbGxiYWNrKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLm1hZ25pdHVkZSA8IHRoaXMubWF4TWFnbml0dWRlKSBpZiAobnVsbCA9PSB0aGlzLmFjY2VsZXJhdGlvbikgdGhpcy5tYWduaXR1ZGUgPSB0aGlzLm1heE1hZ25pdHVkZTsgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hZ25pdHVkZSArPSB0aGlzLmFjY2VsZXJhdGlvbiAqIHQ7XG4gICAgICAgICAgICBpZiAodGhpcy5tYWduaXR1ZGUgPiB0aGlzLm1heE1hZ25pdHVkZSkgdGhpcy5tYWduaXR1ZGUgPSB0aGlzLm1heE1hZ25pdHVkZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlZmZlY3QodCkge1xuICAgICAgICByZXR1cm4gbnVsbCAhPSB0aGlzLmNhbGxiYWNrID8gKCgpID0+IHRoaXMuY2FsbGJhY2sodGhpcywgdCkpKCkgOiBuZXcgVmVjdG9yKCh0aGlzLmRpcmVjdGlvbj8ueCA/PyAxKSAqIHRoaXMubWFnbml0dWRlLCAodGhpcy5kaXJlY3Rpb24/LnkgPz8gMSkgKiB0aGlzLm1hZ25pdHVkZSk7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMubWFnbml0dWRlID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gRm9yY2UuY3JlYXRlKHRoaXMpO1xuICAgIH1cbiAgICBzdGF0aWMgRHJhZyh0ID0ge30pIHtcbiAgICAgICAgdC5kZW5zaXR5ID8/ICh0LmRlbnNpdHkgPSAxKTtcbiAgICAgICAgdC5jb2VmZmljaWVudCA/PyAodC5jb2VmZmljaWVudCA9IC4xKTtcbiAgICAgICAgdC5zdXJmYWNlID8/ICh0LnN1cmZhY2UgPSAodCwgcykgPT4gcy5nZXRTdXJmYWNlQXJlYT8uKCkgPz8gNTAwKTtcbiAgICAgICAgY29uc3QgcyA9IC0uNSAqIHQuZGVuc2l0eSAqICh0LmNvZWZmaWNpZW50IC8gMWU2KTtcbiAgICAgICAgcmV0dXJuIEZvcmNlLmNyZWF0ZSh7XG4gICAgICAgICAgICBuYW1lOiBcImRyYWdcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxIC8gMCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoZSwgaSkgPT4gZnVuY3Rpb24odCwgcywgZSwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSBzLnZlbG9jaXR5Lm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGggPSBzLnZlbG9jaXR5Lm1hZ25pdHVkZTtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gaSh0LCBzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbi5tdWx0aXBseShlICogciAqIGggKiBoLCB0cnVlKTtcbiAgICAgICAgICAgIH0oZSwgaSwgcywgdC5zdXJmYWNlKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIEdyYXZpdHkodCA9IHt9KSB7XG4gICAgICAgIHQuRyA/PyAodC5HID0gMSk7XG4gICAgICAgIHQuZGlyZWN0aW9uID8/ICh0LmRpcmVjdGlvbiA9IG5ldyBWZWN0b3IoMCwgMSkpO1xuICAgICAgICByZXR1cm4gRm9yY2UuY3JlYXRlKHtcbiAgICAgICAgICAgIG5hbWU6IFwiZ3Jhdml0eVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDEgLyAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiB0LmRpcmVjdGlvbixcbiAgICAgICAgICAgIG1hZ25pdHVkZTogMWU0ICogdC5HXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgU2hhcGUge1xuICAgIGNvbnN0cnVjdG9yKHQpIHtcbiAgICAgICAgdGhpcy5lbnRpdHkgPSB0O1xuICAgICAgICB0aGlzLnR5cGVzID0gW107XG4gICAgfVxuICAgIGdldCB3b3JsZFBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCB0ID0gdGhpcy5lbnRpdHkucG9zaXRpb24uYWRkKHRoaXMuc2hhcGUucG9zaXRpb24pO1xuICAgICAgICB0LnogKz0gdGhpcy5zaGFwZS5wb3NpdGlvbi56O1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG4gICAgZ2V0IHdvcmxkU2hhcGUoKSB7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzLmNsb25lKCk7XG4gICAgICAgIHQuc2hhcGUud29ybGRTcGFjZSA9IHRydWU7XG4gICAgICAgIHQuc2hhcGUudHJhbnNmb3JtKHRoaXMuZW50aXR5LnBvc2l0aW9uLCB0aGlzLmVudGl0eS5vcmllbnRhdGlvbik7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH1cbiAgICBnZXQgcmVuZGVyUG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoYXBlLnNpemUubmVnSGFsZi5hZGQodGhpcy5zaGFwZS5wb3NpdGlvbik7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUodCwgcykge1xuICAgICAgICBjb25zdCBlID0gbmV3IFNoYXBlKHQpO1xuICAgICAgICBpZiAobnVsbCA9PSBzLnNoYXBlKSBpZiAobnVsbCAhPSBzLmFsaWdubWVudCkgcy5zaGFwZSA9IFwic3RhZGl1bVwiOyBlbHNlIGlmIChudWxsICE9IHMucmFkaXVzKSBzLnNoYXBlID0gXCJjaXJjbGVcIjsgZWxzZSBpZiAobnVsbCAhPSBzLnNpemUpIHMuc2hhcGUgPSBcInJlY3RcIjsgZWxzZSB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBpbmZlciBzaGFwZTogJHtKU09OLnN0cmluZ2lmeShzKX0hYCk7XG4gICAgICAgIHN3aXRjaCAocy5zaGFwZSkge1xuICAgICAgICAgIGNhc2UgXCJyZWN0XCI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IFZlY3Rvci5mcm9tKHMuc2l6ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IFZlY3Rvci5mcm9tKHMucG9zaXRpb24gPz8gWyAwLCAwIF0pO1xuICAgICAgICAgICAgICAgIGUuc2hhcGUgPSBuZXcgUmVjdChpLCB0LCBzLm9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gcy5yYWRpdXM7XG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IFZlY3Rvci5mcm9tKHMucG9zaXRpb24gPz8gWyAwLCAwIF0pO1xuICAgICAgICAgICAgICAgIGUuc2hhcGUgPSBuZXcgQ2lyY2xlKGksIHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBcInN0YWRpdW1cIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gVmVjdG9yLmZyb20ocy5zaXplKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gVmVjdG9yLmZyb20ocy5wb3NpdGlvbiA/PyBbIDAsIDAgXSk7XG4gICAgICAgICAgICAgICAgZS5zaGFwZSA9IG5ldyBTdGFkaXVtKGksIHQsIHMuYWxpZ25tZW50LCBzLm9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlLm5hbWUgPSBzLm5hbWUgPz8gXCJcIjtcbiAgICAgICAgZS5jb2xvciA9IHMuY29sb3I7XG4gICAgICAgIGUuc2lnbmFsID0gcy5zaWduYWw7XG4gICAgICAgIGUudHlwZXMgPSBBcnJheS5pc0FycmF5KHMudHlwZXMpID8gWyAuLi5zLnR5cGVzIF0gOiBbIHMudHlwZXMgPz8gXCJjb2xsaXNpb25cIiBdO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIGNvbnN0IHQgPSBuZXcgU2hhcGUodGhpcy5lbnRpdHkpO1xuICAgICAgICB0LmxvY2FsU2hhcGUgPSB0aGlzO1xuICAgICAgICB0LnNoYXBlID0gdGhpcy5zaGFwZS5jbG9uZSgpO1xuICAgICAgICB0LnR5cGVzID0gdGhpcy50eXBlcztcbiAgICAgICAgdC5zaWduYWwgPSB0aGlzLnNpZ25hbDtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxufVxuXG5jbGFzcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcjtcbiAgICAgICAgdGhpcy5tb3ZlbWVudHMgPSAwO1xuICAgICAgICB0aGlzLm1hc3MgPSAxO1xuICAgICAgICB0aGlzLmZvcmNlcyA9IFtdO1xuICAgICAgICB0aGlzLm1heFNwZWVkID0gMWU2O1xuICAgICAgICB0aGlzLmRlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICAgICAgdGhpcy53b3JsZFNoYXBlcyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblR5cGVzID0ge307XG4gICAgICAgIHRoaXMuc2lnbmFsVHlwZXMgPSB7fTtcbiAgICAgICAgdGhpcy5uZWFyID0gbmV3IFNldDtcbiAgICAgICAgdGhpcy5pID0gMDtcbiAgICAgICAgdGhpcy5oID0gbmV3IFZlY3RvcjtcbiAgICB9XG4gICAgZ2V0IGxlZnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNoYXBlc1swXS5zaGFwZS5zaXplLm5lZ0hhbGYueDtcbiAgICB9XG4gICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2hhcGVzWzBdLnNoYXBlLnNpemUubmVnSGFsZi55O1xuICAgIH1cbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmg7XG4gICAgfVxuICAgIHNldCBwb3NpdGlvbih0KSB7XG4gICAgICAgIGlmICh0LnggPT09IHRoaXMuaC54ICYmIHQueSA9PT0gdGhpcy5oLnkpIHtcbiAgICAgICAgICAgIGlmICh0IGluc3RhbmNlb2YgVmVjdG9yKSB0aGlzLmggPSB0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaCA9IHQgaW5zdGFuY2VvZiBWZWN0b3IgPyB0IDogbmV3IFZlY3Rvcih0LngsIHQueSk7XG4gICAgfVxuICAgIGdldCBvcmllbnRhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaTtcbiAgICB9XG4gICAgc2V0IG9yaWVudGF0aW9uKHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaSA9PT0gdCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmkgPSB0O1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IG5ldyBFbnRpdHk7XG4gICAgICAgIHMuZW50aXR5ID0gdC5lbnRpdHkgPz8gdDtcbiAgICAgICAgcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3Iocy5lbnRpdHkucG9zaXRpb24ueCwgcy5lbnRpdHkucG9zaXRpb24ueSk7XG4gICAgICAgIHMub3JpZW50YXRpb24gPSB0Lm9yaWVudGF0aW9uID8/IHMuaTtcbiAgICAgICAgcy5tYXNzID0gdC5tYXNzID8/IHMubWFzcztcbiAgICAgICAgcy5mb3JjZXMgPSAodC5mb3JjZXMgPz8gW10pLm1hcCgodCA9PiB0IGluc3RhbmNlb2YgRm9yY2UgPyB0IDogdCA9IEZvcmNlLmNyZWF0ZSh0KSkpO1xuICAgICAgICBzLm1heFNwZWVkID0gdC5tYXhTcGVlZCA/PyBzLm1heFNwZWVkO1xuICAgICAgICBzLmNvbG9yID0gdC5jb2xvcjtcbiAgICAgICAgcy5jb2xsaWRpbmdDYWxsYmFjayA9IHQuY29sbGlkaW5nO1xuICAgICAgICAodC5zaGFwZXMgPz8gW10pLmZvckVhY2goKHQgPT4gcy5hZGRTaGFwZSh0KSkpO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgYWRkRm9yY2UodCkge1xuICAgICAgICBpZiAoISh0IGluc3RhbmNlb2YgRm9yY2UpKSB0ID0gRm9yY2UuY3JlYXRlKHQpO1xuICAgICAgICB0aGlzLmZvcmNlcy5wdXNoKHQpO1xuICAgIH1cbiAgICBhcHBseUZvcmNlcyh0LCBzKSB7XG4gICAgICAgIGlmIChudWxsID09IHRoaXMucG9zaXRpb24pIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgZSA9IDA7IGUgPCB0aGlzLmZvcmNlcy5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXMuZm9yY2VzW2VdO1xuICAgICAgICAgICAgaS51cGRhdGUodCwgcyk7XG4gICAgICAgICAgICBjb25zdCBuID0gaS5lZmZlY3QodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LmFkZChuLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChpLmR1cmF0aW9uIDw9IDApIHRoaXMuZm9yY2VzLnNwbGljZShlLS0sIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW92ZW1lbnRzID0gMDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGFkZFNoYXBlKHQpIHtcbiAgICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIFNoYXBlKSkgdCA9IFNoYXBlLmNyZWF0ZSh0aGlzLCB0KTtcbiAgICAgICAgdGhpcy5zaGFwZXMucHVzaCh0KTtcbiAgICAgICAgdGhpcy5JKCk7XG4gICAgICAgIHRoaXMuYm91bmRpbmdSYWRpdXMgPSB0aGlzLiQoKTtcbiAgICAgICAgdGhpcy5tb3ZlbWVudFJhZGl1cyA9IHRoaXMuRigxIC8gNjApO1xuICAgICAgICB0aGlzLmJvdW5kaW5nQm94ID0gdGhpcy5BKCk7XG4gICAgICAgIHRoaXMubW92ZW1lbnRCb3ggPSB0aGlzLk4oMSAvIDYwKTtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuICAgIHByZXBhcmVNb3ZlbWVudCh0LCBzKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy52ZWxvY2l0eS5ub3JtYWxpemUoKTtcbiAgICAgICAgaWYgKCsrdGhpcy5tb3ZlbWVudHMgPCAxNSkgdGhpcy5zcGVlZCA9IE1hdGguYWJzKHRoaXMudmVsb2NpdHkubWFnbml0dWRlKTsgZWxzZSBpZiAodGhpcy5tb3ZlbWVudHMgPj0gMjApIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICBpZiAodGhpcy5zcGVlZCA8IDFlLTUpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3BlZWQgPiB0aGlzLm1heFNwZWVkICYmIHRoaXMubW92ZW1lbnRzIDwgMTUpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLm1heFNwZWVkO1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHRoaXMuZGlyZWN0aW9uLm11bHRpcGx5KHRoaXMuc3BlZWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW92ZW1lbnRCb3ggPSB0aGlzLk4odCk7XG4gICAgICAgIGNvbnN0IGUgPSB0aGlzLkYodCk7XG4gICAgICAgIGlmIChlICE9PSB0aGlzLm1vdmVtZW50UmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50UmFkaXVzID0gZTtcbiAgICAgICAgICAgIFBoeXNpY3MudXBkYXRlRW50aXR5KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWVkID4gMDtcbiAgICB9XG4gICAgbW92ZSh0KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuZGlyZWN0aW9uLm11bHRpcGx5KHRoaXMuc3BlZWQgKiB0KSwgdHJ1ZSk7XG4gICAgICAgIFBoeXNpY3MudXBkYXRlRW50aXR5KHRoaXMpO1xuICAgIH1cbiAgICBtb3ZlVG8odCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0Lng7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHQueTtcbiAgICAgICAgdGhpcy53b3JsZFNoYXBlcyA9IHRoaXMuc2hhcGVzLm1hcCgodCA9PiB0LndvcmxkU2hhcGUpKTtcbiAgICAgICAgUGh5c2ljcy51cGRhdGVFbnRpdHkodGhpcyk7XG4gICAgfVxuICAgIGdldFN1cmZhY2VBcmVhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGFwZXNbMF0uc2hhcGUuYXJlYTtcbiAgICB9XG4gICAgY29sbGlkaW5nKHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGlkaW5nQ2FsbGJhY2s/LmNhbGwodGhpcywgdCwgcykgPz8gXCJjb2xsaWRlXCI7XG4gICAgfVxuICAgIEkoKSB7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uVHlwZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zaWduYWxUeXBlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHQgb2YgdGhpcy5zaGFwZXMpIGZvciAoY29uc3QgcyBvZiB0LnR5cGVzKSB7XG4gICAgICAgICAgICBpZiAobnVsbCAhPSBQaHlzaWNzLmNvbGxpc2lvbnNbc10pIHtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSB0aGlzLmNvbGxpc2lvblR5cGVzW3NdKSB0aGlzLmNvbGxpc2lvblR5cGVzW3NdID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25UeXBlc1tzXS5wdXNoKHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG51bGwgIT0gUGh5c2ljcy5zaWduYWxzW3NdKSB7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgPT0gdGhpcy5zaWduYWxUeXBlc1tzXSkgdGhpcy5zaWduYWxUeXBlc1tzXSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuc2lnbmFsVHlwZXNbc10ucHVzaCh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAkKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoLi4udGhpcy5zaGFwZXMubWFwKCh0ID0+IHQuc2hhcGUuYm91bmRpbmdSYWRpdXMpKSk7XG4gICAgfVxuICAgIEEoKSB7XG4gICAgICAgIGNvbnN0IHQgPSBNYXRoLm1pbiguLi50aGlzLnNoYXBlcy5tYXAoKHQgPT4gdC5zaGFwZS5sZWZ0KSkpO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5tYXgoLi4udGhpcy5zaGFwZXMubWFwKCh0ID0+IHQuc2hhcGUucmlnaHQpKSk7XG4gICAgICAgIGNvbnN0IGUgPSBNYXRoLm1pbiguLi50aGlzLnNoYXBlcy5tYXAoKHQgPT4gdC5zaGFwZS50b3ApKSk7XG4gICAgICAgIGNvbnN0IGkgPSBNYXRoLm1heCguLi50aGlzLnNoYXBlcy5tYXAoKHQgPT4gdC5zaGFwZS5ib3R0b20pKSk7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdChuZXcgVmVjdG9yLCBuZXcgVmVjdG9yKHMgLSB0LCBpIC0gZSkpO1xuICAgIH1cbiAgICBGKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IE1hdGgubWluKHRoaXMubWF4U3BlZWQgKiBNYXRoLm1pbig0ICogdCwgLjEpLCB0aGlzLm1heFNwZWVkKTtcbiAgICAgICAgY29uc3QgZSA9IHRoaXMuYm91bmRpbmdSYWRpdXMgKyBzO1xuICAgICAgICB0aGlzLm1vdmVtZW50UmFkaXVzRGVidWcgPSBlO1xuICAgICAgICByZXR1cm4gZSAqIGU7XG4gICAgfVxuICAgIE4odCkge1xuICAgICAgICBjb25zdCBzID0gMiAqIE1hdGgubWluKHRoaXMubWF4U3BlZWQgKiBNYXRoLm1pbih0LCAuMSksIHRoaXMubWF4U3BlZWQpO1xuICAgICAgICBjb25zdCBlID0gdGhpcy5ib3VuZGluZ0JveC5jbG9uZSgpO1xuICAgICAgICBlLnNpemUuYWRkKG5ldyBWZWN0b3IocywgcyksIHRydWUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG59XG5cbmNsYXNzIEludGVyc2VjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWUgPSAxIC8gMDtcbiAgICB9XG59XG5cbmNsYXNzIFJhZGl1c1Jlc29sdmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgICAgIHRoaXMuVCA9IHQ7XG4gICAgICAgIHRoaXMuViA9IG5ldyBTZXQ7XG4gICAgfVxuICAgIHVwZGF0ZUVudGl0eVByb3hpbWl0aWVzKHQsIHMpIHtcbiAgICAgICAgZm9yIChsZXQgZSA9IDAsIGkgPSB0Lmxlbmd0aDsgZSA8IGk7IGUrKykge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRbZV07XG4gICAgICAgICAgICBpZiAobnVsbCAhPSB0aGlzLlQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlQ/LmRyYXdTaGFwZShpLnNoYXBlc1swXS53b3JsZFNoYXBlLnNoYXBlLCAwID09PSBpLm1hc3MgPyBcInJlZFwiIDogXCJibGFja1wiLCBpLmNvbG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoUGh5c2ljcy5zaG93QXJlYXMpIHRoaXMuVC5kcmF3U2hhcGUobmV3IENpcmNsZShpLnBvc2l0aW9uLCBpLm1vdmVtZW50UmFkaXVzRGVidWcpLCBcInJlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IG4gPSBlICsgMSwgaCA9IHQubGVuZ3RoOyBuIDwgaDsgbisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZSA9IHRbbl07XG4gICAgICAgICAgICAgICAgY29uc3QgaCA9IGUucG9zaXRpb24uc3VidHJhY3QoaS5wb3NpdGlvbikubWFnbml0dWRlO1xuICAgICAgICAgICAgICAgIGlmIChpLm1vdmVtZW50UmFkaXVzICsgZS5tb3ZlbWVudFJhZGl1cyA8IGggKiBoKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2tpcHBlZCsrO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaS5uZWFyLmFkZChlKTtcbiAgICAgICAgICAgICAgICBlLm5lYXIuYWRkKGkpO1xuICAgICAgICAgICAgICAgIHMucHJveGltaXRpZXMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRFbnRpdHkodCkge1xuICAgICAgICB0aGlzLlYuYWRkKHQpO1xuICAgIH1cbiAgICB1cGRhdGVFbnRpdHkodCkge1xuICAgICAgICB0aGlzLlYuYWRkKHQpO1xuICAgIH1cbiAgICByZW1vdmVFbnRpdHkodCkge1xuICAgICAgICB0aGlzLlYuZGVsZXRlKHQpO1xuICAgIH1cbiAgICBmaW5kRW50aXRpZXModCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG5jbGFzcyBMaW5lIHtcbiAgICBjb25zdHJ1Y3Rvcih0LCBzKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSB0O1xuICAgICAgICB0aGlzLmVuZCA9IHM7XG4gICAgfVxuICAgIGdldCBub3JtYWwoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKC0odGhpcy5lbmQueSAtIHRoaXMuc3RhcnQueSksIHRoaXMuZW5kLnggLSB0aGlzLnN0YXJ0LngpO1xuICAgIH1cbiAgICBnZXQgZGlyZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmQuc3VidHJhY3QodGhpcy5zdGFydCk7XG4gICAgfVxuICAgIGdldCBtYWduaXR1ZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbi5tYWduaXR1ZGU7XG4gICAgfVxuICAgIGdldCBkaXJlY3Rpb25WZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbi5kaXZpZGUodGhpcy5tYWduaXR1ZGUpO1xuICAgIH1cbn1cblxuY2xhc3MgUmF5IHtcbiAgICBjb25zdHJ1Y3Rvcih0LCBzLCBlKSB7XG4gICAgICAgIHRoaXMub3JpZ2luID0gdDtcbiAgICAgICAgaWYgKHMgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMubWFnbml0dWRlID0gZSA/PyBzLm1hZ25pdHVkZTtcbiAgICAgICAgICAgIHRoaXMucSA9IHMubm9ybWFsaXplKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLkggPSBzO1xuICAgICAgICAgICAgdGhpcy5tYWduaXR1ZGUgPSBlID8/IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IG5vcm1hbCgpIHtcbiAgICAgICAgY29uc3QgdCA9IHRoaXMuZGlyZWN0aW9uVmVjdG9yO1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcigtdC55LCB0LngpO1xuICAgIH1cbiAgICBnZXQgZGlyZWN0aW9uVmVjdG9yKCkge1xuICAgICAgICByZXR1cm4gbnVsbCAhPSB0aGlzLnEgPyB0aGlzLnEgOiBuZXcgVmVjdG9yO1xuICAgIH1cbiAgICBnZXQgZGlyZWN0aW9uQW5nbGUoKSB7XG4gICAgICAgIHJldHVybiBudWxsICE9IHRoaXMuSCA/IHRoaXMuSCA6IChNYXRoLmF0YW4yKHRoaXMucS55LCB0aGlzLnEueCkgKiBSYXkuQiArIFJheS5PKSAlIDM2MDtcbiAgICB9XG4gICAgc2V0IGRpcmVjdGlvbih0KSB7XG4gICAgICAgIGlmICh0IGluc3RhbmNlb2YgVmVjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnEgPSB0O1xuICAgICAgICAgICAgdGhpcy5IID0gdm9pZCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5IID0gdDtcbiAgICAgICAgICAgIHRoaXMucSA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgZW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW4uYWRkKHRoaXMuZGlyZWN0aW9uVmVjdG9yLm11bHRpcGx5KHRoaXMubWFnbml0dWRlKSk7XG4gICAgfVxuICAgIHNldCBlbmQodCkge1xuICAgICAgICBjb25zdCBzID0gdC5zdWJ0cmFjdCh0aGlzLm9yaWdpbik7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcy5ub3JtYWxpemUoKTtcbiAgICAgICAgdGhpcy5tYWduaXR1ZGUgPSBzLm1hZ25pdHVkZTtcbiAgICB9XG4gICAgZ2V0SW50ZXJzZWN0aW9uKHQpIHtcbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBTdGFkaXVtKSByZXR1cm4gdGhpcy5nZXRJbnRlcnNlY3Rpb25TdGFkaXVtKHQpO1xuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIFJvdW5kZWRSZWN0KSByZXR1cm4gdGhpcy5nZXRJbnRlcnNlY3Rpb25Sb3VuZGVkUmVjdCh0KTtcbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBSZWN0KSByZXR1cm4gdGhpcy5nZXRJbnRlcnNlY3Rpb25SZWN0KHQpO1xuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIENpcmNsZSkgcmV0dXJuIHRoaXMuZ2V0SW50ZXJzZWN0aW9uQ2lyY2xlKHQpO1xuICAgICAgICByZXR1cm4gbmV3IEludGVyc2VjdGlvbjtcbiAgICB9XG4gICAgZ2V0SW50ZXJzZWN0aW9uUmVjdCh0KSB7XG4gICAgICAgIGNvbnN0IHMgPSBuZXcgSW50ZXJzZWN0aW9uO1xuICAgICAgICBjb25zdCBlID0gdGhpcy5vcmlnaW47XG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmVuZC5zdWJ0cmFjdCh0aGlzLm9yaWdpbik7XG4gICAgICAgIGNvbnN0IG4gPSB0LnBvc2l0aW9uLnN1YnRyYWN0KHQuaGFsZikuc3VidHJhY3QoZSkuZGl2aWRlKGkpO1xuICAgICAgICBjb25zdCBoID0gdC5wb3NpdGlvbi5hZGQodC5oYWxmKS5zdWJ0cmFjdChlKS5kaXZpZGUoaSk7XG4gICAgICAgIGlmIChpc05hTihuLngpIHx8IGlzTmFOKG4ueSkgfHwgaXNOYU4oaC54KSB8fCBpc05hTihoLnkpKSB7XG4gICAgICAgICAgICBoLnkgPSAxIC8gMDtcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuLnggPiBoLngpIFtuLngsIGgueF0gPSBbIGgueCwgbi54IF07XG4gICAgICAgIGlmIChuLnkgPiBoLnkpIFtuLnksIGgueV0gPSBbIGgueSwgbi55IF07XG4gICAgICAgIGlmIChuLnggPiBoLnkgfHwgbi55ID4gaC54KSByZXR1cm4gcztcbiAgICAgICAgY29uc3QgciA9IE1hdGgubWF4KG4ueCwgbi55KTtcbiAgICAgICAgaWYgKHIgPCAwIHx8IHIgPiAxKSByZXR1cm4gcztcbiAgICAgICAgcy5ub3JtYWwgPSBpLnNpZ24oKTtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uVmVjdG9yLm11bHRpcGx5KHMubm9ybWFsKS56ZXJvKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiUlJSBObyBtb3ZlbWVudCBpbiBub3JtYWwgZGlyZWN0aW9uLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9XG4gICAgICAgIHMudGltZSA9IHI7XG4gICAgICAgIHMucG9pbnQgPSBlLmFkZChpLm11bHRpcGx5KHMudGltZSkpO1xuICAgICAgICBpZiAocy5wb2ludC54ID4gdC5sZWZ0ICYmIHMucG9pbnQueCA8IHQucmlnaHQgJiYgcy5wb2ludC55ID4gdC50b3AgJiYgcy5wb2ludC55IDwgdC5ib3R0b20pIDtcbiAgICAgICAgaWYgKG4ueCA8IG4ueSkge1xuICAgICAgICAgICAgaWYgKDAgPT09IE1hdGguYWJzKHMubm9ybWFsLnkpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJR05PUklORyB5XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5ub3JtYWwubXVsdGlwbHkobmV3IFZlY3RvcigwLCAtMSksIHRydWUpO1xuICAgICAgICAgICAgcy50YW5nZW50ID0gbmV3IFZlY3Rvcigtcy5ub3JtYWwueSwgcy5ub3JtYWwueCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoMCA9PT0gTWF0aC5hYnMocy5ub3JtYWwueCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIklHTk9SSU5HIHhcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLm5vcm1hbC5tdWx0aXBseShuZXcgVmVjdG9yKC0xLCAwKSwgdHJ1ZSk7XG4gICAgICAgICAgICBzLnRhbmdlbnQgPSBuZXcgVmVjdG9yKC1zLm5vcm1hbC55LCBzLm5vcm1hbC54KTtcbiAgICAgICAgfVxuICAgICAgICBzLmludGVyc2VjdHMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgZ2V0SW50ZXJzZWN0aW9uQ2lyY2xlKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IG5ldyBJbnRlcnNlY3Rpb247XG4gICAgICAgIG5ldyBMaW5lKHRoaXMub3JpZ2luLCB0LnBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgZSA9IHRoaXMub3JpZ2luLnN1YnRyYWN0KHQucG9zaXRpb24pO1xuICAgICAgICBjb25zdCBpID0gZS5kb3QodGhpcy5kaXJlY3Rpb25WZWN0b3IpO1xuICAgICAgICBjb25zdCBuID0gZS5kb3QoZSkgLSB0LnJhZGl1cyAqIHQucmFkaXVzO1xuICAgICAgICBsZXQgaCA9IGkgKiBpIC0gbjtcbiAgICAgICAgaWYgKGggPCAwKSByZXR1cm4gcztcbiAgICAgICAgaCA9IE1hdGguc3FydChoKTtcbiAgICAgICAgY29uc3QgciA9IC1pIC0gaDtcbiAgICAgICAgaWYgKHIgPCAwIHx8IHIgPiB0aGlzLm1hZ25pdHVkZSkgcmV0dXJuIHM7XG4gICAgICAgIHMucG9pbnQgPSB0aGlzLm9yaWdpbi5hZGQodGhpcy5kaXJlY3Rpb25WZWN0b3IubXVsdGlwbHkocikpO1xuICAgICAgICBzLnRpbWUgPSByIC8gdGhpcy5tYWduaXR1ZGU7XG4gICAgICAgIHMubm9ybWFsID0gcy5wb2ludC5zdWJ0cmFjdCh0LnBvc2l0aW9uKS5ub3JtYWxpemUoKTtcbiAgICAgICAgcy50YW5nZW50ID0gbmV3IFZlY3Rvcigtcy5ub3JtYWwueSwgcy5ub3JtYWwueCk7XG4gICAgICAgIHMuaW50ZXJzZWN0cyA9IHRydWU7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICBnZXRJbnRlcnNlY3Rpb25TdGFkaXVtKHQpIHtcbiAgICAgICAgbGV0IHMgPSBuZXcgSW50ZXJzZWN0aW9uO1xuICAgICAgICBjb25zdCBlID0gW107XG4gICAgICAgIGlmICh0Lmhvcml6b250YWwpIGUucHVzaChuZXcgUmVjdCh0LnBvc2l0aW9uLCB0LnNpemUuc3VidHJhY3QobmV3IFZlY3RvcigyICogdC5yYWRpdXMsIDApKSksIG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LmxlZnQgKyB0LnJhZGl1cywgdC5wb3NpdGlvbi55KSwgdC5yYWRpdXMpLCBuZXcgQ2lyY2xlKG5ldyBWZWN0b3IodC5yaWdodCAtIHQucmFkaXVzLCB0LnBvc2l0aW9uLnkpLCB0LnJhZGl1cykpOyBlbHNlIGUucHVzaChuZXcgUmVjdCh0LnBvc2l0aW9uLCB0LnNpemUuc3VidHJhY3QobmV3IFZlY3RvcigwLCAyICogdC5yYWRpdXMpKSksIG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LnBvc2l0aW9uLngsIHQudG9wICsgdC5yYWRpdXMpLCB0LnJhZGl1cyksIG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LnBvc2l0aW9uLngsIHQuYm90dG9tIC0gdC5yYWRpdXMpLCB0LnJhZGl1cykpO1xuICAgICAgICBlLmZvckVhY2goKHQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZSA9IHRoaXMuZ2V0SW50ZXJzZWN0aW9uKHQpO1xuICAgICAgICAgICAgaWYgKGUuaW50ZXJzZWN0cykgaWYgKGUudGltZSA8IHMudGltZSkgcyA9IGU7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcy5zaGFwZXMgPSBlO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgZ2V0SW50ZXJzZWN0aW9uUm91bmRlZFJlY3QodCkge1xuICAgICAgICBsZXQgcyA9IG5ldyBJbnRlcnNlY3Rpb247XG4gICAgICAgIGNvbnN0IGUgPSB0LnJhZGl1cztcbiAgICAgICAgY29uc3QgaSA9IDIgKiBlO1xuICAgICAgICBjb25zdCBuID0gWyBuZXcgQ2lyY2xlKG5ldyBWZWN0b3IodC5sZWZ0ICsgZSwgdC50b3AgKyBlKSwgZSksIG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LnJpZ2h0IC0gZSwgdC50b3AgKyBlKSwgZSksIG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LnJpZ2h0IC0gZSwgdC5ib3R0b20gLSBlKSwgZSksIG5ldyBDaXJjbGUobmV3IFZlY3Rvcih0LmxlZnQgKyBlLCB0LmJvdHRvbSAtIGUpLCBlKSwgbmV3IFJlY3QodC5wb3NpdGlvbiwgdC5zaXplLnN1YnRyYWN0KG5ldyBWZWN0b3IoaSwgMCkpKSwgbmV3IFJlY3QodC5wb3NpdGlvbiwgdC5zaXplLnN1YnRyYWN0KG5ldyBWZWN0b3IoMCwgaSkpKSBdO1xuICAgICAgICBuLmZvckVhY2goKHQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZSA9IHRoaXMuZ2V0SW50ZXJzZWN0aW9uKHQpO1xuICAgICAgICAgICAgaWYgKGUuaW50ZXJzZWN0cykgaWYgKGUudGltZSA8IHMudGltZSkgcyA9IGU7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcy5zaGFwZXMgPSBuO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG59XG5cblJheS5CID0gMTgwIC8gTWF0aC5QSTtcblxuUmF5Lk8gPSAzNjAgKyA5MDtcblxuY2xhc3MgU3BhdGlhbEhhc2hHcmlkUmVzb2x2ZXIge1xuICAgIGNvbnN0cnVjdG9yKHQsIHMpIHtcbiAgICAgICAgdGhpcy5zaXplID0gdDtcbiAgICAgICAgdGhpcy5UID0gcztcbiAgICAgICAgdGhpcy5WID0gbmV3IFdlYWtNYXA7XG4gICAgICAgIHRoaXMuVyA9IG5ldyBTcGF0aWFsSGFzaEdyaWQodCk7XG4gICAgfVxuICAgIHVwZGF0ZUVudGl0eVByb3hpbWl0aWVzKHQsIHMpIHtcbiAgICAgICAgdC5mb3JFYWNoKCh0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgUmVjdCh0LnBvc2l0aW9uLCB0Lm1vdmVtZW50Qm94LnNpemUpO1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gdGhpcy5UKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5UPy5kcmF3U2hhcGUodC5zaGFwZXNbMF0ud29ybGRTaGFwZS5zaGFwZSwgXCJibGFja1wiLCB0LmNvbG9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLlQuZHJhd1NoYXBlKGUsIFwicmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXMuVy5zZWFyY2goZSk7XG4gICAgICAgICAgICBpLmZvckVhY2goKGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlID09PSB0KSByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IGUucG9zaXRpb24uc3VidHJhY3QodC5wb3NpdGlvbikubWFnbml0dWRlO1xuICAgICAgICAgICAgICAgIGlmICh0Lm1vdmVtZW50UmFkaXVzICsgZS5tb3ZlbWVudFJhZGl1cyA8IGkgKiBpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdC5uZWFyLmFkZChlKTtcbiAgICAgICAgICAgICAgICBzLnByb3hpbWl0aWVzKys7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBzLnByb3hpbWl0aWVzLS07XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgYWRkRW50aXR5KHQpIHtcbiAgICAgICAgY29uc3QgcyA9IG5ldyBSZWN0KHQucG9zaXRpb24sIHQubW92ZW1lbnRCb3guc2l6ZSk7XG4gICAgICAgIGNvbnN0IGUgPSBuZXcgU3BhdGlhbEhhc2hHcmlkSXRlbSh0LCBzKTtcbiAgICAgICAgdGhpcy5XLmFkZChlKTtcbiAgICAgICAgdGhpcy5WLnNldCh0LCBlKTtcbiAgICB9XG4gICAgdXBkYXRlRW50aXR5KHQpIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuVi5nZXQodCk7XG4gICAgICAgIGNvbnN0IGUgPSBuZXcgUmVjdCh0LnBvc2l0aW9uLCB0Lm1vdmVtZW50Qm94LnNpemUpO1xuICAgICAgICBzLmFyZWEgPSBlO1xuICAgICAgICB0aGlzLlcudXBkYXRlKHMpO1xuICAgIH1cbiAgICByZW1vdmVFbnRpdHkodCkge1xuICAgICAgICBjb25zdCBzID0gdGhpcy5WLmdldCh0KTtcbiAgICAgICAgdGhpcy5XLnJlbW92ZShzKTtcbiAgICAgICAgdGhpcy5WLmRlbGV0ZSh0KTtcbiAgICB9XG4gICAgZmluZEVudGl0aWVzKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IG5ldyBSZWN0KHQucG9zaXRpb24sIG5ldyBWZWN0b3IodC5yYWRpdXMsIHQucmFkaXVzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLlcuc2VhcmNoKHMpO1xuICAgIH1cbn1cblxuY2xhc3MgU3BhdGlhbEhhc2hHcmlkSXRlbSB7XG4gICAgY29uc3RydWN0b3IodCwgcykge1xuICAgICAgICB0aGlzLmVudGl0eSA9IHQ7XG4gICAgICAgIHRoaXMuYXJlYSA9IHM7XG4gICAgICAgIHRoaXMucXVlcnkgPSAtMTtcbiAgICB9XG59XG5cbmNsYXNzIFNwYXRpYWxIYXNoR3JpZCB7XG4gICAgY29uc3RydWN0b3IodCkge1xuICAgICAgICB0aGlzLnNpemUgPSB0O1xuICAgICAgICB0aGlzLlcgPSBuZXcgTWFwO1xuICAgICAgICB0aGlzLl8gPSAwO1xuICAgICAgICB0aGlzLk0gPSBuZXcgTWFwO1xuICAgIH1cbiAgICBhZGQodCkge1xuICAgICAgICB0LmtleXMgPSB0aGlzLmdldEtleXModC5hcmVhKTtcbiAgICAgICAgdC5rZXkgPSB0LmtleXMuam9pbihcIi9cIik7XG4gICAgICAgIHQubG9jYXRpb25zID0gdC5rZXlzLm1hcCgocyA9PiB7XG4gICAgICAgICAgICBsZXQgZSA9IHRoaXMuVy5nZXQocyk7XG4gICAgICAgICAgICBpZiAobnVsbCA9PSBlKSB7XG4gICAgICAgICAgICAgICAgZSA9IG5ldyBTZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5XLnNldChzLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUuYWRkKHQpO1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgcmVtb3ZlKHQpIHtcbiAgICAgICAgdC5sb2NhdGlvbnMuZm9yRWFjaCgocyA9PiBzLmRlbGV0ZSh0KSkpO1xuICAgICAgICB0LmxvY2F0aW9ucyA9IFtdO1xuICAgICAgICB0LmtleXMgPSBbXTtcbiAgICB9XG4gICAgdXBkYXRlKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuZ2V0S2V5cyh0LmFyZWEpO1xuICAgICAgICBpZiAocy5qb2luKFwiL1wiKSA9PT0gdC5rZXkpIHJldHVybjtcbiAgICAgICAgdGhpcy5yZW1vdmUodCk7XG4gICAgICAgIHRoaXMuYWRkKHQpO1xuICAgIH1cbiAgICBzZWFyY2godCkge1xuICAgICAgICBjb25zdCBzID0gdGhpcy5fKys7XG4gICAgICAgIGNvbnN0IGUgPSBbXTtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuZ2V0S2V5cyh0KTtcbiAgICAgICAgZm9yIChjb25zdCB0IG9mIGkpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzLlcuZ2V0KHQpO1xuICAgICAgICAgICAgaWYgKG51bGwgPT0gaSkgY29udGludWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHQgb2YgaSkge1xuICAgICAgICAgICAgICAgIGlmICh0LnF1ZXJ5ID09PSBzKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBlLnB1c2godC5lbnRpdHkpO1xuICAgICAgICAgICAgICAgIHQucXVlcnkgPSBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBnZXRLZXlzKHQpIHtcbiAgICAgICAgY29uc3QgcyA9IFtdO1xuICAgICAgICBjb25zdCBlID0gTWF0aC5mbG9vcih0LmxlZnQgLyB0aGlzLnNpemUueCk7XG4gICAgICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKHQucmlnaHQgLyB0aGlzLnNpemUueCkgKyAxO1xuICAgICAgICBjb25zdCBuID0gTWF0aC5mbG9vcih0LnRvcCAvIHRoaXMuc2l6ZS55KTtcbiAgICAgICAgY29uc3QgaCA9IE1hdGguZmxvb3IodC5ib3R0b20gLyB0aGlzLnNpemUueSkgKyAxO1xuICAgICAgICBmb3IgKGxldCB0ID0gZTsgdCA8IGk7IHQrKykgZm9yIChsZXQgZSA9IG47IGUgPCBoOyBlKyspIHMucHVzaChgJHt0fSwke2V9YCk7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbn1cblxuY2xhc3MgUG9seWdvbiB7XG4gICAgY29uc3RydWN0b3IodCwgcywgZSA9IDApIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHQ7XG4gICAgICAgIHRoaXMudmVydGljZXMgPSBzO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gZTtcbiAgICAgICAgdGhpcy53b3JsZFNwYWNlID0gZmFsc2U7XG4gICAgfVxuICAgIGdldCBsZWZ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54ICsgTWF0aC5taW4oLi4udGhpcy52ZXJ0aWNlcy5tYXAoKHQgPT4gdC54KSkpO1xuICAgIH1cbiAgICBzZXQgbGVmdCh0KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHQgLSBNYXRoLm1pbiguLi50aGlzLnZlcnRpY2VzLm1hcCgodCA9PiB0LngpKSk7XG4gICAgfVxuICAgIGdldCByaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueCArIE1hdGgubWF4KC4uLnRoaXMudmVydGljZXMubWFwKCh0ID0+IHQueCkpKTtcbiAgICB9XG4gICAgc2V0IHJpZ2h0KHQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdCAtIE1hdGgubWF4KC4uLnRoaXMudmVydGljZXMubWFwKCh0ID0+IHQueCkpKTtcbiAgICB9XG4gICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueSArIE1hdGgubWluKC4uLnRoaXMudmVydGljZXMubWFwKCh0ID0+IHQueSkpKTtcbiAgICB9XG4gICAgc2V0IHRvcCh0KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHQgLSBNYXRoLm1pbiguLi50aGlzLnZlcnRpY2VzLm1hcCgodCA9PiB0LnkpKSk7XG4gICAgfVxuICAgIGdldCBib3R0b20oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnkgKyBNYXRoLm1heCguLi50aGlzLnZlcnRpY2VzLm1hcCgodCA9PiB0LnkpKSk7XG4gICAgfVxuICAgIHNldCBib3R0b20odCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0IC0gTWF0aC5tYXgoLi4udGhpcy52ZXJ0aWNlcy5tYXAoKHQgPT4gdC55KSkpO1xuICAgIH1cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0O1xuICAgIH1cbiAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib3R0b20gLSB0aGlzLnRvcDtcbiAgICB9XG4gICAgcm90YXRlKHQpIHtcbiAgICAgICAgaWYgKDAgIT09IHQpIHtcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgocyA9PiBzLnJvdGF0ZSh0LCB0cnVlKSkpO1xuICAgICAgICAgICAgdGhpcy5vcmllbnRhdGlvbiArPSB0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0cmFuc2xhdGUodCkge1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHMgPT4gcy5hZGQodCwgdHJ1ZSkpKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5hZGQodCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2x5Z29uKHRoaXMucG9zaXRpb24uY2xvbmUoKSwgdGhpcy52ZXJ0aWNlcy5tYXAoKHQgPT4gdC5jbG9uZSgpKSksIHRoaXMub3JpZW50YXRpb24pO1xuICAgIH1cbn1cblxuY2xhc3MgQ2FudmFzIHtcbiAgICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gdDtcbiAgICAgICAgdGhpcy5sb2dnaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBjb25zdCB0ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IHMgPSB0LmNhbnZhcztcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHMud2lkdGgsIHMuaGVpZ2h0KTtcbiAgICB9XG4gICAgZHJhd1NoYXBlKHQsIHMsIGUsIGkgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLmN0eDtcbiAgICAgICAgbi5zdHJva2VTdHlsZSA9IHM7XG4gICAgICAgIGlmIChudWxsICE9IGUpIG4uZmlsbFN0eWxlID0gZTtcbiAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBMaW5lKSB7XG4gICAgICAgICAgICBuLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgbi5tb3ZlVG8odC5zdGFydC54LCB0LnN0YXJ0LnkpO1xuICAgICAgICAgICAgbi5saW5lVG8odC5lbmQueCwgdC5lbmQueSk7XG4gICAgICAgICAgICBuLnN0cm9rZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHQgaW5zdGFuY2VvZiBSYXkpIHtcbiAgICAgICAgICAgIG4uc3Ryb2tlU3R5bGUgPSBzO1xuICAgICAgICAgICAgbi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIG4ubW92ZVRvKHQub3JpZ2luLngsIHQub3JpZ2luLnkpO1xuICAgICAgICAgICAgbi5saW5lVG8odC5lbmQueCwgdC5lbmQueSk7XG4gICAgICAgICAgICBpZiAobnVsbCAhPSBlKSBuLmZpbGwoKTtcbiAgICAgICAgICAgIG4uc3Ryb2tlKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdDcm9zcyh0Lm9yaWdpbiwgcywgMik7XG4gICAgICAgIH0gZWxzZSBpZiAodCBpbnN0YW5jZW9mIFN0YWRpdW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBNYXRoLlBJO1xuICAgICAgICAgICAgY29uc3QgaCA9IHQucG9zaXRpb247XG4gICAgICAgICAgICBjb25zdCByID0gdC5yYWRpdXM7XG4gICAgICAgICAgICBuLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgaWYgKHQuaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIG4uYXJjKHQucmlnaHQgLSByLCBoLnksIHIsIGkgLyAyLCAxLjUgKiBpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBuLmxpbmVUbyh0LmxlZnQgKyByLCB0LnRvcCk7XG4gICAgICAgICAgICAgICAgbi5hcmModC5sZWZ0ICsgciwgaC55LCByLCAxLjUgKiBpLCAuNSAqIGksIHRydWUpO1xuICAgICAgICAgICAgICAgIG4ubGluZVRvKHQucmlnaHQgLSByLCB0LmJvdHRvbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG4uYXJjKGgueCwgdC50b3AgKyByLCByLCAwLCBpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBuLmxpbmVUbyh0LmxlZnQsIHQuYm90dG9tIC0gcik7XG4gICAgICAgICAgICAgICAgbi5hcmMoaC54LCB0LmJvdHRvbSAtIHIsIHIsIGksIDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIG4ubGluZVRvKHQucmlnaHQsIHQudG9wICsgcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobnVsbCAhPSBlKSBuLmZpbGwoKTtcbiAgICAgICAgICAgIG4uc3Ryb2tlKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdDcm9zcyhoLCBzLCAyKTtcbiAgICAgICAgfSBlbHNlIGlmICh0IGluc3RhbmNlb2YgUm91bmRlZFJlY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0LnJhZGl1cztcbiAgICAgICAgICAgIG4uYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBuLmFyYyh0LmxlZnQgKyBpLCB0LnRvcCArIGksIGksIC0uNSAqIE1hdGguUEksIE1hdGguUEksIHRydWUpO1xuICAgICAgICAgICAgbi5saW5lVG8odC5sZWZ0LCB0LmJvdHRvbSAtIGkpO1xuICAgICAgICAgICAgbi5hcmModC5sZWZ0ICsgaSwgdC5ib3R0b20gLSBpLCBpLCBNYXRoLlBJLCAuNSAqIE1hdGguUEksIHRydWUpO1xuICAgICAgICAgICAgbi5saW5lVG8odC5yaWdodCAtIGksIHQuYm90dG9tKTtcbiAgICAgICAgICAgIG4uYXJjKHQucmlnaHQgLSBpLCB0LmJvdHRvbSAtIGksIGksIC41ICogTWF0aC5QSSwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICBuLmxpbmVUbyh0LnJpZ2h0LCB0LnRvcCArIGkpO1xuICAgICAgICAgICAgbi5hcmModC5yaWdodCAtIGksIHQudG9wICsgaSwgaSwgMCwgLjUgKiAtTWF0aC5QSSwgdHJ1ZSk7XG4gICAgICAgICAgICBuLmxpbmVUbyh0LmxlZnQgKyBpLCB0LnRvcCk7XG4gICAgICAgICAgICBpZiAobnVsbCAhPSBlKSBuLmZpbGwoKTtcbiAgICAgICAgICAgIG4uc3Ryb2tlKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdDcm9zcyh0LnBvc2l0aW9uLCBzLCAyKTtcbiAgICAgICAgfSBlbHNlIGlmICh0IGluc3RhbmNlb2YgUmVjdCB8fCB0IGluc3RhbmNlb2YgUG9seWdvbikge1xuICAgICAgICAgICAgbi5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0LnZlcnRpY2VzO1xuICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCBpLmxlbmd0aDsgdCsrKSBuLmxpbmVUbyhpW3RdLngsIGlbdF0ueSk7XG4gICAgICAgICAgICBuLmxpbmVUbyhpWzBdLngsIGlbMF0ueSk7XG4gICAgICAgICAgICBpZiAobnVsbCAhPSBlKSBuLmZpbGwoKTtcbiAgICAgICAgICAgIG4uc3Ryb2tlKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdDcm9zcyh0LnBvc2l0aW9uLCBzLCAyKTtcbiAgICAgICAgfSBlbHNlIGlmICh0IGluc3RhbmNlb2YgQ2lyY2xlKSB7XG4gICAgICAgICAgICBuLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgbi5hcmModC5wb3NpdGlvbi54LCB0LnBvc2l0aW9uLnksIHQucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICBpZiAobnVsbCAhPSBlKSBuLmZpbGwoKTtcbiAgICAgICAgICAgIG4uc3Ryb2tlKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdDcm9zcyh0LnBvc2l0aW9uLCBzLCAyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3Q3Jvc3ModCwgcywgZSwgaSA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgbiA9IHRoaXMuY3R4O1xuICAgICAgICBuLnN0cm9rZVN0eWxlID0gcztcbiAgICAgICAgbi5iZWdpblBhdGgoKTtcbiAgICAgICAgbi5tb3ZlVG8odC54LCB0LnkgLSBlKTtcbiAgICAgICAgbi5saW5lVG8odC54LCB0LnkgKyBlKTtcbiAgICAgICAgbi5zdHJva2UoKTtcbiAgICAgICAgbi5iZWdpblBhdGgoKTtcbiAgICAgICAgbi5tb3ZlVG8odC54IC0gZSwgdC55KTtcbiAgICAgICAgbi5saW5lVG8odC54ICsgZSwgdC55KTtcbiAgICAgICAgbi5zdHJva2UoKTtcbiAgICB9XG4gICAgZHJhd1RleHQodCwgcywgZSwgaSA9IFwiMTFweCBBcmlhbFwiLCBuID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBoID0gdGhpcy5jdHg7XG4gICAgICAgIGguZmlsbFN0eWxlID0gZTtcbiAgICAgICAgaC5mb250ID0gaTtcbiAgICAgICAgaC5maWxsVGV4dCh0LCBzLngsIHMueSk7XG4gICAgfVxuICAgIGxvZyguLi50KSB7XG4gICAgICAgIGlmICghdGhpcy5sb2dnaW5nKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKC4uLnQpO1xuICAgIH1cbn1cblxuY2xhc3MgUGh5c2ljcyB7XG4gICAgc3RhdGljIGluaXRpYWxpemUodCkge1xuICAgICAgICB0ID0gdCA/PyB7fTtcbiAgICAgICAgY29uc3QgcyA9IHQuY29sbGlzaW9ucyA/PyB7XG4gICAgICAgICAgICBjb2xsaXNpb246IFsgXCJjb2xsaXNpb25cIiBdXG4gICAgICAgIH07XG4gICAgICAgIHQuc2lnbmFscyA/PyB7fTtcbiAgICAgICAgZm9yIChjb25zdCB0IGluIHMpIGZvciAoY29uc3QgZSBvZiBzW3RdKSB7XG4gICAgICAgICAgICBpZiAobnVsbCA9PSBQaHlzaWNzLmNvbGxpc2lvbnNbdF0pIFBoeXNpY3MuY29sbGlzaW9uc1t0XSA9IHt9O1xuICAgICAgICAgICAgUGh5c2ljcy5jb2xsaXNpb25zW3RdW2VdID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChudWxsID09IFBoeXNpY3MuY29sbGlzaW9uc1tlXSkgUGh5c2ljcy5jb2xsaXNpb25zW2VdID0ge307XG4gICAgICAgICAgICBQaHlzaWNzLmNvbGxpc2lvbnNbZV1bdF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudWxsICE9IHQuY3R4KSB7XG4gICAgICAgICAgICBQaHlzaWNzLmNhbnZhcyA9IG5ldyBDYW52YXModC5jdHgpO1xuICAgICAgICAgICAgUGh5c2ljcy5zaG93QXJlYXMgPSB0LnNob3dBcmVhcyA/PyBQaHlzaWNzLnNob3dBcmVhcztcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHQucmVzb2x2ZXIpIHtcbiAgICAgICAgICBjYXNlIFwicXVhZHRyZWVcIjpcbiAgICAgICAgICAgIFBoeXNpY3MuTCA9IG5ldyBRdWFkVHJlZVJlc29sdmVyKG5ldyBWZWN0b3IoNTAwLCA1MDApLCBuZXcgVmVjdG9yKDJlMywgMmUzKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJzcGF0aWFsLWhhc2gtZ3JpZFwiOlxuICAgICAgICAgICAgUGh5c2ljcy5MID0gbmV3IFNwYXRpYWxIYXNoR3JpZFJlc29sdmVyKG5ldyBWZWN0b3IoMTAwLCAxMDApLCBQaHlzaWNzLmNhbnZhcyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBQaHlzaWNzLkwgPSBuZXcgUmFkaXVzUmVzb2x2ZXIoUGh5c2ljcy5jYW52YXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHVwZGF0ZSh0LCBzKSB7XG4gICAgICAgIGNvbnN0IGUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgY29uc3QgaSA9IHtcbiAgICAgICAgICAgIHRpbWU6IC0xLFxuICAgICAgICAgICAgbW92ZXJzOiAwLFxuICAgICAgICAgICAgbW92aW5nOiAwLFxuICAgICAgICAgICAgdG90YWxDaGVja3M6IDAsXG4gICAgICAgICAgICBza2lwcGVkOiAwLFxuICAgICAgICAgICAgc29saXRhaXJlczogMCxcbiAgICAgICAgICAgIGNvbGxpc2lvbkNhbmRpZGF0ZXM6IDAsXG4gICAgICAgICAgICBwcm94aW1pdGllczogMCxcbiAgICAgICAgICAgIGNoZWNrczogMCxcbiAgICAgICAgICAgIG1vdmVkOiBuZXcgU2V0XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0ID4gLjUpIHJldHVybiBpO1xuICAgICAgICBpZiAoUGh5c2ljcy5kb250Q2xlYXIpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgUGh5c2ljcy5kb250Q2xlYXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBQaHlzaWNzLmNhbnZhcz8uY2xlYXIoKTtcbiAgICAgICAgY29uc3QgbiA9IG5ldyBTZXQ7XG4gICAgICAgIGNvbnN0IGggPSB0aGlzLmVudGl0aWVzLmZpbHRlcigoZSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuYXBwbHlGb3JjZXModCwgcykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGUucHJlcGFyZU1vdmVtZW50KHQsIHMpO1xuICAgICAgICAgICAgaWYgKGUuc3BlZWQgPiAwKSBuLmFkZChlKTtcbiAgICAgICAgICAgIGUubmVhci5jbGVhcigpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaS5tb3ZlcnMgPSBoLmxlbmd0aDtcbiAgICAgICAgaS5tb3ZpbmcgPSBuLnNpemU7XG4gICAgICAgIGkudG90YWxDaGVja3MgPSBoLmxlbmd0aCAqIGgubGVuZ3RoO1xuICAgICAgICB0aGlzLkwudXBkYXRlRW50aXR5UHJveGltaXRpZXMoaCwgaSk7XG4gICAgICAgIGxldCByID0gdDtcbiAgICAgICAgd2hpbGUgKHIgPiAxZS00KSB7XG4gICAgICAgICAgICBsZXQgdCA9IHI7XG4gICAgICAgICAgICBsZXQgZSA9IFsgbmV3IEludGVyc2VjdGlvbiBdO1xuICAgICAgICAgICAgY29uc3QgbyA9IG5ldyBXZWFrTWFwO1xuICAgICAgICAgICAgZm9yIChjb25zdCBzIG9mIG4pIHtcbiAgICAgICAgICAgICAgICBpLmNvbGxpc2lvbkNhbmRpZGF0ZXMrKztcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG4gb2Ygcy5uZWFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuLmRlbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubmVhci5kZWxldGUobik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIW8uaGFzKG4pKSBvLnNldChuLCBuZXcgU2V0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8uZ2V0KHMpPy5oYXMobikpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBvLmdldChuKT8uYWRkKHMpO1xuICAgICAgICAgICAgICAgICAgICBpLmNoZWNrcysrO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoID0gcy52ZWxvY2l0eS5tdWx0aXBseSh0KS5zdWJ0cmFjdCgobi52ZWxvY2l0eSA/PyBuZXcgVmVjdG9yKS5tdWx0aXBseSh0KSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBuZXcgUmF5KHMucG9zaXRpb24sIGgubm9ybWFsaXplKCksIGgubWFnbml0dWRlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IHMuc2hhcGVzWzBdLndvcmxkU2hhcGUuc2hhcGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBuLnNoYXBlc1swXS53b3JsZFNoYXBlLnNoYXBlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1ID0gYy5nZXRTd2VwdFNoYXBlKGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsID0gci5nZXRJbnRlcnNlY3Rpb24odSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsLmludGVyc2VjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGwubW92ZXIgPSBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgbC5lbnRpdHkgPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGwudGltZSA9PT0gZVswXS50aW1lKSBlLnB1c2gobCk7IGVsc2UgaWYgKGwudGltZSA8IGVbMF0udGltZSkgZSA9IFsgbCBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVbMF0uaW50ZXJzZWN0cykgdCAqPSBlWzBdLnRpbWU7XG4gICAgICAgICAgICBpZiAodCA+IDApIHtcbiAgICAgICAgICAgICAgICBuLmZvckVhY2goKHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzLm1vdmUodCk7XG4gICAgICAgICAgICAgICAgICAgIGkubW92ZWQuYWRkKHMpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICByIC09IHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZVswXS5pbnRlcnNlY3RzKSBmb3IgKGNvbnN0IHQgb2YgZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSB0Lm1vdmVyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSB0LmVudGl0eTtcbiAgICAgICAgICAgICAgICBjb25zdCBvID0gdC50YW5nZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSB0Lm5vcm1hbDtcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gZS5jb2xsaWRpbmcoaSwgdCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdSA9IGkuY29sbGlkaW5nKGUsIHQpO1xuICAgICAgICAgICAgICAgIGxldCBsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKFwicmVtb3ZlXCIgPT09IGEpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5kZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgUGh5c2ljcy5yZW1vdmVFbnRpdGllcyhlKTtcbiAgICAgICAgICAgICAgICAgICAgbi5kZWxldGUoZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBoLmluZGV4T2YoZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ID4gLTEpIGguc3BsaWNlKHQsIDEpO1xuICAgICAgICAgICAgICAgICAgICBsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFwicmVtb3ZlXCIgPT09IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgaS5kZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgUGh5c2ljcy5yZW1vdmVFbnRpdGllcyhpKTtcbiAgICAgICAgICAgICAgICAgICAgbi5kZWxldGUoaSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBoLmluZGV4T2YoaSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ID4gLTEpIGguc3BsaWNlKHQsIDEpO1xuICAgICAgICAgICAgICAgICAgICBsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGwpIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNvbnN0IGYgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAoMCAhPT0gZS5tYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGYubWFzcyA9IGUubWFzcztcbiAgICAgICAgICAgICAgICAgICAgZi5kaXJlY3Rpb24gPSBlLmRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgZi5zcGVlZCA9IGUuc3BlZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZi5tYXNzID0gaS5tYXNzO1xuICAgICAgICAgICAgICAgICAgICBmLmRpcmVjdGlvbiA9IGkuZGlyZWN0aW9uLm11bHRpcGx5KC0xKTtcbiAgICAgICAgICAgICAgICAgICAgZi5zcGVlZCA9IGkuc3BlZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHcgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAoMCAhPT0gaS5tYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHcubWFzcyA9IGkubWFzcztcbiAgICAgICAgICAgICAgICAgICAgdy5kaXJlY3Rpb24gPSBpLmRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdy5zcGVlZCA9IGkuc3BlZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdy5tYXNzID0gZS5tYXNzO1xuICAgICAgICAgICAgICAgICAgICB3LmRpcmVjdGlvbiA9IGUuZGlyZWN0aW9uLm11bHRpcGx5KC0xKTtcbiAgICAgICAgICAgICAgICAgICAgdy5zcGVlZCA9IGUuc3BlZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBmLmRpcmVjdGlvbi5tdWx0aXBseShmLnNwZWVkKS5kb3Qobyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZyA9IHcuZGlyZWN0aW9uLm11bHRpcGx5KHcuc3BlZWQpLmRvdChvKTtcbiAgICAgICAgICAgICAgICBjb25zdCBWID0gZi5kaXJlY3Rpb24ubXVsdGlwbHkoZi5zcGVlZCkuZG90KGMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB3LmRpcmVjdGlvbi5tdWx0aXBseSh3LnNwZWVkKS5kb3QoYyk7XG4gICAgICAgICAgICAgICAgY29uc3QgUiA9IChWICogKGYubWFzcyAtIHcubWFzcykgKyAyICogdy5tYXNzICogeSkgLyAoZi5tYXNzICsgdy5tYXNzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBNID0gKHkgKiAody5tYXNzIC0gZi5tYXNzKSArIDIgKiBmLm1hc3MgKiBWKSAvIChmLm1hc3MgKyB3Lm1hc3MpO1xuICAgICAgICAgICAgICAgIGlmICgwICE9PSBlLm1hc3MpIGUudmVsb2NpdHkgPSBvLm11bHRpcGx5KGQpLmFkZChjLm11bHRpcGx5KFIpKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5wcmVwYXJlTW92ZW1lbnQociwgcykpIG4uYWRkKGUpOyBlbHNlIG4uZGVsZXRlKGUpO1xuICAgICAgICAgICAgICAgIGlmICgwICE9PSBpLm1hc3MpIGkudmVsb2NpdHkgPSBvLm11bHRpcGx5KGcpLmFkZChjLm11bHRpcGx5KE0pKTtcbiAgICAgICAgICAgICAgICBpZiAoaS5wcmVwYXJlTW92ZW1lbnQociwgcykpIG4uYWRkKGkpOyBlbHNlIG4uZGVsZXRlKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKDAgPT09IG4uc2l6ZSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaS50aW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBlO1xuICAgICAgICByZXR1cm4gaTtcbiAgICB9XG4gICAgc3RhdGljIHVwZGF0ZV9XT1JLSU5HKHQsIHMpIHtcbiAgICAgICAgY29uc3QgZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMuZW50aXRpZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuID0gdGhpcy5lbnRpdGllc1tpXTtcbiAgICAgICAgICAgIGlmICghbi5hcHBseUZvcmNlcyh0LCBzKSkgY29udGludWU7XG4gICAgICAgICAgICBuLnByZXBhcmVNb3ZlbWVudCh0LCBzKTtcbiAgICAgICAgICAgIGUucHVzaChuKTtcbiAgICAgICAgICAgIG4ubmVhci5jbGVhcigpO1xuICAgICAgICAgICAgZm9yIChsZXQgdCA9IGkgKyAxLCBzID0gdGhpcy5lbnRpdGllcy5sZW5ndGg7IHQgPCBzOyB0KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gdGhpcy5lbnRpdGllc1t0XTtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSBzLnBvc2l0aW9uKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gcy5wb3NpdGlvbi5zdWJ0cmFjdChuLnBvc2l0aW9uKS5tYWduaXR1ZGU7XG4gICAgICAgICAgICAgICAgaWYgKG4ubW92ZW1lbnRSYWRpdXMgKyBzLm1vdmVtZW50UmFkaXVzIDwgZSAqIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJza2lwcGluZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG4ubmVhci5hZGQocyk7XG4gICAgICAgICAgICAgICAgcy5uZWFyLmFkZChuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgaSA9IHQ7XG4gICAgICAgIGNvbnN0IG4gPSBuZXcgU2V0O1xuICAgICAgICB3aGlsZSAoaSA+IDFlLTQpIHtcbiAgICAgICAgICAgIGxldCB0ID0gaTtcbiAgICAgICAgICAgIGxldCBoID0gWyBuZXcgSW50ZXJzZWN0aW9uIF07XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHMgb2YgZSkge1xuICAgICAgICAgICAgICAgIGlmICgwID09PSBzLnNwZWVkKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBuLmFkZChzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIG5lYXJcIiwgcy5uZWFyLnNpemUpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZSBvZiBzLm5lYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5uZWFyLmRlbGV0ZShzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9IHMudmVsb2NpdHkubXVsdGlwbHkodCkuc3VidHJhY3QoKGUudmVsb2NpdHkgPz8gbmV3IFZlY3RvcikubXVsdGlwbHkodCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuID0gbmV3IFJheShzLnBvc2l0aW9uLCBpLm5vcm1hbGl6ZSgpLCBpLm1hZ25pdHVkZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBzLnNoYXBlc1swXS53b3JsZFNoYXBlLnNoYXBlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvID0gZS5zaGFwZXNbMF0ud29ybGRTaGFwZS5zaGFwZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IHIuZ2V0U3dlcHRTaGFwZShvKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYSA9IG4uZ2V0SW50ZXJzZWN0aW9uKGMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5pbnRlcnNlY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhLm1vdmVyID0gcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZW50aXR5ID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLnRpbWUgPT09IGhbMF0udGltZSkgaC5wdXNoKGEpOyBlbHNlIGlmIChhLnRpbWUgPCBoWzBdLnRpbWUpIGggPSBbIGEgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoWzBdLmludGVyc2VjdHMpIHQgKj0gaFswXS50aW1lO1xuICAgICAgICAgICAgbi5mb3JFYWNoKChzID0+IHtcbiAgICAgICAgICAgICAgICBzLm1vdmUodCk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBpIC09IHQ7XG4gICAgICAgICAgICBpZiAoaFswXS5pbnRlcnNlY3RzKSBmb3IgKGNvbnN0IHQgb2YgaCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSB0Lm1vdmVyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGggPSB0LmVudGl0eTtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gdC50YW5nZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IG8gPSB0Lm5vcm1hbDtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCB1ID0gZS5kaXJlY3Rpb24ubXVsdGlwbHkoZS5zcGVlZCkuZG90KHIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGwgPSBoLmRpcmVjdGlvbi5tdWx0aXBseShoLnNwZWVkKS5kb3Qocik7XG4gICAgICAgICAgICAgICAgY29uc3QgZiA9IGUuZGlyZWN0aW9uLm11bHRpcGx5KGUuc3BlZWQpLmRvdChvKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3ID0gaC5kaXJlY3Rpb24ubXVsdGlwbHkoaC5zcGVlZCkuZG90KG8pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSAoZiAqIChjIC0gYSkgKyAyICogYSAqIHcpIC8gKGMgKyBhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBnID0gKHcgKiAoYSAtIGMpICsgMiAqIGMgKiBmKSAvIChjICsgYSk7XG4gICAgICAgICAgICAgICAgZS52ZWxvY2l0eSA9IHIubXVsdGlwbHkodSkuYWRkKG8ubXVsdGlwbHkoZCkpO1xuICAgICAgICAgICAgICAgIGgudmVsb2NpdHkgPSByLm11bHRpcGx5KGwpLmFkZChvLm11bHRpcGx5KGcpKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5wcmVwYXJlTW92ZW1lbnQoaSwgcykpIG4uYWRkKGUpOyBlbHNlIG4uZGVsZXRlKGUpO1xuICAgICAgICAgICAgICAgIGlmICghaC5wcmVwYXJlTW92ZW1lbnQoaSwgcykpIG4uYWRkKGgpOyBlbHNlIG4uZGVsZXRlKGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKDAgPT09IG4uc2l6ZSkgYnJlYWs7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHQgb2YgZSkge1xuICAgICAgICAgICAgICAgIHQucG9zaXRpb24uYWRkKFsgMTEwMCwgMTEwMCBdLCB0cnVlKS5tb2R1bHVzKDExMDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSB0LnNoYXBlc1swXS53b3JsZFNoYXBlLnNoYXBlO1xuICAgICAgICAgICAgICAgIGlmIChzLnBvc2l0aW9uLnggPCAwKSB0LnZlbG9jaXR5LnggPSAtdC52ZWxvY2l0eS54OyBlbHNlIGlmIChzLnBvc2l0aW9uLnggPiAxMTAwKSB0LnZlbG9jaXR5LnggPSAtdC52ZWxvY2l0eS54O1xuICAgICAgICAgICAgICAgIGlmIChzLnBvc2l0aW9uLnkgPCAwKSB0LnZlbG9jaXR5LnkgPSAtdC52ZWxvY2l0eS55OyBlbHNlIGlmIChzLnBvc2l0aW9uLnkgPiAxMTAwKSB0LnZlbG9jaXR5LnkgPSAtdC52ZWxvY2l0eS55O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBhZGRGb3JjZSh0KSB7XG4gICAgICAgIGlmICghKHQgaW5zdGFuY2VvZiBGb3JjZSkpIHQgPSBGb3JjZS5jcmVhdGUodCk7XG4gICAgICAgIFBoeXNpY3MuZm9yY2VzLnB1c2godCk7XG4gICAgfVxuICAgIHN0YXRpYyByZW1vdmVGb3JjZSh0LCBzID0gUGh5c2ljcykge1xuICAgICAgICBjb25zdCBlID0gUGh5c2ljcy5mb3JjZXMuZmluZEluZGV4KCh0ID0+IHQgPT09IHMpKTtcbiAgICAgICAgaWYgKGUgPCAwKSByZXR1cm47XG4gICAgICAgIFBoeXNpY3MuZm9yY2VzLnNwbGljZShlLCAxKTtcbiAgICB9XG4gICAgc3RhdGljIGFkZEVudGl0aWVzKHQpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHQpKSB0ID0gWyB0IF07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkRW50aXRpZXNcIiwgdCk7XG4gICAgICAgIHJldHVybiB0Lm1hcCgodCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzID0gdCBpbnN0YW5jZW9mIEVudGl0eSA/IHQgOiBFbnRpdHkuY3JlYXRlKHQpO1xuICAgICAgICAgICAgUGh5c2ljcy5mb3JjZXMuZm9yRWFjaCgodCA9PiBzLmFkZEZvcmNlKHQuY2xvbmUoKS5yZXNldCgpKSkpO1xuICAgICAgICAgICAgUGh5c2ljcy5lbnRpdGllcy5wdXNoKHMpO1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gcy5wb3NpdGlvbikgUGh5c2ljcy5MLmFkZEVudGl0eShzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkRW50aXRpZXMgbWFwXCIsIHMpO1xuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgc3RhdGljIHVwZGF0ZUVudGl0eSh0KSB7XG4gICAgICAgIFBoeXNpY3MuTC51cGRhdGVFbnRpdHkodCk7XG4gICAgfVxuICAgIHN0YXRpYyByZW1vdmVFbnRpdGllcyh0KSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0KSkgdCA9IFsgdCBdO1xuICAgICAgICB0LmZvckVhY2goKHQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcyA9IFBoeXNpY3MuZW50aXRpZXMuZmluZEluZGV4KChzID0+IHMgPT09IHQpKTtcbiAgICAgICAgICAgIGlmIChzID4gLTEpIFBoeXNpY3MuZW50aXRpZXMuc3BsaWNlKHMsIDEpO1xuICAgICAgICAgICAgUGh5c2ljcy5MLnJlbW92ZUVudGl0eSh0KTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblxuUGh5c2ljcy5lbnRpdGllcyA9IFtdO1xuXG5QaHlzaWNzLmZvcmNlcyA9IFtdO1xuXG5QaHlzaWNzLmNvbGxpc2lvbnMgPSB7fTtcblxuUGh5c2ljcy5zaWduYWxzID0ge307XG5cblBoeXNpY3Muc2hvd0FyZWFzID0gZmFsc2U7XG5cblBoeXNpY3MuZG9udENsZWFyID0gZmFsc2U7XG5cbmV4cG9ydCB7IENpcmNsZSwgRW50aXR5LCBGb3JjZSwgSW50ZXJzZWN0aW9uLCBMaW5lLCBQaHlzaWNzLCBQb2ludCwgUG9seWdvbiwgUmF5LCBSZWN0LCBSb3VuZGVkUmVjdCwgU3RhZGl1bSwgVmVjdG9yIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iLCJjbGFzcyBVSVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJjcmVhdGVkXCI7XG4gICAgICAgIHRoaXMuYmluZGluZ3MgPSBbXTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW107XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSBcIlwiO1xuICAgICAgICB0aGlzLm1vdmVkID0gXCJcIjtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZSh0LCBpLCBlID0ge30sIHMgPSB7XG4gICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgcHJlcGFyZTogdHJ1ZSxcbiAgICAgICAgc2libGluZzogbnVsbFxuICAgIH0pIHtcbiAgICAgICAgY29uc3QgbiA9IG5ldyBVSVZpZXc7XG4gICAgICAgIG4ubW9kZWwgPSBlO1xuICAgICAgICBuLmVsZW1lbnQgPSBpO1xuICAgICAgICBuLmJpbmRpbmdzLnB1c2goLi4uVUkucGFyc2Uobi5lbGVtZW50LCBlLCBuLCBzLnBhcmVudCkpO1xuICAgICAgICBuLnBhcmVudEVsZW1lbnQgPSB0O1xuICAgICAgICBuLnNpYmxpbmcgPSBzLnNpYmxpbmc7XG4gICAgICAgIG4ucGFyZW50ID0gcy5wYXJlbnQgPz8gVUk7XG4gICAgICAgIG4uYXR0YWNoZWQgPSBuZXcgUHJvbWlzZSgodCA9PiB7XG4gICAgICAgICAgICBuLmF0dGFjaFJlc29sdmUgPSB0O1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInB1aS1yZW1vdmluZ1wiKTtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSBcInF1ZXVlXCI7XG4gICAgICAgIFVJLmRlc3Ryb3llZC5wdXNoKHRoaXMpO1xuICAgIH1cbiAgICB0ZXJtaW5hdGUoKSB7XG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMuZ2V0QW5pbWF0aW9ucygpKS50aGVuKCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudD8ucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuYmluZGluZ3MuZm9yRWFjaCgodCA9PiB0LnVuYmluZCgpKSk7XG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy5wYXJlbnQudmlld3MuZmluZEluZGV4KCh0ID0+IHQgPT09IHRoaXMpKTtcbiAgICAgICAgICAgIGlmICh0ID4gLTEpIHRoaXMucGFyZW50LnZpZXdzLnNwbGljZSh0LCAxKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IFwiZGVzdHJveWVkXCI7XG4gICAgfVxuICAgIG1vdmUodCkge1xuICAgICAgICB0aGlzLm1vdmVkID0gXCJxdWV1ZVwiO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInB1aS1tb3ZpbmdcIik7XG4gICAgICAgIHRoaXMuc2libGluZyA9IHQ7XG4gICAgfVxuICAgIHBsYXkodCwgaSkge1xuICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHQpIHQgPSB0aGlzLmFuaW1hdGlvbnMuZmluZCgoaSA9PiBpLm5hbWUgPT09IHQpKS5jbG9uZSgpO1xuICAgICAgICB0LmVsZW1lbnQgPSBpO1xuICAgICAgICB0LnN0YXRlID0gXCJwZW5kaW5nXCI7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUXVldWUucHVzaCh0KTtcbiAgICAgICAgdGhpcy51cGRhdGVBbmltYXRpb25zKHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuICAgIHVwZGF0ZUZyb21VSSgpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5ncy5mb3JFYWNoKCh0ID0+IHQudXBkYXRlRnJvbVVJKCkpKTtcbiAgICB9XG4gICAgdXBkYXRlVG9VSSgpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5ncy5mb3JFYWNoKCh0ID0+IHQudXBkYXRlVG9VSSgpKSk7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICAgIGNhc2UgXCJjcmVhdGVkXCI6XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInB1aS1hZGRpbmdcIik7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJQVUktVU5SRU5ERVJFRFwiKSkgKHRoaXMucGFyZW50RWxlbWVudCA/PyBVSS5wYXJlbnRFbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5wYXJlbnQpKS5pbnNlcnRCZWZvcmUodGhpcy5lbGVtZW50LCB0aGlzLnNpYmxpbmc/Lm5leHRTaWJsaW5nID8/IG51bGwpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hSZXNvbHZlKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gXCJhdHRhY2hpbmdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImF0dGFjaGluZ1wiOlxuICAgICAgICAgICAgaWYgKDAgPT09IHRoaXMuZ2V0QW5pbWF0aW9ucyhmYWxzZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwdWktYWRkaW5nXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcImF0dGFjaGVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJhdHRhY2hlZFwiOlxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFwicmVuZGVyZWRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZUF0RXZlbnRzKCkge1xuICAgICAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2goKHQgPT4gdC51cGRhdGVBdEV2ZW50cygpKSk7XG4gICAgfVxuICAgIHVwZGF0ZUFuaW1hdGlvbnModCkge1xuICAgICAgICB3aGlsZSAoXCJmaW5pc2hlZFwiID09PSB0aGlzLmFuaW1hdGlvblF1ZXVlWzBdPy5zdGF0ZSA/PyBmYWxzZSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMuYW5pbWF0aW9uUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIHQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbmltYXRpb25RdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZSA9IHRoaXMuYW5pbWF0aW9uUXVldWVbaV07XG4gICAgICAgICAgICBpZiAoXCJwZW5kaW5nXCIgIT09IGUuc3RhdGUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKGUuaXNCbG9ja2VkKHQpKSBjb250aW51ZTtcbiAgICAgICAgICAgIGUuc3RhdGUgPSBcInBsYXlpbmdcIjtcbiAgICAgICAgICAgIGUuc3RhcnRUaW1lID0gdDtcbiAgICAgICAgICAgIGUuYW5pbWF0aW9uID0gZS5lbGVtZW50LmFuaW1hdGUoZS5rZXlmcmFtZXMsIGUub3B0aW9ucyk7XG4gICAgICAgICAgICBlLmZpbmlzaGVkID0gZS5hbmltYXRpb24uZmluaXNoZWQ7XG4gICAgICAgICAgICBlLmZpbmlzaGVkLnRoZW4oKCgpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0YXRlID0gXCJmaW5pc2hlZFwiO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQW5pbWF0aW9ucyhwZXJmb3JtYW5jZS5ub3coKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlTW92ZSgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm1vdmVkKSB7XG4gICAgICAgICAgY2FzZSBcInF1ZXVlXCI6XG4gICAgICAgICAgICB0aGlzLm1vdmVkID0gXCJtb3ZlXCI7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJtb3ZlXCI6XG4gICAgICAgICAgICBpZiAoMCA9PT0gdGhpcy5nZXRBbmltYXRpb25zKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IFVJLnBhcmVudEVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLnBhcmVudCk7XG4gICAgICAgICAgICAgICAgdC5pbnNlcnRCZWZvcmUodGhpcy5lbGVtZW50LCB0aGlzLnNpYmxpbmcubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicHVpLW1vdmluZ1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVkID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLnNpYmxpbmcgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaW5kaW5ncy5mb3JFYWNoKCh0ID0+IHQudXBkYXRlTW92ZSgpKSk7XG4gICAgfVxuICAgIGdldEFuaW1hdGlvbnModCA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBbmltYXRpb25zKHtcbiAgICAgICAgICAgIHN1YnRyZWU6IHRcbiAgICAgICAgfSkuZmlsdGVyKCh0ID0+IFwiZmluaXNoZWRcIiAhPT0gdC5wbGF5U3RhdGUgJiYgdC5lZmZlY3Q/LmdldFRpbWluZygpLml0ZXJhdGlvbnMgIT09IDEgLyAwKSkubWFwKCh0ID0+IHQuZmluaXNoZWQpKTtcbiAgICB9XG59XG5cbmNsYXNzIFVJQmluZGluZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZnJvbVVJID0gZmFsc2U7XG4gICAgICAgIHRoaXMudG9VSSA9IHRydWU7XG4gICAgICAgIHRoaXMuYXRFdmVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uZVRpbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52aWV3cyA9IFtdO1xuICAgICAgICB0aGlzLmZpcnN0VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy50cmlnZ2VyQXRFdmVudCA9IHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudHMucHVzaCh0KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pZCA9ICsrVUkuaWQ7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICBpZiAobnVsbCA9PSB0aGlzLiRlbGVtZW50KSB0aGlzLiRlbGVtZW50ID0gXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHRoaXMuc2VsZWN0b3IgPyB0aGlzLmNvbnRleHQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKSA6IHRoaXMuc2VsZWN0b3I7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50O1xuICAgIH1cbiAgICBzZXQgZWxlbWVudCh0KSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSB0O1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKHQpIHtcbiAgICAgICAgY29uc3QgaSA9IG5ldyBVSUJpbmRpbmc7XG4gICAgICAgIGNvbnN0IGUgPSB0LnByb3BlcnR5Py5zcGxpdChcIjpcIikgPz8gW107XG4gICAgICAgIGNvbnN0IHMgPSBlLnNoaWZ0KCk7XG4gICAgICAgIGkub2JqZWN0ID0gXCIkbW9kZWxcIiBpbiB0Lm9iamVjdCA/IHQub2JqZWN0IDoge1xuICAgICAgICAgICAgJG1vZGVsOiB0Lm9iamVjdFxuICAgICAgICB9O1xuICAgICAgICBpLnByb3BlcnR5ID0gcztcbiAgICAgICAgaS5hcmd1bWVudHMgPSBlO1xuICAgICAgICBpLmNvbnRleHQgPSB0LmNvbnRleHQgPz8gZG9jdW1lbnQ7XG4gICAgICAgIGkuc2VsZWN0b3IgPSB0LnNlbGVjdG9yO1xuICAgICAgICBpLmF0dHJpYnV0ZSA9IHQuYXR0cmlidXRlID8/IFwiaW5uZXJUZXh0XCI7XG4gICAgICAgIGkudmFsdWUgPSB0LnZhbHVlID8/IGkudmFsdWU7XG4gICAgICAgIGkudGVtcGxhdGUgPSB0LnRlbXBsYXRlID8/IGkudGVtcGxhdGU7XG4gICAgICAgIGkuZnJvbVVJID0gdC5mcm9tVUkgPz8gaS5mcm9tVUk7XG4gICAgICAgIGkudG9VSSA9IHQudG9VSSA/PyBpLnRvVUk7XG4gICAgICAgIGkuYXRFdmVudCA9IHQuYXRFdmVudCA/PyBpLmF0RXZlbnQ7XG4gICAgICAgIGkub25lVGltZSA9IHQub25lVGltZSA/PyBpLm9uZVRpbWU7XG4gICAgICAgIGkucGFyZW50ID0gdC5wYXJlbnQgPz8gVUk7XG4gICAgICAgIGkuYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgaWYgKFwiYm9vbGVhblwiICE9PSB0eXBlb2YgaS5mcm9tVUkpIGkuZnJvbVVJID0gaS5mcm9tVUkuYmluZChpKTtcbiAgICAgICAgaWYgKFwiYm9vbGVhblwiICE9PSB0eXBlb2YgaS50b1VJKSBpLnRvVUkgPSBpLnRvVUkuYmluZChpKTtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy52aWV3cy5mb3JFYWNoKCh0ID0+IHQuZGVzdHJveSgpKSk7XG4gICAgfVxuICAgIHVuYmluZCgpIHtcbiAgICAgICAgVUkudW5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBhZGRMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYXRFdmVudCkge1xuICAgICAgICAgICAgdGhpcy50b1VJID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZyb21VSSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5hdHRyaWJ1dGUsIHRoaXMudHJpZ2dlckF0RXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5hdEV2ZW50KSB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmF0dHJpYnV0ZSwgdGhpcy50cmlnZ2VyQXRFdmVudCk7XG4gICAgfVxuICAgIHVwZGF0ZUZyb21VSSgpIHtcbiAgICAgICAgaWYgKGZhbHNlID09PSB0aGlzLmZyb21VSSB8fCB0aGlzLmZpcnN0VXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnZpZXdzLmZvckVhY2goKHQgPT4gdC51cGRhdGVGcm9tVUkoKSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHt0YXJnZXQ6IHQsIHByb3BlcnR5OiBpfSA9IFVJLnJlc29sdmVQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsIHRoaXMuYXR0cmlidXRlKTtcbiAgICAgICAgY29uc3QgZSA9IHRbaV07XG4gICAgICAgIGlmIChlICE9PSB0aGlzLmxhc3RVSVZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgdCA9IHRydWUgIT09IHRoaXMuZnJvbVVJID8gdGhpcy5mcm9tVUkoZSwgdGhpcy5sYXN0VUlWYWx1ZSwgdGhpcy5wcm9wZXJ0eSwgdGhpcy5vYmplY3QpIDogZTtcbiAgICAgICAgICAgIHRoaXMubGFzdFVJVmFsdWUgPSBlO1xuICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gdCAmJiB0ICE9PSB0aGlzLmxhc3RWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFZhbHVlID0gdDtcbiAgICAgICAgICAgICAgICBjb25zdCB7dGFyZ2V0OiBpLCBwcm9wZXJ0eTogZX0gPSBVSS5yZXNvbHZlUHJvcGVydHkodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIGlmIChcIm51bWJlclwiID09PSBVSS5yZXNvbHZlVmFsdWUodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpICYmICFpc05hTih0KSkgdCA9ICt0O1xuICAgICAgICAgICAgICAgIGlbZV0gPSB0O1xuICAgICAgICAgICAgfSBlbHNlIHRoaXMubGFzdFZhbHVlID0gdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXdzLmZvckVhY2goKHQgPT4gdC51cGRhdGVGcm9tVUkoKSkpO1xuICAgIH1cbiAgICB1cGRhdGVUb1VJKCkge1xuICAgICAgICBpZiAoZmFsc2UgPT09IHRoaXMudG9VSSkge1xuICAgICAgICAgICAgdGhpcy52aWV3cy5mb3JFYWNoKCh0ID0+IHQudXBkYXRlVG9VSSgpKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHQgPSBVSS5yZXNvbHZlVmFsdWUodGhpcy5vYmplY3QsIHRoaXMucHJvcGVydHkpO1xuICAgICAgICBsZXQgaSA9IGZhbHNlO1xuICAgICAgICBpZiAobnVsbCAhPSB0aGlzLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSBpZiAoXCJib29sZWFuXCIgPT09IHR5cGVvZiB0aGlzLmF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgIHQgPSBmYWxzZSA9PT0gKHQgPz8gZmFsc2UpID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0ICE9PSB0aGlzLmxhc3RWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gdHJ1ZSAhPT0gdGhpcy50b1VJID8gdGhpcy50b1VJKHQsIHRoaXMubGFzdFZhbHVlLCB0aGlzLnByb3BlcnR5LCB0aGlzLm9iamVjdCkgOiB0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBpICYmIGkgIT09IHRoaXMubGFzdFVJVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09PSB0aGlzLmF0dHJpYnV0ZSkgdGhpcy52aWV3cy5wdXNoKFVJVmlldy5jcmVhdGUodGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQsIHRoaXMudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpLCB0aGlzLm9iamVjdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwYXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nOiB0aGlzLmVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMudmlld3MucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdD8uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VUlWYWx1ZSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChudWxsID09IHQpIHQgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gdGhpcy5hcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMubGFzdFZhbHVlID8/IFtdO1xuICAgICAgICAgICAgICAgIGlmICh0Lmxlbmd0aCAhPT0gcy5sZW5ndGgpIGkgPSB0cnVlOyBlbHNlIGZvciAobGV0IG4gPSAwLCBoID0gdC5sZW5ndGg7IG4gPCBoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGgsIHI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudWxsID09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSB0W25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgciA9IHNbbl07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gVUkucmVzb2x2ZVZhbHVlKHRbbl0gPz8ge30sIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgciA9IFVJLnJlc29sdmVWYWx1ZShzW25dID8/IHt9LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaCAhPT0gcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3cy5mb3JFYWNoKCh0ID0+IHQudXBkYXRlVG9VSSgpKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uZVRpbWUpIHRoaXMub25lVGltZURvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBuID0gdHJ1ZSAhPT0gdGhpcy50b1VJID8gdGhpcy50b1VJKHQsIHMsIHRoaXMucHJvcGVydHksIHRoaXMub2JqZWN0KSA6IHQ7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgPT0gbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdzLmZvckVhY2goKHQgPT4gdC51cGRhdGVUb1VJKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub25lVGltZSkgdGhpcy5vbmVUaW1lRG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGggPSB0aGlzLmxhc3RVSVZhbHVlID8/IFtdO1xuICAgICAgICAgICAgICAgIGxldCByID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMCwgaSA9IG4ubGVuZ3RoLCBzID0gMDsgdCA8IGk7IHQrKywgcysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpLCBsO1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gblt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBoW3NdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IFVJLnJlc29sdmVWYWx1ZShuW3RdID8/IHt9LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBVSS5yZXNvbHZlVmFsdWUoaFtzXSA/PyB7fSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGwpIHIrKzsgZWxzZSBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHIgPT09IG4ubGVuZ3RoICYmIG4ubGVuZ3RoID09PSBoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdzLmZvckVhY2goKHQgPT4gdC51cGRhdGVUb1VJKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub25lVGltZSkgdGhpcy5vbmVUaW1lRG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGwgPSB0aGlzLnZpZXdzLnNwbGljZSgwLCByKTtcbiAgICAgICAgICAgICAgICBsZXQgbyA9IGxbbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gciwgaSA9IG4ubGVuZ3RoLCBzID0gcjsgdCA8IGk7IHQrKywgcysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBuW3RdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiAhPT0gdHlwZW9mIGkpIGkuJGluZGV4ID0gdDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMudmlld3Muc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgPT0gcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMuYXR0cmlidXRlXTogaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhcmVudDogdGhpcy5vYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlID0gVUlWaWV3LmNyZWF0ZSh0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudCwgdGhpcy50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSksIHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGFyZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZzogbz8uZWxlbWVudCA/PyB0aGlzLmVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbC5wdXNoKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoID0gbnVsbCA9PSBlID8gaSA6IFVJLnJlc29sdmVWYWx1ZShpID8/IHt9LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IHM/Lm1vZGVsLiRtb2RlbFt0aGlzLmF0dHJpYnV0ZV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBudWxsID09IGUgPyByIDogVUkucmVzb2x2ZVZhbHVlKHIgPz8ge30sIGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaCA9PT0gYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbC5wdXNoKHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5tb3ZlKG8/LmVsZW1lbnQgPz8gdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuLnNsaWNlKHQpLm1hcCgodCA9PiBudWxsID09IGUgPyB0IDogVUkucmVzb2x2ZVZhbHVlKHQgPz8ge30sIGUpKSkuaW5jbHVkZXMoYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdzLnVuc2hpZnQocyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwLCBpID0gdGhpcy52aWV3cy5sZW5ndGg7IHQgPCBpOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzLnZpZXdzW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcyA9IGk/Lm1vZGVsLiRtb2RlbFt0aGlzLmF0dHJpYnV0ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuID0gbnVsbCA9PSBlID8gcyA6IFVJLnJlc29sdmVWYWx1ZShzID8/IHt9LCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoID09PSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5wdXNoKC4uLnRoaXMudmlld3Muc3BsaWNlKHQsIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLm1vdmUobz8uZWxlbWVudCA/PyB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMuYXR0cmlidXRlXTogaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhcmVudDogdGhpcy5vYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlID0gVUlWaWV3LmNyZWF0ZSh0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudCwgdGhpcy50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSksIHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGFyZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZzogbz8uZWxlbWVudCA/PyB0aGlzLmVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbC5wdXNoKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3cy5mb3JFYWNoKCh0ID0+IHQuZGVzdHJveSgpKSk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3cyA9IGw7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSBbIC4uLnQgXTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RVSVZhbHVlID0gWyAuLi5uIF07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bGwgPT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBVSS5yZXNvbHZlVmFsdWUodGhpcy5vYmplY3QsIHRoaXMuYXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gaS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gbnVsbCA9PSB0ID8gaSA6IGkuY3JlYXRlKHQpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0ID8/IGk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3cy5wdXNoKFVJLmNyZWF0ZSh0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudCwgZSwgcywge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHByZXBhcmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmc6IHRoaXMuZWxlbWVudFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0ICE9PSB0aGlzLmxhc3RWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRydWUgIT09IHRoaXMudG9VSSA/IHRoaXMudG9VSSh0LCB0aGlzLmxhc3RWYWx1ZSwgdGhpcy5wcm9wZXJ0eSwgdGhpcy5vYmplY3QpIDogdDtcbiAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGkgJiYgaSAhPT0gdGhpcy5sYXN0VUlWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHt0YXJnZXQ6IGUsIHByb3BlcnR5OiBzfSA9IFVJLnJlc29sdmVQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsIHRoaXMuYXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICBlW3NdID0gaTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RWYWx1ZSA9IHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VUlWYWx1ZSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3cy5mb3JFYWNoKCh0ID0+IHQudXBkYXRlVG9VSSgpKSk7XG4gICAgICAgIGlmICh0aGlzLm9uZVRpbWUpIHRoaXMub25lVGltZURvbmUoKTtcbiAgICB9XG4gICAgb25lVGltZURvbmUoKSB7XG4gICAgICAgIHRoaXMudG9VSSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyb21VSSA9IGZhbHNlO1xuICAgIH1cbiAgICB1cGRhdGVBdEV2ZW50cygpIHtcbiAgICAgICAgbGV0IHQgPSB0aGlzLmV2ZW50cy5zaGlmdCgpO1xuICAgICAgICB3aGlsZSAobnVsbCAhPSB0KSB7XG4gICAgICAgICAgICBjb25zdCBpID0gVUkucmVzb2x2ZVZhbHVlKHRoaXMub2JqZWN0LCB0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgICAgIGkodCwgdGhpcy5vYmplY3QuJG1vZGVsLCB0aGlzLmVsZW1lbnQsIHRoaXMuYXR0cmlidXRlLCB0aGlzLm9iamVjdCk7XG4gICAgICAgICAgICB0ID0gdGhpcy5ldmVudHMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXdzLmZvckVhY2goKHQgPT4gdC51cGRhdGVBdEV2ZW50cygpKSk7XG4gICAgfVxuICAgIHVwZGF0ZU1vdmUoKSB7XG4gICAgICAgIHRoaXMudmlld3MuZm9yRWFjaCgodCA9PiB0LnVwZGF0ZU1vdmUoKSkpO1xuICAgIH1cbn1cblxuY2xhc3MgVUkge1xuICAgIHN0YXRpYyBpbml0aWFsaXplKHQgPSB0cnVlKSB7XG4gICAgICAgIFVJLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGZhbHNlID09PSB0KSByZXR1cm47XG4gICAgICAgIGlmICh0cnVlID09PSB0KSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIFVJLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0SW50ZXJ2YWwoKCgpID0+IFVJLnVwZGF0ZSgpKSwgMWUzIC8gdCk7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUodCwgaSwgZSA9IHt9LCBzID0ge1xuICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgIHByZXBhcmU6IHRydWUsXG4gICAgICAgIHNpYmxpbmc6IG51bGxcbiAgICB9KSB7XG4gICAgICAgIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgaSkge1xuICAgICAgICAgICAgY29uc3QgZSA9IHQ/Lm93bmVyRG9jdW1lbnQgPz8gZG9jdW1lbnQ7XG4gICAgICAgICAgICBpZiAoaS5zdGFydHNXaXRoKFwiI1wiKSkgaSA9IGUucXVlcnlTZWxlY3RvcihpKS5pbm5lckhUTUw7XG4gICAgICAgICAgICBjb25zdCBuID0gZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbi5pbm5lckhUTUwgPSBzLnByZXBhcmUgPyBVSS5wcmVwYXJlKGkpIDogaTtcbiAgICAgICAgICAgIGkgPSBuLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG4gPSBVSVZpZXcuY3JlYXRlKHQsIGksIGUsIHMpO1xuICAgICAgICBpZiAobi5wYXJlbnQgPT09IFVJKSBVSS52aWV3cy5wdXNoKG4pO1xuICAgICAgICBpZiAoIVVJLmluaXRpYWxpemVkKSBVSS5pbml0aWFsaXplKCk7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBzdGF0aWMgcGxheSh0LCBpKSB7XG4gICAgICAgIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgdCkge1xuICAgICAgICAgICAgdCA9IHRoaXMuZ2xvYmFscy5hbmltYXRpb25zLmZpbmQoKGkgPT4gaS5uYW1lID09PSB0KSkuY2xvbmUoKTtcbiAgICAgICAgICAgIHJldHVybiB0LnBsYXkoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQucGxheSgpO1xuICAgIH1cbiAgICBzdGF0aWMgcGFyc2UodCwgaSwgZSwgcykge1xuICAgICAgICBjb25zdCBuID0gW107XG4gICAgICAgIGlmICgzID09PSB0Lm5vZGVUeXBlKSB7XG4gICAgICAgICAgICBsZXQgaCA9IHQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBsZXQgciA9IGgubWF0Y2goVUkucmVnZXhWYWx1ZSk7XG4gICAgICAgICAgICB3aGlsZSAobnVsbCAhPSByKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbCA9IHJbMV07XG4gICAgICAgICAgICAgICAgbGV0IG8gPSByWzJdO1xuICAgICAgICAgICAgICAgIGggPSByWzNdO1xuICAgICAgICAgICAgICAgIGxldCBhID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKG8uc3RhcnRzV2l0aChcInxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG8gPSBvLnNsaWNlKDEpLnRyaW1TdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdSA9IHQuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICAgICAgdC50ZXh0Q29udGVudCA9IGw7XG4gICAgICAgICAgICAgICAgVUkucGFyZW50RWxlbWVudCh0LCBzKS5pbnNlcnRCZWZvcmUodSwgdC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgbi5wdXNoKFVJLmJpbmQoe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogdSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiBcInRleHRDb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogaSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IG8sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogZSxcbiAgICAgICAgICAgICAgICAgICAgb25lVGltZTogYVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB0ID0gdTtcbiAgICAgICAgICAgICAgICB1ID0gdC5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgICAgICB1LnRleHRDb250ZW50ID0gaDtcbiAgICAgICAgICAgICAgICBVSS5wYXJlbnRFbGVtZW50KHQsIHMpLmluc2VydEJlZm9yZSh1LCB0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICB0ID0gdTtcbiAgICAgICAgICAgICAgICByID0gaC5tYXRjaChVSS5yZWdleFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG4ucHVzaCguLi5PYmplY3Qua2V5cyh0LmF0dHJpYnV0ZXMgPz8gW10pLnJldmVyc2UoKS5tYXAoKG4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGggPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIENvbW1lbnQpIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gdC5hdHRyaWJ1dGVzW25dO1xuICAgICAgICAgICAgICAgIGlmIChyLm5hbWUuc3RhcnRzV2l0aChcInB1aS5cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbiA9IHIudmFsdWUubWF0Y2goVUkucmVnZXhBdHRyaWJ1dGUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgW2gsIGwsIG8sIGEsIHVdID0gbjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGY7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjO1xuICAgICAgICAgICAgICAgICAgICBsZXQgVSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJAXCIgIT09IG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBsLm1hdGNoKC9eJyguKj8pJyQvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmID0gZVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBcIm9wdGlvblwiID09PSB0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPyBcInNlbGVjdGVkXCIgOiBcImNoZWNrZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gdCA9PiB0ID8gZiA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gdCA9PiB0ID09PSBmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIlwiID09PSBsKSBpZiAoXCI+XCIgPT09IGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7dGFyZ2V0OiBlLCBwcm9wZXJ0eTogc30gPSBVSS5yZXNvbHZlUHJvcGVydHkoaSwgdSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZVtzXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChyLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJLnBhcmVudE5vZGUodCwgcykuaW5zZXJ0QmVmb3JlKGksIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJLnBhcmVudE5vZGUodCwgcykucmVtb3ZlQ2hpbGQodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5yZW1vdmVBdHRyaWJ1dGUoci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gXCI9XCIgPT09IG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwifFwiID09PSBhKSBVID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXCI9XCIgPT09IGEgJiYgXCI9XCIgPT09IG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gVUkucGFyZW50Tm9kZSh0LCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoOCAhPT0gaS5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChyLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmluc2VydEJlZm9yZShlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5yZW1vdmVDaGlsZCh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5yZW1vdmVBdHRyaWJ1dGUoci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIipcIiA9PT0gYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHIubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVUkucGFyZW50Tm9kZSh0LCBzKS5pbnNlcnRCZWZvcmUoaSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVUkucGFyZW50Tm9kZSh0LCBzKS5yZW1vdmVDaGlsZCh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnJlbW92ZUF0dHJpYnV0ZShyLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcInxcIiA9PT0gYSkgVSA9IHRydWU7IGVsc2UgaWYgKFwiY2hlY2tlZFwiICE9PSBsKSB0LnNldEF0dHJpYnV0ZShsLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWyBVSS5iaW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiBsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGYsXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogdSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9VSTogXCJzdHJpbmdcIiA9PT0gdHlwZW9mIG8gPyBcIjxcIiA9PT0gbyA6IG8sXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tVUk6IFwic3RyaW5nXCIgPT09IHR5cGVvZiBhID8gXCI+XCIgPT09IGEgOiBhLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXRFdmVudDogXCJAXCIgPT09IG8sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmVUaW1lOiBVXG4gICAgICAgICAgICAgICAgICAgIH0pIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGwgPSBbIHIudmFsdWUgXTtcbiAgICAgICAgICAgICAgICBsZXQgbyA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IGEgPSBsW29dLm1hdGNoKFVJLnJlZ2V4VmFsdWUpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChudWxsICE9IGEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHtiZWZvcmU6IHMsIHByb3BlcnR5OiBuLCBhZnRlcjogdX0gPSBhLmdyb3VwcztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGYgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uc3RhcnRzV2l0aChcInxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbiA9IG4uc2xpY2UoMSkudHJpbVN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaC5wdXNoKFVJLmJpbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IHIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdDogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25lVGltZTogZixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvVUkoaSwgZSwgcywgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGwuaW5kZXhPZihzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbFt0XSA9IFVJLnJlc29sdmVWYWx1ZShuLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxbdCAtIDFdICs9IGxbdF0gKyBsW3QgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwuc3BsaWNlKHQsIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGggPSBsLm1hcCgoKHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgJSAyID09PSAwKSByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFVJLnJlc29sdmVWYWx1ZShuLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnNldEF0dHJpYnV0ZShyLm5hbWUsIGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogZVxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIGxbbysrXSA9IHM7XG4gICAgICAgICAgICAgICAgICAgIGxbbysrXSA9IG47XG4gICAgICAgICAgICAgICAgICAgIGxbb10gPSB1O1xuICAgICAgICAgICAgICAgICAgICBhID0gbFtvXS5tYXRjaChVSS5yZWdleFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgICAgICB9KSkuZmxhdCgpKTtcbiAgICAgICAgICAgIGlmICh0IGluc3RhbmNlb2YgQ29tbWVudCkgcmV0dXJuIG4uZmlsdGVyKCh0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCAhPSB0LnRlbXBsYXRlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0LnVuYmluZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGlmICghVUkubGVhdmVBdHRyaWJ1dGVzKSBmb3IgKGxldCBpID0gT2JqZWN0LmtleXModC5hdHRyaWJ1dGVzID8/IFtdKS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSB0LmF0dHJpYnV0ZXNbT2JqZWN0LmtleXModC5hdHRyaWJ1dGVzID8/IFtdKVtpXV07XG4gICAgICAgICAgICAgICAgaWYgKGUubmFtZS5zdGFydHNXaXRoKFwicHVpLlwiKSkgdC5yZW1vdmVBdHRyaWJ1dGUoZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG4ucHVzaCguLi5BcnJheS5mcm9tKHQuY2hpbGROb2RlcykubWFwKCh0ID0+IFVJLnBhcnNlKHQsIGksIGUsIHMpKSkuZmxhdCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgc3RhdGljIGJpbmQodCkge1xuICAgICAgICBjb25zdCBpID0gVUlCaW5kaW5nLmNyZWF0ZSh0KTtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIHN0YXRpYyB1bmJpbmQodCkge1xuICAgICAgICB0LmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHQucGFyZW50ICE9PSBVSSkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHQucGFyZW50LmJpbmRpbmdzO1xuICAgICAgICAgICAgY29uc3QgZSA9IGkuaW5kZXhPZih0KTtcbiAgICAgICAgICAgIGlmIChlID4gLTEpIGkuc3BsaWNlKGUsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMudmlld3MuZm9yRWFjaCgodCA9PiB0LnVwZGF0ZUZyb21VSSgpKSk7XG4gICAgICAgIHRoaXMudmlld3MuZm9yRWFjaCgodCA9PiB0LnVwZGF0ZVRvVUkoKSkpO1xuICAgICAgICB0aGlzLnZpZXdzLmZvckVhY2goKHQgPT4gdC51cGRhdGVBdEV2ZW50cygpKSk7XG4gICAgICAgIGNvbnN0IHQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgWyAuLi50aGlzLnZpZXdzLCB0aGlzLmdsb2JhbHMgXS5mb3JFYWNoKChpID0+IGkudXBkYXRlQW5pbWF0aW9ucyh0KSkpO1xuICAgICAgICB0aGlzLnZpZXdzLmZvckVhY2goKHQgPT4ge1xuICAgICAgICAgICAgdC51cGRhdGVNb3ZlKCk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQuZm9yRWFjaCgodCA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHQuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJxdWV1ZVwiOlxuICAgICAgICAgICAgICAgIGlmIChcInJlbmRlcmVkXCIgPT09IHQuc3RhdGUpIHQuZGVzdHJveWVkID0gXCJkZXN0cm95XCI7IGVsc2UgdC51cGRhdGVUb1VJKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSBcImRlc3Ryb3lcIjpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHQudGVybWluYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzLmRlc3Ryb3llZC5maW5kSW5kZXgoKGkgPT4gdCA9PT0gaSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IC0xKSB0aGlzLmRlc3Ryb3llZC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIHN0YXRpYyByZXNvbHZlUHJvcGVydHkodCwgaSkge1xuICAgICAgICBpID0gaS5yZXBsYWNlKFwiW1wiLCBcIi5cIikucmVwbGFjZShcIl1cIiwgXCIuXCIpO1xuICAgICAgICBjb25zdCBlID0gaS5zcGxpdChcIi5cIikuZmlsdGVyKCh0ID0+ICh0ID8/IFwiXCIpLmxlbmd0aCA+IDApKTtcbiAgICAgICAgd2hpbGUgKFwiJHBhcmVudFwiID09PSBlWzBdICYmIG51bGwgIT0gdC4kcGFyZW50KSB7XG4gICAgICAgICAgICB0ID0gdC4kcGFyZW50O1xuICAgICAgICAgICAgZS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzID0gXCIkbW9kZWxcIiBpbiB0ID8gdC4kbW9kZWwgOiB0O1xuICAgICAgICB3aGlsZSAoZS5sZW5ndGggPiAxKSBzID0gc1tlLnNoaWZ0KCldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFyZ2V0OiBzLFxuICAgICAgICAgICAgcHJvcGVydHk6IGVbMF1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIHJlc29sdmVWYWx1ZSh0LCBpKSB7XG4gICAgICAgIGxldCBlID0gMDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3Qge3RhcmdldDogZSwgcHJvcGVydHk6IHN9ID0gVUkucmVzb2x2ZVByb3BlcnR5KHQsIGkpO1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gZSAmJiBzIGluIGUpIHJldHVybiBlW3NdO1xuICAgICAgICAgICAgdCA9IHQuJHBhcmVudDtcbiAgICAgICAgfSB3aGlsZSAobnVsbCAhPSB0ICYmIGUrKyA8IDFlMyk7XG4gICAgfVxuICAgIHN0YXRpYyBwYXJlbnRFbGVtZW50KHQsIGkpIHtcbiAgICAgICAgY29uc3QgZSA9IHQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKG51bGwgIT0gZSkgcmV0dXJuIGU7XG4gICAgICAgIHdoaWxlIChudWxsICE9IGkgJiYgKG51bGwgPT0gaS5lbGVtZW50IHx8IGkuZWxlbWVudCA9PT0gdCkpIGkgPSBpLnBhcmVudDtcbiAgICAgICAgcmV0dXJuIGk/LmVsZW1lbnQ7XG4gICAgfVxuICAgIHN0YXRpYyBwYXJlbnROb2RlKHQsIGkpIHtcbiAgICAgICAgY29uc3QgZSA9IHQucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKG51bGwgIT0gZSkgcmV0dXJuIGU7XG4gICAgICAgIHdoaWxlIChudWxsICE9IGkgJiYgKG51bGwgPT0gaS5lbGVtZW50IHx8IGkuZWxlbWVudCA9PT0gdCkpIGkgPSBpLnBhcmVudDtcbiAgICAgICAgcmV0dXJuIGk/LmVsZW1lbnQ7XG4gICAgfVxuICAgIHN0YXRpYyBwcmVwYXJlKHQpIHtcbiAgICAgICAgbGV0IGkgPSB0O1xuICAgICAgICB0ID0gXCJcIjtcbiAgICAgICAgbGV0IGUgPSBpLm1hdGNoKFVJLnJlZ2V4UmVwbGFjZSk7XG4gICAgICAgIHdoaWxlIChudWxsICE9IGUpIHtcbiAgICAgICAgICAgIGNvbnN0IFtzLCBuLCBoLCByXSA9IGU7XG4gICAgICAgICAgICBpZiAoaC5tYXRjaCgvXFxTXFxzKj09PS8pKSB0ICs9IGAke24udHJpbUVuZCgpfWJyIFBVSS1VTlJFTkRFUkVEIFBVSS4ke1VJLmJpbmRpbmdDb3VudGVyKyt9PVwiJHtofVwiYDsgZWxzZSB0ICs9IGAke259IFBVSS4ke1VJLmJpbmRpbmdDb3VudGVyKyt9PVwiJHtofVwiIGA7XG4gICAgICAgICAgICBpID0gcjtcbiAgICAgICAgICAgIGUgPSBpLm1hdGNoKFVJLnJlZ2V4UmVwbGFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgdCArPSBpO1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG59XG5cblVJLmluaXRpYWxpemVkID0gZmFsc2U7XG5cblVJLmlkID0gMDtcblxuVUkudmlld3MgPSBbXTtcblxuVUkuZGVzdHJveWVkID0gW107XG5cblVJLmdsb2JhbHMgPSBuZXcgVUlWaWV3O1xuXG5VSS5sZWF2ZUF0dHJpYnV0ZXMgPSBmYWxzZTtcblxuVUkucmVnZXhSZXBsYWNlID0gLyhbXFxTXFxzXSo/KVxcJFxceyhbXn1dKj9bPD1AIV09Wyo9PnxdW159XSo/KVxcfShbXFxTXFxzXSopL207XG5cblVJLnJlZ2V4QXR0cmlidXRlID0gL15cXHMqKFxcUyo/KVxccyooWzw9QCFdKT0oWyo9PnxdKVxccyooXFxTKj8pXFxzKiQvO1xuXG5VSS5yZWdleFZhbHVlID0gLyg/PGJlZm9yZT5bXFxTXFxzXSo/KVxcJFxce1xccyooPzxwcm9wZXJ0eT5bXFxzXFxTXSo/KVxccypcXH0oPzxhZnRlcj5bXFxTXFxzXSopL207XG5cblVJLmJpbmRpbmdDb3VudGVyID0gMDtcblxuZXhwb3J0IHsgVUksIFVJVmlldyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgUGh5c2ljcywgVmVjdG9yLCBTdGFkaXVtLCBDaXJjbGUsIEVudGl0eSBhcyBQaHlzaWNzRW50aXR5LCBJbnRlcnNlY3Rpb24gfSBmcm9tIFwiQHBlYXN5LWxpYi9wZWFzeS1waHlzaWNzXCI7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSBcIkBwZWFzeS1saWIvcGVhc3ktdWlcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQHBlYXN5LWxpYi9wZWFzeS1pbnB1dFwiO1xyXG5pbXBvcnQgeyBIb3dsIH0gZnJvbSBcImhvd2xlclwiO1xyXG5pbXBvcnQgYm9pbmcgZnJvbSBcIi4vYXNzZXRzL2JvaW5nLm1wM1wiO1xyXG5cclxudmFyIHNvdW5kID0gbmV3IEhvd2woe1xyXG4gIHNyYzogYm9pbmcsXHJcbiAgc3ByaXRlOiB7XHJcbiAgICBib3VuY2U6IFswLCAxMDAwXSxcclxuICB9LFxyXG59KTtcclxuXHJcbi8vc291bmQucGxheShcImJvdW5jZVwiKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8vUEVBU1ktVUlcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuY29uc3QgdGVtcGxhdGUgPSBgXHJcbjxkaXYgY2xhc3M9XCJnYW1lXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBsYXllclwiIFxcJHsgPT0+IHBsYXllci5lbGVtZW50fSBzdHlsZT1cInRyYW5zbGF0ZTogXFwke3BsYXllci5wb3NpdGlvbi54fXB4IFxcJHtwbGF5ZXIucG9zaXRpb24ueX1weDsgbGVmdDogLTI1cHg7IHRvcDogLTI1cHg7IHJvdGF0ZTogXFwke3BsYXllci5hbmdsZX1kZWc7XCI+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFzdGVyb2lkXCIgXFwkeyA9PT4gYXN0ZXJvaWQuZWxlbWVudH0gc3R5bGU9XCJ0cmFuc2xhdGU6IFxcJHthc3Rlcm9pZC5wb3NpdGlvbi54fXB4IFxcJHthc3Rlcm9pZC5wb3NpdGlvbi55fXB4OyBsZWZ0OiAtNDBweDsgdG9wOiAtNDBweDtcIj48L2Rpdj5cclxuICA8Y2FudmFzIFxcJHsgPT0+IGNhbnZhc30+PC9jYW52YXM+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3QgVEhSVVNURk9SQ0UgPSAyMDtcclxuXHJcbmNvbnN0IG1vZGVsID0ge1xyXG4gIGNhbnZhczogPEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbD5udWxsLFxyXG4gIHBsYXllcjoge1xyXG4gICAgZWxlbWVudDogPGFueT5udWxsLFxyXG4gICAgcG9zaXRpb246IHsgeDogNTAsIHk6IDUwIH0sXHJcbiAgICBhbmdsZTogMCxcclxuICB9LFxyXG4gIGFzdGVyb2lkOiB7XHJcbiAgICBlbGVtZW50OiA8YW55Pm51bGwsXHJcbiAgICBwb3NpdGlvbjogeyB4OiAxMjAsIHk6IDUwIH0sXHJcbiAgfSxcclxufTtcclxuVUkuY3JlYXRlKGRvY3VtZW50LmJvZHksIHRlbXBsYXRlLCBtb2RlbCk7XHJcblVJLmluaXRpYWxpemUoZmFsc2UpO1xyXG5cclxubGV0IHNjcmVlbldpZHRoOiBudW1iZXI7XHJcbmxldCBzY3JlZW5IZWlnaHQ6IG51bWJlcjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbW9kZWwuY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHdpbmRvdy5pbm5lcldpZHRoLnRvU3RyaW5nKCkpO1xyXG4gIG1vZGVsLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgd2luZG93LmlubmVySGVpZ2h0LnRvU3RyaW5nKCkpO1xyXG4gIHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICBtb2RlbC5jYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2luZG93LmlubmVyV2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgbW9kZWwuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCB3aW5kb3cuaW5uZXJIZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLy9QRUFTWS1QaHlzaWNzXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmNvbnN0IHBsYXllclNoYXBlID0ge1xyXG4gIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcclxuICByYWRpdXM6IDxhbnk+dW5kZWZpbmVkLFxyXG4gIHNpemU6IDxhbnk+dW5kZWZpbmVkLFxyXG4gIGFsaWdubWVudDogPGFueT51bmRlZmluZWQsXHJcbn07XHJcbnBsYXllclNoYXBlLnNpemUgPSBuZXcgVmVjdG9yKDUwLCA1MCk7XHJcblxyXG5jb25zdCBhc3Rlcm9pZFNoYXBlID0ge1xyXG4gIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcclxuICByYWRpdXM6IDxhbnk+dW5kZWZpbmVkLFxyXG4gIHNpemU6IDxhbnk+dW5kZWZpbmVkLFxyXG4gIGFsaWdubWVudDogPGFueT51bmRlZmluZWQsXHJcbn07XHJcbmFzdGVyb2lkU2hhcGUucmFkaXVzID0gNDA7XHJcblxyXG5jbGFzcyBFbnRpdHkge1xyXG4gIHB1YmxpYyBzaGFwZXMgPSA8YW55PltdO1xyXG4gIHB1YmxpYyBmb3JjZXMgPSA8YW55PltdO1xyXG4gIHB1YmxpYyBtYXNzOiBudW1iZXIgPSAxO1xyXG4gIHB1YmxpYyBjb2xvcj8gPSBcIlwiO1xyXG4gIHB1YmxpYyBtYXhTcGVlZD86IGFueTtcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHBvc2l0aW9uOiBWZWN0b3IsIHB1YmxpYyBvcmllbnRhdGlvbiA9IDApIHt9XHJcbn1cclxuXHJcblBoeXNpY3MuaW5pdGlhbGl6ZSh7XHJcbiAgY3R4OiBtb2RlbC5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLFxyXG4gIHNob3dBcmVhczogdHJ1ZSxcclxufSk7XHJcblxyXG5sZXQgcGxheWVyID0gbmV3IEVudGl0eShuZXcgVmVjdG9yKDI1MCwgMjUwKSk7XHJcbnBsYXllci5zaGFwZXMgPSBbcGxheWVyU2hhcGVdO1xyXG5wbGF5ZXIuZm9yY2VzID0gW107XHJcbnBsYXllci5tYXhTcGVlZCA9IDUwMDtcclxucGxheWVyLmNvbG9yID0gXCJibHVlXCI7XHJcblxyXG5sZXQgYXN0ZXJvaWQgPSBuZXcgRW50aXR5KG5ldyBWZWN0b3IoNDUwLCA0NTApKTtcclxuYXN0ZXJvaWQuc2hhcGVzID0gW2FzdGVyb2lkU2hhcGVdO1xyXG5hc3Rlcm9pZC5mb3JjZXMgPSBbXTtcclxuYXN0ZXJvaWQubWF4U3BlZWQgPSA1MDA7XHJcbmFzdGVyb2lkLmNvbG9yID0gXCJyZWRcIjtcclxuXHJcbmxldCBlbnRpdGllcyA9IFBoeXNpY3MuYWRkRW50aXRpZXMoW3BsYXllciwgYXN0ZXJvaWRdKTtcclxucGxheWVyID0gZW50aXRpZXNbMF07XHJcbmVudGl0aWVzWzBdLmNvbGxpZGluZyA9IGZ1bmN0aW9uIChlbnRpdHk6IFBoeXNpY3NFbnRpdHksIGludGVyc2VjdGlvbjogSW50ZXJzZWN0aW9uKTogc3RyaW5nIHtcclxuICBjb25zb2xlLmxvZyhcImNvbGxpc2lvbjogXCIsIGVudGl0eSk7XHJcbiAgc291bmQucGxheShcImJvdW5jZVwiKTtcclxuICByZXR1cm4gXCJjb2xsaWRlXCI7XHJcbn07XHJcbmFzdGVyb2lkID0gZW50aXRpZXNbMV07XHJcbnBsYXllci5tYXNzID0gMztcclxuYXN0ZXJvaWQubWFzcyA9IDEwO1xyXG5cclxuY29uc3QgYW5nMlJhZCA9IChhOiBudW1iZXIpOiBudW1iZXIgPT4ge1xyXG4gIHJldHVybiBhICogKE1hdGguUEkgLyAxODApO1xyXG59O1xyXG5cclxuY29uc3QgdGhydXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRlbXBYID0gVEhSVVNURk9SQ0UgKiBNYXRoLmNvcyhhbmcyUmFkKFBoeXNpY3MuZW50aXRpZXNbMF0ub3JpZW50YXRpb24pKTtcclxuICBjb25zdCB0ZW1wWSA9IFRIUlVTVEZPUkNFICogTWF0aC5zaW4oYW5nMlJhZChQaHlzaWNzLmVudGl0aWVzWzBdLm9yaWVudGF0aW9uKSk7XHJcbiAgY29uc3QgZGlyID0gbmV3IFZlY3Rvcih0ZW1wWCwgdGVtcFkpO1xyXG5cclxuICBQaHlzaWNzLmVudGl0aWVzWzBdLmFkZEZvcmNlKHtcclxuICAgIG5hbWU6IFwidGhydXN0XCIsXHJcbiAgICBkaXJlY3Rpb246IGRpcixcclxuICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgbWFnbml0dWRlOiA1MDAsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCByZXZlcnNlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRBbmdsZSA9IFBoeXNpY3MuZW50aXRpZXNbMF0ub3JpZW50YXRpb247XHJcbiAgbGV0IHJldmVyc2VBbmdsZSA9IGN1cnJlbnRBbmdsZSArIDE4MDtcclxuXHJcbiAgY29uc3QgdGVtcFggPSBUSFJVU1RGT1JDRSAqIE1hdGguY29zKGFuZzJSYWQocmV2ZXJzZUFuZ2xlKSk7XHJcbiAgY29uc3QgdGVtcFkgPSBUSFJVU1RGT1JDRSAqIE1hdGguc2luKGFuZzJSYWQocmV2ZXJzZUFuZ2xlKSk7XHJcbiAgY29uc3QgZGlyID0gbmV3IFZlY3Rvcih0ZW1wWCwgdGVtcFkpO1xyXG5cclxuICBQaHlzaWNzLmVudGl0aWVzWzBdLmFkZEZvcmNlKHtcclxuICAgIG5hbWU6IFwicmV2ZXJzZVwiLFxyXG4gICAgZGlyZWN0aW9uOiBkaXIsXHJcbiAgICBkdXJhdGlvbjogMCxcclxuICAgIG1hZ25pdHVkZTogNTAwLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdHVybkxlZnQgPSAoKSA9PiB7XHJcbiAgUGh5c2ljcy5lbnRpdGllc1swXS5vcmllbnRhdGlvbiArPSAtMztcclxuICBjb25zb2xlLmxvZyhcInR1cm4gTFwiKTtcclxufTtcclxuXHJcbmNvbnN0IHR1cm5SaWdodCA9ICgpID0+IHtcclxuICBQaHlzaWNzLmVudGl0aWVzWzBdLm9yaWVudGF0aW9uICs9IDM7XHJcbiAgY29uc29sZS5sb2coXCJ0dXJuIFJcIik7XHJcbn07XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLy8gUGVhc3ktSW5wdXRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5jb25zdCBtYXBwaW5nID0gSW5wdXQubWFwKHtcclxuICBBcnJvd1VwOiBcInRocnVzdFwiLFxyXG4gIEFycm93RG93bjogXCJyZXZlcnNlXCIsXHJcbiAgQXJyb3dMZWZ0OiBcInR1cm5MXCIsXHJcbiAgQXJyb3dSaWdodDogXCJ0dXJuUlwiLFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiAgU2NyZWVuIENvbGxpc2lvbiBNYW5hZ2VtZW50XHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmNvbnN0IHBsYXllclNjcmVlbkNvbGxpc2lvbiA9ICgpID0+IHtcclxuICAvL2NoZWNrIGZvciBzY3JlZW4gY29sbGlzaW9uXHJcbiAgaWYgKG1vZGVsLnBsYXllci5wb3NpdGlvbi54ID4gc2NyZWVuV2lkdGgpIHtcclxuICAgIFBoeXNpY3MuZW50aXRpZXNbMF0ucG9zaXRpb24ueCA9IC0xMDtcclxuICAgIG1vZGVsLnBsYXllci5wb3NpdGlvbi54ID0gLTEwO1xyXG4gIH1cclxuICBpZiAobW9kZWwucGxheWVyLnBvc2l0aW9uLnggPCAtMjUpIHtcclxuICAgIFBoeXNpY3MuZW50aXRpZXNbMF0ucG9zaXRpb24ueCA9IHNjcmVlbldpZHRoO1xyXG4gICAgbW9kZWwucGxheWVyLnBvc2l0aW9uLnggPSBzY3JlZW5XaWR0aDtcclxuICB9XHJcbiAgaWYgKG1vZGVsLnBsYXllci5wb3NpdGlvbi55ID4gc2NyZWVuSGVpZ2h0KSB7XHJcbiAgICBQaHlzaWNzLmVudGl0aWVzWzBdLnBvc2l0aW9uLnkgPSAtMTA7XHJcbiAgICBtb2RlbC5wbGF5ZXIucG9zaXRpb24ueSA9IC0xMDtcclxuICB9XHJcbiAgaWYgKG1vZGVsLnBsYXllci5wb3NpdGlvbi55IDwgLTI1KSB7XHJcbiAgICBQaHlzaWNzLmVudGl0aWVzWzBdLnBvc2l0aW9uLnkgPSBzY3JlZW5IZWlnaHQ7XHJcbiAgICBtb2RlbC5wbGF5ZXIucG9zaXRpb24ueSA9IHNjcmVlbkhlaWdodDtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBhc3Rlcm9pZFNjcmVlbkNvbGxpc2lvbiA9ICgpID0+IHtcclxuICAvL2NoZWNrIGZvciBzY3JlZW4gY29sbGlzaW9uXHJcbiAgaWYgKG1vZGVsLmFzdGVyb2lkLnBvc2l0aW9uLnggPiBzY3JlZW5XaWR0aCkge1xyXG4gICAgUGh5c2ljcy5lbnRpdGllc1sxXS5wb3NpdGlvbi54ID0gLTEwO1xyXG4gICAgbW9kZWwuYXN0ZXJvaWQucG9zaXRpb24ueCA9IC0xMDtcclxuICB9XHJcbiAgaWYgKG1vZGVsLmFzdGVyb2lkLnBvc2l0aW9uLnggPCAtMjUpIHtcclxuICAgIFBoeXNpY3MuZW50aXRpZXNbMV0ucG9zaXRpb24ueCA9IHNjcmVlbldpZHRoO1xyXG4gICAgbW9kZWwuYXN0ZXJvaWQucG9zaXRpb24ueCA9IHNjcmVlbldpZHRoO1xyXG4gIH1cclxuICBpZiAobW9kZWwuYXN0ZXJvaWQucG9zaXRpb24ueSA+IHNjcmVlbkhlaWdodCkge1xyXG4gICAgUGh5c2ljcy5lbnRpdGllc1sxXS5wb3NpdGlvbi55ID0gLTEwO1xyXG4gICAgbW9kZWwuYXN0ZXJvaWQucG9zaXRpb24ueSA9IC0xMDtcclxuICB9XHJcbiAgaWYgKG1vZGVsLmFzdGVyb2lkLnBvc2l0aW9uLnkgPCAtMjUpIHtcclxuICAgIFBoeXNpY3MuZW50aXRpZXNbMV0ucG9zaXRpb24ueSA9IHNjcmVlbkhlaWdodDtcclxuICAgIG1vZGVsLmFzdGVyb2lkLnBvc2l0aW9uLnkgPSBzY3JlZW5IZWlnaHQ7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLy9HYW1lIExvb3BcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxubGV0IHN0YXJ0aW1lOiBudW1iZXIsIGxhc3R0aW1lOiBudW1iZXI7XHJcblxyXG5jb25zdCBnYW1lX2xvb3AgPSAodGltZXN0YW1wOiBudW1iZXIpID0+IHtcclxuICBpZiAoc3RhcnRpbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBzdGFydGltZSA9IHRpbWVzdGFtcDtcclxuICAgIGxhc3R0aW1lID0gdGltZXN0YW1wO1xyXG4gIH1cclxuICBsZXQgZGVsdGFUaW1lID0gKHRpbWVzdGFtcCAtIGxhc3R0aW1lKSAvIDEwMDA7XHJcbiAgaWYgKGRlbHRhVGltZSA+IDEuNSkge1xyXG4gICAgZGVsdGFUaW1lID0gMDtcclxuICAgIGxhc3R0aW1lID0gdGltZXN0YW1wO1xyXG4gIH1cclxuXHJcbiAgLy9jaGVjayBpbnB1dHNcclxuICBpZiAoSW5wdXQuaXMoXCJ0aHJ1c3RcIikpIHRocnVzdCgpO1xyXG4gIGlmIChJbnB1dC5pcyhcInJldmVyc2VcIikpIHJldmVyc2UoKTtcclxuICBpZiAoSW5wdXQuaXMoXCJ0dXJuTFwiKSkgdHVybkxlZnQoKTtcclxuICBpZiAoSW5wdXQuaXMoXCJ0dXJuUlwiKSkgdHVyblJpZ2h0KCk7XHJcblxyXG4gIFBoeXNpY3MudXBkYXRlKGRlbHRhVGltZSwgdGltZXN0YW1wKTtcclxuICBtb2RlbC5wbGF5ZXIucG9zaXRpb24gPSBQaHlzaWNzLmVudGl0aWVzWzBdLnBvc2l0aW9uO1xyXG4gIG1vZGVsLnBsYXllci5hbmdsZSA9IFBoeXNpY3MuZW50aXRpZXNbMF0ub3JpZW50YXRpb247XHJcbiAgbW9kZWwuYXN0ZXJvaWQucG9zaXRpb24gPSBQaHlzaWNzLmVudGl0aWVzWzFdLnBvc2l0aW9uO1xyXG5cclxuICBwbGF5ZXJTY3JlZW5Db2xsaXNpb24oKTtcclxuICBhc3Rlcm9pZFNjcmVlbkNvbGxpc2lvbigpO1xyXG5cclxuICBVSS51cGRhdGUoKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZV9sb29wKTtcclxuICBsYXN0dGltZSA9IHRpbWVzdGFtcDtcclxufTtcclxuXHJcbnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lX2xvb3ApO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=