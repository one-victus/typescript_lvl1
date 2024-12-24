"use strict";
(() => {
    //let data: any[] = [];
    let data = [];
    const addData = (obj) => {
        data.push(obj);
    };
    addData({
        name: 'Mark',
        age: 35,
        birth: new Date('1986-06-21')
    });
    addData({
        name: 'Hans',
        age: 24,
        birth: new Date('1969-12-14'),
        direction: 'Korea'
    });
    // addData('hola');
    // addData({
    //   name: 'Hans',
    //   age: '24',
    //   birth: new Date('1969-12-14'),
    //   direction: 25
    // });
    console.log(data);
})();
