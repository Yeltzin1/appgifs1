import React from 'react'
import { useFetchGifs } from './hooks/useFetchGifs'
//import { getGifs } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //const [images, setImages] = useState([])
    //console.log(useFetchGifs())
    const {data,loading} = useFetchGifs(category)


    



    return (
        <>
        <h3>{category}</h3>
        <h2>{loading&&'Cargando...'}</h2>
        <div className="card-grid">
            <ol>
                {
                data.map(img => (
                <GifGridItem 
                key={img.id}
                img={img}/>
                ))
                }
            </ol>
            </div>
        
        </>
    )
}
