import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { postService } from "../../utility/api";
import { setToken } from "../../utility/utils";
import MenuItem from '@mui/material/MenuItem';


// menu options for dropdown selects
const options = [
    {
        value: "Yes",
        label: "Yes"
    },
    {
        value: "No",
        label: "No"
    }
]

function CreateRequest() {
  const [postData, setPostdata] = useState({
    type: "service"
  });

  const navigate = useNavigate()

  const handleChange = (event) => {
    setPostdata({ ...postData, [event.target.name]: event.target.value })
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(postData);

    try {
      const response = await postService(postData);
      //submit users token to jwt utility
      setToken(response.token);
      //redirect user to success page
      navigate('/')
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };
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
          <Typography component="h1" variant="h5">
            Post a Service
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  required
                  name="title"
                  fullWidth
                  id="title"
                  label="Title"
                  autoFocus
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                    fullWidth
                    id="canDesign"
                    select
                    name="canDesign"
                    label="Can you design?"
                    defaultValue=""
                    onChange={(e) => handleChange(e)}
                    >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                    fullWidth
                    id="fabType"
                    label="Type of Fabrication"
                    name="fabType"
                    defaultValue=""
                    onChange={(e) => handleChange(e)}
                    >
                </TextField>
              </Grid>
              <Grid item xs={12}>
              <TextField
                    fullWidth
                    id="material"
                    label="Type of Materials"
                    name="material"
                    defaultValue=""
                    onChange={(e) => handleChange(e)}
                    >
                </TextField>
              </Grid>
                <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="country"
                  label="Country"
                  id="country"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="maxHeight"
                  label="Max Height"
                  id="maxHeight"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="maxWidth"
                  label="Max Width"
                  id="maxWidth"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="maxDepth"
                  label="Max Depth"
                  id="maxDepth"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="maxPrecision"
                  label="Max Precision"
                  id="maxPrecision"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              justifyContent="center"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Request
            </Button>
            </Grid>
            <Grid container justifyContent="center" marginBottom={3}>
              <Grid item>
                <Link href="/" variant="body2">
                  Cancel
                </Link>
              </Grid>
            </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
export default CreateRequest;