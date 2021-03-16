import React from "react";
import Aux from "../../hoc/Aux";
import "./Layout.scss";

const Layout = (props) => {
  return (
    <Aux>
      <div>Toolbar,SideDrawer, Backdrop</div>
      <main className="content">{props.children}</main>
    </Aux>
  );
};

export default Layout;
