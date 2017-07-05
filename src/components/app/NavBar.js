import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <li>
                            <Link to="/user/1">User1</Link>
                        </li>
                        <li>
                            <Link to="/user/2">User2</Link>
                        </li>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}