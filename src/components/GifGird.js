import React from 'react'
import { useFetchGifs } from '../hooks/useFecthGifs'
import { GifGirdItem } from './GifGirdItem';

export const GifGird = ({categoria = ''}) => {

  
  const {data: imgs, loading} = useFetchGifs(categoria);

  

  //console.log(Imgs);

  return (
    <>
    <h3>{categoria}</h3>
    {loading && <p>Loading...</p>}
    <div className='card-grid'>
    { imgs.map(img => (<GifGirdItem key={img.id} {...img}/>))}
    </div>
  
    </>
      
    
    
  )
}
