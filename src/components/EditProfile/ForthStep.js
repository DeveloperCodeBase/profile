import React, { useContext } from "react";
import { CssBaseline, Grid, makeStyles, Container } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const useStyles = makeStyles((theme) => ({
  container1: {
    display: "flex",
    // backgroundColor:'#e6e6e6',
    borderRadius: 10,

    elevation: "{10}",
    borderWidth: 2,
    borderColor: "#000",
    borderBlockColor: "#000",
    direction: "ltr",
  },

  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    elevation: "{3}",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    /// margin: theme.spaci//ng(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  input1: {
    display: "none",
  },
  texti: {
    // width: 250,
  },
}));

export default function ForthStepProfile({ profileData, setProfileData }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm" className={classes.container1}>
      <CssBaseline />
      <div className={classes.paper}>
        <ValidatorForm debounceTime={1500} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextValidator
                autoComplete="skills1"
                name="skills1"
                variant="outlined"
                //  required
                fullWidth
                id="skills1"
                label="skills1"
                autoFocus
                value={profileData["skills1"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    skills1: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextValidator
                autoComplete="skills2"
                name="skills2"
                variant="outlined"
                //  required
                fullWidth
                id="skills2"
                label="skills2"
                value={profileData["skills2"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    skills2: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextValidator
                autoComplete="skills3"
                name="skills3"
                variant="outlined"
                //  required
                fullWidth
                id="skills3"
                label="skills3"
                value={profileData["skills3"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    skills3: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextValidator
                autoComplete="skills4"
                name="skills4"
                variant="outlined"
                //  required
                fullWidth
                id="skills4"
                label="skills4"
                value={profileData["skills4"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    skills4: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
          </Grid>

          <Grid container justify="flex-end">
            <Grid item></Grid>
          </Grid>
        </ValidatorForm>
      </div>
    </Container>
  );
}
