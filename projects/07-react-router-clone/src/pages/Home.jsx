import { Link } from '../components/Link'

export default function HomePage() {
  return (
    <div>
      <div>
        <h1>HomePage</h1>
        <img src='https://placekitten.com/200/287' alt='White Cat' />
      </div>
      <div>
        <Link to='/about'>Go to AboutPage</Link>
      </div>
    </div>
  )
}
