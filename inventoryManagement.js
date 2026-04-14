//  Inventory Management Program
//  This program allows users to manage their inventory by adding, removing, and viewing items.


const inventory = [];

function findProductIndex(name) {
  const lowerName = name.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === lowerName) {
      return i;
    }
  }

  return -1;
}

function addProduct(obj) {
  const name = obj.name.toLowerCase();
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += obj.quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({ name, quantity: obj.quantity });
    console.log(`${name} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  const lowerName = name.toLowerCase();
  const index = findProductIndex(lowerName);

  if (index === -1) {
    console.log(`${lowerName} not found`);
    return;
  }

  const product = inventory[index];

  if (product.quantity < quantity) {
    console.log(`Not enough ${lowerName} available, remaining pieces: ${product.quantity}`);
    return;
  }

  product.quantity -= quantity;

  if (product.quantity === 0) {
    inventory.splice(index, 1);
  }

  console.log(`Remaining ${lowerName} pieces: ${product.quantity}`);
}


