import React, { useContext } from 'react';
import { Legend, Pie, PieChart } from 'recharts';
import { AppContext } from '../../context/AppContext';


const PieChartApp = () => {
    const { installedApps, apps } = useContext(AppContext);

    const data = [
        { name: 'Installed', value: apps.length, fill: '#0088FE' },
        { name: 'Uninstalled', value: installedApps.length, fill: '#00C49F' },
    ];

    return (
        <div className='flex flex-col items-center justify-center gap-10'>
            <h2 className='text-[#001931] text-3xl font-semibold'>
                Installed and uninstalled apps
            </h2>

            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                />
                <Legend />
            </PieChart>
        </div>
    );
};

export default PieChartApp;