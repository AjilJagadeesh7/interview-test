import "antd/dist/antd.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Login/Login";
import { Photos } from "./components/Dashboard/photos/Photos";
import { Users } from "./components/Dashboard/Users";

function App() {
  return (
    <div className="App bg-gradient-to-r from-slate-700 via-sky-900 to-blue-900 h-screen">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Users />} />
            <Route path="/dashboard/photos" element={<Photos />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
