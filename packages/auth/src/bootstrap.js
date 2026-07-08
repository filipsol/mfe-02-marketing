import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath] // set the initial route to / for the memory history
    });
    if (onNavigate) {
        history.listen(onNavigate); // listen for navigation events and call the onNavigate callback
    }

    ReactDom.render(
        <App history={history} />, el
    );

    return {
        onParentNavigate({ pathname: nextPathname }) {
            // console.log(nextPathname);
            const { pathname } = history.location;
            console.log('nextPathname', nextPathname);
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
            // console.log('Container just navigated');
        }
    };
};

// if we are in development and in isolation
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() }); // call the mount function and pass the devRoot element to it
    }
}

// we are running through container
// and we should export the mount function

export { mount };