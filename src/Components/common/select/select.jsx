import React from 'react';
import '../../../Assets/style/components/select.css'

const Select = ({ className, value, handleChange, label, optionsList }) => {

  return (
    <select className={className} value={value} onChange={handleChange} label={label}>
        {
            optionsList.map((option, i) => {
                return <option key={i} className="options" value={option.value}>{option.option}</option>
            })
        }
    </select>
  )
}

export default Select