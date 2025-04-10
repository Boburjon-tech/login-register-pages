import React from 'react'

function Avatar({user}) {
  return (
    <div className='mt-7'>
      <div className="avatar bg-amber-200 mb-5 border-2 border-amber-50 rounded-3xl flex justify-center">
        <div className="w-24 rounded-3xl flex ">
            <img src={user.photoURL} />
        </div>
      </div>
      <h2 className='text-[#fff] mb-4 text-2xl'>Hello , {user.displayName}</h2>
    </div>
  )
}

export default Avatar
