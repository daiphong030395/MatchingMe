import React, { Component } from 'react';
import logo from '../image/lightlogo2.jpg';
import { ListGroup, ListGroupItem, Fa } from 'mdbreact';
import { NavLink } from 'react-router-dom';

class TopNavigation extends Component {


    render() {
        return (
            <div className="sidebar-fixed position-fixed">
                <a href="#!" className="logo-wrapper waves-effect">
                    <img alt="Matching Me Logo" className="img-fluid" src={logo}/>
                </a>
                <ListGroup className="list-group-flush">
                    <NavLink exact={true} to="/" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="pie-chart" className="mr-3"/>
                            Dashboard
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/profile2" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="user" className="mr-3"/>
                            Profile
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/createPost" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="plus" className="mr-3"/>
                            Create a post
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/tablePost" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="th-list" className="mr-3"/>
                            List all posts
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/forum" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="map" className="mr-3"/>
                            Forum to exchange
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/help" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="phone" className="mr-3"/>
                            Help & advisory
                        </ListGroupItem>
                    </NavLink>
                </ListGroup>
            </div>
        );
    }
}

export default TopNavigation;