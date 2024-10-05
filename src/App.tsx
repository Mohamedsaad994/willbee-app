
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
// import AuthModule from './pages/Auth/AuthModule'
import AuthRoutes from './routes/authRoutes'


function App() {

  return (
  
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path='/*' element={<AuthRoutes />} />
      </Routes>
  
    
  )
}

export default App
