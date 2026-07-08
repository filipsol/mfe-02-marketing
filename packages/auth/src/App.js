import React from "react";
import {Route, Switch, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";


export default ({ history }) => {


    const generateClassName = createGenerateClassName({
        productionPrefix: 'au',
    });

    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
}