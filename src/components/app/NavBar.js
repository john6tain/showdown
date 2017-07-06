import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Item = (props) => (
    <LinkContainer to={ props.url }>
        <NavItem eventKey={ props.eventKey }>{ props.children }</NavItem>
    </LinkContainer>
);

export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Showdown</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <Item url='/' eventKey={3.1}>Item</Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}