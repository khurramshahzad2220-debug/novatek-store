import { getCartProductFromLS } from "./getCartProductFromLS";

let productSubTotal = document.querySelector(".productSubTotal");
let productFinalTotal = document.querySelector(".productFinalTotal");

export const updateCartProductTotal = () => {
  const localCartProducts = getCartProductFromLS();
  let totalProductPrice = localCartProducts.reduce((accumulator, curElem) => {
    let ProductPrice = curElem.price || 0;
    return accumulator + ProductPrice;
  }, 0);

  productSubTotal.innerText = `Rs.${totalProductPrice.toFixed(2)}`;
  productFinalTotal.innerText = `Rs.${(totalProductPrice + 50).toFixed(2)}`;
};
