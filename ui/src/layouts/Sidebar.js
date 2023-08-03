import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import ForumIcon from '@mui/icons-material/Forum';
import CommentIcon from '@mui/icons-material/Comment';


const Sidebar = () => {
	return (
		<Box sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.red' }}>
			<List>
				<Link to='/' style={{ color: 'black',textDecoration: 'none' }}>
			  <ListItem disablePadding>
				<ListItemButton>
				  <ListItemIcon>
				<HomeIcon/>
				  </ListItemIcon>
				  <ListItemText primary="Home" />
				</ListItemButton>
			  </ListItem>
			  </Link>

			  <Divider />

				<Link to='/posts/new/' style={{ color: 'black',textDecoration: 'none' }}>
			  <ListItem disablePadding>
				<ListItemButton>
				  <ListItemIcon>
					<AddIcon/>
				  </ListItemIcon>
				  <ListItemText primary="New Post" />
				</ListItemButton>
			  </ListItem>
			  </Link>

		  <Divider />

			<Link to='/posts/requests/' style={{ color: 'black',textDecoration: 'none' }}>
			  <ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon>
						<FeedIcon/>
						</ListItemIcon>
				  <ListItemText primary="Requests" />
				</ListItemButton>
			  </ListItem>
			  </Link>

			  <Link to='/posts/services/' style={{ color: 'black',textDecoration: 'none' }}>
			  <ListItem disablePadding>
				<ListItemButton >
					<ListItemIcon>
						<FeedIcon/>
						</ListItemIcon>
				  <ListItemText primary="Services" />
				</ListItemButton>
			  </ListItem>
			  </Link>

			  <Link to='/users/posts/me' style={{ color: 'black',textDecoration: 'none' }}>
			  <ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon>
					<ForumIcon/>
					</ListItemIcon>
				  <ListItemText primary="My Posts" />
				</ListItemButton>
			  </ListItem>
			  </Link>

			<Link to='/users/comments/me' style={{ color: 'black', textDecoration: 'none' }}>
			  <ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon>
						<CommentIcon/>
					</ListItemIcon>
				  <ListItemText primary="My Comments" />
				</ListItemButton>
			  </ListItem>
			  </Link>

			</List>
		</Box>
	  );
	}

export default Sidebar