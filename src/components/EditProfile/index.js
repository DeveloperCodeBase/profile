import React, { useContext, useEffect, useState } from "react";
import {
  makeStyles,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";
import FirstStepProfile from "./FirstStep";
import SecondStepProfile from "./SecondStep";
import ThirdStepProfile from "./ThirdStep";
import ForthStepProfile from "./ForthStep";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  // return ["اطلاعات اولیه", "اطلاعات تحصیلی", "تجربه کاری", "مهارت های من"];
  return ["First Info", "Education Info", "Working Experience", "My Skills"];
}

function getStepContent(step) {
  const [profileData, setProfileData] = useState([
    {
      id: 34,
      profileName: "masoud bakhshi",
      freelance: "Available",
      profileEmail: "masoud.main@gmail.com",
      birth: null,
      mainDescription: "Im ready to get this project done",
      highSchool: "math",
      bachelorsDegreeMajor: "Software engineering",
      bachelorsDegreeUniversity: "ferdowsi university of mashhad",
      mastersDegreeMajor: "Software engineering",
      mastersDegreeUniversity: "shahid beheshti university of tehran",
      doctorateDegreeMajor: null,
      doctorateDegreeUniversity: null,
      position1: "developer of https://www.devcodebase.com",
      workingPlace1: "devcodebase",
      description1: "see yourself https://www.devcodebase.com",
      position2: null,
      workingPlace2: null,
      description2: null,
      position3: null,
      workingPlace3: null,
      description3: null,
      skills1: "react js",
      skills2: "node js",
      skills3: "mongo db",
      skills4: "mysql",
      useremail: null,
      imagep: null,
    },
  ]);
  switch (step) {
    case 0:
      return (
        <FirstStepProfile
          profileData={profileData}
          setProfileData={setProfileData}
        />
      );
    case 1:
      return (
        <SecondStepProfile
          profileData={profileData}
          setProfileData={setProfileData}
        />
      );
    case 2:
      return (
        <ThirdStepProfile
          profileData={profileData}
          setProfileData={setProfileData}
        />
      );
    case 3:
      return (
        <ForthStepProfile
          profileData={profileData}
          setProfileData={setProfileData}
        />
      );
    default:
      throw new Error("Unknown step");
  }
}
//
export default function AddProfile() {
  const submitProfile = () => {};
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  useEffect(() => {}, []);
  const handleNext = () => {
    if (activeStep === 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 2) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 3) {
      submitProfile();
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps are completed</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Edit Profile
          </Button>
        </Paper>
      )}
    </div>
  );
}
