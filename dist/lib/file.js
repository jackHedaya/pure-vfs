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
var object_hash_1 = __importDefault(require("object-hash"));
var fs_1 = __importDefault(require("mz/fs"));
var directoryItem_1 = __importDefault(require("./directoryItem"));
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File(name, content) {
        if (content === void 0) { content = ''; }
        var _this = _super.call(this, name) || this;
        _this.content = '';
        _this.content = content;
        return _this;
    }
    File.prototype.writeToSystem = function () {
        return fs_1.default.writeFile(this.path, this.content);
    };
    File.prototype.hash = function () {
        return { path: this.path, hash: object_hash_1.default({ name: this.name, path: this.path, content: this.content }) };
    };
    return File;
}(directoryItem_1.default));
exports.default = File;
