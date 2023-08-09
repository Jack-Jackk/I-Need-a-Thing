import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllPosts } from "../../utility/api";


//getUser does not exist yet 
const Profile = (props) => {
  const [posts, setPosts] = useState([]);

	const convertDate = (date) => {
		let dateString = new Date(date).toLocaleDateString();
		return dateString;
	};

	useEffect(() => {
		const getPostsData = async () => {
			const postData = await getAllPosts();
			setPosts(postData);
		};
		getPostsData();
	}, []);

    return (
      <Box xs={6} sm={12} >
        <Container>
          <Grid container item xs={12} justifyContent="center" mx="auto">
            <Grid container justifyContent="center" py={6}>
              <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="h3">@JackJackk</Typography>
                </Box>
                <Typography mb={2} variant="h5">Jackson A</Typography>
                <Grid container spacing={2} mb={3}>
                  <Grid item>
                    <Typography  variant="body2" fontWeight="bold">
                      2 Posts
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography component="span" variant="body2" fontWeight="bold">
                      CNC, 3D Printing
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography component="span" variant="body2" fontWeight="bold">
                      United States
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="body1" fontWeight="light" color="text">
                 I like to create, 3+ years of experience with CNC machines, 2+ years of experience with 3D Printing, Feel free to contact me! <br/>
                 <Link
                    to='https://www.linkedin.com/in/jackson-abeyta-960243281/'
                    style={{ color: "white" }}>
                  <Typography>
                    Contact me here!<Icon sx={{ fontWeight: "bold" }}></Icon>
                  </Typography>
                  </Link>
                </Typography>
                <div>
                    <br></br>
    
      <Grid mb={2}>
				{posts.slice(0,5).map((post) => (
          
					<div>
						<br></br>
						<Link to={`/posts/${post.id}`}>
							<Card
								style={{ background: "#E3FEE6" }}
								sx={{
									borderRadius: "2%",
									minWidth: 600,
									maxWidth: 600,
									maxHeight: 200,
								}}>
								<CardContent>
									<Typography
										m={1}
										variant="h5"
										color="black">
										{post.title}
									</Typography>
									<br></br>
									<Typography
										variant="body2"
										color="black">
										{post.description}
									</Typography>
									<Typography
										variant="body2"
										color="black">
										Posted: {convertDate(post.createdAt)}
									</Typography>
								</CardContent>
							</Card>
						</Link>
					</div>
				))}
			</Grid>
  </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
    );
  }
  
  export default Profile;
  