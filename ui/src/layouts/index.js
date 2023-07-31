import { Paper, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = (props) => {
	return (
		<Paper>
			<Navbar />
			<Sidebar />
			<Stack display="flex" direction="row" justifyContent="center" alignItems="center" spacing={2} >
			<Outlet />
			</Stack>
			<Footer />
			
		</Paper>
	);
};

export default Layout;
