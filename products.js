const productDOM = document.querySelector(".product");
// console.log(productDOM);
const url =
  "https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog";

const fetchProduct = async () => {
  return "test";
};

const displayProduct = (product) => {
  console.log(product);
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
