import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw , faMagnifyingGlass, faHeart, faDog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import './header.css'



export const Header = () =>{

    return (
        <>
            <section className="container_header">
                <div className="container_body_header">
                    <Link to={"/"} className="container_logo">
                        <FontAwesomeIcon icon={faPaw} className="Icon_logo"/>
                        <h1 className="content_logo">Pet</h1>
                    </Link>
                    <nav>
                        <ul className="container_menu">
                            <li className="menu_item">
                                <Link to={"/search"} className="Menu_link">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="link_icon"/>
                                    Search Sitters
                                </Link>
                            </li>
                            <li className="menu_item">
                                <Link to={"/hazte-canguro"} className="Menu_link">
                                    <FontAwesomeIcon icon={faHeart}  className="link_icon"/>  
                                    Became a Sitters
                                </Link>
                            </li>
                            <li className="menu_item">
                                <Link to={"/"} className="Menu_link">
                                    <FontAwesomeIcon icon={faDog} className="link_icon"/>  
                                    Our Services
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <ul>
                    <li className="menu_item">
                            <Link to={"/sing-up"} className="Menu_link">
                            Sign Up
                            </Link>
                    </li>
                    <li className="menu_item">
                            <Link to={"/sing-in"} className="Menu_link">
                            Sign In
                            </Link>
                    </li>
                </ul>
            </section>
        </>
    )
}