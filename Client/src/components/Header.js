import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, Collapse, NavItem, NavLink} from 'mdbreact';
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import SignUp from './Page/SignUp.js';
// import { Route, Switch } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    // this.onClick = this.onClick.bind(this);
    // this.toggle = this.toggle.bind(this);
    }

    // onClick(){
    //     this.setState({
    //         collapse: !this.state.collapse,
    //     });
    // }

    // toggle() {
    //     this.setState({
    //         dropdownOpen: !this.state.dropdownOpen
    //     });
    // }
    render(){
        return(
            // <Router>
            // <Switch>
                <Navbar  light expand="md" scrolling > 
                    <NavbarBrand href="/" > {/* href="/" */}
                        <strong>Matching Me</strong>
                    </NavbarBrand>
                    {/* <NavbarToggler onClick = { this.onClick } /> AA */}
                    
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                    
                    <Collapse navbar className="navbar navbar-light" > 
                        <NavbarNav left>
                            <NavItem active>
                                <NavLink to="#">Trang chủ</NavLink> 
                            </NavItem>
                            <NavItem>
                                <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="./signup" target="_blank"> Đăng ký trở thành gia sư </a>
                            </NavItem>
                            <NavItem>
                                <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="./post/tutor" target="_blank"> Tìm gia sư </a>
                            </NavItem>
                            <NavItem>
                                <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="./post/host" target="_blank"> Tìm lớp mới </a>
                            </NavItem>
                            <NavItem>
                                <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="./forum" target="_blank"> Diễn đàn trao đổi </a>
                            </NavItem>
                            <NavItem>
                                <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="./help" target="_blank"> Trợ giúp </a>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                <a rel="noopener noreferrer" className="nav-link Ripple-parent"  href="./signup" target="_blank"> Đăng ký </a>
                            </NavItem>
                            <NavItem>
                                <a rel="noopener noreferrer" className="nav-link Ripple-parent"  href="./login" target="_blank"> Đăng nhập </a>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>                    
                </Navbar>
                /* <Link to="/SignUp">SignUp</Link> */
                /* <Route path="/SignUp" component={SignUp} /> */
            /* </Router> */
            // <Route path='/SignUp' component={SignUp} />
            // </Switch>
            
        )
    }
}
export default Header;