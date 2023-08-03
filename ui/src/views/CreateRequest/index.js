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
import { postRequest } from "../../utility/api";
import { setToken } from "../../utility/utils";
import MenuItem from '@mui/material/MenuItem';

// options for dropdown selects
const options = [
    {
        value: "true",
        label: "Yes"
    },
    {
        value: "false",
        label: "No"
    }
]

function CreateRequest() {
  const [postData, setPostdata] = useState({
  });

  const navigate = useNavigate()

  const handleChange = (event) => {
    setPostdata({ ...postData, [event.target.name]: event.target.value })
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(postData);

    try {
      const response = await postRequest(postData);
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
            Create a Request
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
              <TextField
                    fullWidth
                    id="isDesignRequired"
                    select
                    label="Is a design required?"
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
                <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="designUrl"
                  label="Design URL"
                  id="designUrl"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="quantity"
                  label="Quantity"
                  id="quantity"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="country"
                  label="Country"
                  id="country"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Request
            </Button>
            <Grid container justifyContent="flex-end" marginBottom={3}>
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