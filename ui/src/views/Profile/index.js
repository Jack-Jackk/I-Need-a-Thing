import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";



function Profile() {


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
                <Grid justifyContent="center">
                    <Link to="/posts/requests/id/" textDecoration="none">
                        {/* {requests.map((request) => (   */}
                        <Card style={{ background: '#E3FEE6' }} sx={{ borderRadius: "2%", minWidth: 600, maxWidth: 600, maxHeight:200 }}>
                        <CardContent>
                            <Typography padding="1%" mt={2} variant="h5" color="black">
                            I need a metal bracket for my racecar
                            </Typography>
                            <Typography variant="body2" color="black">
                            With the metal bracket tailored to fit my car's specific requirements, I can confidently embrace the road ahead, knowing my vehicle is equipped for enhanced performance and functionality.
                            </Typography>
                        </CardContent>
                    </Card> 
                    {/* })} */}
                    </Link>
                </Grid>
                <br></br>
                </div>
                <div>
      <br></br>
    <Grid>
  <Link to="/posts/services/id/" sx={{ textDecoration:"none" }}>
     {/* {requests.map((request) => (   */}
  <Card style={{ background: '#E3FEE6' }} sx={{ borderRadius: "2%", minWidth: 600, maxWidth: 600, maxHeight:200 }}>
    <CardContent>
        <Typography padding="1%" mt={2} variant="h5" color="black">
        I create wooden trinkets
        </Typography>
        <Typography variant="body2" color="black">
        As a skilled craftsman using CNC technology, I meticulously carve exquisite wooden trinkets with precision and artistry. The CNC machine allows me to create intricate designs and shapes, ensuring each piece is a unique work of art. From personalized keychains to ornate figurines, my CNC-crafted wooden trinkets captivate the imagination and add a touch of nature's beauty to everyday life.
        </Typography>
      </CardContent>
    </Card> 
    {/* })} */}
    </Link>
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
  