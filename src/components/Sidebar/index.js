import { PageSidebar } from "@patternfly/react-core";
import React from "react";

function Sidebar(props) {
  return (
    <PageSidebar isNavOpen={props.isNavOpen}>
      This is Sidebar component
    </PageSidebar>
  );
}

export default Sidebar;
