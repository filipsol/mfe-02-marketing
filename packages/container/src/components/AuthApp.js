import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname, // pass the initial path to the mount function
            onNavigate: ({ pathname: nextPathname }) => {
                // console.log('Container just navigated in MarketingApp', nextPathname);
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname); // update the container's history to match the marketing app's navigation
                }
            },
            onSignIn: () => {
                console.log('User Sigined In');
            },// call the mount function from the MarketingApp and pass the ref to it
        });
        history.listen(onParentNavigate); // listen for navigation events in the container and call the onParentNavigate function from the MarketingApp
    }, []);

    return <div ref={ref}></div>;
}
