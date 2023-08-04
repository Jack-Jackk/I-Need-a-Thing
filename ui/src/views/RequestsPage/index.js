import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { getAllRequests } from '../../utility/api';
import { useState, useEffect } from 'react';


const RequestsPage = (props) => {
  const [requests, setRequests] = useState();

  useEffect(() => {
    const getRequestsData = async () => {
        const requestData = await getAllRequests();
        console.log('requests: ', requests)
      setRequests(requestData);
    };
    getRequestsData();
  }, [requests]);


  return (
    
    <Grid>
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
  </Grid>
  );
}

export default RequestsPage;