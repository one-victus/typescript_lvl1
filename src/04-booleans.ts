(() => {
  let pass = true;
  // pass = 'some';

  const random = Math.random()
  // pass = random > 0.5 ? 'true' : false;
  pass = random > 0.5 ? true : false;
  pass = random > 0.5;

  const isActive = pass;

  console.log("isActive ==> ", isActive);
})();
