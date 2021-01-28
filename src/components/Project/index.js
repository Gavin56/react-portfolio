/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: 180,
  },
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing(3),
    width: 400,
    height: 400,
  },
  // polygon: {
  //   fill: theme.palette.common.white,
  //   stroke: theme.palette.divider,
  //   strokeWidth: 1,
  // },
}));

export default function SimpleGrow() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  //   const handleChange = () => {
  //     setChecked((prev) => !prev);
  //   };

  return (
    <div className={classes.root}>
      {/* <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      /> */}
      <div className={classes.container}>
        <Grow in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <div className="project-tile">
              <h3>Project Title</h3>
              <p>Project Description</p>
              <div className="fill">
                <img
                  className="project-image"
                  alt="Weather App"
                  src="https://github.com/Gavin56/images/blob/main/Webp.net-resizeimage%20(1).png?raw=true"
                ></img>
              </div>
              <a>Link 1</a>
              <a>Link 2</a>
            </div>
          </Paper>
        </Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Paper elevation={4} className={classes.paper}>
            <div className="project-tile">Hello</div>
          </Paper>
        </Grow>

        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Paper elevation={4} className={classes.paper}>
            <div className="project-tile">Hello</div>
          </Paper>
        </Grow>
      </div>
    </div>
  );
}
