(() => {
  type Id = string | number;
  type IdSuffix = 'A' | 'B' | 'C';
  let id: Id;

  id = 10;
  id = resetId(id);
  console.log("id ==> ", id);

  id = '10';
  id = resetId(id, 'B');
  console.log("id ==> ", id);

  function resetId(id: Id, suffix: IdSuffix = 'A') {
    if (typeof id === 'string') {
      return '0' + suffix;
    } else {
      return 0;
    }
  }
})();
