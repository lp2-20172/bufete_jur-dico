import React from 'react';
import {Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap'

export default class Index extends React.Component{
    render(){
        return(<div>
            
                <Navbar inverse collapseOnSelect>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#">Rentas de oficina</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav>
                      <NavItem eventKey={1} href="#">HOME</NavItem>
                      <NavItem eventKey={2} href="#">Oficina</NavItem>
                      <NavDropdown eventKey={3} title="Contactenos" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                      </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                      
                      <NavItem eventKey={2} href="#">Ingresar</NavItem>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              
              
              

        </div>);
    }
}
