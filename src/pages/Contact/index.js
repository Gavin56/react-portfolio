import Footer from "../../components/Footer/index";
import Grow from "@material-ui/core/Grow";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SendIcon from '@material-ui/icons/Send';
import "./style.css";

const CssTextField = withStyles({
  root: {
    marginTop: 20,
    width:"100%",
    "& input": {
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "#2eb3b0",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "gray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#2eb3b0",
      },
    },
  },
})(TextField);

function Contact() {
  const useStyles = makeStyles((theme) => ({
    h1: {
      marginTop: 20,
      marginBottom: 30,
      fontFamily: "Mukta",
    },
    paper: {
      marginBottom: 30,
      height: 525,
      display: "flex",
      justifyContent: "center",
    },
    textField: {
      marginTop: 20,
      borderColor: "#ffffff",
      width: "100%"
    },
    button: {
      marginTop: 20,
      paddingTop: 3,
      paddingBottom: 5,
      float:"right"
    },
    message: {
      marginTop: 20,
    },
  }));

  const classes = useStyles();
  const checked = true;

  return (
    <div id="form-div">
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        {/* <Container > */}
        <Grid item xs={12} sm={4}>
          <Paper id="form-paper" elevation={7} className={classes.paper}>
            <form noValidate autoComplete="off">
              <h1 className={classes.h1}>Let's have a chat.</h1>
              <form className={classes.root} noValidate>
                <Grid item xs={12}>
                  <CssTextField
                    className="text-field"
                    label="Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CssTextField
                    className="text-field"
                    label="Email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CssTextField
                    id="message-field"
                    className="text-field"
                    label="Message"
                    variant="outlined"
                    multiline="true"
                    rows={5}
                  />
                </Grid>
              </form>
              <Grid item xs={12}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  Send Message
                  <SendIcon
                  fontSize="small"
                  style={{marginLeft: 15}}
                  ></SendIcon>
                </Button>
              </Grid>
            </form>
          </Paper>
        </Grid>
        {/* </Container> */}
      </Grow>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
