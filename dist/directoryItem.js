"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mz_1 = require("mz");
var path_1 = __importDefault(require("path"));
var DirectoryItem = /** @class */ (function () {
    function DirectoryItem(name) {
        this._name = name;
    }
    Object.defineProperty(DirectoryItem.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            var _this = this;
            if (this.parentFileSystem && this.parentFileSystem.initConfig.attach) {
                mz_1.fs.rename(this.path, path_1.default.join(this.parentFileSystem.path, newName))
                    .then(function (_) { return (_this._name = newName); })
                    .catch(function (_) {
                    throw "PureVFS: Unable to change name from " + _this._name + " to " + newName;
                });
            }
            else
                this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirectoryItem.prototype, "path", {
        get: function () { return path_1.default.join(this.parentFileSystem ? this.parentFileSystem.path : "/", this.name); },
        enumerable: true,
        configurable: true
    });
    return DirectoryItem;
}());
exports.default = DirectoryItem;
