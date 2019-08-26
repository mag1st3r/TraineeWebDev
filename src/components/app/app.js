import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// import components
import Navbar from "../layout/navbar/navbar";
import Footer from "../layout/footer/footer";
import Home from "../pages/home/home";
import Projects from "../pages/projects/projects";
import Teams from "../pages/teams/teams";
import Users from "../pages/users/users";
import Articles from "../pages/articles/articles";
import About from "../pages/about/about";
import Contacts from "../pages/contacts/contacts";
import Notfound from "../pages/404/404";

// import styles
import "./app.css";
import RegisterPage from "../pages/register-page/register-page";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/projects" component={Projects} />
            <Route  path="/teams" component={Teams} />
            <Route  path="/users" component={Users} />
            <Route  path="/articles" component={Articles} />
            <Route  path="/about" component={About} />
            <Route  path="/contacts" component={Contacts} />
            <Route  path="/register" component={RegisterPage} />
            <Route component={Notfound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
