import Header from "./Components/Header";
import Main from "./Components/Main";
import Navigation from "./Components/Navigation";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import ArticlesPage from "./Components/Articles/ArticlesPage";
import ArticlesSinglePage from "./Components/Articles/ArticlesSinglePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/topics" element={<Main />} />
        <Route path="/users" element={<Main />} />
        <Route path="/articles/:articleId" element={<ArticlesSinglePage />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
