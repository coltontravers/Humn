import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Routes from "./routes";

const App = () => (
    <Router>
        <div>
            <Route path="/" exact component={Dashboard} />
            {Routes.map(route => {
                return (
                    <Route
                        path={route.path}
                        component={route.component}
                        key={route.path}
                    />
                );
            })}
        </div>
    </Router>
);

export default hot(App);
