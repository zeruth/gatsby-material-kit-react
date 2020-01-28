import {
  PRIMARY,
  SECONDARY,
  INFO,
  WARNING,
  ERROR,
  ROSE,
  title
} from "assets/jss/material-kit-react.jsx";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: PRIMARY
  },
  warning: {
    color: WARNING
  },
  danger: {
    color: ERROR
  },
  success: {
    color: INFO
  },
  info: {
    color: INFO
  },
  rose: {
    color: ROSE
  },
  gray: {
    color: SECONDARY
  },
  icon: {
    width: "36px",
    height: "36px"
  },
  descriptionWrapper: {
    color: SECONDARY,
    overflow: "hidden"
  },
  title,
  description: {
    color: SECONDARY,
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "14px"
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  }
};

export default infoStyle;
