import React, { Component } from "react";
import { Link } from "react-router-dom";

// import styles
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="orange">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex flex-row justify-content-between align-items-center">
                <div>
                  <Link
                    className="navbar-brand font-weight-bold text-light"
                    to="/"
                  >
                    <i className="fas fa-laptop pr-3" />
                    <span className="d-none d-md-inline">
                      Trainee WebDev Project
                    </span>
                  </Link>
                </div>

                <div className="d-flex flex-row">
                  <Link
                    className="nav-link text-light signup-btn"
                    to="/register"
                  >
                    Sign&nbsp;Up
                  </Link>
                  <Link className="nav-link text-light login-btn" to="/login">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <nav className="navbar navbar-light navbar-expand-lg site-navigation p-0">
            <button
              className="navbar-toggler my-3"
              type="button"
              data-toggle="collapse"
              data-target="#site-menu"
              aria-controls="site-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="site-menu">
              <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link">
                  Главная
                </Link>
                <Link to="/projects" className="nav-item nav-link">
                  Проекты
                </Link>
                <Link to="/teams" className="nav-item nav-link">
                  Команды
                </Link>
                <Link to="/users" className="nav-item nav-link">
                  Пользователи
                </Link>
                <Link to="/articles" className="nav-item nav-link">
                  Статьи
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  О&nbsp;проекте
                </Link>
                <Link to="/contacts" className="nav-item nav-link">
                  Контакты
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
