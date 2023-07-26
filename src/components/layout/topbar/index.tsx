import { useState } from "react";
import { AppBar, Box, Toolbar, Stack, IconButton } from "@mui/material";
import TopBarItem from "./item";
import { BoxProps } from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { Sidebar } from "../sidebar/index";

type topBarProps = BoxProps & {};

export const TopBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AppBar position="static" className="app-bar">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={() => setSidebarOpen(true)}
        >
          <MenuIcon sx={{ color: "#1C1B1F" }} />
        </IconButton>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Box sx={{ flexGrow: 1 }}>
          <img className="logo" src="./assets/images/rocknet-logo.png" alt="" />
        </Box>
        <Stack
          direction="row"
          spacing={1}
          sx={{ minHeight: "inherit", display: { xs: "none", sm: "block" } }}
        >
          <TopBarItem />
          <TopBarItem />
          <TopBarItem />
        </Stack>
        {/* <Box
          sx={{ minHeight: "inherit", display: { xs: "none", sm: "block" } }}
        >
          <TopBarItem />
          <TopBarItem />
          <TopBarItem />
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};
