import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import LocalHospital from '@material-ui/icons/LocalHospital';
import{BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import DashboardIcon from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import {ListItem,ListItemIcon,ListItemText} from "@material-ui/core";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuList from '@material-ui/core/MenuList';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    backgroundcolor:theme.palette.background.black,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [Language, setLanguage] = React.useState('');
  const [open, setDrawer] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  const handleToggle = () => {
    // setToggle((prevToggle) => !prevToggle);
    setToggle(true);
  };

  const handleToggleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setToggle(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setToggle(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
     
      <CssBaseline />
      <AppBar style={{ background: "#242438" }} position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar 
        style={{backgroundColor:"#242438"}} 
        className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <img src="logo.png"   />
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            BRONTOPLUS
          </Typography>


          <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">English</InputLabel>
          <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={Language}
          onChange={handleChange}
          style={{ background: "white", borderRadius: "5px" }}
        >
          {/* <MenuItem value=""> */}
            {/* <em>None</em> */}
          {/* </MenuItem> */}
          <MenuItem >English</MenuItem>
          <MenuItem >Hindi</MenuItem>
        </Select>
        </FormControl>


          <IconButton color="inherit">
            <Badge badgeContent={1} style={{color:"yellow"}} >
              <NotificationsIcon  />
            </Badge>
          </IconButton>

          <IconButton STYLE="color:inherit">
              <AccountCircle/>
          </IconButton>

          <IconButton 
          STYLE="color:inherit"
          ref={anchorRef}
          aria-controls={toggle ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          >
              <ExpandMore/>
          </IconButton>
          <Popper open={toggle} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleToggleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleToggleClose}>Quick Details</MenuItem>
                    <Divider/>
                    <MenuItem onClick={handleToggleClose}>
                    <ListItemAvatar>
                       <LocalHospital/>
                    </ListItemAvatar>
                      Querry Asked
                      </MenuItem>
                    <MenuItem onClick={handleToggleClose}>
                      <ListItemAvatar>
                        <QuestionAnswer/>
                      </ListItemAvatar>
                      Medi Calls
                      </MenuItem>
                      <MenuItem onClick={handleToggleClose}>
                      <ListItemAvatar>
                        <SupervisedUserCircle/>
                      </ListItemAvatar>
                      Disease Diagnosis
                      </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
  
        </Toolbar>
      </AppBar>
      <Paper style={{backgroundColor:"#242438"}}>
      <Drawer

        variant="permanent"
        style={{backgroundColor:"#242438"}}

        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div 
        style={{backgroundColor:"#242438"}} 
        className={classes.toolbarIcon}>
          <IconButton STYLE Color="inherit" onClick={handleDrawerClose}>
            <ArrowBackIos/>
          </IconButton>
        </div>
        {/* <div style={{backgroundColor:"black"}}> */}
        {/* <Divider /> */}
        {/* <List>{mainListItems}</List> */}
        {/* <Divider /> */}
        {/* <List>{secondaryListItems}</List> */}
         
    <div> 
    <Paper style={{backgroundColor:"#242438"}}>
               <List>

                     {/* <Link to="/about" className={classes.link} />  */}
                      <ListItem button>
                          <ListItemIcon style={{Color:"white"}} >  
                            <DashboardIcon />
                            </ListItemIcon>

                     </ListItem> 
                     <Divider/>
                      <ListItem button>
                            <ListItemIcon >  
                            <Person />
                            </ListItemIcon>
                     </ListItem> 
                     <Divider/>

                        <ListItem button>
                            <ListItemIcon >  
                            <PersonAddIcon />
                            </ListItemIcon>
                        </ListItem>
                        {/* <Divider/> */}

                    </List>
                    </Paper>
                    </div>
                    
  
        {/* </div> */}
      </Drawer >
      </Paper>
      <main  className={classes.content}>
        <div style={{backgroundColor:"black"}} className={classes.appBarSpacer} />
        <Container  maxWidth="lg" className={classes.container}>
      <Grid container item xs={12} md={8} lg={8} spacing={2}>
            {/* Chart */}
            <Grid item xs={12} md={3} lg={3} m={2}>
            <Paper
              // type="submit"
              // fullWidth
              variant="contained" 
              style={{backgroundColor:"white"}} 
              elevation={3} 
            >
              <center>
              <Person />
              <br></br>
              Ask a Question 
              </center>
            </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3} >
            <Paper
              // type="submit"
              // fullWidth
              variant="contained" 
              style={{backgroundColor:"white"}}
              elevation={3}
               
               
            >
              <center>
              <PersonAddIcon  align="center"/>
              
              <br></br>
              Connect With Chatbox 
              </center>
            </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12} md={4} lg={4} >

            </Grid>
          </Grid>
          <Box pt={4}>
            {/* <Copyright /> */}
          </Box>
        </Container>
      </main>
    </div>
  );
}