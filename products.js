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
  //   console.log(product);
  //   comany, title,price,color,paragraph,imgae
  const {
    company,
    colors,
    description,
    price,
    name: title,
    image,
  } = product.fields;
  document.title = title.toUpperCase();
  const { url: img } = image[0];
  console.log(company, price, title);
  const formatPrice = price / 100;
  productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>$${price / 100}</span>
          <div class="colors">
            <span class="product-color"></span>
            <span class="product-color" style="background: red"></span>
          </div>
        </div>
        <p>
          ${description}
        </p>
        <button class="btn">spend your hard earn money to buy this :D</button>
      </div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
