import React from "react";
import { MDBBtn, MDBInput} from "mdbreact";
import banner from "../../image/banner2.png";
// import {NavLink} from 'react-router-dom';
// import Profile from "./Profile";

class Main extends React.Component {
    render() {
        return(
            <div>
            <img src={banner} alt="banner" >
            </img>
            <MDBInput
                type="textarea"
                label="Icon Prefix"
                rows="2"
                icon="pencil-alt"
                ></MDBInput>
                <MDBBtn color="success">Post</MDBBtn>
            </div>
        )
    }
}

export default Main;