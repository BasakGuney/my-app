import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import VMListPage from "./machine-list/VMListPage";
import DashboardPage from "./machine-info/DashboardPage";


function App() {
  document.body.style.backgroundColor = "#1A202C"
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage></MainPage>
          </Route>
          <Route exact path="/machine-list">
            <VMListPage></VMListPage>
          </Route>
          <Route exact path="/machine-info">
            <DashboardPage></DashboardPage>
          </Route>
          <Route exact path="/machine-info/:index/:vm_name">
            <DashboardPage></DashboardPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
