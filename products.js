const productDOM = document.querySelector(".product");
// console.log(productDOM);
const url = "https://course-api.com/javascript-store-single-product";

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = "<h4 class='product-loading'>Loading...</h4>";
    // console.log(window.location.search);
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = "<p class='error'>Beep Boop Error Detected</p>";
  }
};

const displayProduct = (product) => {
  console.log(product);
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
