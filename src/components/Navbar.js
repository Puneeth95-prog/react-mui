import styled from '@emotion/styled';
import { Pets, Mail, Notifications } from '@mui/icons-material';
import { AppBar, Box, InputBase, Toolbar, Typography, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "0 10px",
  borderRadius: "6px",
  width: '40%'
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "15px",
  alignItems: "center"
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center"
}));

function Navbar() {
  const [open, setOpen] = useState(false);

  const openProfile = () => {
    setOpen(true);
  }

  return (
    <AppBar position='sticky'>
        <StyledToolbar>
          <Typography variant="h6" sx={{display:{xs: "none", sm: "block"}}}>SOCIAL MEDIA</Typography>
          <Pets sx={{display:{xs: "block", sm: "none"}}}/>
          <Search><InputBase placeholder='search...' /></Search>
          <Icons sx={{display: {xs: "none",sm: "flex"}}}>
            <Badge badgeContent={4} color="error">
              <Mail color="white" />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications color="white" />
            </Badge>
            <Avatar onClick={openProfile} sx={{width:30, height:30, cursor: "pointer"}} src='https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain' />
          </Icons>
          <UserBox sx={{display: {xs: "flex",sm: "none"}}}>
            <Avatar onClick={openProfile} sx={{width:30, height:30, cursor: "pointer"}} src='https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain' />
            <Typography variant='span'>Puneeth</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar;
