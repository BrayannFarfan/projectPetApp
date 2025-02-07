import { InputFormDog } from "./inputFormDog";
import { faPersonShelter, faBriefcase, faHouse, faSunPlantWilt, faBowlFood } from "@fortawesome/free-solid-svg-icons";

import './FormDog.css'





export const FormDog = () => {



const data = [
    {
        name: 'Boarding',
        icon: faBriefcase,
    },
    {
        name: 'House Sitting',
        icon: faHouse
    },
    {
        name: 'Drop-In Visits',
        icon: faPersonShelter
    },
    {
        name: 'Doggy Day Care',
        icon: faSunPlantWilt
    },
    {
        name: 'Dog Walking',
        icon: faBowlFood
    }
]
    return(

        <>
                <div className='pet_text'>
                                <p>For When You're Away</p>
                                <p>For When You're at Work</p>
                </div>
                            
              <div className="services_options">
                {
                        data.map( ( items, key ) => {
                            return <InputFormDog key={key} data={items}/>
                        })
                    }
              </div>
                            
                            {/* <input type="text" placeholder="Zip code or Address"/> */}
                            
                            {/* <div class="frequency">
                                <label><input type="radio" name="frequency" checked/> One Time</label>
                                <label><input type="radio" name="frequency"/> Repeat Weekly</label>
                            </div> */}
                            
                            {/* <div className="date-selection">
                                <input type="date" placeholder="Start date"/>
                                <input type="date" placeholder="End date"/>
                            </div> */}
                            
                            {/* <div className="dog-size">
                                <button type="button">Small (0-15 lbs)</button>
                                <button type="button">Medium (16-40 lbs)</button>
                                <button type="button">Large (41-100 lbs)</button>
                                <button type="button">Giant (101+ lbs)</button>
                            </div> */}
                            
                            {/* <button className="search-btn" type="submit">Search</button> */}
        </>


    )
}