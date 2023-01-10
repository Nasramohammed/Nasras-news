import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Homepage from "./components/HomePage";
import ArticlePage from "./components/ArticlePage";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
         <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article/:article_id" element={<ArticlePage />} />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
