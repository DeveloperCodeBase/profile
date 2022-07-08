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

export default function ThirdStepProfile({ profileData, setProfileData }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm" className={classes.container1}>
      <CssBaseline />
      <div className={classes.paper}>
        <ValidatorForm debounceTime={1500} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextValidator
                autoComplete="Position1"
                name="Position1"
                variant="outlined"
                //  required
                fullWidth
                id="Position1"
                label="Position1"
                autoFocus
                value={profileData["position1"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    position1: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                autoComplete="WorkingPlace1"
                name="WorkingPlace1"
                variant="outlined"
                //  required
                fullWidth
                className={classes.texti}
                id="WorkingPlace1"
                label="WorkingPlace1"
                value={profileData["workingPlace1"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    workingPlace1: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextValidator
                autoComplete="description1"
                name="description1"
                variant="outlined"
                //  required
                fullWidth
                id="description1"
                label="description1"
                value={profileData["description1"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    description1: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                autoComplete="Position2"
                name="Position2"
                variant="outlined"
                //  required
                fullWidth
                id="Position2"
                label="Position2"
                value={profileData["position2"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    position2: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                autoComplete="WorkingPlace2"
                name="WorkingPlace2"
                variant="outlined"
                //  required
                fullWidth
                className={classes.texti}
                id="WorkingPlace2"
                label="WorkingPlace2"
                value={profileData["workingPlace2"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    workingPlace2: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextValidator
                autoComplete="description2"
                name="description2"
                variant="outlined"
                //  required
                fullWidth
                id="description2"
                label="description2"
                value={profileData["description2"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    description2: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                autoComplete="Position3"
                name="Position3"
                variant="outlined"
                //  required
                fullWidth
                id="Position3"
                label="Position3"
                value={profileData["position3"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    position3: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                autoComplete="WorkingPlace3"
                name="WorkingPlace3"
                variant="outlined"
                //  required
                fullWidth
                className={classes.texti}
                id="WorkingPlace3"
                label="WorkingPlace3"
                value={profileData["workingPlace3"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    workingPlace3: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextValidator
                autoComplete="description3"
                name="description3"
                variant="outlined"
                //  required
                fullWidth
                id="description3"
                label="description3"
                value={profileData["description3"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    description3: e.target.value,
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
