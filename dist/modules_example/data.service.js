"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcAge = exports.addData = exports.data = void 0;
exports.data = [];
const addData = (obj) => {
    exports.data.push(obj);
};
exports.addData = addData;
const calcAge = () => {
    return exports.data.reduce((acc, item) => acc + item.age, 0);
};
exports.calcAge = calcAge;
