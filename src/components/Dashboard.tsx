import * as React from 'react';

import './Dashboard.css';
import PlatesTable from './PlatesTable';



function Dashboard(){
    return (
        <div className="dashboard">
            <div className="diet-plan">
                <PlatesTable />
            </div>
            <div className="plates-and-diets"></div>
        </div>
    );
}

export default Dashboard;