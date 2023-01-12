import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import {
  Header,
  UsersPage,
  TopicsPage,
  Navbar,
  HomePage,
  ArticlePage
} from './components/index';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:article_id" element={<ArticlePage />} />
          <Route path="/topics" element={<TopicsPage />} />
           <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
