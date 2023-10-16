import logo from "./logo.svg";
import Navbar from "./views/Navbar/Navbar";
import PageOne from "./views/Block1/PageOne";
import Horizontal from "./views/horizontal-strip/Horizontal";
import AboutUs from "./views/ Block2/AboutUs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <PageOne />
      <Horizontal />
      <AboutUs />
    </div>
  );
}

export default App;
