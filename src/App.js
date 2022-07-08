import "./styles.css";
import ThemeProvider from "./Material/PrimaryColor";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Profile from "./components/index";
import AddProfile from "./components/EditProfile/index";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Profile} exact />
        <Route path="/editProfile" component={AddProfile} />
      </Switch>
    </BrowserRouter>
  );
}
