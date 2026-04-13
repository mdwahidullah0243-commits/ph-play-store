import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';

const MyButton = ({ content, icon, alt, existingApp }) => {
    const {installedApps, setInstalledApps} = useContext(AppContext);

    return (
        <button onClick={() => {
            if(content.includes('Install')) {
                const isExistingApp = installedApps.find(installedApp => installedApp.id === existingApp.id);
                if(isExistingApp) {
                    toast.error('The app is already installed!')
                } else {
                    setInstalledApps([...installedApps, existingApp]);
                    toast.success('Installing...');
                }
            } else if(content === 'Uninstall') {
                const filteredInstalledApps = installedApps.filter(installedApp => installedApp.id !== existingApp.id);
                setInstalledApps(filteredInstalledApps);
                toast.error('The app have been deleted!')
            }
        }} className={`btn font-semibold 
                ${content === 'Contribute' || content === 'View All' || content === 'Go Back!'
                    ? 'text-white shadow-none bg-linear-to-br from-[#632EE3] to-[#9F62F2]'
                    : content.includes('Install') || content === 'Uninstall'
                        ? 'bg-[#00D390] text-white font-semibold text-lg py-2 h-auto'
                        : 'text-lg gap-3 py-2 h-auto'
                }
            `}>

            {
                icon ? <img src={icon} alt={alt} /> : ''
            }
            <span>{content}</span>

        </button>
    );
};

export default MyButton;