import React, {Component} from 'react';
// import pika from '../image/pika.jpg';
// import FormSignup from './Page/SignUp.js';
// import FormLogin from './Pages/Login';
import Routes from './Routes';
// import Table from './Pages/details/Table';

class Content extends Component{

    render(){
        return(
            <div className="main-content" >
                <h4> Content</h4>
                {/* <FormLogIn /> */}
                {/* <FormSignUp /> */}
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img src={pika} alt="PIKACHU"></img>
                </nav> */}
                <main id="content" className="p-5">
                    <Routes />
                </main>
                 {/* <Table /> */}
            </div>
        )
    }
}
export default Content;