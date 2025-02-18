// CSS IMPORT
import "./assets/CSS/style.css";
import "./assets/CSS/responsive.css";
import { Home } from "./screen";
import { Header, Footer } from "./component";
function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
