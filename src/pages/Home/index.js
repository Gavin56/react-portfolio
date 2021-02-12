import { makeStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import Container from "../../components/Container/index";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import "./style.css";

function About() {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100%",
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
        paddingBottom: 50,
      },
    },
    fontFamily: "Chivo",
  }));

  const classes = useStyles();
  const checked = true;

  return (
    <div>
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <Paper id="paper" className={classes.paper}>
          <div>
            <h1>Welcome. Thank you for checking out my work.</h1>

            <div id="image-div">
              <img
                id="my-photo"
                src="https://github.com/Gavin56/images/blob/main/portfolio-placeholder-photo-square.jpg?raw=true"
                alt="Me, sitting"
              ></img>
            </div>

            <Container>
              <div id="transparent-backdrop">
                <p id="about">
                  My name is Gavin O'Brien. I was born and raised in New Jersey.
                  I currently have an Associate's Degree from Bergen Community
                  college and will be attending the New Jersey Institute of
                  Technology in the Fall. I am an aspiring web developer with
                  great interest in developing apps that are equally aesthetic
                  as they are functional.
                  {/* Check out some of my applications over here:
                <IconButton>
                  <DoubleArrowIcon
                  color="primary"
                  fontSize="large"
                  >
                  </DoubleArrowIcon>
                </IconButton> */}
                </p>

                <div id="contact-info">
                  <strong style={{ fontStyle: "italic", fontSize: 20 }}>
                    Contact me:
                  </strong>
                  <br />
                  GavinOBrien56@gmail.com
                  <br />
                  (201) 414-6122
                </div>
              </div>
            </Container>
          </div>
        </Paper>
      </Grow>
    </div>
  );
}

export default About;
