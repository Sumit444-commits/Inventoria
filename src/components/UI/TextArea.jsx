import React from 'react'

const TextArea = ({
    rows=5,  placeholder='' ,name='', ...props
}) => {
  return (
  <textarea rows={rows} placeholder={placeholder} name={name} required {...props}></textarea>
  )
}

export default TextArea