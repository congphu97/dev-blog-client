import "./App.css";
import LoginComponent from "./components/Auth/Login/Login";
import RegisterComponent from "./components/Auth/Register/Register";
import BlogComponent from "./components/Blog/Blog";
import HeaderComponent from "./components/Header/Header";
import PopularBlogsComponent from "./components/PopularBlogs/PopularBlogs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="sticky-header">
        <HeaderComponent></HeaderComponent>
      </div>
      <div className="blog-container">
        <div className="left-sidebar">left sidebar</div>
        <div className="blog-list">
          <Router>
            <Routes>
              <Route path="/" element={<BlogComponent />} />
              <Route path="/popular" element={<PopularBlogsComponent />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/register" element={<RegisterComponent />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
