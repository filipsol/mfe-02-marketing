import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
// import { mount } from 'marketing/MarketingApp'; // import the mount function from the MarketingApp exposed by the marketing microfrontend
// console.log(mount);
import MarketingApp from './components/MarketingApp'; // import the MarketingApp component
import AuthApp from './components/AuthApp'; // import the AuthApp component
import Header from './components/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/auth" component={AuthApp} />
                        <Route path="/" component={MarketingApp} />
                    </Switch>
                </div>
            </StylesProvider>
        </BrowserRouter>

    );
}