import React from 'react';
import logoImg from '../../assets/logo.png';
import { NavLink } from 'react-router';
import linkedin from '../../assets/Linkedin.png';
import facebook from '../../assets/Facebook.png';
import spaceX from '../../assets/SpaceX.png';

const Footer = () => {
    return (
        <div className='bg-[#001931] py-10 mt-20'>
            <div className='w-11/12 mx-auto'>
                <div className='border-b border-gray-700 py-8 flex justify-between items-center'>
                    <NavLink to='/' className='btn shadow-none bg-transparent border-none'>
                        <img className='h-full' src={logoImg} alt="logo" />
                        <span className='text-white text-xl font-bold'>HERO.IO</span>
                    </NavLink>

                    <div className='space-y-3'>
                        <h2 className='text-[#FAFAFA] text-xl font-medium'>Social Links</h2>
                        <div className='flex items-center gap-3'>
                            <img src={spaceX} alt="SpaceX" />
                            <img src={linkedin} alt="Linkedin" />
                            <img src={facebook} alt="Facebook" />
                        </div>
                    </div>
                </div>

                <p className='text-[#FAFAFA] py-5 text-center'>
                    Copyright © 2025 - All right reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;