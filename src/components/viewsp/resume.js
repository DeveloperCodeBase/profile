import React from "react";
import {
  Grid,
  Box,
  Typography,
  makeStyles,
  Card,
  CardContent,
} from "@material-ui/core";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 240,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  resume: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 50,
    },
  },
}));

const Resume = ({
  profileName,
  highSchool,
  bachelorsDegreeMajor,
  bachelorsDegreeUniversity,
  mastersDegreeMajor,
  mastersDegreeUniversity,
  doctorateDegreeMajor,
  doctorateDegreeUniversity,
  position1,
  workingPlace1,
  description1,
  position2,
  workingPlace2,
  description2,
  position3,
  workingPlace3,
  description3,
  profileEmail,
}) => {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12} align="left">
          <Box fontWeight="fontWeightLight" m={2} align="center">
            <Typography variant="h5" color="primary" component="p">
              Education Info
            </Typography>
          </Box>
          {doctorateDegreeUniversity && (
            <Fade left>
              <Box fontWeight="fontWeightLight" m={2}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      PHD
                    </Typography>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      className={classes.pos}
                      color="textSecondary"
                    >
                      University : {doctorateDegreeUniversity}
                    </Typography>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      variant="body2"
                      component="p"
                    >
                      Major : {doctorateDegreeMajor}
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Fade>
          )}
          {mastersDegreeUniversity && (
            <Fade left>
              <Box fontWeight="fontWeightLight" m={2}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Master Degree{" "}
                    </Typography>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      className={classes.pos}
                      color="textSecondary"
                    >
                      University : {mastersDegreeUniversity}
                    </Typography>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      variant="body2"
                      component="p"
                    >
                      Major : {mastersDegreeMajor}
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Fade>
          )}
          {bachelorsDegreeUniversity && (
            <Fade left>
              <Box fontWeight="fontWeightLight" m={2}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Bachelor
                    </Typography>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      className={classes.pos}
                      color="textSecondary"
                    >
                      University : {bachelorsDegreeUniversity}
                    </Typography>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      variant="body2"
                      component="p"
                    >
                      Major : {bachelorsDegreeMajor}
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Fade>
          )}
          {highSchool && (
            <Fade left>
              <Box fontWeight="fontWeightLight" m={2}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      variant="h5"
                      component="h2"
                    >
                      School
                    </Typography>

                    <Typography
                      style={{ wordWrap: "break-word" }}
                      variant="body2"
                      component="p"
                    >
                      Major : {highSchool}
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Fade>
          )}
        </Grid>
      </React.Fragment>
    );
  }

  function FormRowTwo() {
    return (
      <React.Fragment>
        <Grid item xs={12} align="left">
          <Box fontWeight="fontWeightLight" m={2} align="center">
            <Typography variant="h5" color="primary" component="p">
              Working Experience
            </Typography>
          </Box>

          {position1 && (
            <Fade right>
              <Box fontWeight="fontWeightLight" m={2}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      variant="h5"
                      component="h2"
                    >
                      Position : {position1}
                    </Typography>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      className={classes.pos}
                      color="textSecondary"
                    >
                      Office : {workingPlace1}
                    </Typography>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      variant="body2"
                      component="p"
                    >
                      Info : {description1}
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Fade>
          )}
          {position2 && (
            <Fade right>
              <Box fontWeight="fontWeightLight" m={2}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      variant="h5"
                      component="h2"
                    >
                      Position : {position2}
                    </Typography>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      className={classes.pos}
                      color="textSecondary"
                    >
                      Office : {workingPlace2}
                    </Typography>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      variant="body2"
                      component="p"
                    >
                      Info : {description2}
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Fade>
          )}
          {position3 && (
            <Fade right>
              <Box fontWeight="fontWeightLight" m={2}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      variant="h5"
                      component="h2"
                    >
                      Position : {position3}
                    </Typography>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      className={classes.pos}
                      color="textSecondary"
                    >
                      Office : {workingPlace3}
                    </Typography>
                    <Typography
                      style={{ wordWrap: "break-word" }}
                      variant="body2"
                      component="p"
                    >
                      Info : {description3}
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Fade>
          )}
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div>
      <Fade right>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <Grid>
            <Box fontWeight="fontWeightLight" m={3}>
              <Typography
                variant="h2"
                component="p"
                color="primary"
                className={classes.resume}
              >
                Resume
              </Typography>
            </Box>
          </Grid>
          <Grid>
            <Box fontWeight="fontWeightLight" m={4}>
              <Typography variant="h6" color="textSecondary" component="p">
                Please check my resume for more cooperation{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Fade>
      <Grid container spacing={6} style={{ alignItems: "center" }}>
        <Grid container item xs={12} md={6} spacing={2}>
          <FormRow></FormRow>
        </Grid>

        <Grid container item xs={12} md={6} spacing={2}>
          <FormRowTwo> </FormRowTwo>
        </Grid>
      </Grid>
    </div>
  );
};
export default Resume;
