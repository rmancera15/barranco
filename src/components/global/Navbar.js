import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import Menu from "../Home/Menu"
import SocialFollow from "./SocialFollow"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      { id: 1, path: "/", text: "Home" },
      { id: 2, path: "/about", text: "About" },
      { id: 2, path: "/menu", text: "Menu" },
    ],
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }

  scrollToMenu = () => {
    window.scrollTo(0, Menu)
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        {/* <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo"></img>
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <h5 className="text-white navbar-brand">Barranco</h5>

        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link
                    to={link.path}
                    className="nav-link text-capitalize text-white"
                  >
                    <h6>{link.text}</h6>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="navbar-brand">
          <SocialFollow />
        </div>
      </nav>
    )
  }
}
