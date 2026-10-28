import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

//? cartProducts ls "getCartProductFromLS" se data get karo
//? filterProducts products ko filter karo
//? cartElement DOM se "productCartContainer" id get karo
//? templateContainer DOM se "templateContainer" id get karo
//? showCartProduct function banao
//? filterProducts par loop chalao
//? curProd se destructure karo
//? productClone clone banao
// productClone.querySelector("#cardValue").id = `card${id}`;
//productClone.querySelector(".category").textContent = category;
//productClone.querySelector(".productImage").src = image;
//productClone.querySelector(".productImage").alt = name;
//productClone.querySelector(".productName").textContent = name;
//? data append karo
//! green comments ka data append se pehly add karna ha, lakin ye kaam append k baad karna ha.
//* LSActualData fetch quantity from local storage "fetchQuantityFromCartLS" function
//* productQuantity fetch ki hui quantity set karo
//* productPrice fetch ki hui price set karo
//* remove-to-cart-button is par ye function "removeProductFromCart"
//* stockElement is par ye function "incrementDecrement"

const cartProducts = getCartProductFromLS();

const filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { id, category, image, name, stock, price } = curProd;
    // let productClone = document.importNode(templateContainer.content, true);
    let productClone = document.importNode(templateContainer.content, true);

    const LSActualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").id = `card${id}`;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productQuantity").textContent =
      LSActualData.quantity;
    productClone.querySelector(".productPrice").textContent =
      LSActualData.price;
    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => {
        removeProductFromCart(id, name);
      });
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(id, price, stock, event);
      });

    cartElement.append(productClone);
  });
};
showCartProduct();

updateCartProductTotal();
