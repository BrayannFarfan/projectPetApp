import { useState } from 'react'
import { FormCat } from '../FormCat/FormaCat'
import { FormDog } from '../FormDog/FormDog'
import './Banner.css'



export const Banner = () =>{

    const [ checked , setChecked ] = useState('A')


    function DogSwitch (){
        setChecked(checked === 'A' ? null : 'A')
    }
    function CatSwitch (){
        setChecked(checked === 'B' ? null :  'B')
    }

    return (
        <>
            <section className="hero_section">
                <div className="hero">
                    <div className="overlay">
                        <h1>Loving pet care in your <br /> neighborhood™</h1>
                        <p>Book trusted sitters and dog walkers.</p>
                    </div>
            
                    <div className="search-box">
                        <form>
                            <div className="pet_selection">
                                <label>I'm looking for service for my:</label>
                                <label>
                                    <input 
                                     className='pet_selection_input'
                                     type="checkbox" 
                                     name="dog"
                                     checked={ checked === 'A'}
                                     onChange={DogSwitch}
                                     /> 
                                    Dog
                                </label>
                                <label>
                                    <input  
                                        className='pet_selection_input' 
                                        type="checkbox" 
                                        name="cat"
                                        checked={ checked === 'B'}
                                        onChange={CatSwitch}
                                    /> 
                                    
                                    Cat
                                </label>
                            </div>

                            {
                                checked === 'A' && <FormDog/>
                            }
                            {
                                checked === 'B' &&  <FormCat/>
                            }
                            
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}