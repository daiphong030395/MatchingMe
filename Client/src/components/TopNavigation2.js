import React, { Component } from 'react';
import {FormInline, Button, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Fa } from 'mdbreact';
import { Redirect} from 'react-router-dom';


class TopNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isLogin: false,
            isLogout: false,
            "toHomePage": false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    componentDidMount(){
        if(localStorage.getItem('user') !== null){
            this.setState({
                isLogin: true
            })
        }
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    onHandleSignOut=()=>{
        console.log("Handle Sign out");
        if (window.confirm('Bạn có muốn đăng xuất không?')) {
            this.setState({"toHomePage": true, isLogin: false});
            localStorage.removeItem('user');
            // return(<Redirect  to={{ pathname: "/" }} />)
            window.location.reload();
            console.log("Logout OK");
        }
    }
    toHomePage=()=>{
        if(this.state.toHomePage)
            return(<Redirect  to={{ pathname: "/" }} />)
        if(!this.state.isLogin){
            localStorage.removeItem('user');
            return(<Redirect  to={{ pathname: "/" }} />);
        }
            
    }
    onHandleNotification(){

    }

    render() {
        return (
            <Navbar className="flexible-navbar " light expand="md" scrolling>
                <NavbarBrand href="/">
                    <strong>Matching Me</strong>
                </NavbarBrand>
                
                <NavbarToggler onClick = { this.onClick } />
                <Collapse isOpen = { this.state.collapse } navbar>
                    <nav>
                        <FormInline className="md-form m-0" >
                            <input className="form-control form-control-sm" type="search" placeholder="Tìm kiếm" aria-label="Search"/>
                            <Button size="sm" color="primary" className="my-0" type="submit"><Fa icon="search" /></Button>
                        </FormInline>
                    </nav>
                    {/* { !this.state.isLogin
                        ?<NavbarNav right>
                            <NavItem>
                                <a 
                                    className="border border-light rounded mr-1 nav-link Ripple-parent" 
                                    rel="noopener noreferrer" 
                                    href="./" 
                                    // target="_blank"
                                ><Fa icon="github" className="mr-2"/> Trang chủ </a>
                            </NavItem>
                            <NavItem>
                                <a 
                                    className="border border-light rounded mr-1 nav-link Ripple-parent" 
                                    rel="noopener noreferrer" 
                                    href="./signup" 
                                    target="_blank"
                                ><Fa icon="github" className="mr-2"/> Đăng ký </a>
                            </NavItem>
                            <NavItem>
                                <a 
                                    className="border border-light rounded mr-1 nav-link Ripple-parent" 
                                    rel="noopener noreferrer"  
                                    href="./login" 
                                    // target="_blank"
                                > Đăng nhập </a>
                            </NavItem>
                            </NavbarNav> */}
                        <NavbarNav right>
                            <NavItem>
                                <a 
                                    className="border border-light rounded mr-1 nav-link Ripple-parent" 
                                    rel="noopener noreferrer" 
                                    href="./" 
                                    target="_blank"
                                ><Fa icon="github" className="mr-2"/> Trang chủ </a>
                            </NavItem>
                            <NavItem>
                                <a 
                                    className="border border-light rounded mr-1 nav-link Ripple-parent" 
                                    rel="noopener noreferrer"  
                                    href="./notification" 
                                ><Fa icon="bell" /> Thông báo </a>
                                {/* <Button size="sm" type="submit" onClick={this.onHandleNotification}><Fa icon="sign-out" /> Đăng xuất </Button> */}
                            </NavItem>
                            <NavItem>
                                <Button size="sm" type="submit" onClick={this.onHandleSignOut}><Fa icon="sign-out" /> Đăng xuất </Button>
                            </NavItem>
                        </NavbarNav>
                    
                    
                </Collapse>
            </Navbar>
        );
    }
}

export default TopNavigation;