import React, { useState } from 'react'
import Avatar from './Avatar'
import { useGlobalContext } from '../hooks/useGlobalContext'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SideBar() {
  const {user} = useGlobalContext();
  const navigate = useNavigate();
  const [value,setValue] = useState("");
  const handleChange = (e) => {
    const selectRoute = e.target.value;
    setValue(selectRoute);
    if(selectRoute) {
      navigate(selectRoute)
    }
  }
  
  return (
    <div className='flex flex-col col-span-2 bg-[#191970] items-center'>
      <Avatar user = {user}/>
      <select
        value={value}
        onChange={handleChange}
        className='w-30 text-amber-50 bg-[#191970] border-2 border-amber-50 rounded-2xl px-3 py-1 focus:bg-[#fff] focus:text-[#191970]'
      >
      <option value=""  disabled selected >Pages</option>
      <option value="/">Home</option>
      <option value="/create">Create</option>
      </select>
    </div>
  )
}

export default SideBar
