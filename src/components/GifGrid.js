import React  from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGrifItem';

const GifGrid = ({category}) => {
    


    const {data:images,loading} = useFetchGifs(category);
    
    // console.log(data,loading)

  
  
  
//   getGifs()
  
    return (
    <>
    <h3>{category}</h3>
        {loading && <p>'Cargando...'</p>}
        
        <div >
            <ol className='card-grid'>
            {images.map((img)=>(
                    <GifGridItem key={img.id} {...img} />
                    
            ))}
                
            </ol>
        </div>
    </>
  )
}

export default GifGrid