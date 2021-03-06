import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {Link} from "gatsby"
import {FaGopuram} from "react-icons/fa"

const Headnav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="headnav">
      <Navbar light expand="md">
        <NavbarBrand href="/"><h4 className="navtitle">SevenHills</h4></NavbarBrand>
        <NavbarToggler outline color="dark" onClick={toggle}><FaGopuram size={26}/></NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Services</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Photography
                </DropdownItem>
                <DropdownItem>
                  FoodBloggers
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  More
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Places to visit
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/Srikalahasthi">
                  Sri Kalahasthi
                  </Link>
                </DropdownItem>
                <DropdownItem>
                 Kanipakam
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  More
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Headnav;
