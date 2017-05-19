

'use strict';

var RCTToastAndroid = require('NativeModules').ToastAndroid;

var ToastAndroid = {
  SHORT: RCTToastAndroid.SHORT,
  LONG: RCTToastAndroid.LONG,

  TOP: RCTToastAndroid.TOP,
  BOTTOM: RCTToastAndroid.BOTTOM,
  CENTER: RCTToastAndroid.CENTER,

  show: function show(message, duration) {
    RCTToastAndroid.show(message, duration);
  },

  showWithGravity: function showWithGravity(message, duration, gravity) {
    RCTToastAndroid.showWithGravity(message, duration, gravity);
  }
};

module.exports = ToastAndroid;