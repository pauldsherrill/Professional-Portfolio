import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import background from "./assets/background.mp4";

function App() {
  return (
    <div className="app-container">
      <div className="video-container">
        <video autoPlay muted loop>
          <source src={background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
