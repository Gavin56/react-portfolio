import { makeStyles, withTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "./style.css";
import Particles from "react-tsparticles";
import Header from "../../components/Header/index";

function About() {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100%",
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
        background: "#230a2b",
        border: 1,
        borderStyle: "solid",
        borderColor: "teal",
      },
    },
    paper: {
      color: "white",
    },
    image: {
      height: 540,
      borderRadius: 50,
      float: "left",
      marginRight: 50,
      marginLeft: 50,
    },
    about: {
      color: "white",
    },
    fontFamily: "Chivo",
  }));

  const classes = useStyles();

  return (
      <div>
      <Header/>
        <Paper className={classes.root} variant="outlined">
          <div>
            <h1 className={classes.paper}>
              Hello, I'm Gavin. Thank you for checking out my work.
            </h1>
            <img
              className={classes.image}
              src="https://lh3.googleusercontent.com/pw/ACtC-3f8UlBk_doTYMrS7x07jLtCn6D2e2I7LVeKy0j1a8px4Y_iYm8163EZsBE1sqZu8R_8v1SD0rFZv1Zn6nCa0jEbAEcwu6JOExetuQX5390qPvDC1EEE_ojFmTHia-zlyw4ipcDcm-OmCSG46-M8u0L_=w675-h899-no?authuser=0"
              alt="Me, sitting"
            ></img>
            <p className={classes.about}>
              My name is Gavin O'Brien. I was born and raised in New Jersey. I
              currently have an Associate's Degree from Bergen Community college
              and I'm currently employed at Trader Joe's while I study from home
              during the Covid-19 pandemic. I am an aspiring web devloper and
              genuinely enjoy studying the anatomy and functionality of
              computers.
              <br /> <br />
              Some of my hobbies include playing video games and board games,
              drawing, biking, hiking, and weight-training. I'm very much a dog
              person as I own two dogs, a French bulldog and an English bulldog.
              I hope to make a career out of web development one day!
            </p>
          </div>
        </Paper>
        </div> 
  );
}

export default About;
