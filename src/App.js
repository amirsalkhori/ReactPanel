import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from "./component/auth/Login";
import Dashboard from "./component/dashboard/Dashboard";

function App() {
  const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  useEffect(() => {
    // setToken(localStorage.getItem)
  }, [])

  return (
  <div>
    <BrowserRouter>
      <Routes>
        {!token ?
      (<Route
          path="/login"    
          exact 
          element={<Dashboard/>}
        /> ) : (
        <Route
          path="/dashboard"    
          exact 
          element={<Dashboard/>}
        />      
        ) }
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
