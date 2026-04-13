import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router';
import RatingGraph from '../../components/appDetails/RatingGraph';
import AppDetailsCard from '../../components/appDetails/AppDetailsCard';

const AppDetails = () => {
    const { appId } = useParams();
    const { apps } = useContext(AppContext);

    const existingApp = apps.find(app => app.id === Number(appId));
    const { ratings, description } = existingApp;

    return (
        <div className='w-11/12 mx-auto mt-15 space-y-12'>
            {/* App Details */}
            <AppDetailsCard existingApp={existingApp} />

            {/* Ratings Graph */}
            <div className='space-y-5'>
                <h3 className='text-[#001931] text-2xl font-semibold'>Rating</h3>
                <RatingGraph ratings={ratings} />
            </div>

            {/* Description */}
            <div className='space-y-3'>
                <h3 className='text-[#001931] text-2xl font-semibold'>Description</h3>
                <p className='text-[#627382] text-lg'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AppDetails;