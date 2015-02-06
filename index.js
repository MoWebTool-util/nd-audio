/**
 * Description: index.js
 * Author: lzhengms <lzhengms@gmail.com>
 * Date: 2015-02-05 14:55:41
 */

'use strict';

var Class = require('nd-class');
var SwfAudio = require('./src/audio-swf');
var Html5Audio = require('./src/audio-html5');

var useFlash = (function () {
  var a = document.createElement('audio');
  return !(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, '')) || navigator.userAgent.indexOf('Chromium') !== -1;
})();

var compatibleAudio = Class.create({
  Extends: useFlash ? SwfAudio : Html5Audio
});

compatibleAudio.isSupportHTML5Audio = !useFlash;

module.exports = compatibleAudio;

