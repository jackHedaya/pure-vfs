"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var DirectoryItem = /** @class */ (function () {
    function DirectoryItem(name) {
        this.name = name;
    }
    Object.defineProperty(DirectoryItem.prototype, "path", {
        get: function () {
            return path_1.default.join(this.parentFileSystem ? this.parentFileSystem.path : '/', this.name);
        },
        enumerable: true,
        configurable: true
    });
    return DirectoryItem;
}());
exports.default = DirectoryItem;
