import React from 'react';
import './admindashboard.css'
import AdminChart from "./admincharts/UserChart"
// import AdminChart from "./admincharts/userscharts.jsx"
const Dashboard = () => {

    return (
        <>
            <div class="row  text-center">
                <div class="col-md-6 users_col rounded">
                    <div class="p-3 bg-info rounded">
                        <div className="row charts_align align-items-start">
                            <div className=' col users_chart_semibold text-start'>
                                <strong>26K</strong>
                                <span className='text-start users_chart_normal p-2'>(-12.4% <i class="fa-solid fa-arrow-down p-1"></i>)</span>
                                <p className='users_chart_normal'>Users</p>
                                <AdminChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Dashboard;