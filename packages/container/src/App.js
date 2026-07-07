import React from 'react';
// import { mount } from 'marketing/MarketingApp'; // import the mount function from the MarketingApp exposed by the marketing microfrontend
// console.log(mount);
import MarketingApp from './components/MarketingApp'; // import the MarketingApp component

export default () => {
    return (
        <div>
            <h1>Container!!</h1>
            <hr />
            <MarketingApp />
        </div>
    );
}