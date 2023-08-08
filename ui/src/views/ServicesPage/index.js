import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';

import { useState, useEffect } from 'react';


const ServicesPage = () => {
  const [services, setServices] = useState()
  const {id} = useParams()
  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch(`http://localhost:9000/posts/services/`);
      const data = await response.json();
      console.log('data', data)
      setServices(data);
    }

    fetchServices();
  }, [id])

    
  return (
    <div>
      <br></br>
    <Grid>
    {services.map((service) => 
  <Link to="/posts/services/id/:id" sx={{ textDecoration:"none" }}>
     {/* {requests.map((request) => (   */}
  <Card style={{ background: '#E3FEE6' }} sx={{ borderRadius: "2%", minWidth: 600, maxWidth: 600, maxHeight:200 }}>
    <CardContent>
        <Typography padding="1%" mt={2} variant="h5" color="black">
        {service.title}
        </Typography>
        <Typography variant="body2" color="black">
        {service.description}
        </Typography>
      </CardContent>
    </Card> 
    {/* })} */}
    </Link>
    )}
  </Grid>
  </div>
  );
}
export default ServicesPage;