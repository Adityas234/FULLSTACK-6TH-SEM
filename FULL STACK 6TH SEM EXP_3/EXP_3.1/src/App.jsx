import { Routes, Route, Link } from 'react-router-dom'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'



function App() {
  return (
    <div>
      <h1>React Router – Vite Example</h1>

      <nav>
        <Link to="/">Page</Link> |{' '}
        <Link to="/about">DashBoard</Link> |{' '}
      </nav>

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
