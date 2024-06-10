import { Footer } from "./components/Header Bölümleri/Footer";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Pizza.css";

import OrderPage from "./components/OrderPage";
import Home from "./components/Home";
import Success from "./components/Success";
import HeaderOrder from "./components/Header Bölümleri/HeaderOrder";

function App() {
  const [show, setShow] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [orderPost1, setOrderPost1] = useState(null);

  return (
    <Router>
      <div>
        <HeaderOrder show={show} setShow={setShow} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/orderpage">
            <OrderPage orderPost1={orderPost1} setOrderPost1={setOrderPost1} />
          </Route>
          <Route path="/success">
            <Success orderPost1={orderPost1} />
          </Route>
        </Switch>
      </div>

      <Footer showFooter={showFooter} setShowFooter={setShowFooter} />
    </Router>
  );
}

export default App;
