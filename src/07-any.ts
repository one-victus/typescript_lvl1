// Se desanconseja el uso de any, ya que se pierde el tipado fuerte de TypeScript.

(() => {
  let dinamicValue: any;

  dinamicValue = 'Hello';
  dinamicValue = 50;
  dinamicValue = true;

  console.log('dinamicValue', dinamicValue);

  let mixed5: any[] = [];
  mixed5.push('Hello');
  mixed5.push(50);
  mixed5.push(true);

  console.log("mixed5 ==> ", mixed5);

  let castedValue = dinamicValue as boolean;

  dinamicValue = 'Hello';
  let castedValue2 = dinamicValue as string;

  dinamicValue = 22;
  let castedValue3 = <number>dinamicValue;

  console.log("castedValue ==> ", castedValue);
  console.log("castedValue2 ==> ", castedValue2);
  console.log("castedValue3 ==> ", castedValue3);
})();
