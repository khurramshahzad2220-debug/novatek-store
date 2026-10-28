import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";
getCartProductFromLS();

export const addToCart = (id, name) => {
  let arrLocalStorageProduct = getCartProductFromLS();
  let currentProductElem = document.querySelector(`#card${id}`);
  let quantity = currentProductElem.querySelector(".productQuantity").innerText;
  let price = currentProductElem.querySelector(".productPrice").innerText;
  price = price.replace("Rs.", "");

  let existingProd = arrLocalStorageProduct.find(
    (currProd) => currProd.id === id,
  );

  if (existingProd && quantity > 1) {
    // alert(`You've added ${name} again!`)
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price);
    price = Number((quantity * price).toFixed(2));

    showToast('add', name);

    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });

    localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
  }

  if (existingProd) {
    return false;
  }
  
  price = Number(quantity * price);
  quantity = Number(quantity);
  console.log(price);
  //? uper waly tamam data do object form mein convert kar diya...
  //? ta k data ko local storage mein add kar saku.
  let updated_Cart = { id, quantity, price };
  //? arrLocalStorage mein already JSON.parse kar k data([]) ha...
  //? main us mein last par updated data push(add) kar raha hu.
  arrLocalStorageProduct.push(updated_Cart);
  //? yahan localStorage mein data set(add) kar raha hu.
  localStorage.setItem(
    "cartProductsLS",
    JSON.stringify(arrLocalStorageProduct),
  );
  //? carValue(html element) mein updated data show kar raha hu.
  updateCartValue(arrLocalStorageProduct);
  showToast('add', name);
};
