import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { AuthProvider, AuthContext } from './context/auth'

const AppRoutes = () => {

  const Private = ({ children }) => {

    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className='loading'>Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to={"/login"} />;
    }
    return children;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path="/" element={
            <Private>
              <HomePage />
            </Private>
          } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default AppRoutes