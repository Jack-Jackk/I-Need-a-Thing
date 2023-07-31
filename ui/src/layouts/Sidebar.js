
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PostAddIcon from '@mui/icons-material/PostAdd';
import FeedIcon from '@mui/icons-material/Feed';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const sidebarItemsList = [
	{
	  text: "Home",
	  icon: <HomeIcon style={{ fill: "black" }}/>,
	  to: "/" // <-- add link targets
	},
	{
	  text: "New Post",
	  icon: <PostAddIcon style={{ fill: "black" }}/>,
	  to: "/posts/new/"
	},
	{
		text: "Requests",
		icon: <FeedIcon style={{ fill: "black" }}/>,
		to: "/posts/requests/"
	  },
      {
		text: "Services",
		icon: <FeedIcon style={{ fill: "black" }}/>,
		to: "/posts/services/"
	  },
      {
		text: "My Posts",
		icon: <FeedIcon style={{ fill: "black" }}/>,
		to: "/posts/me/posts/"
	  },
      {
		text: "My Comments",
		icon: <FeedIcon style={{ fill: "black" }}/>,
		to: "/posts/me/comments"
	  }
  ];

const Sidebar = () => {
    return (
        <Box
      sx={{ width: 250, height: 300 }}
      role="presentation"
    >
    		<List>
  {sidebarItemsList.map((item, index) => {
    const { text, icon } = item;
    return (
      <ListItem component={Link} to={item.to} key={text}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={text} style={{ color: "black" }} />
      </ListItem>
    );
  })}
</List>
    </Box>
    )
}

export default Sidebar