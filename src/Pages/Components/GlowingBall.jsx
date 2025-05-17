import React from 'react'

const GlowingBall = ({ color = "blue", size = 100 }) => {
  return (
    <div className={`rounded-full`}
      style={{
        width: size,
        height: size,
        backgroundColor: "transparent",
        boxShadow: `0 0 400px 300px ${color}`,
      }}>
      
    </div>
  )
}

export default GlowingBall
