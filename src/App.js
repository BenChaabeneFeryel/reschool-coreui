import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import DefaultLayout from './layout/admin/DefaultLayout'
import Login from './components/Login'
import Page404 from './Page404'
import DashboardRes from './components/responsable/DashboardRes'

const loading = (
  <div className="pt-3 text-center">
    <center>
      <div className="sk-spinner sk-spinner-pulse"></div>
    </center>
  </div>
)

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login" element={<Login />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route path="*" name="Accueil" element={<DefaultLayout />} />
            <Route path="/mon-dashboard" name="MonDashboard" element={<DashboardRes />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
