import React from "react";
import {Route, Switch} from "react-router";
import Login from "./component/auth/Login"
function App() {
  return (
<div>

      <Route path="/login" component={Login} />
 
</div>
  );
}

export default App;
