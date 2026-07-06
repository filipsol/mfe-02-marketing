import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current); // call the mount function from the MarketingApp and pass the ref to it
    }, []);

    return <div ref={ref}></div>;
}
