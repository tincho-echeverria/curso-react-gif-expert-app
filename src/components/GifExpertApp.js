import React, { useState } from 'react'
import { CategoryAdd } from './CategoryAdd';
import { GifGird } from './GifGird';

export const GifExpertApp = () => {

  

  const [Categorias, setCategorias] = useState(['homero']);
  
  const CategoriasAdd = (categoria) => {
    setCategorias([categoria, ...Categorias]);
  }

  return(
    <>
      <h2>GifExpertApp</h2>
      <CategoryAdd CategoriasAdd = {CategoriasAdd}/>
      <hr></hr>

      
      
      { Categorias.map(categoria => <GifGird key={categoria} categoria={categoria}/>)}
      
    </>
  )
}
