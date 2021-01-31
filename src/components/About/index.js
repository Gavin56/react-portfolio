import { makeStyles, withTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "./style.css"
import Particles from "react-tsparticles";

function About() {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100%',
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
        background: "#230a2b",
        
      },
      //   position: "fixed",
      //   top: 40, /* Header Height */
      //   bottom: 20, /* Footer Height */
      //   width: "50%"`
    },
    paper: {
      color: "white",
    },
    image: {
      height: 600,
      borderRadius: 50,
      float: "left",
      marginRight: 50,
    },
    about: {
      color: "white",
    },
    fontFamily: "Chivo",
  }));

  const classes = useStyles();

  return (
    // <Particles
    //   id="tsparticles"
    //   options={{
    //     background: {
    //       // linearGradient:("#230a2b", "#0000"),
    //       color: {
    //         value: "#230a2b",
    //       },
    //     },
    //     fpsLimit: 60,
    //     interactivity: {
    //       detectsOn: "canvas",
    //       events: {
    //         onClick: {
    //           enable: true,
    //           mode: "push",
    //         },
    //         onHover: {
    //           enable: true,
    //           mode: "repulse",
    //         },
    //         resize: true,
    //       },
    //       modes: {
    //         bubble: {
    //           distance: 400,
    //           duration: 2,
    //           opacity: 0.8,
    //           size: 40,
    //         },
    //         push: {
    //           quantity: 4,
    //         },
    //         repulse: {
    //           distance: 100,
    //           duration: 0.4,
    //         },
    //       },
    //     },
    //     particles: {
    //       color: {
    //         value: "#2eb3b0",
    //       },
    //       links: {
    //         color: "#ffffff",
    //         distance: 150,
    //         enable: true,
    //         opacity: 0.5,
    //         width: 1,
    //       },
    //       collisions: {
    //         enable: true,
    //       },
    //       move: {
    //         direction: "none",
    //         enable: true,
    //         outMode: "bounce",
    //         random: false,
    //         speed: 2,
    //         straight: false,
    //       },
    //       number: {
    //         density: {
    //           enable: true,
    //           value_area: 1000,
    //         },
    //         value: 80,
    //       },
    //       opacity: {
    //         value: 0.5,
    //       },
    //       shape: {
    //         type: "circle",
    //       },
    //       size: {
    //         random: true,
    //         value: 5,
    //       },
    //     },
    //     detectRetina: true,
    //   }}
    // >
    <div className={classes.root}>
      <Paper variant="outlined">
        ``
        <div>
          <h1 className={classes.paper}>
            Hello, I'm Gavin. Thank you for checking out my work.
          </h1>
          <img 
            className={classes.image}
            src="https://lh3.googleusercontent.com/pw/ACtC-3f8UlBk_doTYMrS7x07jLtCn6D2e2I7LVeKy0j1a8px4Y_iYm8163EZsBE1sqZu8R_8v1SD0rFZv1Zn6nCa0jEbAEcwu6JOExetuQX5390qPvDC1EEE_ojFmTHia-zlyw4ipcDcm-OmCSG46-M8u0L_=w675-h899-no?authuser=0"
          ></img>
          <p className={classes.about}>
            My name is Gavin O'Brien. I was born and raised in New Jersey. I
            currently have an Associate's Degree from Bergen Community college
            and I'm currently employed at Trader Joe's while I study from home
            during the Covid-19 pandemic. I am an aspiring web devloper and
            genuinely enjoy studying the anatomy and functionality of computers.
            <br /> <br />
            Some of my hobbies include playing video games and board games,
            drawing, biking, hiking, and weight-training. I'm very much a dog
            person as I own two dogs, a French bulldog and an English bulldog. I
            hope to make a career out of web development one day!
          </p>
        </div>
      </Paper>
    </div>
    // </Particles>
  );
}

export default About;
