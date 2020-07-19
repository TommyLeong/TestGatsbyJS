import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import languageHelper from '../helpers/languageHelper'
import {storeLanguage, setLanguagePack} from '../redux/app'
import { connect } from 'react-redux'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                {this.props.languagePack.OrderingSystem}-About
              </Link>
              <Link className="navbar-item" to="/products">
              {this.props.languagePack.TableReservation}-Prod
              </Link>
              <Link className="navbar-item" to="/blog">
              {this.props.languagePack.Pricing}-Blog
              </Link>
              <Link className="navbar-item" to="/contact">
              {this.props.languagePack.Contact}-Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
              Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
            <button 
                onClick={()=>{
                  this.props.dispatch(storeLanguage('en'))
                  this.props.dispatch(setLanguagePack(languageHelper("cn")))
                }}>
                English
              </button>
              <button 
                onClick={()=>{
                  this.props.dispatch(setLanguagePack('de'))
                  this.props.dispatch(setLanguagePack(languageHelper("de")))
                }}>
                Deutsch
              </button>
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

// export default Navbar
export default connect(state => ({
  language: state.app.language,
  languagePack: state.app.languagePack
}), null)(Navbar)

