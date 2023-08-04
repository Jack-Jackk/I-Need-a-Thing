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
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useNavigate } from "react-router-dom";
import { register } from "../../utility/api";
import { setToken } from "../../utility/utils";

function Register() {
  const [userData, setUserdata] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    bio: "",
    link: "",
    role: ""
  });

  const navigate = useNavigate()

  const handleChange = (event) => {
    setUserdata({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userData);

    try {
      const response = await register(userData);
      //submit users token to jwt utility
      setToken(response.token);
      //redirect user to success page
      navigate('/login')
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  };

  return (
  <>
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
            Create an Account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="firstname"
                  fullWidth
                  id="firstname"
                  label="First Name"
                  autoFocus
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  name="username"
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
           

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="role"
                  >
                     <FormControlLabel
                      value="user"
                      control={<Radio />}
                      label="Become a Member"
                      onChange={(e) => handleChange(e)}
                    />
                    <FormControlLabel
                      value="creator"
                      control={<Radio />}
                      label="Become a Creator"
                      onChange={(e) => handleChange(e)}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* if user chooses become a creator display these inputs aswell */}
              {userData.role === "creator" ? (
                <>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="link"
                      label="Link"
                      name="link"
                      onChange={(e) => handleChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="bio"
                      label="Biography"
                      name="biography"
                      onChange={(e) => handleChange(e)}
                    />
                  </Grid>
                </>
              ) : null}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end" marginBottom={3}>
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
export default Register;