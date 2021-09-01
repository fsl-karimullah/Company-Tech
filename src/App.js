import "./App.css";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Pages/Homepage";
import About from "./components/Pages/About";
import Team from "./components/Pages/Team";
import Footer from './components/Layout/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={Team} />
        <Route exact path="*" component={Homepage} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
