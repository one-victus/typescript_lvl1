"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// npm i --save lodash // (lodash = node)
// npm i --save-dev @types/lodash // (lodash = node)
const lodash_1 = __importDefault(require("lodash"));
const arr = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 24 },
    { name: 'Mark', age: 35 }
];
console.log(lodash_1.default.sortBy(arr, ['age']));
