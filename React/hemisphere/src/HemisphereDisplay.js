import React from "react";
import pic1 from './1.jpg';
import pic2 from './2.png';
import './Hemisphere.css';

const hemisphereConfig = {
    Northern: {
        text: 'it is northern hemisphere',
        picture:pic1
    },
    Southern:{
        text:'it is southern hemisphere',
        picture:pic2
    }
}

const HemisphereDisplay = ({latitude}) => {
    const hemisphere= latitude >0 ? 'Northern' : 'Southern';
    const {text,picture} = hemisphereConfig[hemisphere] 
    return(
        <div>Hello
        <div className={hemisphere}>
            <div className="ui raised text container segment">
                <div className="image">
                    <img src={picture} alt="hemisphere" />
                </div>
                <div className="ui teal bottom attached label">
                    <h1>{text}</h1>
                </div>
            </div>        
        </div>
        </div>
    )
}
export default HemisphereDisplay
