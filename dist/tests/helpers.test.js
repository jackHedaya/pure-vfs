"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var findWithIndex_1 = __importDefault(require("../lib/helpers/findWithIndex"));
var myArr = ['hello', 'world', 'yoda'];
describe('findWithIndex', function () {
    test('it should find a value and an item in an array', function () {
        var f = findWithIndex_1.default(myArr, function (val) { return val === 'yoda'; });
        expect(f).toEqual({ item: 'yoda', index: 2 });
    });
    test('it should return -1 and null when an item is not found', function () {
        var f = findWithIndex_1.default(myArr, function (val) { return val === 'shebang'; });
        expect(f).toEqual({ item: null, index: -1 });
    });
});
