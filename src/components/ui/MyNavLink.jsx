import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({ to, content }) => {
    return (
        <NavLink to={to} className={({ isActive }) => {
            return (
                isActive ? 'max-lg:text-xl lg:text-lg bg-linear-to-r from-[#632EE3] from-80% to-[#9F62F2] bg-clip-text text-transparent font-semibold' : 'font-semibold max-lg:text-lg lg:text-base'
            )
        }}>
            {content}
        </NavLink>
    );
};

export default MyNavLink;