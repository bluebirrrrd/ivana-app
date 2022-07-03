import { Nav, NavItem, NavList } from "@patternfly/react-core";
import { NavLink } from "react-router-dom";

const AppNavigation = (props) => {
  return (
    <Nav>
      <NavList>
        <NavItem id="home">
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem id="users">
          <NavLink to="korisnici">Users</NavLink>
        </NavItem>
        <NavItem id="form">
          <NavLink to="forma">Form</NavLink>
        </NavItem>
        <NavItem id="login">
          <NavLink to="login">Login</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default AppNavigation;
