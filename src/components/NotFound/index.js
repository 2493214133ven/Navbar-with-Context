// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgCls = isDarkTheme
        ? 'not-card-container background-color'
        : 'not-card-container'
      const tryAnotherWay = isDarkTheme
        ? 'dark-look-for-another'
        : 'light-look-for-another'
      return (
        <>
          <Navbar />
          <div className={bgCls}>
            <img
              className="not-found-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className="lost-your-way">Lost Your Way?</h1>
            <p className={tryAnotherWay}>
              We cannot seem to find the page your are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
