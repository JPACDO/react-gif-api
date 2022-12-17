import { useState } from 'react'

import { AddCategory, GifGrid } from './components';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

export const GifExpertapp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory )=>{

        if( categories.includes(newCategory) ) return;

        setCategories( [ newCategory, ...categories] );
        // setCategories( cat =>  [ ...categories, 'Valorant'] );
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            // setCategories={ setCategories } 
            onNewCategory = { (value) => onAddCategory(value) }
        />

        {/* <button onClick={onAddCategory}>Agregar</button> */}

        { categories.map( category => (
                <GifGrid key={category} category = {category}/>
            ))
        }

    </>
  )
}
