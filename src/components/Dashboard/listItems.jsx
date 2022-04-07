/** @format */

import * as React from "react";
import PropTypes from "prop-types";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import EventNoteIcon from "@mui/icons-material/EventNote";

import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link as RouterLink } from "react-router-dom";

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? (
          <ListItemIcon sx={{ color: " #d37aaf" }}>{icon}</ListItemIcon>
        ) : null}
        <ListItemText sx={{ color: "#333" }}> {primary}</ListItemText>
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export const mainListItems = (
  <React.Fragment>
    <ListItemLink
      to="/dashboard"
      primary="Dashboard"
      icon={<DashboardIcon />}
    />
    <ListItemLink
      to="/messages"
      primary="Messages"
      color="secondary"
      icon={<EmailIcon />}
    />
    <ListItemLink to="/blogs" primary="Blogs" icon={<HistoryEduIcon />} />
    <ListItemLink
      to="/appointments"
      primary="Appointments"
      icon={<EventNoteIcon />}
    />
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
