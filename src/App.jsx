import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProtectedRoutes } from './components/ProtectedRoutes'

import Homes from './components/Home'
import Login from './pages/Login'
import AddingTaskModal from './components/AddingTaskModal'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add" element={<ProtectedRoutes><AddingTaskModal /></ProtectedRoutes>} exact />
        <Route path="/" element={<Homes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
