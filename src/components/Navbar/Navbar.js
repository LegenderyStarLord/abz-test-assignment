import React, {useState} from "react";
import logo from "../../assets/Logo.svg";
import hamburger from "../../assets/Menu.svg";
import "./Navbar.scss";
import Sidebar from "../Sidebar/Sidebar";

function Navbar(props) {
    const [sideBarActive, setSideBarActive] = useState(false);

    const handleButtonClick = (e) => {
        e.preventDefault();
        document.getElementById("registration-form").scrollIntoView({behavior: "smooth"});
    }

    return (
        <>
        <div className={"navbar-wrapper"}>
        <div className={"navbar"} >
            <a className={"nav-logo"} href={"/"}><img src={logo} alt={"logo"}/> </a>
            <div className={"list-section"}>
                <img
                        className={"menu"}
                        src={hamburger} alt={"menu"}
                        onClick={() => setSideBarActive(true)}/>
                <div className={"navbar-menu"}>
                    <ul>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>About me</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Relationships</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Requirements</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Users</a></li>
                        <li><a href={"#"} onClick={(e) => {handleButtonClick(e)}}>Sign Up</a></li>
                    </ul>
                </div>
            </div>
        </div>
            <Sidebar active={sideBarActive} setActive={setSideBarActive}/>
        </div>
        </>
    );
}

export default Navbar;