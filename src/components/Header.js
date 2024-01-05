import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar"
const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  background: {
    backgroundColor: "#0f182b",
  },
}));
function Header() {
  const classes = useStyles();
  const { currency, setCurrency, user } = CryptoState();

  const history = useHistory();

  return (
    <AppBar
      color="transparent"
      className={classes.background}
      position="static"
    >
      <Container>
        <Toolbar>
          <Typography
            onClick={() => history.push(`/`)}
            variant="h6"
            className={classes.title}
          >
            Crypto Trail
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Select
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            style={{ width: 100, height: 40, marginLeft: 15 }}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>

          {user ? <UserSidebar/> : <AuthModal />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
