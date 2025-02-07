



export const FormCat = () =>{




    return(

        <>
                <div className='pet_text'>
                                <p>For When You're Away</p>
                                <p>For When You're at Work</p>
                            </div>
                            
                            <div className="service-options">
                                <button type="button">Boarding</button>
                                <button type="button">House Sitting</button>
                                <button type="button" className="active">Drop-In Visits</button>
                                <button type="button">Doggy Day Care</button>
                                <button type="button">Dog Walking</button>
                            </div>
                            
                            <input type="text" placeholder="Zip code or Address"/>
                            
                            {/* <div class="frequency">
                                <label><input type="radio" name="frequency" checked/> One Time</label>
                                <label><input type="radio" name="frequency"/> Repeat Weekly</label>
                            </div> */}
                            
                            <div className="date-selection">
                                <input type="date" placeholder="Start date"/>
                                <input type="date" placeholder="End date"/>
                            </div>
                            
                            <div className="dog-size">
                                <button type="button">Small (0-15 lbs)</button>
                                <button type="button">Medium (16-40 lbs)</button>
                                <button type="button">Large (41-100 lbs)</button>
                                <button type="button">Giant (101+ lbs)</button>
                            </div>
                            
                            <button className="search-btn" type="submit">Search</button>
        </>

    )
}