"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var overlayChars = function overlayChars() {
    var bottom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var bottomLeftEnd = offset,
        topEnd = offset > bottom.length ? 0 : bottom.length - offset,
        bottomRightStart = top.length + offset,
        bottomRightEnd = offset + top.length > bottom.length ? 0 : bottom.length;

    return bottom.slice(0, bottomLeftEnd) + top.slice(0, topEnd) + bottom.slice(bottomRightStart, bottomRightEnd);
};

exports.overlayChars = overlayChars;