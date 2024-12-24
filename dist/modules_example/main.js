"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_service_1 = require("./data.service");
(0, data_service_1.addData)({
    name: 'Mark',
    age: 35,
    birth: new Date('1986-06-21')
});
(0, data_service_1.addData)({
    name: 'Hans',
    age: 24,
    birth: new Date('1969-12-14'),
    direction: 'Korea'
});
console.log(data_service_1.data);
console.log((0, data_service_1.calcAge)());
