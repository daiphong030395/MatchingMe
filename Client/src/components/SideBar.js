import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Fa } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import logo from '../image/logo.png';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';

class SideBar extends Component {

    render(){
        return(
            <div className="sidebar-fixed position-fixed "  > {/* sidebar-fixed position-fixed // list-group w-100 col-2 px-0 fixed-top  */}
                {/* <a href ="#">LOGO</a> */}
                <p>LOGO</p>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img src={logo} alt="LOGO" ></img>
                </nav>
                <ListGroup>
                    <NavLink exact={true} to="/" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="pie-chart" className="mr-3"/>
                            Menu
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/profile" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="user" className="mr-3"/>
                            Profile
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/table" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="table" className="mr-3"/>
                            List Users
                        </ListGroupItem>
                    </NavLink>
                    <MDBListGroup >
                        <MDBListGroupItem>
                            <NavLink to = "/" > <MDBIcon icon="home" fixed /> Home </NavLink>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                            <NavLink to="./login" > <MDBIcon icon="book" fixed /> LOGIN </NavLink> 
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                            <NavLink to="./signup"><MDBIcon icon="pencil-alt" fixed />  SIGN UP  </NavLink>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                            <NavLink to="./404"><MDBIcon icon="cog" fixed />  PAGE NOT FOUND  </NavLink>
                        </MDBListGroupItem>
                    </MDBListGroup>
                </ListGroup>
            </div>
        )
        
    }
}
export default SideBar;