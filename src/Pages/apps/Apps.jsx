import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import AppCard from '../../components/homepage/AppCard';

const Apps = () => {
    const { apps } = useContext(AppContext);

    return (
        <div className='mt-20 w-11/12 mx-auto space-y-12'>
            <div className='text-center space-y-5'>
                <h2 className='text-[#001931] text-5xl font-bold'>
                    Our All Applications
                </h2>
                <p className='text-[#627382] text-lg'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            <div className='space-y-5'>
                <h3 className='text-[#001931] text-2xl font-semibold'>
                    ({apps.length}) Apps Found
                </h3>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        apps.map(app => {
                            return (
                                <AppCard key={app.id} app={app} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;