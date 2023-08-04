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
import { getRequestById } from '../../utility/api';
import { useState, useEffect } from 'react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(45deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const IndividualRequests = (props) => {
  const [requests, setRequests] = useState();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const getIdRequest = async () => {
        const requestData = await getRequestById();
        console.log('request: ', requests)
      setRequests(requestData);
    };
    getIdRequest();
  }, [requests]);



  return (
    
    <Grid>
    <Card style={{ background: '#E3FEE6' }} sx={{ borderRadius: "2%", minWidth: 950, maxWidth: 950, maxHeight:950 }}>
      <CardContent>
      <Typography padding="1%" mt={2} variant="h4" color="black">
          I need a metal bracket for my racecar
        </Typography>
        <Typography mt={2} mb={2} variant="h6" color="black">
        With the metal bracket tailored to fit my car's specific requirements, I can confidently embrace the road ahead, knowing my vehicle is equipped for enhanced performance and functionality.
        </Typography>
        <Typography m={2}  mt={2}variant="h7" color="black">
           Is Design Required? No
          </Typography>
        <Typography m={2} mt={2} variant="h7" color="black">
          Fabrication Type: CNC 
        </Typography>
        <Typography m={2} mt={2} variant="h7" color="black">
          Material: Aluminum
        </Typography>
        <Typography m={2} mt={2} variant="body1" color="black">
          Design URL: architectural_example-imperial.dwg
        </Typography>
        <Typography m={2} variant="body1" color="black">
          Quantity: 2
        </Typography>
        <Typography m={2} variant="body1" color="black">
          Country: United States
        </Typography>
        <Typography m={2} variant="body2" color="black">
          posted at: 08/12/23 9:54 PM
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

export default IndividualRequests;