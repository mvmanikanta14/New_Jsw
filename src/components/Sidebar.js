import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <List>
        <ListItem  component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        
        <ListItem  component={Link} to="/settings">
          <ListItemText primary="Application " />
        </ListItem>
        <ListItem  component={Link} to="/settings">
          <ListItemText primary=" Allotment" />
        </ListItem>
       
        <ListItem  component={Link} to="/settings">
          <ListItemText primary="Transfer" />
        </ListItem>
        <ListItem  component={Link} to="/settings">
          <ListItemText primary="Advance Booking" />
        </ListItem>
        <ListItem  component={Link} to="/settings">
          <ListItemText primary="Vacation" />
        </ListItem>
        <ListItem  component={Link} to="/settings">
          <ListItemText primary="Generate Bills" />
        </ListItem>
        <ListItem  component={Link} to="/settings">
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
