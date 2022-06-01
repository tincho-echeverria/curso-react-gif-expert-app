import React, { useState } from 'react'
import Types from "prop-types";

export const CategoryAdd = ({CategoriasAdd}) => {

  const [inputValue, setinputValue] = useState('');

  const FormSubmit = e => {
    e.preventDefault();
    CategoriasAdd(inputValue);
    }

  return (
    <form onSubmit={FormSubmit}>
      <input
        type = "text"
        value = {inputValue}
        onChange = {e => setinputValue(e.target.value)}
      />
      
    </form>
  )
}

CategoryAdd.propTypes = {
  value: Types.func
}