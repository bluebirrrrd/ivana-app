import { Button, Nav, NavItem, NavList } from "@patternfly/react-core";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";

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
      <div className="bottom">
        <span className="greeting">Hello user</span>
        <Button>
          <Link to="login">Log out</Link>
        </Button>
      </div>
    </Nav>
  );
};

export default AppNavigation;
