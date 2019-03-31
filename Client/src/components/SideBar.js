import React, { Component } from 'react';
import './abc.css';
// import { ListGroup, ListGroupItem, Fa } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import logo from '../image/lightlogo2.jpg';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';


class SideBar extends Component {

    render(){
        return(
            <div className="sidebar-fixed"  > {/* sidebar-fixed position-fixed // list-group w-100 col-2 px-0 fixed-top  */}
                {/* <a href ="#">LOGO</a> */}
                {/* <p>LOGO</p> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light logo123"
                >
                    <img src={logo} alt="LOGO" ></img>
                </nav>
                <MDBListGroup >
                    <MDBListGroupItem>
                        <NavLink to = "/" > <MDBIcon icon="home" fixed /> Home </NavLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <NavLink to="./login" > <MDBIcon icon="share" fixed /> Sign in </NavLink> 
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <NavLink to="./signup"> <MDBIcon icon="firefox" fixed />  Sign up  </NavLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <NavLink to="./profile"> <MDBIcon icon="user-circle" fixed />  Profile  </NavLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <NavLink to="./table"> <MDBIcon icon="th-list" fixed />  List Users  </NavLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <NavLink to="./#"><MDBIcon icon="phone" fixed />  Help  </NavLink>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <NavLink to="./404"><MDBIcon icon="cog" fixed />  Page not found  </NavLink>
                    </MDBListGroupItem>
                </MDBListGroup>
            </div>
        )
        
    }
}
export default SideBar;