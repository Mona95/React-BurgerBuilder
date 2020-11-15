import React from "react";
import useStyle from "./Layout.style.js";
import Aux from "../../hoc/Aux";

const Layout = (props) => {
  const classes = useStyle();
  return (
    <Aux>
      <div>Toolbar,SideDrawer, Backdrop</div>
      <main className={classes.content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
