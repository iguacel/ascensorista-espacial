import React, { Suspense, lazy } from "react";
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Loader from "./components/ui/Loader";
import Main from "./components/Main";
import Ui from "./components/Ui";

// VIEWS
const NotFound = React.lazy(() => import("./components/ui/NotFound"));

const Exp1 = lazy(() => import("./exp/Exp1"));
const Exp2 = lazy(() => import("./exp/Exp2"));
const Exp3 = lazy(() => import("./exp/Exp3"));
const Exp4 = lazy(() => import("./exp/Exp4"));
const Exp5 = lazy(() => import("./exp/Exp5"));

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/exp/1" component={Exp1} />
            <Route path="/exp/2" component={Exp2} />
            <Route path="/exp/3" component={Exp3} />
            <Route path="/exp/4" component={Exp4} />
            <Route path="/exp/5" component={Exp5} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
        <Ui />
      </Router>
    </div>
  );
};

export default App;
