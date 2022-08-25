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
  // console.log(list);
  const productList = list
    .map((product) => {
      const { id } = product;
      // console.log(id);
      const { name: title, price } = product.fields;
      // console.log(name, price);
      const { url: img } = product.fields.image[0];
      // console.log(url);
      const formatPrice = price / 100;
      // id,name,price,img
      return `<a class="single-product" href="product.html?id=${id}">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join("");

  productsDOM.innerHTML = `        <div class="products-container">
        ${productList}
        </div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
// fetchProduct();
