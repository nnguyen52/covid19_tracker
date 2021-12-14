import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomeContextProvider from "./contexts/homeContext";
import Landing from "./routing/Landing";
import Home from "./components/Layout/Home";
import About from "./components/About";
import ChosenCountry from "./components/ChosenCountryReport/ChosenCountry";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";
import AdvancedStats from "./components/AdvancedStats/AdvancedStats";
import AdvancedStatsProvider from "./contexts/advancedStats";
function App() {
  return (
    <HomeContextProvider>
      <AdvancedStatsProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Switch>
            <Landing exact path="/" component={Home} />
            <Landing exact path="/documentation" component={About} />
            <Landing exact path="/advancedStats" component={AdvancedStats} />
            <Landing path="/country" component={ChosenCountry} />
          </Switch>
        </Router>
      </AdvancedStatsProvider>
    </HomeContextProvider>
  );
}

export default App;
