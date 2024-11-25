import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookmarksComponent from "./components/Bookmarks/Bookmarks";
import DonateComponent from "./components/Donate/Donate";
import HistoryComponent from "./components/History/History";
import Layout from "./components/Layout/Layout";
import PopularBlogsComponent from "./components/PopularBlogs/PopularBlogs";
import LoginComponent from "./pages/Auth/Login/Login";
import HomeComponent from "./pages/Home/Home";
import RegisterComponent from "./pages/Auth/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginComponent />} />
      <Route path="register" element={<RegisterComponent />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeComponent />} />
        <Route path="popular" element={<PopularBlogsComponent />} />
        <Route path="bookmarks" element={<BookmarksComponent />} />
        <Route path="history" element={<HistoryComponent />} />
        <Route path="donate" element={<DonateComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
