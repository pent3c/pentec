import React from 'react'

interface ButtonProps{
    text: string,
    colour: string
}

function Button({text, colour}: ButtonProps) {
    const colourClass = (colour === 'purple' ? 'bg-purple-gradient' : 'bg-blue-gradient') 
  return (
    <button className= {colourClass + ` py-3 px-10 rounded-3xl font-semibold text-primary cursor-pointer `}>
        {text}
    </button>
  )
}

export default Button