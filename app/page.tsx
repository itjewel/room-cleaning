import Image from 'next/image'

import Notification from '@/components/Notification'
import FileManager from '@/components/FileManager'

export default function Home() {
  return (<div className="container mx-auto px-16">
  <div className="flex flex-col md:flex-row">
  
      
  <div className="md:w-1/2 p-4">
    <Notification />
  </div>
  <div className="md:w-1/2 p-4">
   <FileManager />
  </div>
</div>
</div>)
}
