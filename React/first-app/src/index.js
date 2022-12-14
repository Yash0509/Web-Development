import React from 'react';
import ReactDOM from 'react-dom';



// const App = function(){
//     return(
//         <div>Hi there!</div>
//     )
//  }
function getButtonText(){
    return 'Hi There';
}
const App = () => {
    // const buttonText=['Hello', ' World',' 5', ' 12'];
    const buttonText={text:'submit'};
    const style={backgroundColor:'red',color:'blue'}
    return(
        <div>
        <label htmlFor="name" className="label">Enter Email</label>
        <input id="name" type="text" />
        <button style={style}>
            {buttonText.text }
            {/* {getButtonText()} */}
        </button>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)