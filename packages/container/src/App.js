import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
// import { mount } from 'marketing/MarketingApp'; // import the mount function from the MarketingApp exposed by the marketing microfrontend
// console.log(mount);
// import MarketingApp from './components/MarketingApp'; // import the MarketingApp component
// import AuthApp from './components/AuthApp'; // import the AuthApp component
import Progress from './components/Progress'; // import the Progress component
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp')); // lazy load the MarketingApp component
const AuthLazy = lazy(() => import('./components/AuthApp')); // lazy load the AuthApp component

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth" component={AuthLazy} />
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>

    );
}