import {
  PRIMARY,
  WARNING,
  ERROR,
  INFO,
  ROSE,
  SECONDARY
} from "assets/jss/material-kit-react.jsx";

const badgeStyle = {
  badge: {
    marginRight: "3px",
    borderRadius: "12px",
    padding: "5px 12px",
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "1",
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    display: "inline-block"
  },
  primary: {
    backgroundColor: PRIMARY
  },
  warning: {
    backgroundColor: WARNING
  },
  danger: {
    backgroundColor: ERROR
  },
  success: {
    backgroundColor: INFO
  },
  info: {
    backgroundColor: INFO
  },
  rose: {
    backgroundColor: ROSE
  },
  gray: {
    backgroundColor: SECONDARY
  }
};

export default badgeStyle;
