import { Affix } from "antd";
import "./dashboard-ui/dashboard.scss";
import "./App.scss";
import AppHeader from "./components/common/AppHeader";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard-ui";
import Produces from "./dashboard-ui/components/produce";
import Users from "./dashboard-ui/components/usersmenu";
import Matches from "./dashboard-ui/components/matchesmenu";
import Transactions from "./dashboard-ui/components/transactionsmenu";
function App() {
  return (
    <Router>
      <div className="App">
        <Affix>
          <AppHeader />
        </Affix>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/produces" element={<Produces />} />
          <Route path="/users" element={<Users />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
