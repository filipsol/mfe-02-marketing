import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        mount(ref.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                // console.log('Container just navigated in MarketingApp', nextPathname);
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname); // update the container's history to match the marketing app's navigation
                }

            }
        }); // call the mount function from the MarketingApp and pass the ref to it
    }, []);

    return <div ref={ref}></div>;
}
