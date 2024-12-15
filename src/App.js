import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookmarksComponent from "./components/Bookmarks/Bookmarks";
import DonateComponent from "./components/Donate/Donate";
import HistoryComponent from "./components/History/History";
import LayoutOutlet from "./components/LayoutOutlet/LayoutOutlet";
import PopularBlogsComponent from "./components/PopularBlogs/PopularBlogs";
import LoginComponent from "./pages/Auth/Login/Login";
import GithubCallback from "./pages/Auth/LoginCallback/GithubCallback";
import RegisterComponent from "./pages/Auth/Register/Register";
import HomeComponent from "./pages/Home/Home";
// import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  console.log(process.env);
  return (
    // <GoogleOAuthProvider clientId="533166697541-2c3lsjg71lneadlk70uf4f1m9ma4ptag.apps.googleusercontent.com">
    <Routes>
      <Route path="login" element={<LoginComponent />} />
      <Route path="register" element={<RegisterComponent />} />
      <Route path="/" element={<LayoutOutlet />}>
        <Route index element={<HomeComponent />} />
        <Route path="popular" element={<PopularBlogsComponent />} />
        <Route path="bookmarks" element={<BookmarksComponent />} />
        <Route path="history" element={<HistoryComponent />} />
        <Route path="donate" element={<DonateComponent />} />
      </Route>
      <Route path="auth/redirect" element={<GithubCallback />} />
    </Routes>
    // </GoogleOAuthProvider>
  );
}

export default App;
