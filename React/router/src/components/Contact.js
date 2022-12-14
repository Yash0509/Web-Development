import React from "react";
import Modal from "./Modal";
const Contact = (props) => {
    console.log(props)
    // setTimeout(() =>{
    //     props.history.push('/about')
    // },2000);
    return(
        <div>
            <Modal />
        <div 
            className="ui raised very padded text container segment"
            style={{marginTop:'80px'}}
        >
           <h3 className="ui header">Contact</h3>
           <p> Hi this is a trial text, just for practicing</p> 
        </div>
        </div>
    )
}

export default Contact;