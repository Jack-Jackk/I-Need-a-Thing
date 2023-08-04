import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { getAllPosts } from '../../utility/api';
import { useState, useEffect } from 'react';



const Home = (props) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const getPostsData = async () => {
        const postData = await getAllPosts();
        console.log('posts: ', posts)
      setPosts(postData);
    };
    getPostsData();
  }, [posts]);



  return (
    <div>
    <br></br>
    <Grid >
    <Link to="/posts/requests/id/" sx={{ textDecoration:"none" }}>
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
<br></br>
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
    );
}

export default Home;

