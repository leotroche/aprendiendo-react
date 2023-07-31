export const INITIAL_STATE = JSON.parse(window.localStorage.getItem('cart')) || []

const updateStorage = (cart) => {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
}

export const CART_REDUCER = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const productInCartIndex = state.findIndex((item) => item.id === action.payload.id)

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state)
        newCart[productInCartIndex].quantity += 1
        updateStorage(newCart)
        return newCart
      }

      const newCart = [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ]

      updateStorage(newCart)
      return newCart
    }

    case 'REMOVE_FROM_CART': {
      const newCart = state.filter((item) => item.id !== action.payload.id)
      updateStorage(newCart)
      return newCart
    }

    case 'CLEAR_CART': {
      updateStorage([])
      return INITIAL_STATE
    }

    default: {
      updateStorage(state)
      return INITIAL_STATE
    }
  }
}
