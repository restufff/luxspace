import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./assets/page/HomePage";
import Details from "./assets/page/Details";
import Cart from "./assets/page/Cart";
import Congratulation from "./assets/page/Congratulation";
import NotFound from "./assets/page/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories/:idc" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/congratulation" component={Congratulation} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
