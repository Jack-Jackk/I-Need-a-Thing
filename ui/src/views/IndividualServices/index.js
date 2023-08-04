import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Divider, Grid } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { getServiceById } from '../../utility/api';
import { useState, useEffect } from 'react';

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
        <Button sx={{ color:"black", textDecoration: "none"}}>
        <Typography variant="h4" color="black">
          Title
        </Typography>
      </Button>
      <CardContent>
        <Typography variant="body2" color="black">
          Description
        </Typography>
        <Typography variant="body2" color="black">
          Country
        </Typography>
        <Typography variant="body2" color="black">
           Is Design Required?
          </Typography>
          <Typography variant="body2" color="black">
          Design URL
        </Typography>
        <Typography variant="body2" color="black">
          Fabrication Type & Material
        </Typography>
        <Typography variant="body2" color="black">
          Quantity
        </Typography>
        <Typography variant="body2" color="black">
          posted at
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
        <Typography>Comments</Typography>
          <Typography paragraph>@RandomUserGuy: The comments will go here!</Typography>
          <Divider/>
        </CardContent>
      </Collapse>
    </Card> 
    </Grid>
  );
}

export default IndividualServices;