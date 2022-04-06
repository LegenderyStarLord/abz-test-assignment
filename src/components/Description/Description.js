import React, {useState} from "react";
import developerImg from "../../assets/Image-387x340.svg";
import "./Description.scss";


function Description(props) {
    const [pressed, setPressed] = useState(false);

    const handleButtonClick = () => {
        document.getElementById("registration-form").scrollIntoView({behavior: "smooth"});
        setPressed(true);
    }

    return (
        <div className={"description-container"}>
            <div className={"first-section-wrapper"}>
            <section className={"first-section"}>
                <div className={"description-block-1"}>
                    <h2>Test assignment for front-end developers</h2>
                    <p>Front-end developers make sure the user sees and interacts with all the necessary elements to
                        ensure conversion.<span className={"description-span"}> Therefore, responsive design, programming languages and specific frameworks
                        are the must-have skillsets to look for when assessing your front-end developers.</span></p>
                    <button className={pressed ? "button-clicked" : ""} onClick={handleButtonClick} onBlur={() => setPressed(false)}>Sign up</button>
                </div>
            </section>
            </div>
            <div className={"second-section-wrapper"}>
            <section className={"second-section"}>
                <img src={developerImg} alt={"developer-image"}/>
                <div className={"description-block-2"}>
                    <h2>Let's get acquainted</h2>
                    <h3>I'm a good front-end developer</h3>
                    <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
                        with a vast understanding of User design thinking as they'll be building web interfaces with
                        accessibility in mind. They should also be excited to learn, as the world of Front-End
                        Development keeps evolving.</p>
                    <button className={pressed ? "button-clicked" : ""} onClick={handleButtonClick} onBlur={() => setPressed(false)}>Sign up</button>
                </div>
            </section>
            </div>
        </div>
    );
}

export default Description;