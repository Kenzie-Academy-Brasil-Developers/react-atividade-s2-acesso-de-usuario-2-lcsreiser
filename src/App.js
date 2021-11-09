import "./App.css";
import { Switch, Route } from "react-router-dom";
import Company from "./pages/company/index.jsx";
import Customer from "./pages/customer/index.jsx";
import Home from "./components/Home/index.jsx";
import { members } from "./Array.js";

function App() {
  return (
    <div className="divContainer">
      <Switch>
        <Route exact path="/customer/:id">
          <Customer members={members} />
        </Route>
        <Route exact path="/company/:id">
          <Company members={members} />
        </Route>
        <Route exact path="/">
          <Home members={members} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
