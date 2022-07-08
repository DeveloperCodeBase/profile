import React from "react";
import {
  CssBaseline,
  TextField,
  Grid,
  makeStyles,
  Container,
  InputLabel,
  FormControl,
  Select,
  IconButton,
  Tooltip,
  Avatar,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: theme.palette.primary.main,
  // },
  avatar: {
    backgroundColor: red[500],
    transition: "all 0.2 ease-in-out",
    "&:hover": {
      transform: "scale(1.2)",
      transition: " all 0.2 ease-in-out",
      cursor: "pointer",
    },
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
  faceImage: {
    color: theme.palette.primary.light,
  },
}));

export default function FirstStepProfile({ profileData, setProfileData }) {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [imageS, setImageS] = React.useState(null);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCapture = ({ target }) => {
    setProfileData({
      ...profileData,
      imagep: target.files[0],
    });

    setSelectedFile(target.files[0]);
    setImageS(URL.createObjectURL(target.files[0]));
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.container1}>
      <CssBaseline />
      <div className={classes.paper}>
        <ValidatorForm debounceTime={1500} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextValidator
                autoComplete="pname"
                name="profileName"
                variant="outlined"
                //  required
                fullWidth
                id="profileName"
                label="Profile Name"
                autoFocus
                value={profileData["profileName"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    profileName: e.target.value,
                  })
                }
                // /validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Freelancer
                </InputLabel>
                <Select
                  native
                  fullWidth
                  label="Freelancer"
                  value={profileData["freelance"]}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      freelance: e.target.value,
                    })
                  }
                >
                  <option aria-label="None" value="" />
                  <option value={"Free"}>Free</option>
                  <option value={"Busy"}>Busy</option>
                  <option value={"Complicated"}>Complicated</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextValidator
                autoComplete="pemail"
                name="email"
                variant="outlined"
                //  required
                fullWidth
                id="email"
                label="email"
                value={profileData["profileEmail"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    profileEmail: e.target.value,
                  })
                }
                // validators={['required', 'matchRegexp:^[a-zA-Z]+ +$']}
                // errorMessages={['this field is required','correct it please']}
              />
            </Grid>

            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent="space-around">
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="More Info"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                value={profileData["mainDescription"]}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    mainDescription: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid item xs={12}>
              <>
                <input
                  accept="image/jpeg"
                  className={classes.input1}
                  id="faceImage"
                  type="file"
                  onChange={handleCapture}
                />
                <Tooltip title="Select Profile Image">
                  <label htmlFor="faceImage">
                    <IconButton
                      className={classes.faceImage}
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <Avatar
                        id="target"
                        aria-label="recipe"
                        className={classes.avatar}
                        src={imageS}
                        //  onClick={profileDem}
                      >
                        MB
                      </Avatar>
                      <PhotoCamera fontSize="large" />
                    </IconButton>
                  </label>
                </Tooltip>
                <label>
                  {selectedFile ? selectedFile.name : "Choose Info"}
                </label>
                . . .
              </>
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
