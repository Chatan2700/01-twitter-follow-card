import React from 'react'
import { useState } from 'react';


const TwitterFollowCard = ({ children, userName = 'unknown' }) => {

  const [isFollowing, setIsFollowing] = useState(false)

  const btnText = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button '

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={userName === 'unknown' ? `https://unavatar.io/x/x` : `https://unavatar.io/x/${userName}`
          }
          alt={`${userName} avatar`} />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>{btnText}</button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard