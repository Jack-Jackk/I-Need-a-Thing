import { Link } from 'react-router-dom';
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';


function Footer() {

	return (
		<Box
			sx={{
				position: 'fixed',
				width: '100%',
				height: 'auto',
				paddingTop: '1rem',
				paddingBottom: '1rem',
			}}
		>
			<Container maxWidth='lg'>
				<Grid container direction='column' alignItems='center'>
					<Grid item xs={12}>
						<Typography color='black' variant='h5'>
							Created By
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography color='textSecondary' variant='subtitle1'>
							<Link
								to='https://www.linkedin.com/in/jackson-abeyta-960243281/'
								style={{ color: "black" }}
							>
								Jackson Abeyta
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default Footer;
