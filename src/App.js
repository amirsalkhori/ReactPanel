import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from "./component/auth/Login";
import Dashboard from "./component/dashboard/Dashboard";

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"    
          exact 
          element={<Dashboard/>}
        />       
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
