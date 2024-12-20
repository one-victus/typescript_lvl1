(() => {
  let productSummary: string;

  let productName = 'TV';
  let productPrice = 59.99;
  let productDescription = 'This is a TV';

  productSummary = `
    Product: ${productName}
    Price: $${productPrice}
    Description: ${productDescription}
  `;

  console.log('Summary', productSummary);
})();
