import { homeQuantityToggle } from "./homeQuantityToggle";
import { addToCart } from "./addToCart";
const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }

  //destructuring
  products.forEach((curProd) => {
    const { brand, category, description, id, image, name, price, stock } =
      curProd;

    //cloning the data from the template
    const productClone = document.importNode(productTemplate.content, true);

    //setting the id for the card to get unique cards everytime
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;

    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;

    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${
      price * 2
    }`;

    //cloning for increment and decrement product quantity
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    //add to cart functionality
    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });

    //appending the porductClone in productContainer
    productContainer.append(productClone);
  });
};
