import React, { Component } from "react";
import { MDBFormInline, MDBInput } from "mdbreact";

class InputRadio extends Component {
state = {
  radio: 2
}

onClick = nr => () =>{
  this.setState({
    radio: nr
  });
}

render() {
    return (
        <MDBFormInline>
            <MDBInput 
                gap 
                onClick={this.onClick(1)} 
                checked={this.state.radio===1 ? true : false} 
                label="Gia sư" 
                type="radio" 
                id="radio1" 
            />
            <MDBInput 
                gap 
                onClick={this.onClick(2)} 
                checked={this.state.radio===2 ? true : false} 
                label="Gia chủ" 
                type="radio" 
                id="radio2" 
            />
        </MDBFormInline>
    );
}

}
export default InputRadio;