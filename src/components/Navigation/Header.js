import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'left'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
      flexGrow: 1,
      backroundColor: 'white',
  },
}));

const Header = (props) =>  {
  const { history } = props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClick = (pageURL) => {
    history.push(pageURL)
    setAnchorEl(null);
  };

  return (
    <div className={classes.root} >
      <AppBar position="static" color='transparent'>
        <Toolbar>
         <Typography variant="h6"
           className={classes.title}>
             Joan's 5th Avenue Inc.
          </Typography>
                  <IconButton 
                  edge="end"
                  className={classes.menuButton}
                   color="inherit" 
                   aria-label="menu"
                   onClick={handleMenu} 
                   >
                  <MenuIcon />
                  </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={()=> setAnchorEl(null)}
                    >
                      <MenuItem onClick={()=> handleMenuClick('/')}>Home</MenuItem>
                      <MenuItem onClick={()=> handleMenuClick('/about')}>About</MenuItem>
                      <MenuItem onClick={()=> handleMenuClick('/earrings')}>Earrings</MenuItem>
                      <MenuItem onClick={()=> handleMenuClick('/bracelets')}>Bracelets</MenuItem>
                      <MenuItem onClick={()=> handleMenuClick('chains')}>Chains</MenuItem>
                      <MenuItem onClick={()=> handleMenuClick('/rings')}>Rings</MenuItem>
                      <MenuItem onClick={()=> handleMenuClick('/registration')}>Register/Login</MenuItem>
                      <MenuItem onClick={()=> handleMenuClick('/cart')}>Cart</MenuItem>
                    </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header)