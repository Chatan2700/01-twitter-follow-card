import React from 'react'

const TwitterFollowCard = ({ children, userName = 'unknown', isFollowing }) => {

  let profilePicture = `https://unavatar.io/x/${userName}`
  userName === 'unknown' ? profilePicture = `https://unavatar.io/x/x` : profilePicture

  console.log(isFollowing)

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={profilePicture}
          alt={`${userName} avatar`} />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>Follow</button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard