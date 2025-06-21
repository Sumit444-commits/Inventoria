import React from 'react'

const Input = ({type,placeholder,name,...props}) => {
  return (
     <input type={type} placeholder={placeholder} name={name} {...props} />
  )
}

export default Input