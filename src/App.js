import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Masthead,
  MastheadToggle,
  Page,
  PageToggleButton,
} from "@patternfly/react-core";
import BarsIcon from "@patternfly/react-icons/dist/esm/icons/bars-icon";

import "./App.css";
import AuthorizedApp from "./components/AuthorizedApp";
import UnauthorizedApp from "./components/UnauthorizedApp";
import UserForm from "./components/UserForm";
import Users from "./components/Users";
import Sidebar from "./components/Sidebar";

/* 
  /login UnauthorizedApp
     — login form
  / AuthorizedApp contents
    - Sidebar: several links
    - MainContent:
    AuthorizedApp routes:
      /forma — a form to add user data
      /koristnici - saved users from the form
 */

function Header(props) {
  return (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton
          variant="plain"
          aria-label="Global navigation"
          isNavOpen={props.isNavOpen}
          onNavToggle={props.onNavToggle}
        >
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
    </Masthead>
  );
}
function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Page
      className="App"
      header={<Header onNavToggle={onNavToggle} isNavOpen={isNavOpen} />}
      sidebar={<Sidebar isNavOpen={isNavOpen} />}
    >
      <Routes>
        <Route path="/" element={<AuthorizedApp />}>
          <Route path="korisnici" element={<Users />} />
          <Route path="forma" element={<UserForm />} />
        </Route>
        <Route path="login" element={<UnauthorizedApp />} />
      </Routes>
    </Page>
  );
}

export default App;
