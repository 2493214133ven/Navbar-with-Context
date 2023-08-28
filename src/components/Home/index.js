// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgClass = isDarkTheme
        ? 'home-card-container home-bg-color'
        : 'home-card-container'

      return (
        <>
          <Navbar />
          <div className={bgClass}>
            {isDarkTheme ? (
              <img
                className="home-img"
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
            ) : (
              <img
                className="home-img"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
            )}
            <h1 className="home-header">Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
