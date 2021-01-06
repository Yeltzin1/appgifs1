import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    //const categories=['One punch','Inuyash','Goku']
    const [categories, setCategories] = useState(['One punch'])

    //const handleAdd = ()=>{
    //    setCategories([...categories,'Vegeta'])
    //}


    
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {categories.map(category=><GifGrid 
                key={category}
                category={category}/>)}
            </ol>
            
        </div>
    )
}
