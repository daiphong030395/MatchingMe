import React, { Component } from 'react';
import logo from '../image/lightlogo2.jpg';
import { ListGroup, ListGroupItem, Fa } from 'mdbreact';
import { NavLink } from 'react-router-dom';

class TopNavigation extends Component {
    constructor(){
        super();
        this.state = {
            isLogin: false
        }
    }

    componentDidMount(){
        // user = JSON.parse(localStorage.getItem("user"));
        if(localStorage.getItem("user") != null){
            this.setState({isLogin: true })
        }
    }

    render() {
        return (
            <div className="sidebar-fixed position-fixed">
                <a href="/" className="logo-wrapper waves-effect">
                    <img alt="Matching Me Logo" className="img-fluid" src={logo}/>
                </a>
                <ListGroup className="list-group-flush">
                    <NavLink exact={true} to="/" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="pie-chart" className="mr-3"/>
                            Trang chủ
                        </ListGroupItem>
                    </NavLink>
                    {(this.state.isLogin)
                    ?<NavLink to="/profile2" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="user" className="mr-3"/>
                            Trang cá nhân
                        </ListGroupItem>
                    </NavLink>
                    :null}
                    <NavLink to="/createPost" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="plus" className="mr-3"/>
                            Đăng tin
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/tablePost" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="th-list" className="mr-3"/>
                            Các lớp mới
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/forum" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="map" className="mr-3"/>
                            Forum chia sẻ
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/help" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="phone" className="mr-3"/>
                            Trợ giúp và phản hồi
                        </ListGroupItem>
                    </NavLink>
                </ListGroup>
            </div>
        );
    }
}

export default TopNavigation;