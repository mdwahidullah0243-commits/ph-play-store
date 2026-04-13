import React from 'react';
import notFoundImg from '../../assets/error-404.png';
import MyButton from '../ui/MyButton';
import { NavLink } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-5 h-screen'>
            <div>
                <img src={notFoundImg} alt="Error 404 Not Found" />
            </div>

            <div>
                <h2 className='text-[#001931] text-4xl font-semibold'>
                    Oops, page not found!
                </h2>
                <p className='text-[#627382]'>
                    The page you are looking for is not available.
                </p>
            </div>

            <NavLink to='/'>
                <MyButton content='Go Back!' />
            </NavLink>
        </div>
    );
};

export default Error;