import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./auth.css";
import Logo from "../../assets/images/Hero-Electric-Bike-Logo-PNG.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginActionFn } from "redux/actions/loginAction";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  paper: {
    margin: "15% 15% 10% 15%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const LoginData = useSelector((state) => state.LoginData);
  const [open, setOpen] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLogitude] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setusernameError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [Errormsg, setErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [isdealerloc, setIsdealerlocation] = useState("No");
  const [isFirst, setIsFirst] = useState(true);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
  
  
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLogitude(position.coords.longitude);
        console.log(position.coords.latitude)
      });
    
  }, []);

  useEffect(() => {
    if (!isFirst) {
      if (LoginData && LoginData.loginSuccesData) {
        if (LoginData.loginSuccesData && LoginData.loginSuccesData.token) {
          history.push("/home");
        } else if (LoginData.loginErrorData) {
          setErrorMsg("Please enter valid userid and password");
        }
      }
    }
  }, [LoginData]);

  console.log(LoginData);

  const showAlert = (e) => {
    e.preventDefault();
    if (username === "") {
      setusernameError(true);
    } else if (password === "") {
      setpasswordError(true);
    } else {
      setOpen(true);
    }
  };
  const handleSubmit = (agree) => {
    setOpen(false);

    let body = {
      mobile: username,
      password: password,
      are_you_at_dealer_location__c: agree,
      check_in_location__latitude__s: latitude,
      check_in_location__longitude__s: longitude,
    };

    dispatch(LoginActionFn(body));
    setIsFirst(false);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} md={7} className="login-img" />
      <Grid
        item
        xs={12}
        md={5}
        component={Paper}
        elevation={6}
        square
        className="login-cmp"
      >
        <div className={classes.paper}>
          <div className="logo-login">
            <img src={Logo} alt="logo" />
            <p>Welcome back! Please Login to your account</p>
          </div>

          <form className={classes.form} noValidate onSubmit={showAlert}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
              color="secondary"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></TextField>
            {usernameError && !username && (
              <span className="error-text">Please enter username</span>
            )}

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              color="secondary"
            />
            {passwordError && !password && (
              <span className="error-text">Please enter password</span>
            )}
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              LOGIN
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              size="sm"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <h5>Are you at Dealer Location?</h5>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => handleSubmit("No")}
                  className="dialogbtn"
                >
                  No
                </Button>
                <Button
                  onClick={() => handleSubmit("Yes")}
                  className="dialogbtn"
                  autoFocus
                >
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
            <Grid container className="mt-5 ml-5 pl-5">
              <Grid item className="mr-4">
                <Link href="#" variant="body2" className="links">
                  Terms of use
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" className="links">
                  {"Privacy Policy"}
                </Link>
              </Grid>
            </Grid>
            {/* <Box mt={5}>
              <Copyright />
            </Box> */}
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
