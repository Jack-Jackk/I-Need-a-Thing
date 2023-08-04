import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { Button, Divider, Grid } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { getAllPosts } from '../../utility/api';
import { useState, useEffect } from 'react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const Home = (props) => {
  const [posts, setPosts] = useState();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const getPostsData = async () => {
        const postData = await getAllPosts();
        console.log('posts: ', posts)
      setPosts(postData);
    };
    getPostsData();
  }, [posts]);

if (!posts) {
  return <div>Loading...</div>
}

  return (
    
    <Grid>
      {posts.map((post) => (
    <Card sx={{ maxWidth: 600 }}>
      <Link to='/posts/:id'>
        <Button sx={{ color:"black", textDecoration: "none"}}>
      <CardHeader
        title={post.title}
        subheader={post.createdAt}
      />
      </Button>
      </Link>
     
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.isDesignRequired}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {post.designUrl}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.country}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
       {/* button to expand post and show comments */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CommentIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>@RandomUserGuy: The comments will go here!</Typography>
          <Divider/>
        </CardContent>
      </Collapse>
    </Card> 
      ))}
    </Grid>
  );
}

export default Home;

