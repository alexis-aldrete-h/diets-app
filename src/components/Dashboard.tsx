import * as React from 'react';

import './Dashboard.css';

import TablePlateCard from './TablePlateCard';

function Dashboard(){
    return (
        <div className="dashboard">
            <div className="diet-plan">
                <TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3}/>
            </div>
            <div className="plates-and-diets"></div>
        </div>
    );
}

export default Dashboard;