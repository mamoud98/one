import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
import { Switch, Route } from "react-router-dom";
import CreatItem from "./pages/form/CreatItem";
import Item from "./component/Item/Item";

function App() {
  return (
    <div>
      <Switch>
        <Route  path="/home">
          <Home />
        </Route>
        
        <Route path="/creat">
          <CreatItem />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
