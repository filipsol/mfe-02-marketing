import React from "react";
import { BrowserRouter, MemoryRouter, Route, Switch, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default ({ history }) => {
    // const path = window.location.pathname;
    // const isStandaloneMarketingPath = path.startsWith('/marketing/latest') || path === '/';
    // const Router = isStandaloneMarketingPath ? BrowserRouter : MemoryRouter;

    const generateClassName = createGenerateClassName({
        productionPrefix: 'ma',
    });

    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/pricing" component={Pricing} />
                        <Route exact path="/" component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
}