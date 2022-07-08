import React from "react";
import { makeStyles, Grid, Box, Typography } from "@material-ui/core";
import WebIcon from "@material-ui/icons/WebOutlined";
import Dividers from "../comp/Dividers";
import { PrettoSlider } from "../comp/SliderTool";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    direction: "ltr",
  },
  paper: {
    // padding: theme.spacing(1),
    // textAlign: "left",
    fontWeight: "fontWeightBold",
    fontSize: "19px",
    direction: "ltr",
  },
  button: {
    margin: theme.spacing(1),
    padding: "43px",
    fontSize: "72px",
    "&:hover": {
      background: "#3f51b5",
      color: "white",
    },
  },
  head: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 40,
    },
  },
  what: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
}));

const SpacingGrid = ({
  profileName,
  freelance,
  mainDescription,
  skills1,
  skills2,
  skills3,
  skills4,
  profileEmail,
  birth,
}) => {
  const classes = useStyles();

  const dataR = {
    profileName: profileName,
    freelance: freelance,
    profileEmail: profileEmail,
    dateBirth: birth,
  };
  function WebIcons(props) {
    return (
      <WebIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </WebIcon>
    );
  }
  //

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Box className={classes.paper} style={{ direction: "ltr" }}>
            <div align="left" style={{ direction: "ltr" }}>
              <Typography variant="h7" color="textSecondary">
                You know more about my resume with this info
              </Typography>
            </div>
          </Box>

          <Box className={classes.paper} align="left">
            <Typography variant="h7" component="p" color="textSecondary">
              {mainDescription}
            </Typography>
          </Box>
          <Box className={classes.paper}>
            <Dividers {...dataR}></Dividers>
          </Box>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRowTwo() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Box className={classes.paper}>
            <Box>
              <Typography variant="h4" color="primary" component="p">
                My skills{" "}
              </Typography>
            </Box>
            {skills1 && (
              <Box>
                <Typography variant="h6" color="textSecondary" component="p">
                  {skills1}
                </Typography>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={80}
                ></PrettoSlider>
              </Box>
            )}
            {skills2 && (
              <Box>
                <Typography variant="h6" color="textSecondary" component="p">
                  {skills2}
                </Typography>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={80}
                ></PrettoSlider>
              </Box>
            )}
            {skills3 && (
              <Box>
                <Typography variant="h6" color="textSecondary" component="p">
                  {skills3}
                </Typography>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={80}
                ></PrettoSlider>
              </Box>
            )}
            {skills4 && (
              <Box>
                <Typography variant="h6" color="textSecondary" component="p">
                  {skills4}
                </Typography>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={80}
                ></PrettoSlider>
              </Box>
            )}
          </Box>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={6}
        style={{ alignItems: "center", textAlign: "center" }}
      >
        <Grid container item xs={12}>
          <Box
            fontWeight="fontWeightLight"
            m={1}
            style={{ alignItems: "center", textAlign: "center" }}
          >
            <Typography
              className={classes.head}
              color="primary"
              variant="h3"
              style={{ alignItems: "center", textAlign: "center" }}
            >
              about me
            </Typography>
          </Box>
        </Grid>

        <Grid container item xs={12} md={6} spacing={2}>
          <FormRow />
        </Grid>

        <Grid container item direction="row" xs={12} md={6} spacing={2}>
          <FormRowTwo />
        </Grid>
      </Grid>
    </div>
  );
};
export default SpacingGrid;
