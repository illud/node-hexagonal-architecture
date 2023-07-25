"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToYear = void 0;
const dateToYear = (date) => {
    const d = new Date(date);
    let year = d.getFullYear();
    return year;
};
exports.dateToYear = dateToYear;
