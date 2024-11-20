import "./App.css";
import BlogComponent from "./components/Blog/Blog";
import HeaderComponent from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="sticky-header">
        <HeaderComponent></HeaderComponent>
      </div>
      <div className="blog-container">
        <div className="left-sidebar">left sidebar</div>
        <div className="blog-list">
          <BlogComponent></BlogComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
