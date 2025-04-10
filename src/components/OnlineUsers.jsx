import React from 'react'
import { useCollection } from '../hooks/useCollection'
function OnlineUsers() {
    const {data} = useCollection("users")
    
  return (
    <div className='ml-5  bg-[#a9f3f3] p-4'>
        {data && 
            data.map((u,i)=> {
                return (
                    <div key = {i} className="flex items-center mt-3 gap-2.5">
                    <img src={u.photoURL} className={`rounded-3xl border-2 ${u.online ? 'border-green-600' : 'border-red-600'}`} width="40px" height="40px"/>
                    <h1 key={u.id} >
                        {u.displayName }  
                    </h1>
                    <p className={`${u.online ? "text-green-600" : "text-red-600"}`}>{u.online? 'online' : 'offline'}</p>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default OnlineUsers
