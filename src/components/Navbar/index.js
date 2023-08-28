// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navCss = isDarkTheme
        ? 'navbar-card-container navbar-bg-color'
        : 'navbar-card-container'
      const navLinkCss = isDarkTheme
        ? 'navbar-link-route navbar-link-color'
        : 'navbar-link-route'

      return (
        <nav className={navCss}>
          <nav className="navbar-card">
            <Link to="/">
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="light-website-logo"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="light-website-logo"
                />
              )}
            </Link>
            <ul className="navbar-links-container">
              <li className="navbar-route-card">
                <Link className={navLinkCss} to="/">
                  <p>Home</p>
                </Link>
              </li>
              <li className="navbar-route-card">
                <Link className={navLinkCss} to="/about">
                  <p>About</p>
                </Link>
              </li>
            </ul>
            <button
              data-testid="theme"
              type="button"
              onClick={toggleTheme}
              className="navbar-button"
            >
              {isDarkTheme ? (
                <img
                  className="theme-logo"
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                />
              ) : (
                <img
                  className="theme-logo"
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                />
              )}
            </button>
          </nav>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
