import React from 'react'

const Title = ({line, line2}) => {
  return (
    <div className='px-3 pt-5 md:px-10 md:pt-20 lg:px-30 lg:pt-50'>
        <h1 className='text-lg md:text-3xl lg:text-5xl font-bold'>{line}</h1>
        <h2 className='text-sm md:text-lg lg:text-3xl font-semibold py-10 '>{line2}</h2>
    </div>
  )
}

export default Title