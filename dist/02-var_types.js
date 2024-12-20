"use strict";
(() => {
    const constant = 42;
    let num = 10;
    let str = 'test';
    let arr1 = [1, 2, 3];
    let arr2 = ['monday', 'tuesday', 'wednesday'];
    let arr3 = [1, 'tuesday', { key: 'value' }];
    let obj = {
        key: 'value',
        key2: 42,
        key3: arr3,
    };
    let fun = () => 'Hola';
    let sym = Symbol('symbol');
    let nul = null;
    let und = undefined;
})();
