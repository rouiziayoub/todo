import React from "react";
import { Route, Routes, topbar } from "react-router-loading"
import Header from "./components/Header";
import AddTask from "./pages/AddTask";
import Home from "./pages/Home";
topbar.config({
  barColors: {
    0: 'rgba(26,  188, 156, .7)',
    .3: 'rgba(41,  128, 185, .7)',
    1.0: 'rgba(231, 76,  60,  .7)'
  },
});


function App() {
  return (


    <>
      <Header />
      <Routes maxLoadingTime={500}>

        <Route path="/Add-task" element={<AddTask />} loading />
        <Route path="/Home" element={<Home />} loading />
      </Routes>
    </>
  )
}

export default App;
