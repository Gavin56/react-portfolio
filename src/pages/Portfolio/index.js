import Header from "../../components/Header/index";
import Grid from "../../components/Grid/index";
import projects from "../../utils/JSON";

function Portfolio() {
  return (
    <div>
      <Header value={1}></Header>
      <Grid projects={projects}></Grid>
    </div>
  );
}

export default Portfolio;
