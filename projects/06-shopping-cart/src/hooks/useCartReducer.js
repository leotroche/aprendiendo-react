import { useReducer } from 'react'
import { CART_ACTIONS_TYPES, CART_REDUCER, INITIAL_STATE } from '../reducers/cartReducer'

export function useCartReducer() {
  const [state, dispatch] = useReducer(CART_REDUCER, INITIAL_STATE)

  const addToCart = (product) => {
    dispatch({ type: CART_ACTIONS_TYPES.ADD_TO_CART, payload: product })
  }

  const removeFromCart = (product) => {
    dispatch({ type: CART_ACTIONS_TYPES.REMOVE_FROM_CART, payload: product })
  }

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS_TYPES.CLEAR_CART })
  }

  return { cart: state, addToCart, removeFromCart, clearCart }
}
