import React from 'react';
import Hero from '../../components/homepage/Hero';
import Stats from '../../components/homepage/Stats';
import TrendingApps from '../../components/homepage/TrendingApps';

const Home = () => {
    return (
        <div>
            <Hero />
            <Stats />
            <TrendingApps />
        </div>
    );
};

export default Home;