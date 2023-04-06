import React,{useState,useEffect,useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import './Header.css';


const Header = ()=>{
    const [visibility,setVisibility] = useState(false); // set visibility state

    const navLinksContainer = useRef();

    const onButtonClick = (event)=>{
        event.preventDefault();

        if(visibility){
            // triggered if visibility evaluates to true
            navLinksContainer.current.style.width="0";
            setVisibility(false);
            return;
        }
        navLinksContainer.current.style.width="100%"
        setVisibility(true);
        return;
    }


    return (
        <header>
            <div id="inner-header-container">
                <div id="header-title">
                    <h3>Countries</h3>
                </div>   

                {/* <nav>
                    <div id="nav-links" ref={navLinksContainer}>
                        <a href="#" className="nav-link" id="home-link">Home</a>
                        <a href="#" className="nav-link" id="api-link">API</a>
                        <a href="#" className="nav-link" id="dark-link">Dark Mode</a>
                    </div>

                    <div id="burger-btn-container">
                        {visibility?<FontAwesomeIcon icon={faXmark} onClick={onButtonClick} color="white"/>:<FontAwesomeIcon icon={faBars} onClick={onButtonClick} color="black"/>}
                    </div>
                </nav> */}
            </div>
        </header>
    )
}


export default Header;