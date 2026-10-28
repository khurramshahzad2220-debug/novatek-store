import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
  products.forEach((curProd) => {
    const { category, description, image, name, price, stock, id } = curProd;
//! Very important. document.importNode(productTemplate.content, true)
    const productClone = document.importNode(productTemplate.content, true);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `Rs.${price}`;
    productClone.querySelector(".productActualPrice").textContent =
      `Rs.${(price * 2.3).toFixed(2)}`;
    productClone.querySelector(".productStock").textContent = stock;

//? Very important. hum textContent etc. use nahi kar sakty... 
//! warna id show hogi user ko.
//? hum innerHTML to bilkul use nahi kar sakty...
//! warna pure ka pura element replace ho jayega.
//? Two ways to get the same result.
//! productClone.querySelector('#cardValue').setAttribute('id', `card${id}`)
    productClone.querySelector("#cardValue").id = `card${id}`;

//! is (homeQuantityToggle) function k liye id ki zarurat ha... 
//! template se id le kar "product container" mein add karni ha... 
//! is k liye hum ne uper (#cardValue) ki id set kar li ha.
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, stock, id);
      });

      productClone.querySelector('.add-to-cart-button').addEventListener('click', ()=>{
        addToCart(id, name);
      })
      
      productContainer.append(productClone);
  });
};
