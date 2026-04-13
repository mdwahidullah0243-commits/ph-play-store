import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import { NavLink } from 'react-router';

const AppCard = ({ app }) => {
    const { id, image, title, downloads, ratingAvg } = app;

    return (
        <NavLink to={`/apps/${id}`}>
            <div className='shadow-md rounded-2xl px-10 py-5 space-y-4 cursor-pointer hover:bg-slate-200 hover:scale-105 duration-200'>
                <div>
                    <img className='w-[70%] h-50 md:h-45 mx-auto shadow-md rounded-[48px]' src={image} alt="" />
                </div>

                <h3 className='text-xl font-semibold text-center'>{title}</h3>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3 text-[#00D390]'>
                        <img className='w-7' src={downloadIcon} alt="Download Icon" />
                        <span>{downloads / 1000000}M</span>
                    </div>
                    <div className='flex items-center gap-3 text-[#FF8811]'>
                        <img className='w-7' src={ratingIcon} alt="Rating Icon" />
                        <span>{ratingAvg}</span>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default AppCard;