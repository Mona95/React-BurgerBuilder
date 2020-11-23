import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  Burger: {
    width: "100%",
    margin: "auto",
    height: "250px",
    overflow: "visible",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: " 1.2rem",
    "@media (min-width: 1000px) and (min-height: 700px)": {
      Burger: {
        width: "700px",
        height: "600px",
      },
    },
  },
  "@media (min-width: 500px) and (min-height: 401px)": {
    Burger: {
      width: "450px",
      height: "400px",
    },
    "@media (min-width: 500px) and (min-height: 400px)": {
      Burger: {
        width: "350px",
        height: "300px",
      },
    },
  },
}));

export default useStyles;
