"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const date = (0, date_fns_1.subDays)(new Date(), 10);
console.log((0, date_fns_1.format)(date, 'yyyy-MM-dd'));
