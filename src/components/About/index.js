// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgCss = isDarkTheme
        ? 'about-card-container about-bg-color'
        : 'about-card-container'

      return (
        <>
          <Navbar />
          <div className={bgCss}>
            {isDarkTheme ? (
              <img
                className="about-img"
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
            ) : (
              <img
                className="about-img"
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
            )}
            <h1 className="about-header">About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
