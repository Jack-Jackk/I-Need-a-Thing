import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { getByService } from '../../utility/api';
import { useState, useEffect } from 'react';


const ServicesPage = () => {
  const [services, setServices] = useState()
  useEffect(() => {
		const getPostsType = async () => {
			const postType = await getByService("service");
			console.log("posts: ", services);
			setServices(postType);
		};
		getPostsType();
	}, []);

    
  return (
    <div>
      <br></br>
    <Grid mb={2}>
    {services.map((service) => 
  <Link to="/posts/:id" sx={{ textDecoration:"none" }}>
  <Card style={{ background: '#E3FEE6' }} sx={{ borderRadius: "2%", minWidth: 600, maxWidth: 600, maxHeight:200 }}>
    <CardContent>
        <Typography padding="1%" mt={2} variant="h5" color="black">
        {service.title}
        </Typography>
        <Typography variant="body2" color="black">
        {service.description}
        </Typography>
        <Typography variant="body2" color="black">
        {service.createdAt}
        </Typography>
      </CardContent>
    </Card> 
    </Link>
    )}
  </Grid>
  </div>
  );
}
export default ServicesPage;