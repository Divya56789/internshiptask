import React from 'react';
import './dashboard.css';
import search from '../../assets/search.svg';
import notification from '../../assets/notifications.svg';
import dashboard from '../../assets/dashboard_icon.svg';
import transaction from '../../assets/transaction_icon.svg';
import schedules from '../../assets/schedule_icon.svg';
import users from '../../assets/user_icon.svg';
import user from '../../assets/user.svg'
import settings from '../../assets/setting_icon.svg';
import revenue from '../../assets/revenue.svg';
import total_transaction from '../../assets/total_transactions_icon.svg';
import likes from '../../assets/like.svg';
import total_users from '../../assets/two_user.svg';
import down from '../../assets/chevron_down.svg';
import right from '../../assets/chevron_right.svg';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useSelector } from 'react-redux';
import Chart from "react-apexcharts";


function Dashboard() {
  const userInfo = useSelector((state) => state.user.userInfo);
  const data01 = {
    series: [550, 310, 140],
            options: {
              chart: {
                width: 190,
                type: 'pie',
              },
              labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
              dataLabels:{
                enabled : false
              },
              // responsive: [{
              //   breakpoint: 480,
              //   options: {
              //     chart: {
              //       width: 100
              //     },
              //     legend: {
              //       position: 'bottom'
              //     }
              //   }
              // }]
            },
          
          
          
  
  }
  const data = [
    {
      "name": "week 1",
      "user": 100,
      "guest": 200,
    },
    {
      "name": "week 2",
      "user": 410,
      "guest": 390,
    },
    {
      "name": "week 3",
      "user": 150,
      "guest": 200,
    },
    {
      "name": "week 4",
      "user": 450,
      "guest": 300,
    },
    
  ]
  
  return (
    <div className='dashboard'>
      <nav>
        <div className="nav__leftpart">
          <h3>Dashboard</h3>
        </div>
        <div className="nav__rightpart">
          <div className="searchbar">
            <input type="text" placeholder='Search...' />
            <img src={search} alt="search-logo" />
          </div>
          <div className="notification">
            <img src={notification} alt="notification" />
          </div>
          <div className="avatar">
            {userInfo ? <img src={userInfo.image} alt="avatar" /> : <img src={user} alt="user" />}
          </div>
        </div>
      </nav>
      <div className="sidebar">
        <div className="sidebar__content">
          <h1>Board.</h1>
            <div className="sidebar__top__list">
              <ul>
                <li>
                  <img src={dashboard} alt="dashboard" />
                  <p>Dashboard</p>
                </li>
                <li>
                  <img src={transaction} alt="transactions" />
                  <p>Transactions</p>
                </li>
                <li>
                  <img src={schedules} alt="schedules" />
                  <p>Schedules</p>
                </li>
                <li>
                  <img src={users} alt="users" />
                  <p>Users</p>
                </li>
                <li>
                  <img src={settings} alt="settings" />
                  <p>Settings</p>
                </li>
              </ul>
            </div>
          <div className="sidebar__bottom__list">
              <ul>
                <li>Help</li>
                <li>Contact Us</li>
              </ul>
            </div>

        </div>

      </div>
      <div className="total__revenues">
        <div className="total__revenues__items">
          <div className="total__revenues__icon">
            <img src={revenue} alt="revenue" />
          </div>
          <p>Total Revenues</p>
          <h2>$2,129,430</h2>
        </div>
      </div>
      <div className="total__transactions">
        <div className="total__transactions__items">
          <div className="total__transactions__icon">
            <img src={total_transaction} alt="transactions" />
          </div>
          <p>Total Transactions</p>
          <h2>1,520</h2>
        </div>
      </div>
      <div className="total__likes">
        <div className="total__likes__items">
          <div className="total__likes__icon">
            <img src={likes} alt="likes" />
          </div>
          <p>Total Likes</p>
          <h2>9,721</h2>
        </div>
      </div>
      <div className="total__users">
        <div className="total__users__items">
          <div className="total__users__icon">
            <img src={total_users} alt="users" />
          </div>
          <p>Total Users</p>
          <h2>892</h2>
        </div>
      </div>
      <div className="activities">
        <div className="activities__items">
          <div className="activities__title">
            <h3>Activities</h3>
            <p>May-June 2021 <span><img src={down} alt="down" /></span></p>
          </div>
          <ResponsiveContainer width="100%" height={160} >
            <LineChart  data={data}>
              <Legend />
              <CartesianGrid strokeLinearray="1" vertical={false} />
              <XAxis dataKey="name" tickSize={1} />
              <YAxis />
              <Line type="monotone" dataKey="guest" stroke="#E9A0A0" dot={false} strokeWidth={2} />
              <Line type="monotone" dataKey="user" stroke="#9BDD7C" dot={false} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>
      <div className="top__products">
        <div className="top__products__items">
          <div className="top__products__title">
            <h3>Top products</h3>
            <p>May-June 2021 <span><img src={down} alt="down" /></span></p>
          </div>

          <div className="graph__container">
            <div className="top__products__graph">
            <Chart
              options={data01.options}
              series={data01.series}
              type="pie"
              width="330"
            />
            </div>
            

          </div>
        </div>
      </div>
      <div className="today__schedule">
        <div className="today__schedule__items">
          <div className="today__schedule__title">
            <h3>Today schedule</h3>
            <p>See All <span><img src={right} alt="right" /></span></p>
          </div>

          <div className="today__schedule__listings">
            <div className="green__container">
              <div className="green__container__text">
                <h5>Meeting with suppliers from Kuta Bali</h5>
                <p>14.00-15.00</p>
                <p>at Sunset Road Kuta, Bali</p>
              </div>
            </div>

            <div className="blue__container">
              <div className="blue__container__text">
                <h5>Meeting with suppliers from Kuta Bali</h5>
                <p>14.00-15.00</p>
                <p>at Sunset Road Kuta, Bali</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard;
