(() => {
  function makeJson(
    name: string,
    age: number,
    birth: Date,
    direction?: string
  ) {
    return {
      name,
      age,
      birth,
      direction
    }
  };

  console.log(makeJson('Mark', 35, new Date('1986-06-21')));
  console.log(makeJson('Hans', 22, new Date('1969-12-14'), 'Korea'));

  const makeJson2 = (
    name: string,
    age: number,
    birth: Date,
    direction?: string
  ) => ({
    name,
    age,
    birth,
    direction
  });

  console.log(makeJson2('Mark', 35, new Date('1986-06-21')));
  console.log(makeJson2('Hans', 22, new Date('1969-12-14'), 'Korea'));
})();
