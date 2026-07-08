import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { mount } from 'marketing/MarketingApp'; // import the mount function from the MarketingApp exposed by the marketing microfrontend
// console.log(mount);
import MarketingApp from './components/MarketingApp'; // import the MarketingApp component
import Header from './components/Header';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
    );
}