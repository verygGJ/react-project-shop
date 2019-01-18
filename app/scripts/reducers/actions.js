const ADD_TO_CART = "ADD_TO_CART";

export function addToCart(quantity, id) {
  return {
    type: ADD_TO_CART,
    payload: quantity,
    id: id
  }
}
