// Most of the react projects madhe ek custom button create kela jata so that sagli kade te use kela jail

import React from 'react'

function Button({
    children, // button cha nav 
    type = 'button',
    bgColor = 'bg-red-900',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button
    className={`px-4 py-2 rounded-lg hover:bg-red-950 font-bold ${bgColor} ${textColor} ${className}`}
    {...props} // jr placeholder kiva different properties send kele astil 
    >{children}</button>
  )
}

export default Button