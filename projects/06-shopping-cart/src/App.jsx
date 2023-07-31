import { useState } from 'react'
import { Cart } from './components/Cart'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { IS_DEVELOPMENT } from './config'
import { CartProvier } from './context/CartProvider'
import { useFilters } from './hooks/useFilters'
import { products as initialProducts } from './mocks/products.json'

export function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  return (
    <div>
      <CartProvier>
        <Header />
        <Cart />
        <Products products={filterProducts(products).slice(0, 10)} />
        {IS_DEVELOPMENT && <Footer />}
      </CartProvier>
    </div>
  )
}
