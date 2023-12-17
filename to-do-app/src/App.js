// import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
// import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<LoginPage />} /> */}
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
