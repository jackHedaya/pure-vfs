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
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
var FileSystem = /** @class */ (function (_super) {
    __extends(FileSystem, _super);
    function FileSystem(config) {
        var _this = _super.call(this) || this;
        _this.initConfig = config;
        _this._contents = [];
        _this.path = config.fromDir || '/';
        return _this;
    }
    FileSystem.prototype.add = function (item) {
        var itm = item;
        itm.parentFileSystem = this;
        this._contents.push(itm);
    };
    return FileSystem;
}(events_1.EventEmitter));
exports.default = FileSystem;
