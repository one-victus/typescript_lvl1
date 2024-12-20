"use strict";
(() => {
    let id;
    id = 10;
    id = resetId(id);
    console.log("id ==> ", id);
    id = '10';
    id = resetId(id, 'B');
    console.log("id ==> ", id);
    function resetId(id, suffix = 'A') {
        if (typeof id === 'string') {
            return '0' + suffix;
        }
        else {
            return 0;
        }
    }
})();
