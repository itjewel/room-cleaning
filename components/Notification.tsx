'use client'
import { useState } from "react"
import NotificationList from "./NotificationList";
import {allDB,monthlyDB,todayDB,weeklyDB} from "../db/notificationDB"

const Notification = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold pl-3">Notification</h1>
      <div className="mb-4">

        <ul className="flex ">
          <li className="-mb-px mr-1">
            <button 
              className={`py-1 px-4 font-semibold ${activeTab === 'all' ? 'rounded-full bg-blue-500 hover:bg-blue-700 text-white' : ''}`} 
              onClick={() => setActiveTab('all')}>
                All
            </button>
          </li>
          <li className="mr-1">
            <button 
              className={`py-1 px-4 font-semibold ${activeTab === 'today' ? 'rounded-full bg-blue-500 hover:bg-blue-700 text-white' : ''}`} 
              onClick={() => setActiveTab('today')}>
                Today
            </button>
          </li>
          <li className="mr-1">
            <button 
              className={`py-1 px-4 font-semibold ${activeTab === 'lastWeek' ? 'rounded-full bg-blue-500 hover:bg-blue-700 text-white' : ''}`} 
              onClick={() => setActiveTab('lastWeek')}>
                Last Week
            </button>
          </li>
          <li className="mr-1">
            <button 
              className={`py-1 px-4 font-semibold ${activeTab === 'lastMonth' ? 'rounded-full bg-blue-500 hover:bg-blue-700 text-white' : ''}`} 
              onClick={() => setActiveTab('lastMonth')}>
                Last Month
            </button>
          </li>
        </ul>
      </div>

      <div>
        {activeTab === 'all' && <NotificationList notifications={allDB} /> }
        {activeTab === 'today' && <NotificationList notifications={todayDB} />}
        {activeTab === 'lastWeek' && <NotificationList notifications={weeklyDB} />}
        {activeTab === 'lastMonth' && <NotificationList notifications={monthlyDB} />}
      </div>
    </div>
  )
}

export default Notification