//** Import Statements
import {
	IconButton,
	Typography,
	AppBar,
	Toolbar,
	styled,
	Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from "@mui/icons-material/Menu";
import Person2Icon from '@mui/icons-material/Person2';
import { Button } from "@mui/material";
import { getMe } from "../utility/api";
import { getToken, clearToken } from "../utility/utils";

//** Setup (define helper functions and variables here)

//** Destructure Props

//** State Variables

//** Component Logic

const drawerWidth = 200;

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-start",
}));

const handleLogout = async() => {
	clearToken()
	getMe()
}

//   list of items in the account drawer menu
const settingsItemsList = [
	{
		text: "Profile",
		icon: <Person2Icon />,
		to: "/profile/id",
	},
	{
		text: "Account Settings",
		icon: <SettingsIcon />,
		to: "/users/account/",
	},
	{
		text: "Logout",
		icon: <LogoutIcon />,
		onclick: {handleLogout}
	}
];

const Navbar = (props) => {
	const [open, setOpen] = useState(false);
	const [me, setMe] = useState();
	const theme = useTheme();

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (getToken()) {
			const getMyData = async () => {
				const results = await getMe();
				setMe(results);
			};
			getMyData();
		}
	}, []);

	//** Return JSX
	return (
		<Box sx={{ display: "flex" }}>
			<AppBar
				position="sticky"
				style={{ background: "#E3FEE6" }}
				open={open}>
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						sx={{ flexGrow: 1 }}
						color="black"
						component="div">
						I Need a Thing
					</Typography>

			
				
				
							<Link to="/login">
								<Button
									sx={{
										display: { xs: "none", md: "flex" },
										mr: 1,
										textDecoration: "none",
										color: "black",
										flex: "row-reverse",
									}}>
									Login
								</Button>
							</Link>
						<>	<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="end"
						onClick={handleDrawerOpen}
						sx={{ ...(open && { display: "none" }) }}
					/>
					<MenuIcon sx={{bgcolor: 'black'}}/></>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
				}}
				variant="persistent"
				anchor="right"
				open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
					<Typography>@JackJackk</Typography>
				</DrawerHeader>
				<Divider />
				<List>
					{settingsItemsList.map((item, index) => {
						const { text, icon } = item;
						return (
							<ListItem
								component={Link}
								to={item.to}
								key={text}>
								{icon && <ListItemIcon>{icon}</ListItemIcon>}
								<ListItemText
									primary={text}
									style={{ color: "white" }}
								/>
							</ListItem>
						);
					})}
				</List>
			</Drawer>
		</Box>
	);
};
export default Navbar;
