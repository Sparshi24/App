import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InputAdornment from '@material-ui/core/InputAdornment';

function Copyright() {
  return (
    <Typography variant="body2" color="Black">
      Copyright. 
      {/* <Link color="inherit"> */}
        All Rights Reserved.
      {/* </Link> */}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === '#242438' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(15),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundcolor: theme.palette.type === 'yellow',
  },
}));

export default function SignInSide(props) {
  const [email, setemail] = React.useState('')
  const [password, setpassword] = React.useState('')
  const classes = useStyles();

  const loginHandle = () => {
    if (email === 'alok21@gmail.com' && password === '123')
      props.history.push('Dashboard')
  }

  return (
    <Grid container component="main" className={classes.root}>
      {/* <CssBaseline /> */}
      <Grid item xs={false} sm={4} md={9} className={classes.image}>
      <Grid>
        
          {/* <img width="100px" src="logo.png" /> */}
          
        </Grid>
        <Grid style={{ paddingTop: "25px" }}>
        <center>
          <Typography
            variant="h4"
            style={{
              color:"inherit"
            }}
          >
            BRONTOPLUS
            </Typography>
            </center>
            </Grid>
      </Grid>
      <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography> */}
          <form className={classes.form} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              onChange={(e)=>setemail(e.target.value)}
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <Box mt={5}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              onChange={(e)=>setpassword(e.target.value)}
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
            </Box>
            <Button
              type="submit"
              fullWidth
              onClick={()=>loginHandle()}
            //   variant="contained"
              style={{backgroundColor:"#ffb300"}}
            //   color="primary"
              className={classes.submit}
            >
              LOGIN 
            </Button>
            <br></br>
            <br></br>
            
              <Grid align="center">
                <Link href="#" variant="body2">
                  Forgot password? Reset Now
                </Link>
              </Grid>
              <br></br>
              <Grid align="center">
                <Link href="#" variant="body2">
                  {"No Account? Create Account"}
                </Link>
              </Grid>
            {/* </Grid> */}
            <Box mt={5}>
              
            </Box>
          </form>
        </div>
      </Grid>
      <Grid container alignItems="center" style={{ margin: "0 10px" }}>
        <Grid item xs={8} md={6} lg={6}>
          <span style={{
            fontFamily: "poppins",
            opacity: ".8",
            fontSize: ".8rem"
          }}>{'Copyright.All Right Reserved'}</span>
        </Grid>

        <Grid container item xs={4} md={6} lg={6} justify="flex-end">
          <Grid justify="flex-end" item container  md={1}>
            <FacebookIcon />
          </Grid>
          <Grid justify="flex-end" item container  md={1} >
            <TwitterIcon />
          </Grid>
          <Grid justify="flex-end" item container  md={1} >
            <LinkedInIcon />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}