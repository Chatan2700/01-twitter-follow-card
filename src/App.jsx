import './App.css'
import './index.css'
import TwitterFollowCard from './assets/components/TwitterFollowCard';

function App() {

  return (
    <>
      <section className='App'>
        <TwitterFollowCard
          userName={'dribbble'}

        >
          Dribbble
        </TwitterFollowCard>

        <TwitterFollowCard
          userName={'chatan_rios'}
          isFollowing={false}
        >
          Sebastian
        </TwitterFollowCard>

        <TwitterFollowCard
          userName={'Meta'}
          isFollowing={false}
        >
          Meta
        </TwitterFollowCard>

      </section>
    </>
  )
}

export default App
