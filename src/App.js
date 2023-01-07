import React from 'react'
import StartedPage from './Pages/StartedPage'
import WeatherPage from './Pages/WeatherPage'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<StartedPage></StartedPage>}></Route>
          <Route path='/weatherpage' element={<WeatherPage></WeatherPage>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
