import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import InstalledAppCard from '../../components/installation/InstalledAppCard';
import EmptyMessage from '../../components/installation/EmptyMessage';

const Installation = () => {
    const { installedApps } = useContext(AppContext);

    return (
        <div className='mt-20 w-11/12 mx-auto space-y-12'>
            <div className='text-center space-y-5'>
                <h2 className='text-[#001931] text-5xl font-bold'>
                    Your Installed Apps
                </h2>
                <p className='text-[#627382] text-lg'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className='space-y-5'>
                <h3 className='text-[#001931] text-2xl font-semibold'>
                    ({installedApps.length}) Apps Found
                </h3>

                <div className='grid grid-cols-1 gap-6'>
                    {
                        installedApps.length === 0
                            ? <EmptyMessage />
                            : installedApps.map(installedApp => {
                                return (
                                    <InstalledAppCard key={installedApp.id} installedApp={installedApp} />
                                )
                            })
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;