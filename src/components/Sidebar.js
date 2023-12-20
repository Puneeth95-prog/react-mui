import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Switch } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { AccountBox, ModeNight, Pages, People, Settings } from '@mui/icons-material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Sidebar({mode, setMode}) {
  return (
    <Box  
    flex={1} 
    p={2}
    sx={{ display: {xs: "none", sm: "block"}}}
    >
      <Box sx={{ position: "fixed"}}>
      <List>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                  <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
                  <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                  <People />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                  <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                  <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                  <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                  <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                  <ModeNight />
              </ListItemIcon>
              <Switch onChange={(e) => setMode(mode === "light" ? "dark" : "light")} />
              <ListItemText />
            </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Sidebar;
