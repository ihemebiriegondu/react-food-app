import React from 'react'
import DashboardNav from '../components/DashboardNav'
import AddtoCart from '../components/AddtoCart.js'

import heroPerson from '../assests/40w 1.png'
import firstMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 5 (3).png'
import secondMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 6.png'
import thirdMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 7.png'
import forthMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 8.png'
import fifthMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 9.png'
import sixthMenuFood from '../assests/bon-vivant-qom5MPOER-I-unsplash 10.png'

import { RiMenu2Line } from 'react-icons/ri'


import '../css/dashboard.css'
import Menu from '../components/Menu'
import Checkout from '../components/Checkout'
import Cart from './Cart'
import Orders from './Orders'

const menuData = [
    { foodImage: firstMenuFood, foodName: 'Stir Fry Pasta', foodInfo: 'The in-house pasta and chicken by chef Moose', foodAmount: 'N1000' },
    { foodImage: secondMenuFood, foodName: 'Stir Fry Pasta', foodInfo: 'The in-house pasta and chicken by chef Moose', foodAmount: 'N1000' },
    { foodImage: thirdMenuFood, foodName: 'Stir Fry Pasta', foodInfo: 'The in-house pasta and chicken by chef Moose', foodAmount: 'N1000' },
    { foodImage: forthMenuFood, foodName: 'Stir Fry Pasta', foodInfo: 'The in-house pasta and chicken by chef Moose', foodAmount: 'N1000' },
    { foodImage: fifthMenuFood, foodName: 'Stir Fry Pasta', foodInfo: 'The in-house pasta and chicken by chef Moose', foodAmount: 'N1000' },
    { foodImage: sixthMenuFood, foodName: 'Stir Fry Pasta', foodInfo: 'The in-house pasta and chicken by chef Moose', foodAmount: 'N1000' }
]


const Dashboard = () => {
    return (
        <div className='mainDashboard'>
            <div className='row'>
                <div className='col-xl-3 col-1 mynav p-0'>
                    <div className='dashboard-menu-icon d-xl-none d-block text-center pt-5'>
                        <RiMenu2Line className='fs-4' />
                    </div>
                    <DashboardNav />
                </div>
                <div className='col-xl-9 col-11 dashboard-container'>
                    <div className='dashboard-container-div'>
                        <div className='dashboard-header'>
                            <div>
                                <h2>Good morning, Oghenevwede!</h2>
                                <p>What delicious meal are you craving today?</p>
                            </div>
                            <div>
                                <div>
                                    <img src={heroPerson} alt='person img' />
                                </div>
                            </div>
                        </div>

                        <div>
                            <Menu menuData={menuData} />
                        </div>
                    </div>
                </div>
            </div>
            <AddtoCart />
            <Checkout />
            <Cart />
            <Orders />
        </div>

    )
}

export default Dashboard