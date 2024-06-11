import { useState, useEffect } from "react";
import SideBar from "./SideBar";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

const Layout = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <SideBar />
      {props.children}
    </Box>
  );
};

export default Layout;
