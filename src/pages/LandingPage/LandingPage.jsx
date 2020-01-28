import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaDiscord, FaGithub } from 'react-icons/fa';

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="OpenOSRS"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "primary"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/blue-flames.jpg")}>
          <div className={classes.container}>
            <GridContainer justify={"center"}>
              <h1 className={classes.title}>Welcome to OpenOSRS</h1>
              <h3>
                With our open source client, anything is possible in Old School Runescape
              </h3>
            </GridContainer>
            <GridContainer justify={"center"}>
              <br />
              <Button
                color="primary"
                size="lg"
                href="https://github.com/open-osrs/launcher/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub/>
                Download Latest Launcher
              </Button>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
