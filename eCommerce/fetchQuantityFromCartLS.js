import { getCartProductFromLS } from "./getCartProductFromLS"

//? steps to follow:
//* cartProducts mein ls ka data set karo.
//* existingProduct check karo.
//* quantity ki initial value set karo
//* quantity or price update kar k return karo

export const fetchQuantityFromCartLS = (id, price) => {
  const cartProducts = getCartProductFromLS();
  let existingProduct = cartProducts.find((curProd)=> curProd.id === id);
  let quantity = 1;
  if(existingProduct){
    quantity = existingProduct.quantity;
    price = existingProduct.price;
  };
  return {quantity, price}
}
