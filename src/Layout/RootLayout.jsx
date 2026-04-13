import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const RootLayout = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;