console.log("cart");


let cart = '';

for (let i = 0; i < 5; i++) {
  const name = `Cart ${i + 1}`;
  cart += `<div>${name}</div>`;
}

document.querySelector('#dev-carts').innerHTML = cart;
