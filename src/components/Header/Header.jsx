import React, { useState } from "react";
import { IconContext } from "react-icons";
import GithubCorner from "react-github-corner";
import {
  Container,
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
  DropdownItem
} from "reactstrap";
import { FaDownload } from "react-icons/fa";
import { Link } from "gatsby";
import navLogo from "../../../static/logos/nav_logo.png";

const Header = () => {
  const [isOpen, toggle] = useState(false);
  return (
    <Navbar color="light" light expand="lg" sticky="top">
      <Container>
        <NavbarToggler onClick={() => toggle(!isOpen)} />
        <NavbarBrand href="/" className="mx-auto">
          <img src={navLogo} alt="Terasology" width="225" />
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/" className="text-color" activeClassName="active">
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  to="/blog"
                  className="text-color"
                  activeClassName="active"
                >
                  Blog
                </Link>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle  nav caret >
              <span className="text-color">Terasology</span> 
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink>
                    <Link
                      to="/game"
                      className="text-color"
                      activeClassName="active"
                    >
                      The Game
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink>
                    <Link
                      to="/media"
                      className="text-color"
                      activeClassName="active"
                    >
                      Media
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink>
                    <Link
                      to="/modules"
                      className="text-color"
                      activeClassName="active"
                    >
                      Modules
                    </Link>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-color">
              <span className="text-color">Contribute</span>  
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink>
                    <Link
                      to="/gsoc_tsoc"
                      className="text-color"
                      activeClassName="active"
                    >
                      Student Programs
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink>
                    <Link
                      to="/mentors"
                      className="text-color"
                      activeClassName="active"
                    >
                      Mentors
                    </Link>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink>
                <a
                  href="https://terasology.org/AdventureSite/"
                  className="text-color"
                  activeClassName="active"
                >
                  Explore
                </a>
              </NavLink>
            </NavItem>
            <NavItem className="font-weight-bold btn-primary download-btn">
              <NavLink className="text-white" href="/downloads">
                <IconContext.Provider
                  value={{ size: "1em", className: "download" }}
                >
                  <FaDownload />
                </IconContext.Provider>
                Download
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
      <GithubCorner
        size={65}
        bannerColor="#08a045"
        href="https://github.com/MovingBlocks/Terasology"
      />
    </Navbar>
  );
};

export default Header;
