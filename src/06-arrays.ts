(() => {
  let numbers = [1, 2, 3, 4, 5];
  numbers.push(6);
  // numbers.push('7');

  let mixed1 = ['John', false];
  // mixed1.push(10);
  mixed1.push('Carlos');
  mixed1.push(true);

  let mixed2a: [string, number, boolean] = ['John', 10, false];
  // let mixed2b: [string, number, boolean] = ['John', false];
  mixed2a.push(2.6)

  console.log("mixed2a ==> ", mixed2a);

  let mixed3: (string | number | boolean)[] = ['John'];
  mixed3.push(50)

  let mixed4: (string | number | boolean)[] = [];
  mixed4.push('Nice')

  console.log("mixed4 ==> ", mixed4);
})();
