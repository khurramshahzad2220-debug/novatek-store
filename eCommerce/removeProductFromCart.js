import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

//! steps to remove form cart:
//? cartProducts local storage ka data fetch karo
//? cartProducts data mein se card delete karo jis par user ne click kiya
//? cartProductsLS local storage ko update karo
// localStorage.setItem("cartProductsLS", JSON.stringify(update here));
//? removeDiv ki card id set karo
//? dom se is div ko remove karo
//? updateCartValue cart value update karo

export const removeProductFromCart = (id, name) => {
  let cartProducts = getCartProductFromLS();
  cartProducts = cartProducts.filter((curProd)=> curProd.id !== id);
  localStorage.setItem('cartProductsLS', JSON.stringify(cartProducts));
  let removeDiv = document.querySelector(`#card${id}`);
  if(removeDiv){
    removeDiv.remove();

    // show toast when product added to the cart
    showToast('delete', name);
  };
  updateCartValue(cartProducts);
};
