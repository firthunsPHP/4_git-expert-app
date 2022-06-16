
import { useState } from 'react';
export  const GifExpertApp = () =>{

    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    // newCategory
    const onAddCategory = (  ) => {
        // if ( categories.includes(newCategory) ) return;
                 setCategories([ 'fasfa', ...categories ]);
        // setCategories([ ...categories, 'valr' ]);
        // setCategories( cat => [ ...cat, 'valer'])
    }


    return (
            <>
                {/*  titulo */}
                <h1>GifExpertApp</h1>

                {/*    Input */}

                {/*    Listado de gif*/}

                {/*<AddCategory*/}
                {/*    onNewCategory={ (value) => onAddCategory(value) }*/}
                {/*/>*/}

                    <button onClick={onAddCategory }>Agregar</button>
                <ol>
                        { categories.map(
                            category => {
                            return <li key={category}>{category}</li>
                         })
                        }
                        <li></li>
                    </ol>
                {/*    Gif item*/}
            </>
        )
}
