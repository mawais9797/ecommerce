import { useDispatch } from "react-redux";
// import products from "../products/products";

export const listOfProduct = (products) => async (dispatch) => {
  // debugger;
  try {
    dispatch({
      type: "PRODUCT_LIST",
      payload: products,
    });
    // debugger;
    localStorage.setItem("listOfProducts", JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = (product, qty) => async (dispatch) => {
  console.log("action prodeuct =", product);
  debugger;

  try {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        qty: Number(qty),
      },
    });
    // debugger;
    // const currentCartItems = JSON.parse(localStorage.getItem("cartItems"));
    // debugger;
    // const updatedCartItems = currentCartItems.push(product);
    // debugger;
    localStorage.setItem("cartItems", JSON.stringify(product));
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = (products) => async (dispatch) => {
  // debugger;
  try {
    dispatch({
      type: "PRODUCT_LIST",
      payload: products,
    });
    // debugger;
    localStorage.setItem("listOfProducts", JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};

// import { useDispatch } from "react-redux";
// import products from "../products/products";

// export const listOfProduct = () => {
//   const dispatch = useDispatch();
//   try {
//     debugger;
//     dispatch({
//       type: "PRODUCT_LIST",
//       payload: products,
//     });
//     debugger;
//     localStorage.setItem("listOfProducts", JSON.stringify(products));
//   } catch (error) {
//     console.log(error);
//   }
// };
