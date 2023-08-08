import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link, } from 'react-router-dom';
import { Grid } from '@mui/material';
import { getAllPosts } from '../../utility/api';
import { useState, useEffect } from 'react';



const Home = (props) => {
  const [posts, setPosts] = useState([]);

  const convertDate = (date) => {
    let dateString = new Date(date).toLocaleDateString();
    return dateString;
  };

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
     <Typography  mt={2} variant="h4" color="white">
            Feed
          </Typography>
    <br></br>
    
   
    <Grid mb={2}> 
      {posts.map((post) => 
    <div>
      <br></br>
      <Link to={`/posts/id/${post.id}`}>
    <Card style={{ background: '#E3FEE6'  }}  sx={{ borderRadius: "2%", minWidth: 600, maxWidth: 600, maxHeight:200 }}>
      <CardContent >
          <Typography  m={1} variant="h5" color="black">
            {post.title}
          </Typography>
          <br></br>
          <Typography variant="body2" color="black">
          {post.description}
          </Typography>
          <Typography variant="body2" color="black">
          Posted: {convertDate(post.createdAt)}
          </Typography>
        </CardContent>
      </Card> 
      </Link>
      </div>
      )}
     </Grid>
     
     </div>
    );
}

export default Home;

