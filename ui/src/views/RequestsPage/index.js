import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { getByRequest } from '../../utility/api';



const RequestsPage = () => {
  const [requests, setRequests] = useState([])
  useEffect(() => {
		const getPostsType = async () => {
			const postType = await getByRequest("request");
			console.log("posts: ", requests);
			setRequests(postType);
		};
		getPostsType();
	}, []);

  return (
    <div>
      <br></br>
    <Grid mb={2}>
    {requests.map((request) => 
  <Link to={`/posts/:id`} sx={{ textDecoration:"none" }}>
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
    </Link>
    )}
  </Grid>
  <br></br>
  </div>
  );
}

export default RequestsPage;