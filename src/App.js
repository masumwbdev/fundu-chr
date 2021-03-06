import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
