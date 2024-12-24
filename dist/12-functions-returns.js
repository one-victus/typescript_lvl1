"use strict";
(() => {
    const calcTotal = (toSum) => {
        //return 'hola';
        return toSum.reduce((total, current) => total + current, 0);
    };
    console.log(calcTotal([1, 2, 3, 4, 5]));
})();
