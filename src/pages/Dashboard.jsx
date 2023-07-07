import React from 'react';
import {
  BsCurrencyDollar,
  BsFillPersonFill,
  BsFillTagsFill,
  BsHandThumbsUpFill,
} from 'react-icons/bs';

import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Pie, LineChart } from '../components';
import { weeklyStats, dropdownData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: 'Time', value: 'Id' }}
      style={{ border: 'none', color: currentMode === 'Dark' && 'white' }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Dashboard = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-1 bg-slate-200 ">
      <div className="flex lg:flex-wrap justify-start">
        <div
          className="dark:text-gray-200 h-44 rounded-xl w-full lg:w-60 p-8 m-3"
          style={{ backgroundColor: '#a5cee8' }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Total Revenues</p>
              <p className="text-2xl">$2,129,430</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
        </div>
        <div
          className="dark:text-gray-200 h-44 rounded-xl w-full lg:w-60 p-8 m-3"
          style={{ backgroundColor: '#ffb5b5' }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Total Transactions</p>
              <p className="text-2xl">1,520</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsFillTagsFill />
            </button>
          </div>
        </div>
        <div
          className="dark:text-gray-200 h-44 rounded-xl w-full lg:w-60 p-8 m-3"
          style={{ backgroundColor: '#bcb5ff' }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Total Likes</p>
              <p className="text-2xl">9,721</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsHandThumbsUpFill />
            </button>
          </div>
        </div>
        <div
          className="dark:text-gray-200 h-44 rounded-xl w-full lg:w-60 p-8 m-3"
          style={{ backgroundColor: '#b5ffcc' }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Total Users</p>
              <p className="text-2xl">892</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsFillPersonFill />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-start">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Activities</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
          <div>
            <p className="text-xl font-semibold ">Top Products</p>
            <p className="text-gray-400">May - June 2021</p>
          </div>

          <div className="w-40">
            <Pie
              id="pie-chart"
              data={ecomPieChartData}
              legendVisiblity={false}
              height="160px"
            />
          </div>
        </div>
      </div>

      <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">Todays Schedule</p>
          <button type="button" className="text-xl font-semibold text-gray-500">
            <IoIosMore />
          </button>
        </div>

        <div className="mt-10 ">
          {weeklyStats.map((item) => (
            <div key={item.title} className="flex justify-between mt-4 w-full">
              <div className="flex gap-4">
                <button
                  type="button"
                  style={{ background: item.iconBg }}
                  className="text-sm hover:drop-shadow-xl text-white rounded-full p-3"
                >
                  {item.icon}
                </button>
                <div>
                  <p className="text-md font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>

              <p className={`text-${item.pcColor}`}>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
