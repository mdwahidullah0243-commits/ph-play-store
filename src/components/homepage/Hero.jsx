import React from 'react';
import googlePlay from '../../assets/google-play.png';
import appStore from '../../assets/app-store.png';
import heroImg from '../../assets/hero.png';
import MyButton from '../ui/MyButton';

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-8 pt-20'>
            <div className='text-center space-y-4'>
                <h1 className='font-bold text-[#001931] text-5xl/14'>
                    We Build !!!!! <br />
                    <span className='bg-linear-to-r from-[#632EE3] from-80% to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps
                </h1>
                <p className='text-[#627382]'>
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
            </div>

            <div className='flex items-center gap-3'>
                <MyButton icon={googlePlay} alt='Google Play' content='Google Play' />
                <MyButton icon={appStore} alt='App Store' content='App Store' />
            </div>

            <div>
                <img src={heroImg} alt="Hero" />
            </div>
        </div>
    );
};

export default Hero;