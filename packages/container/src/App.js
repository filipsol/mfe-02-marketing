import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
// import { mount } from 'marketing/MarketingApp'; // import the mount function from the MarketingApp exposed by the marketing microfrontend
// console.log(mount);
// import MarketingApp from './components/MarketingApp'; // import the MarketingApp component
// import AuthApp from './components/AuthApp'; // import the AuthApp component
import Progress from './components/Progress'; // import the Progress component
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp')); // lazy load the MarketingApp component
const AuthLazy = lazy(() => import('./components/AuthApp')); // lazy load the AuthApp component
const DashboardLazy = lazy(() => import('./components/DashboardApp')); // lazy load the DashboardApp component

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const history = createBrowserHistory(); // create a browser history object

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard'); // navigate to the dashboard route when the user is signed in
        }
    }, [isSignedIn]);

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/dashboard">
                                {!isSignedIn && <Redirect to="/" />} 
                                <DashboardLazy />
                            </Route>
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>

    );
}