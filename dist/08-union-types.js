"use strict";
(() => {
    let id;
    id = 10;
    id = '10';
    function logTest(text = 'Default text') {
        if (typeof text === 'string') {
            console.log(text.toUpperCase());
        }
        else {
            console.log(text.toFixed(2));
        }
    }
    const nvar = null;
    logTest('Hello');
    logTest(65.9999);
    logTest();
    // logTest(false);
    //logTest(nvar);
})();
