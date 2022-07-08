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

export default function SecondStepProfile({ profileData, setProfileData }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm" className={classes.container1}>
      <CssBaseline />
      <div className={classes.paper}>
        <ValidatorForm debounceTime={1500} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextValidator
                autoComplete="highSchool"
                name="highSchool"
                variant="outlined"
                //  required
                fullWidth
                id="highSchool"
                label="Highschool Major"
                autoFocus
                value={profileData["highSchool"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    highSchool: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                autoComplete="bachelorsDegreeMajor"
                name="bachelorsDegreeMajor"
                variant="outlined"
                //  required
                fullWidth
                className={classes.texti}
                id="bachelorsDegreeMajor"
                label="Bachelors Degree Major"
                autoFocus
                value={profileData["bachelorsDegreeMajor"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    bachelorsDegreeMajor: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                autoComplete="bachelorsDegreeUniversity"
                name="bachelorsDegreeUniversity"
                variant="outlined"
                //  required
                fullWidth
                id="bachelorsDegreeUniversity"
                label="Bachelors Degree University"
                autoFocus
                value={profileData["bachelorsDegreeUniversity"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    bachelorsDegreeUniversity: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                autoComplete="mastersDegreeMajor"
                name="mastersDegreeMajor"
                variant="outlined"
                //  required
                fullWidth
                id="mastersDegreeMajor"
                label="Masters Degree Major"
                autoFocus
                value={profileData["mastersDegreeMajor"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    mastersDegreeMajor: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                autoComplete="mastersDegreeUniversity"
                name="mastersDegreeUniversity"
                variant="outlined"
                //  required
                fullWidth
                id="mastersDegreeUniversity"
                label="Masters Degree University"
                autoFocus
                value={profileData["mastersDegreeUniversity"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    mastersDegreeUniversity: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                autoComplete="doctorateDegreeMajor"
                name="doctorateDegreeMajor"
                variant="outlined"
                //  required
                fullWidth
                id="doctorateDegreeMajor"
                label="Doctorate Degree Major"
                autoFocus
                value={profileData["doctorateDegreeMajor"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    doctorateDegreeMajor: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                autoComplete="doctorateDegreeUniversity"
                name="doctorateDegreeUniversity"
                variant="outlined"
                //  required
                fullWidth
                id="doctorateDegreeUniversity"
                label="Doctorate Degree University"
                autoFocus
                value={profileData["doctorateDegreeUniversity"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    doctorateDegreeUniversity: e.target.value,
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
