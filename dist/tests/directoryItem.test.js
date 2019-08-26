"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var file_1 = __importDefault(require("../lib/file"));
describe('Directory Item', function () {
    test('#.hash() return a valid hash based on item values', function () {
        var f = new file_1.default('hello.txt');
        expect(typeof f.hash().hash).toBe('string');
    });
});
