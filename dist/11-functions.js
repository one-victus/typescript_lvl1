"use strict";
(() => {
    function makeJson(name, age, birth, direction) {
        return {
            name,
            age,
            birth,
            direction
        };
    }
    ;
    console.log(makeJson('Mark', 35, new Date('1986-06-21')));
    console.log(makeJson('Hans', 22, new Date('1969-12-14'), 'Korea'));
    const makeJson2 = (name, age, birth, direction) => ({
        name,
        age,
        birth,
        direction
    });
    console.log(makeJson2('Mark', 35, new Date('1986-06-21')));
    console.log(makeJson2('Hans', 22, new Date('1969-12-14'), 'Korea'));
})();
