import React from 'react';
import logoImg from '../../assets/logo.png';
import { NavLink } from 'react-router';
import MyNavLink from '../ui/MyNavLink';
import MyButton from '../ui/MyButton';
import github from '../../assets/github.png';

const navItems = [
    {
        id: 1,
        to: '/',
        content: 'Home'
    },
    {
        id: 2,
        to: '/apps',
        content: 'Apps'
    },
    {
        id: 3,
        to: '/installation',
        content: 'Installation'
    },
    {
        id: 4,
        to: '/dashboard',
        content: 'Dashboard'
    }
];

const Navbar = () => {
    return (
        <nav className='shadow-sm bg-base-100'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                navItems.map(navItem => {
                                    return (
                                        <li key={navItem.id}>
                                            <MyNavLink to={navItem.to} content={navItem.content} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* Logo */}

                    <NavLink to='/' className="btn btn-ghost text-xl">
                        <img className='h-full' src={logoImg} alt="logo" />
                        <span className='bg-linear-to-r from-[#632EE3] from-80% to-[#9F62F2] bg-clip-text text-transparent font-bold'>HERO.IO</span>
                    </NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navItems.map(navItem => {
                                return (
                                    <li key={navItem.id}>
                                        <MyNavLink to={navItem.to} content={navItem.content} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="navbar-end">
                    <MyButton content='Contribute' icon={github} alt='GitHub Logo' />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;