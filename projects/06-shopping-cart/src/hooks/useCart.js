import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'

export function useCart() {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  const { cart, addToCart, removeFromCart, clearCart } = context

  return { cart, addToCart, removeFromCart, clearCart }
}
