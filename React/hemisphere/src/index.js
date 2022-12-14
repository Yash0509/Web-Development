import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";


class App extends React.Component{
    
    // constructor(props){
    //     super(props)
    //     this.state={ latitude: null, errorMsg:''} 
    // }
    state={ latitude: null, errorMsg:''} 
componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            this.setState({latitude: position.coords.latitude})
        },
        (error) => {
            this.setState({errorMsg:error.message})
        }
    );
}
// componentDidUpdate(){
//     console.log('component did update')
// }

    render() {
        if(this.state.errorMsg && !this.state.latitude){
            return <div>{this.state.errorMsg}</div>
        }
        if(!this.state.errorMsg && this.state.latitude){
            return <div><HemisphereDisplay latitude={this.state.latitude}/></div>
        }
        else{
            return <div>Loading....</div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)