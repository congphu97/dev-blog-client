import "./App.css";
import LoginComponent from "./components/Auth/Login/Login";
import RegisterComponent from "./components/Auth/Register/Register";
import BlogComponent from "./components/Blog/Blog";
import HeaderComponent from "./components/Header/Header";
import MenuComponent from "./components/Menu/Menu";
import PopularBlogsComponent from "./components/PopularBlogs/PopularBlogs";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="sticky-header">
        <HeaderComponent></HeaderComponent>
      </div>
      <div className="blog-container">
        <div className="left-sidebar">
          <MenuComponent></MenuComponent>
        </div>
        <div className="blog-list">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<BlogComponent />} />
            <Route path="/popular" element={<PopularBlogsComponent />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
