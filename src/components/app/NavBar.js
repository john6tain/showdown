import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
                        {/*<a href="#">React-Bootstrap</a>*/}
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <Item url="/user" eventKey={ 1 }>User</Item>
                    <LinkContainer to="/penka/2">
                        <NavItem eventKey={2} href="/user/2">Link</NavItem>
                    </LinkContainer>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}