// import { useFilters } from '../hooks/useFilters'
// import { useCart } from '../hooks/useCart'
import './Footer.css'

export function Footer() {
  // const { filters } = useFilters()
  // const { cart } = useCart()

  return (
    <footer className='footer'>
      <h4>Prueba técnica de React ⚛️</h4>
      <h5>Shopping Cart con useId, useContext & useReducer</h5>
      {/* {JSON.stringify(filters, null, 2)} */}
      {/* {JSON.stringify(cart, null, 2)} */}
    </footer>
  )
}
