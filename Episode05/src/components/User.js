import React from 'react'

const User = ({ name }) => {
  return (
    <div className="user-card">
      <h1>User: {name}</h1>
      <h2>Name : Darshan Vasani</h2>
      <h2>Age : 22</h2>
      <h2>Location : Surat, Gujarat</h2>
    </div>
  )
}

export default User