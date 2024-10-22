import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PortfolioHeader from "./components/PortfolioHeader";

function App() {
  

  return (
    <>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<PortfolioHeader/>} />
       </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
