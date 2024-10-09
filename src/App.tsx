
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
// import AuthModule from './pages/Auth/AuthModule'
import AuthRoutes from './routes/authRoutes'
import CartRoutes from './routes/cartRoutes'


function App() {

  return (
  
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path='/*' element={<AuthRoutes />} />
        <Route path='/cart/*' element={<CartRoutes />} />

      </Routes>
  
    
  )
}

export default App
