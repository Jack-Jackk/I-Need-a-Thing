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
import { getServiceById } from '../../utility/api';
import { useState, useEffect } from 'react';
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
  const [services, setServices] = useState();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const getIdService = async () => {
        const serviceData = await getServiceById();
        console.log('services: ', services)
      setServices(serviceData);
    };
    getIdService();
  }, [services]);



  return (
    
    <Grid>
    <Card style={{ background: '#E3FEE6' }} sx={{ borderRadius: "2%", minWidth: 950, maxWidth: 950, maxHeight:950 }}>
      <CardContent>
      <Link to="/profile/id" textDecoration="none">
      <Typography m={2} mt={2}variant="h6" color="black">
           @JackJackk
          </Typography>
          </Link>
      <Typography padding="1%" mt={2} variant="h4" color="black">
          I create wooden trinkets
        </Typography>
        <Typography mt={2} mb={4} variant="h6" color="black">
        As a skilled craftsman using CNC technology, I meticulously carve exquisite wooden trinkets with precision and artistry. The CNC machine allows me to create intricate designs and shapes, ensuring each piece is a unique work of art. From personalized keychains to ornate figurines, my CNC-crafted wooden trinkets captivate the imagination and add a touch of nature's beauty to everyday life.
        </Typography>
        <Typography m={2}  mt={2}variant="h7" color="black">
           Can Design? Yes
          </Typography>
        <Typography m={2} mt={2} variant="h7" color="black">
          Fabrication Type: CNC 
        </Typography>
        <Typography m={2} mt={2} variant="h7" color="black">
          Material: Wood
        </Typography>
        <Typography m={2} mt={2} variant="body1" color="black">
        Max Height: 48 in
        </Typography>
        <Typography m={2} mt={2} variant="body1" color="black">
        Max Width: 48 in
        </Typography>
        <Typography m={2} mt={2} variant="body1" color="black">
        Max Depth: 48 in
        </Typography>
        <Typography m={2} mt={2} variant="body1" color="black">
        Max Precision: 48 in
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

export default IndividualServices;