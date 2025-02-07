
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './InputFormDog.css'


export const InputFormDog = ({data}) => {

    console.log(data.icon.iconName);
    
    return (

        <>
                <div className="service_option">
                    <button className='services_btn' type="button">
                        <FontAwesomeIcon icon={data.icon} className="services_icon" />
                        <span className="button-text">{data.name}</span>
                    </button>
                </div>
        </>



    )
}