export const homeQuantityToggle = (event, stock, id) => {
  //? very important, user ne kis card par click kya (id). currentCardElement...
  //? querySelector se dynamic id get karny ka tarika (`#card${id}`).
  const currentCardElement = document.querySelector(`#card${id}`);

  //? jis card par user ne click kiya...
  //? us card ki quantity (productQuantity) access kar li.
  const productQuantity = currentCardElement.querySelector(".productQuantity");

  //! 1.new variable quantity create to make static text (1) dynamic...
  //! Current quantity nikalo
  //! 2.Very important. attribute get, (1.Read, 2.Modify, 3.Write).
  //! 3.agar ye (|| 1) nahi hoga to "very first" click...
  //*  khali jayega or "second" click par 2 hoga.
  //! agar ye (|| 1) hoga to "very first" click direct 2 hojayega.

  let quantity = Number(productQuantity.getAttribute("data-quantity")) || 1;

  //* cartIncrement
  //! if(event.target.className === 'cartIncrement').
  if (event.target.closest(".cartIncrement")) {
    if (quantity < stock) {
      quantity += 1;
    } else {
      quantity = stock;
    }
  }
  //* cartDecrement
  //! if(event.target.className === 'cartDecrement').
  if (event.target.closest(".cartDecrement")) {
    if (quantity > 1) {
      quantity -= 1;
    }
  }
  //! productQuantity ka text (1) ab "quantity" set kar diya. Screen update.
  productQuantity.textContent = quantity;
  //! Very important. attribute set, (1.Read, 2.Modify, 3.Write).
  //? data-quantity bhi update kar di. Data attribute update.
  productQuantity.setAttribute("data-quantity", quantity);
  return quantity;
};
