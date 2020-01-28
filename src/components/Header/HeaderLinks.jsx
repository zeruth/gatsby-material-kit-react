/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// React icons
import { FaDiscord, FaGithub } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            /*
            <Link to="/" className={classes.dropdownLink}>
              Home
            </Link>,*/
            <a
              href="https://github.com/open-osrs/runelite"
              target="_blank"
              className={classes.dropdownLink}
            >
              runelite
            </a>,
            <a
              href="https://github.com/open-osrs/launcher"
              target="_blank"
              className={classes.dropdownLink}
            >
              launcher
            </a>,
            <a
              href="https://github.com/open-osrs/hosting"
              target="_blank"
              className={classes.dropdownLink}
            >
              hosting
            </a>,
            <a
              href="https://github.com/open-osrs/openosrs-injector"
              target="_blank"
              className={classes.dropdownLink}
            >
              openosrs-injector
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://github.com/open-osrs/launcher/releases/latest"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download Latest Launcher
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="discord"
          title="Join our Discord"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://discord.gg/OpenOSRS"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaDiscord/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github"
          title="Browse our github repos"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.github.com/open-osrs"
            target="_blank"
            className={classes.navLink}
          >
            <FaGithub/>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
