import "./assets/css/app.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./assets/page/HomePage";
import Details from "./assets/page/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/categories/:idc" component={Details} />
      </Router>
    </div>
  );
}

export default App;
