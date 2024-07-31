import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";

function App() {

  return (
    <>
  
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>

    </>
  )
}

export default App
