import React from "react";
import ReactDOM from "react-dom";

class SearchInput extends React.Component{

    // onInputChange(event){
    //     console.log(event.target.value)
    // }

    constructor(props){
        super(props)
        this.state={entry:''}

        // this.onformSubmit = this.onformSubmit.bind(this)
    }

    onformSubmit=(event)=> {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry)
    }

    render() {
        return(
            <div className="ui segment">
                <form onSubmit={this.onformSubmit} className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                        <input type="text" placeholder='search...'
                        onChange={(event) => this.setState({entry:event.target.value})}  //onSubmit onClick  //.toUpperCase()
                        value={this.state.entry}
                        />
                        <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;