import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import FormContainer from "./pages/form/FormContainer";
import AllPost from "./pages/post/AllPost"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FormContainer/>}/>
      <Route path="/post" element={<AllPost/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
