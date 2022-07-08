import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import EmailIcon from "@material-ui/icons/Email";
import CakeIcon from "@material-ui/icons/Cake";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    direction: "ltr",
  },
}));

const Dividers = ({ profileName, freelance, profileEmail, dateBirth }) => {
  const classes = useStyles();

  return (
    <List align="left" className={classes.root} style={{ direction: "ltr" }}>
      <ListItem align="left" style={{ direction: "ltr" }}>
        <ListItemAvatar>
          <Avatar>
            <PermIdentityIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Name  " secondary={profileName} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Freelancer" secondary={freelance} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Email"
          secondary={profileEmail}
          style={{ wordWrap: "break-word" }}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CakeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Birth" secondary={dateBirth} />
      </ListItem>
    </List>
  );
};
export default Dividers;
