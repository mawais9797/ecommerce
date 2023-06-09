const initialState = {
  listOfProducts: [],
  cartItems: [],
};

const productReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case "PRODUCT_LIST":
      return {
        ...state,
        listOfProducts: action.payload, // Replace [] with the actual data you want to set for listOfProducts
      };

    case "ADD_TO_CART":
      debugger;
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload], // Replace [] with the actual data you want to set for listOfProducts
      };
    default:
      return state; // Return the current state for any other action type
  }
};

export default productReducer;
