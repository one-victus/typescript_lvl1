(() => {
  // let stringValue: string = null;
  // let numberValue: number = undefined;

  let nullValue: null = null;
  let undefinedValue: undefined = undefined;

  let stringValue: string | null = null;
  let numberValue: number | undefined = undefined;

  function hi(name: string | null) {
    let str = 'Hello, ';

    // Extend Form
    // if (name) {
    //   str += `${name.toLocaleUpperCase()}!`;
    // } else {
    //   str = 'name is null in hi()';
    // }

    // Short Form
    str += name?.toLocaleUpperCase() || 'name is null in hi()';

    console.log(str);
  }

  hi('Mark');
  hi(null);
})();
