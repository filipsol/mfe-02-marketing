import React from 'react';
import ReactDom from 'react-dom';

// Mount function to start up the app
const mount = (el) => {
    ReactDom.render(
        <h1>Marketing App</h1>, el
    );
};

// if we are in development and in isolation
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// we are running through container
// and we should export the mount function

export { mount };