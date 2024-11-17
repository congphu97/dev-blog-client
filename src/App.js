import "./App.css";
import HeaderComponent from "./components/Header/Header";
import ContentComponent from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <div className="sticky-header">
        <HeaderComponent></HeaderComponent>
      </div>
      <div className="content-container">
        <div className="left-sidebar">left sidebar</div>
        <div className="main-content">
          <ContentComponent></ContentComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
