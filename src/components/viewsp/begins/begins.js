import React from "react";
import "./index.css";
import {
  Grid,
  Box,
  Typography,
  Avatar,
  makeStyles,
  Button,
} from "@material-ui/core";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  larg: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  userName: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 40,
    },
    // [theme.breakpoints.between("xs", "sm")]: {
    //   fontSize: 20,
    // },//
  },
}));

const BackgroundImagePage = (profdata) => {
  const classes = useStyles();
  let history = useHistory();
  const imgLink = "/assets/img/av2.jpg";
  // const [openEdit, setOpenEdit] = useState(false);
  const editButt = () => {
    history.push("/editProfile");
    // history.push({
    //   pathname: "/dashboard/editProfile",
    //   //search: "?" + username,
    //   state: { proemail: profdata.profileEmail },
    // });
    // setOpenEdit(true);
  };
  return (
    <div className="bgg">
      <Fade right>
        <div className="centered">
          <Grid
            container
            direction="column"
            justify="flex-end"
            alignItems="center"
          >
            <Avatar
              src={imgLink}
              alignItems="center"
              className={classes.larg}
            />
            <Grid alignItems="center">
              <Box alignItems="center">
                <Typography
                  variant="h2"
                  component="p"
                  className={classes.userName}
                  style={{ alignItems: "center", textAlign: "center" }}
                >
                  {profdata.profileName}
                </Typography>
                <div style={{ alignItems: "center", textAlign: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={editButt}
                  >
                    Edit Profile
                  </Button>
                </div>

                {/* <Typography
                  variant="h6"
                  gutterBottom
                 
                  style={{ alignItems: "center", textAlign: "center" }}
                >
                  <Link
                    // href="#"
                    onClick={editButt}
                  >
                    Edit profile
                  </Link>
                </Typography> */}
              </Box>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </div>
  );
};
export default BackgroundImagePage;
