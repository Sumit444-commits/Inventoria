import React from 'react'

const Button = ({type,className,title}) => {
  return (
     <button type={type} className={`${className}`}>
            {title}
     </button>
  )
}

export default Button