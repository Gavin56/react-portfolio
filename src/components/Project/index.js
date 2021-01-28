/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
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
            {/* <svg className={classes.svg}>
              <polygon
                points="0,100 50,00, 100,100"
                className={classes.polygon}
              />
            </svg> */}

            <div className="col mb-4">
              <div className="card bg-dark">
                <div className="image-container">
                  <a href="https://gavin56.github.io/weatherman/">
                    <img
                      src="https://github.com/Gavin56/images/blob/main/Webp.net-resizeimage%20(1).png?raw=true"
                      className="img-fluid"
                      alt="Weather App Screenshot"
                    />
                  </a>

                  <a
                    href="https://gavin56.github.io/weatherman/"
                    className="image-text"
                  >
                    Visit Application Page
                  </a>
                </div>

                <div className="card-body">
                  <h5 className="card-header bg-secondary">Weather App</h5>

                  <button
                    className="btn btn-info"
                    type="button"
                    data-toggle="collapse"
                    data-target="#weatherAppInfo"
                    aria-expanded="false"
                    aria-controls="weatherAppInfo"
                  >
                    View Info
                  </button>

                  <div className="collapse" id="weatherAppInfo">
                    <div className="card card-body bg-dark" id="weatherInfoBox">
                      <p className="card-text">
                        Find the weather forecast for up to 5 days out in cities
                        around the world.
                      </p>

                      <div className="card-body">
                        <a
                        //   style="color:rgb(0, 202, 202);"
                          href="https://gavin56.github.io/weatherman/"
                          target="_blank"
                          className="card-link"
                        >
                          Deployed Application
                        </a>

                        <br />
                        <br />

                        <a
                        //   style="color:rgb(0, 202, 202);"
                          href="https://github.com/Gavin56/weatherman"
                          target="_blank"
                          className="card-link"
                        >
                          Github Repo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <svg className={classes.svg}>
              <polygon
                points="0,100 50,00, 100,100"
                className={classes.polygon}
              />
            </svg>
          </Paper>
        </Grow>
      </div>
    </div>
  );
}
