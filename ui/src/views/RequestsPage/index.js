import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
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
     {/* {requests.map((request) => (   */}
    <Card style={{ background: '#E3FEE6' }} sx={{ borderRadius: "2%", minWidth: 600, maxWidth: 600, maxHeight:200 }}>
    <Link to='/posts/id/:id'>
        <Button sx={{ color:"black", textDecoration: "none"}}>
        <Typography variant="h4" color="black">
          Title
        </Typography>
      </Button>
      </Link>
      <CardContent>
        <Typography variant="body2" color="black">
          Description
        </Typography>
        <Typography variant="body2" color="black">
          Country
          </Typography>
      </CardContent>
    </Card> 
   {/* })} */}
    </Grid>
  );
}

export default RequestsPage;