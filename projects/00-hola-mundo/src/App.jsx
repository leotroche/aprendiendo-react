import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'
import { USERS } from './mocks/usersData'

export function App() {
  return (
    <section className='App'>
      {USERS.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
            {name}
          </TwitterFollowCard>
        )
      })}
    </section>
  )
}
