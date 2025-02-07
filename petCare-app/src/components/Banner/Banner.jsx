import './Banner.css'



export const Banner = () =>{




    return (
        <>
            <section className="hero_section">
                <div class="hero">
                    <div class="overlay">
                        <h1>Loving pet care in your <br /> neighborhood™</h1>
                        <p>Book trusted sitters and dog walkers.</p>
                    </div>
            
                    <div class="search-box">
                        <form>
                            <div class="pet-selection">
                                <label><input type="checkbox" name="dog"/> Dog</label>
                                <label><input type="checkbox" name="cat"/> Cat</label>
                            </div>
                            
                            <div class="service-options">
                                <button type="button">Boarding</button>
                                <button type="button">House Sitting</button>
                                <button type="button" class="active">Drop-In Visits</button>
                                <button type="button">Doggy Day Care</button>
                                <button type="button">Dog Walking</button>
                            </div>
                            
                            <input type="text" placeholder="Zip code or Address"/>
                            
                            <div class="frequency">
                                <label><input type="radio" name="frequency" checked/> One Time</label>
                                <label><input type="radio" name="frequency"/> Repeat Weekly</label>
                            </div>
                            
                            <div class="date-selection">
                                <input type="date" placeholder="Start date"/>
                                <input type="date" placeholder="End date"/>
                            </div>
                            
                            <div class="dog-size">
                                <button type="button">Small (0-15 lbs)</button>
                                <button type="button">Medium (16-40 lbs)</button>
                                <button type="button">Large (41-100 lbs)</button>
                                <button type="button">Giant (101+ lbs)</button>
                            </div>
                            
                            <button class="search-btn" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}