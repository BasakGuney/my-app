import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <MainPage></MainPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
