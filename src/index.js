import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import MacBookAir2 from './views/mac-book-air2'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={MacBookAir2} exact path="/mac-book-air2" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
