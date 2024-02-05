import React, { Component, Suspense } from 'react'
import {BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">helooo</div>
  </div>
)

// Pages
const Home = React.lazy(() => import('./pages/homepage'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="*" name="Home Page" element={<Home />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App