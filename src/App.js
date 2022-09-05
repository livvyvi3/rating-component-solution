import "./App.css";
import Rating from "./components/ratings/ratings";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thankyou from "./components/thank_you/thank_you";

function App() {
  const [rate, setRate] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Rating
                rate={rate}
                setRate={setRate}
              />
            }
          />
          <Route path="thankyou" element={<Thankyou rate={rate} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;