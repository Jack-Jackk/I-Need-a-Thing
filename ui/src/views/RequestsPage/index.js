import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';


const RequestsPage = () => {
  const [requests, setRequests] = useState()
  const {id} = useParams()
  useEffect(() => {
    const fetchRequests = async () => {
      const response = await fetch(`http://localhost:9000/posts/requests/`);
      const data = await response.json();
      console.log('data', data)
      setRequests(data);
    }

    fetchRequests();
  }, [id])

  

  return (
    <div>
      <br></br>
    <Grid>
    {requests.map((request) => 
  <Link to="/posts/requests/id/:id" sx={{ textDecoration:"none" }}>
     {/* {requests.map((request) => (   */}
  <Card style={{ background: '#E3FEE6' }} sx={{ borderRadius: "2%", minWidth: 600, maxWidth: 600, maxHeight:200 }}>
    <CardContent>
        <Typography padding="1%" mt={2} variant="h5" color="black">
          {request.title}
        </Typography>
        <Typography variant="body2" color="black">
       {request.description}
        </Typography>
        <Typography variant="body2" color="black">
        @{request.username}
        </Typography>
      </CardContent>
    </Card> 
    {/* })} */}
    </Link>
    )}
  </Grid>
  <br></br>
  </div>
  );
}

export default RequestsPage;