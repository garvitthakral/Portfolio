import React from 'react'
import Social from '../Landing/Social'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Fotter = () => {
  return (
    <div className="bg-black/10 backdrop-blur-md">
    <div className='flex justify-between  h-[250px] px-40'>
      <img src="https://res.cloudinary.com/dtntjxdio/image/upload/v1748229778/lOGO_dzqjyr.png" alt="Logo" />
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl flex justify-center items-center'>
            Socials
        </h1>
        <Social />
      </div>
    </div>
    <hr className='text-white/20'/>
    <div className='flex justify-center'>
        <p className='text-white/40'><CopyrightIcon /> Portfolio website of Garvit Thakral</p>
    </div>
    </div>
  )
}

export default Fotter
