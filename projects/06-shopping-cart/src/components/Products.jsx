import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'

export function Products({ products }) {
  const { cart, removeFromCart, addToCart } = useCart()

  return (
    <main className='products'>
      <ul>
        {products.map((product) => {
          const isProductInCart = cart.some((item) => item.id === product.id)

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? '#ce5050' : '#4daae9' }}
                  onClick={() => (isProductInCart ? removeFromCart(product) : addToCart(product))}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
