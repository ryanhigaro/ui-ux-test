import React, { useState } from "react";
import styles from "./MenuBar.module.css";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchInput from "./SearchInput";

export default function MenuBar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <AppBar classes={{ root: styles.menubar }}>
        <Toolbar classes={{ root: styles.toolbar }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <SearchInput />
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        classes={{ paper: styles.drawer }}
      >
        <List classes={{root: styles.listGroup}}>
          <ListItem disablePadding>
            <ListItemButton disableRipple>
              <IconButton
                disableRipple
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setOpen(false)}
              >
                <CloseIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Menu Item 1</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Menu Item 2</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Menu Item 3</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
