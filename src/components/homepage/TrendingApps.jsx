import React, { useContext } from 'react';
import AppCard from './AppCard';
import MyButton from '../ui/MyButton';
import { NavLink } from 'react-router';
import { AppContext } from '../../context/AppContext';

const TrendingApps = () => {
    const { apps } = useContext(AppContext);

    return (
        <div className='mt-20 w-8/12 md:w-10/12 mx-auto space-y-10'>
            <div className='space-y-4 text-center'>
                <h2 className='text-4xl font-bold text-[#001931]'>
                    Trending Apps
                </h2>
                <p className='text-[#627382]'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    apps.slice(0, 9).map(app => {
                        return (
                            <AppCard key={app.id} app={app} />
                        )
                    })
                }
            </div>

            <div className='flex justify-center items-center'>
                <NavLink to={'/apps'}>
                    <MyButton content={'View All'} />
                </NavLink>
            </div>
        </div>
    );
};

export default TrendingApps;