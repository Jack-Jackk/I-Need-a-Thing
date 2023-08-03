import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


// buttons that link the user to create requests page or create service page

function CreatePost() {
 
  return (
    <div>
      <Container component="main" maxWidth="xs" sx={{padding: '5%'}}>
        <CssBaseline />
        <Box
          sx={{
            marginBottom: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" marginTop={10} variant="h5">
            Create a Post
          </Typography>
          
            <Button
              href='/posts/new/request'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create a Request
            </Button>
            <Button
              href='/posts/new/service'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Post a Service
            </Button>
            <Grid container justifyContent="center" marginBottom={3}>
              <Grid item>
                <Link href="/" variant="body2">
                  Cancel
                </Link>
              </Grid>
            </Grid>
        </Box>
      </Container>
    </div>
  );
}
export default CreatePost;