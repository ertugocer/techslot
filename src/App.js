import React, { Component, Suspense } from 'react'
import {BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/navbar'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">helooo</div>
  </div>
)

// Pages
const Home = React.lazy(() => import('./pages/homepage'))
const Media = React.lazy(() => import('./components/slagon'))
const Blog = React.lazy(() => import('./components/mison'))
const Pricing = React.lazy(() => import('./components/innovation.js'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Navbar />
          <Routes> 
          <Route exact path="*" name="Home Page" element={<Home />} />
          <Route exact path="/Pricing" element={<Media />} />
          <Route exact path="/blog" element={<Pricing />} />
          <Route exact path="/media" element={<Blog />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App