'use client'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns';
const url = process.env.PUBLIC_URL

interface Notification {
  personImage: string;
  text: string;
  timestamp: string;
  productImage: string;
}
interface NotificationListProps {
  notifications: Notification[];
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications }) => {
  return (
    <div className="flex flex-col bg-white rounded shadow-lg overflow-y-auto ">
    {notifications.map((notification, index) => (
      <div key={index} className="flex items-center space-x-3 p-2">
        <Image src={notification.personImage} alt="Person" 
        className="w-10 h-10 rounded-full object-cover" width={80} height={80} />
        <div className="flex-1">
            <p>{notification.text}</p>
            <small className="text-gray-500">{formatDistanceToNow(new Date(notification.timestamp))}</small>
          </div>
        <Image src={notification.productImage} alt="Product" 
        className="w-24 h-12 object-cover rounded" width={100} height={100} />
      </div>
    ))}
  </div>)
}

export default NotificationList