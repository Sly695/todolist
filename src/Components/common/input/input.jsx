import React from 'react'
import '../../../Assets/style/components/input.css'

const Input = ({ placeholder, maxLength, className, value, onChange}) => {
  return (
    <input placeholder={placeholder} className={className} maxLength={maxLength} onChange={onChange} value={value}/>
  )
}

export default Input