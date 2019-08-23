"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var directoryItem_1 = __importDefault(require("./directoryItem"));
var mz_1 = require("mz");
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File(name) {
        var _this = _super.call(this, name) || this;
        _this._content = '';
        return _this;
    }
    Object.defineProperty(File.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (newContent) {
            var _this = this;
            if (this.parentFileSystem && this.parentFileSystem.initConfig.attach) {
                mz_1.fs.writeFile(this.path, newContent)
                    .then(function (_) { return (_this._content = newContent); })
                    .catch(function (_) {
                    throw "PureVFS: Error while writing to " + _this.path;
                });
            }
            else
                this._content = newContent;
        },
        enumerable: true,
        configurable: true
    });
    return File;
}(directoryItem_1.default));
exports.default = File;
