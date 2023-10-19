
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
    return (
        <div className=' relative'>
            <div className='sticky top-0 z-10'>
            <Navbar />
            </div>
            <div className='z-1'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;