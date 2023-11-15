import { BrowserRouter, Route, Routes } from "react-router-dom";
import './css/App.css';

import MainPage from './pages/index.js'
import Header from './components/header.js'

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< MainPage />} />
        </Routes>
      </BrowserRouter>

    </div>
      
  );
}

export default App;
