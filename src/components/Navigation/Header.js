import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Button from "@material-ui/core/Button"



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]:{
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    flex: "1",
    justifyContent: 'space-around'
    
  }
}));

const Header = (props) =>  {
  const { history } = props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClick = (pageURL) => {
    history.push(pageURL)
    setAnchorEl(null);
  };
  const handleButtonClick = (pageURL) => {
    history.push(pageURL)
  }

  return (
    <div className={classes.root} >
      <AppBar position="static" color='white' >
        <Toolbar>
         <Typography variant="h6"
           className={classes.title}>
          </Typography>
          
            
              {isMobile ? (
                <>
                  <IconButton 
                  edge="start"
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
                      <MenuItem onClick={()=> handleMenuClick('/earrings')}>Earrings</MenuItem>
                      <MenuItem onClick={()=> handleMenuClick('/bracelets')}>Bracelets</MenuItem>
                      <MenuItem onClick={()=> handleMenuClick('chains')}>Chains</MenuItem>
                      <MenuItem onClick={()=> handleMenuClick('/homepage')}>Home</MenuItem>
                      <MenuItem onClick={()=> handleMenuClick('/rings')}>Rings</MenuItem>
                    </Menu>
                    </>
              ):
              
              (
                <div className={classes.headerOptions}>
                <Button variant='contained' onClick={()=> handleButtonClick("/homepage")}>Home</Button>
                <Button variant='contained' onClick={()=> handleButtonClick("/earrings")}>Earrings</Button>
                <Button variant='contained' onClick={()=> handleButtonClick("/bracelets")}>Bracelets</Button>              
                <Button variant='contained' onClick={()=> handleButtonClick("/chains")}>Chains</Button>              
                <Button variant='contained' onClick={()=> handleButtonClick("/rings")} >Rings</Button>              
                </div>
                )}
            
           
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header)