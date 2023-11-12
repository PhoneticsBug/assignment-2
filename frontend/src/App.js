import { BrowserRouter, Route, Routes } from "react-router-dom";
import './css/App.css';

import ChartPage from './pages/chartpage.js'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< ChartPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
