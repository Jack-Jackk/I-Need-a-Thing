import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Divider, Grid, Box } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { getById } from "../../utility/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(45deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

const IndividualRequests = (props) => {
	const params = useParams();
	const [posts, setPosts] = useState([]);
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	useEffect(() => {
		const getPostsData = async () => {
			const postData = await getById(params.id);
			console.log("posts: ", posts);
			setPosts(postData);
		};
		getPostsData();
	}, []);

	const convertDate = (date) => {
		const newDate = new Date(date);

		const formattedDate = newDate.toISOString().split("T")[0];
		return formattedDate;
	};

	return (
		<Box>
			<Grid sx={{ mt: 5 }}>
				{posts.map((post) => (
					<Card
						style={{ background: "#E3FEE6" }}
						sx={{
							borderRadius: "2%",
							minWidth: 950,
							maxWidth: 950,
							maxHeight: 950,
						}}>
						<CardContent>
							<Link
								to="/profile/id"
								textDecoration="none">
								<Typography
									m={2}
									mt={2}
									variant="h6"
									color="black">
									{post.username}
								</Typography>
							</Link>
							<Typography
								padding="1%"
								mt={2}
								variant="h4"
								color="black">
								{post.title}
							</Typography>
							<Typography
								mt={2}
								mb={2}
								variant="h6"
								color="black">
								{post.description}
							</Typography>
							<Typography
								m={2}
								mt={2}
								variant="h7"
								color="black">
								{post.isDesignRequired}
							</Typography>
							<Typography
								m={2}
								mt={2}
								variant="h7"
								color="black">
								{post.fabType}
							</Typography>
							<Typography
								m={2}
								mt={2}
								variant="h7"
								color="black">
								{post.material}
							</Typography>
							<Typography
								m={2}
								mt={2}
								variant="body1"
								color="black">
								{post.designUrl}
							</Typography>
							<Typography
								m={2}
								variant="body1"
								color="black">
								{post.quantity}
							</Typography>
							<Typography
								m={2}
								variant="body1"
								color="black">
								{post.country}
							</Typography>
							<Typography
								m={2}
								variant="body2"
								color="black">
								{convertDate(post.createdAt)}
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							{/* button to expand post and show comments */}
							<ExpandMore
								expand={expanded}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label="show more">
								<CommentIcon sx={{ color: "black" }} />
							</ExpandMore>
						</CardActions>
						<Collapse
							in={expanded}
							timeout="auto"
							unmountOnExit>
							<CardContent>
								<Typography
									variant="h6"
									color="black"
									padding="1%">
									Comments
								</Typography>
								<Typography
									color="black"
									paragraph>
									@RandomUserGuy: The comments will go here!
								</Typography>
								<Divider />
							</CardContent>
						</Collapse>
					</Card>
				))}
			</Grid>
		</Box>
	);
};

export default IndividualRequests;
