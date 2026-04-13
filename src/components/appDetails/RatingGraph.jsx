import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';


const RatingGraph = ({ ratings }) => {
    return (
        <div style={{ width: "40%", height: 300 }}>
            <ResponsiveContainer>
                <BarChart
                    width={500}
                    height={300}
                    data={ratings}
                >
                    <XAxis dataKey="name" />
                    <YAxis width="auto" />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingGraph;