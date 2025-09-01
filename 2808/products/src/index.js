console.log("Products");


let products = '';

for (let i = 0; i < 5; i++) {
  const name = `Product ${i + 1}`;
  products += `<div>${name}</div>`;
}

document.querySelector('#dev-products').innerHTML = products;
