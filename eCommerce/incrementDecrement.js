import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartProductTotal } from "./updateCartProductTotal";
//? "currentCardElement" card id fetch karo
//? productQuantity fetch karo "currentCardElement" se
//? productPrice fetch karo "currentCardElement" se
//? quantity ki initial value set karo
//? localStoragePrice ki initial value set karo
//? localCartProducts "lS" se data fetch karo
//? existingProd fetch karo "localCartProducts" se
//? quantity or localStoragePrice set karo
//? .cartIncrement set karo
//? .cartDecrement set karo
//? localStoragePrice set karo
//? localStoragePrice tofixed or number set karo
//? updatedCart object set karo
//? updatedCart mein localCartProducts update karo
//? local storage "cartProductsLS" update karo
//? productQuantity or productPrice se DOM update karo

export const incrementDecrement = (id, price, stock, event) => {
  const currentProductElem = document.querySelector(`#card${id}`);
  let productQuantity = currentProductElem.querySelector(".productQuantity");
  let productPrice = currentProductElem.querySelector(".productPrice");
  let quantity = 1;
  let localStoragePrice = 0;
  let localCartProducts = getCartProductFromLS();
  const existingProd = localCartProducts.find((curProd) => curProd.id === id);
  if (existingProd) {
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
    // price = price;
  }
  if (event.target.closest(".cartIncrement")) {
    if (quantity < stock) {
      quantity += 1;
    } else {
      quantity = stock;
      // localStoragePrice = price * stock;
    }
  }

  if (event.target.closest(".cartDecrement")) {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  localStoragePrice = price * quantity;
  localStoragePrice = Number(localStoragePrice.toFixed(2));

  let updatedCart = { id, quantity, price: localStoragePrice };

  updatedCart = localCartProducts.map((curProd) => {
    return curProd.id === id ? updatedCart : curProd;
  });

  localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));

  productQuantity.innerText = quantity;
  productPrice.innerText = localStoragePrice;
  updateCartProductTotal();
};
