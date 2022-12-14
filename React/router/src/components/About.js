import React from "react";
import './modal.css'

const About = () => {
    return(
        <div>
            <div className="modal">
                <div className="modal-content">
                    <h3> Content for modal</h3>
                </div>
            </div>
            <div 
            className="ui raised very padded text container segment"
            style={{marginTop:'80px'}}
        >
           <h3 className="ui header">About</h3>
           <p> Hi this is a trial text, just for practicing</p> 
        </div>
        </div>
        
    )
}

export default About;