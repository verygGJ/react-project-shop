import products from "./../../API/products.json"

const ProductsListQuantity = () => {
  let newArr = [];
  products.map((prod) => {
    newArr.push({ id:prod.id, quantity: 0 })
    return newArr
  })
  return newArr;
}

// ProductsListQuantity();

const initialState = {
  ProductsList: products,
  ProductsListQuantity: ProductsListQuantity(),
}

export default function infoState(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        ProductsListQuantity: state.ProductsListQuantity.map((item, index) => {
           if (item.id === action.id) {
             item.quantity = item.quantity + action.payload;
             return item
           }
           return item
        })
      }
    default:
      return state;
  }
}
