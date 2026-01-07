import Header from "./Components/Header";
import Main from "./Components/Main";
import Navigation from "./Components/Navigation";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/articles/" element={<Main />} />
        <Route path="/topics/" element={<Main />} />
        <Route path="/users/" element={<Main />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
