import React, { useEffect, useState, useContext } from "react";
// import "../style.css";
import SpacingGrid from "./viewsp/aboutme";
import {
  MuiThemeProvider,
  createMuiTheme,
  Container,
  Typography,
} from "@material-ui/core";
import indigo from "@material-ui/core/colors/indigo";
import green from "@material-ui/core/colors/green";
import Zoom from "react-reveal/Zoom";
import BackgroundImagePage from "./viewsp/begins/begins";
import Resume from "./viewsp/resume";
import LinearProgress from "@material-ui/core/LinearProgress";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: green,
  },
  status: {
    danger: "orange",
  },
  typography: {
    fontFamily: "Vazir",
  },
});

function Profile() {
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

  const [username] = useState("masoud.main@gmail.com");
  const [userInfo, setUserInfo] = useState("masoud.main@gmail.com");
  const [progress, setProgress] = useState(false);
  //
  useEffect(() => {}, []);
  return (
    <div className="App" style={{ direction: "ltr", background: "#fff" }}>
      {progress ? (
        <div align="center">
          <Typography variant="h6" gutterBottom>
            Please wait ...
          </Typography>
          <LinearProgress />
          <Typography variant="h6" gutterBottom>
            profile is loading
          </Typography>
        </div>
      ) : null}
      {!progress && (
        <div>
          <MuiThemeProvider theme={theme}>
            {profileData && profileData !== "no result"
              ? profileData.map((data) => (
                  <div key={data.id}>
                    <div>
                      <BackgroundImagePage {...data}></BackgroundImagePage>
                    </div>
                    <Zoom>
                      <Container>
                        <SpacingGrid {...data}></SpacingGrid>{" "}
                      </Container>
                      <Container>
                        <Resume {...data}></Resume>
                      </Container>
                    </Zoom>
                  </div>
                ))
              : null}
          </MuiThemeProvider>
        </div>
      )}
    </div>
  );
}

export default Profile;
