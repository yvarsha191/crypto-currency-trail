import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./6.png)",
  },
  bannerContent: {
    height: 500,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
    backgroundRepeat:"no-repeat"
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner} >
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Trail
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              fontSize:"18px",
              color: "rgb(218 255 220)",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Now its easier to track your favourite crypto!
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
