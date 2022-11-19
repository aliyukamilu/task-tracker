import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Homes from './components/Home'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
