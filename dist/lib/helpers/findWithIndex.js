"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findWithIndex(arr, predicate) {
    for (var i = 0; i < arr.length; i++) {
        var elem = arr[i];
        if (predicate(elem, i)) {
            return { index: i, item: elem };
        }
    }
    return { index: -1, item: null };
}
exports.default = findWithIndex;
