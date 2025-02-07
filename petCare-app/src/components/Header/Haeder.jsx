import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw , faMagnifyingGlass, faHeart, faDog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import './header.css'



export const Header = () =>{

    return (
        <>
            <section className="container_header">
                <div>
                    <Link to={"/"} className="container_logo">
                        <FontAwesomeIcon icon={faPaw} className="Icon_logo"/>
                        <h1 className="content_logo">Pet</h1>
                    </Link>
                    <nav>
                        <ul className="container_menu">
                            <li className="menu_item">
                                <Link to={"/search"} className="Menu_link">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="link_icon"/>
                                    Search
                                </Link>
                            </li>
                            <li className="menu_item">
                                <Link to={"/hazte-canguro"} className="Menu_link">
                                    <FontAwesomeIcon icon={faHeart}  className="link_icon"/>  
                                    Became
                                </Link>
                            </li>
                            <li className="menu_item">
                                <Link to={"/"} className="Menu_link">
                                    <FontAwesomeIcon icon={faDog} className="link_icon"/>  
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <ul>
                    <li className="menu_item">
                            <Link to={"/sing-up"} className="Menu_link">
                                Registrarse
                            </Link>
                    </li>
                    <li className="menu_item">
                            <Link to={"/sing-in"} className="Menu_link">
                                Iniciar Sesión
                            </Link>
                    </li>
                </ul>
            </section>
        </>
    )
}