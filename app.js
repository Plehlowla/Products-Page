const url = "https://course-api.com/javascript-store-products";

const productsDOM = document.querySelector(".products-center");

const fetchProduct = async () => {
  productsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = `<p class="error">There was an error</p>`;
  }
};

const displayProduct = (list) => {
  console.log(list);
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
// fetchProduct();
