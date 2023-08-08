import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { getById } from '../../utility/api';
import { useState, useEffect, useParams } from 'react';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(45deg)',
  marginLeft: 'auto',
  color: "black",
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const IndividualServices = (props) => {
  const [posts, setPosts] = useState([]);
  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const fetchPostsDetails = async () => {
      const response = await getById();
      const data = await response.json();
      console.log('data', data)
      setPosts(data);
    }

    fetchPostsDetails();
  }, [])



  return (
    
    <Grid>
    <Card style={{ background: '#E3FEE6' }} sx={{ borderRadius: "2%", minWidth: 950, maxWidth: 950, maxHeight:950 }}>
      <CardContent>
      <Link to="/profile/id" textDecoration="none">
      <Typography m={2} mt={2}variant="h6" color="black">
           {posts.username}
          </Typography>
          </Link>
      <Typography padding="1%" mt={2} variant="h4" color="black">
      {posts.title}
        </Typography>
        <Typography mt={2} mb={4} variant="h6" color="black">
        {posts.description}
        </Typography>
        <Typography m={2}  mt={2}variant="h7" color="black">
        {posts.canDesign}
          </Typography>
        <Typography m={2} mt={2} variant="h7" color="black">
        {posts.fabType}
        </Typography>
        <Typography m={2} mt={2} variant="h7" color="black">
        {posts.material}
        </Typography>
        <Typography m={2} mt={2} variant="body1" color="black">
        {posts.maxHeight}
        </Typography>
        <Typography m={2} mt={2} variant="body1" color="black">
        {posts.maxWidth}
        </Typography>
        <Typography m={2} mt={2} variant="body1" color="black">
        {posts.maxDepth}
        </Typography>
        <Typography m={2} mt={2} variant="body1" color="black">
        {posts.maxPrecision}
        </Typography>
        <Typography m={2} variant="body1" color="black">
        {posts.country}
        </Typography>
        <Typography m={2} variant="body2" color="black">
        {posts.createdAt}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       {/* button to expand post and show comments */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CommentIcon sx={{ color:"black"}}/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="h6" color="black" padding="1%">Comments</Typography>
          <Typography color="black" paragraph>@RandomUserGuy: The comments will go here!</Typography>
          <Divider/>
        </CardContent>
      </Collapse>
    </Card> 
    </Grid>
  );
}

export default IndividualServices;