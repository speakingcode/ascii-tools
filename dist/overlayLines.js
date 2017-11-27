"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.overlayLines = undefined;

var _overlayChars = require("./overlayChars");

var overlayLines = function overlayLines() {
  var bottom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var xOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var yOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  var bottomLines = bottom.split('\n'),
      topLines = top.split('\n'),
      newLines = [];

  for (var i = 0; i < bottomLines.length; i++) {
    if (i < yOffset || i > topLines.length + yOffset) newLines.push(bottomLines[i]);else newLines.push((0, _overlayChars.overlayChars)(bottomLines[i], topLines[i - yOffset], xOffset));
  }

  return newLines.join('\n');
};

exports.overlayLines = overlayLines;