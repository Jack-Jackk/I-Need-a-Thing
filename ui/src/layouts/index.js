import { Box,  Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';

const Layout = (props) => {
	
	return (
		<Box>
			<Navbar />
			<Stack  direction="row" justifyContent="space-between"  spacing={2} >
			<Sidebar />
			<Outlet />
			<Rightbar/>
			</Stack>
			<Footer />
			
		</Box>
	);
};

export default Layout;
