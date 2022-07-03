import { PageSidebar } from "@patternfly/react-core";
import React from "react";
import Navigation from "../Navigation";

function Sidebar(props) {
  return <PageSidebar isNavOpen={props.isNavOpen} nav={<Navigation />} />;
}

export default Sidebar;
