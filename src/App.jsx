import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Navigation from "./Components/Navigation";
import "./App.css";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
