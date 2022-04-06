import "./Sidebar.scss";
import React from 'react';
import logo from "../../assets/Logo.svg";

function Sidebar(props) {

    const handleButtonClick = (e) => {
        e.preventDefault();
        document.getElementById("registration-form").scrollIntoView({behavior: "smooth"});
        props.setActive(false);
    }


    return (
        <div className={props.active ? "sidebar-wrapper active" : "sidebar-wrapper"} onClick={() => props.setActive(false)}>
            <div className={props.active ? "side-bar active" : "side-bar"} onClick={e => e.stopPropagation()}>
                <img src={logo} alt={"logo"}/>
                <ul className={"main"}>
                    <div className={"list-block-1"}>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>About me</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Relationship</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Users</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Sign up</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Terms and Conditions</a></li>
                    </div>
                    <div className={"list-block-2"}>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>How it works</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Partnership</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Help</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Level testimonial</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Contact us</a></li>
                    </div>
                    <div className={"list-block-3"}>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Articles</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Our news</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Testimonials</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Licenses</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Privacy Policy</a></li>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;