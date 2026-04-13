import React, { useState } from 'react';
import { AppContext } from './AppContext';
import useApps from '../hooks/useApps';

const AppProvider = ({ children }) => {
    const { apps, setApps, loading } = useApps();
    const [installedApps, setInstalledApps] = useState([]);
    
    if(loading) {
        return <div>Loading...</div>
    }

    const data = {
        apps,
        setApps,
        loading,
        installedApps,
        setInstalledApps
    };

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;