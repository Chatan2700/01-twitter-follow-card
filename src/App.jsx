import './App.css'
import './index.css'
import TwitterFollowCard from './assets/components/TwitterFollowCard';

const users = [
  {
    userName: 'dribbble',
    name: 'Dribbble',
    isFollowing: false,
    uuid: 1
  },
  {
    userName: 'chatan_rios',
    name: 'Sebastian',
    isFollowing: false,
    uuid: 2
  },
  {
    userName: 'Meta',
    name: 'Meta',
    isFollowing: true,
    uuid: 3
  }

]


function App() {

  return (
    <>
      <section className='App'>
        {
          users.map(({ userName, name, isFollowing, uuid }) => (
            <TwitterFollowCard
              key={uuid}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
        }
      </section>
    </>
  )
}

export default App
