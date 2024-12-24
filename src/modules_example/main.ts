import { data, addData, calcAge } from "./data.service";

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

console.log(data);
console.log(calcAge());
