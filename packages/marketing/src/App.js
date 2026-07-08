import React from "react";
import { BrowserRouter, MemoryRouter, Route, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default () => {
    const path = window.location.pathname;
    const isStandaloneMarketingPath = path.startsWith('/marketing/latest') || path === '/';
    const Router = isStandaloneMarketingPath ? BrowserRouter : MemoryRouter;

    return (
        <div>
            <StylesProvider>
                <Router>
                    <Switch>
                        <Route path="/pricing" component={Pricing} />
                        <Route exact path="/" component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
}