"use strict";
(() => {
    // let stringValue: string = null;
    // let numberValue: number = undefined;
    let nullValue = null;
    let undefinedValue = undefined;
    let stringValue = null;
    let numberValue = undefined;
    function hi(name) {
        let str = 'Hello, ';
        // Extend Form
        // if (name) {
        //   str += `${name.toLocaleUpperCase()}!`;
        // } else {
        //   str = 'name is null in hi()';
        // }
        // Short Form
        str += (name === null || name === void 0 ? void 0 : name.toLocaleUpperCase()) || 'name is null in hi()';
        console.log(str);
    }
    hi('Mark');
    hi(null);
})();
