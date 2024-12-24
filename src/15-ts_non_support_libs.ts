// npm i --save lodash // (lodash = node)
// npm i --save-dev @types/lodash // (lodash = node)
import _ from 'lodash';

const arr = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 24 },
  { name: 'Mark', age: 35 }
]

console.log(_.sortBy(arr, ['age']));
