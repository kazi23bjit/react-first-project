import React,{useState} from 'react'
import Sidebar from '../components/Sidenav';

const HomePage = () => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
};
  return (
    <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
  )
}

export default HomePage