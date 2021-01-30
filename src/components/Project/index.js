/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grow from "@material-ui/core/Grow";
import Button from "../Button/index";
import Typography from "@material-ui/core/Typography";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  container: {
    display: "flex",
  },
  card: {
    margin: theme.spacing(3),
    width: 320,
    height: 350,
  },
  description: {
    height:50
  },
  title: {
    textAlign: "center",
  }
}));

export default function SimpleGrow({ projects }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {projects.map((project) => (
          <Grow
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Card elevation={4} className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="170"
                  image={project.image}
                  title={project.name}
                />
                <CardContent>
                  <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                    {project.name}
                  </Typography>
                  <Typography
                    className={classes.description}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button className="btn" size="small" href={project.appLink}>Deployed Application</Button>
                <Button className="btn" size="small" href={project.repoLink}>Github Repo</Button>
              </CardActions>
            </Card>
          </Grow>
        ))}
      </div>
    </div>
  );
}
