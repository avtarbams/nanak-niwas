import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';


export interface NavigationProps {
  donateFoodData?: any;
}

class NavigationBar extends React.Component<NavigationProps, any>{

  constructor(props: NavigationProps) {
    super(props);
  }

  public render() {

    return (
      <div style={{fontFamily: 'Brandon Grotesque Black'}}>
        <Navbar inverse={true} collapseOnSelect={true} style={{marginBottom:0}} >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Nanak- Niwas</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight={true}>
              <NavItem eventKey={2} href="#" style={{fontSize: 20}}>
                Floor Plan
      </NavItem>
      <NavItem eventKey={3} href="#" style={{fontSize: 20}}>
                Gallery
      </NavItem>
      <NavItem eventKey={4} href="#" style={{fontSize: 20}}>
                Contact Us
      </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          </div>
    )
  }
}

export default NavigationBar;