import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import {NavLink} from "react-router-dom";

class TopNavigations extends Component {
    constructor(props) {
        super(props);
        this.state={
            navBarTitle:'navTitle',
            navBackground:'navBackground',
            navVariant:'dark',
            navItems:'navItem',
            pageTitle:props.title
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVariant:'light',navBarTitle:'navTitleScroll', navBackground:'navBackgroundScroll', navItems:'navItemScroll'})

        }
        else if(window.scrollY<100){
            this.setState({navVariant:'dark',navBarTitle:'navTitle', navBackground:'navBackground', navItems:'navItem'})

        }

    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }




    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>

                <Navbar variant={this.state.navVariant} className={this.state.navBackground} fixed='top' collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand className={this.state.navBarTitle}>RID CODE STUDIO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>

                                <Nav.Link> <NavLink end style={({ isActive }) => ({ color: isActive ? '#00a8ee' : '#ffffff' })} className={this.state.navItems} to="/">HOME</NavLink> </Nav.Link>
                                <Nav.Link> <NavLink end style={({ isActive }) => ({ color: isActive ? '#00a8ee' : '#ffffff' })} className={this.state.navItems} to="/service">SERVICES</NavLink> </Nav.Link>
                                <Nav.Link> <NavLink end style={({ isActive }) => ({ color: isActive ? '#00a8ee' : '#ffffff' })} className={this.state.navItems} to="/course">COURSES</NavLink> </Nav.Link>
                                <Nav.Link> <NavLink end style={({ isActive }) => ({ color: isActive ? '#00a8ee' : '#ffffff' })} className={this.state.navItems} to="/portfolio">PORTFOLIO</NavLink> </Nav.Link>
                                <Nav.Link> <NavLink end style={({ isActive }) => ({ color: isActive ? '#00a8ee' : '#ffffff' })} className={this.state.navItems} to="/contact">CONTACT</NavLink> </Nav.Link>
                                <Nav.Link> <NavLink end style={({ isActive }) => ({ color: isActive ? '#00a8ee' : '#ffffff' })} className={this.state.navItems} to="/about">ABOUT</NavLink> </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </Fragment>
        );
    }
}

export default TopNavigations;