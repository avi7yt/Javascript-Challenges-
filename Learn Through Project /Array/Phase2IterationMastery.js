// Challenge 1 — E-commerce Product Filtering
const products = [
  {
    name: "Fire-Boltt Ninja Call Pro Plus",
    price: 1399,
    inStock: true,
    category: "Smartwatch",
  },
  {
    name: "NoiseFit Halo Smartwatch",
    price: 2999,
    inStock: true,
    category: "Smartwatch",
  },
  {
    name: "boAt Airdopes 141 Gen 2",
    price: 1099,
    inStock: true,
    category: "Wireless Earbuds",
  },
  {
    name: "Apple AirTag (4-Pack)",
    price: 12900,
    inStock: true,
    category: "Tracker",
  },
  {
    name: "STRIFF Adjustable Laptop Stand",
    price: 300,
    inStock: true,
    category: "Desk Accessory",
  },
];

const availableProducts = (products) => {
    return products.filter((item) => item.inStock);
}

const stockProduct = availableProducts(products);
// console.log(stockProduct);
 
function increasePrice(products,value) {
  products.forEach((item) => item.price += item.price * value / 100);
}
console.log(products);

increasePrice(products, 10);
console.log(products);

function expensiveProduct(products) {
  const price = products.map((item) => item.price);
  const expensive = Math.max(...price);
  return products[price.indexOf(expensive)];
}

console.log(expensiveProduct(products));

function isEveryProductInStock(products) {
  return products.every((item) => item.inStock);
}

console.log(isEveryProductInStock(products));

function productNameList(products) {
  products.forEach((item) => console.log(`Name: ${item.name} | Price: ${item.price} | inStock: ${item.inStock} | Category: ${item.category}`));
};

productNameList(products);
