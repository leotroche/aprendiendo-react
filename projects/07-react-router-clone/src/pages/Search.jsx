import { useEffect } from 'react'
import { Link } from '../components/Link'

export default function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `Results for ${routeParams.query}`
  }, [])

  return (
    <div>
      <div>
        <h1>SearchPage</h1>
        <p style={{ fontWeight: 700 }}>
          Search: <span style={{ color: '#c00' }}>{routeParams.query}</span>
        </p>
      </div>
      <div>
        <Link to='/'>Go to HomePage</Link>
      </div>
    </div>
  )
}
