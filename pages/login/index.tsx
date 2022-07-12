import { Copyright } from '@mui/icons-material';
import { Avatar, Button, Card, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NextPage } from 'next'
import Link from 'next/link';
import React from 'react'
import { Logo } from '../../components/ui/Logo';

const LoginPage: NextPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Logo image='https://i.pinimg.com/736x/80/15/9a/80159a294f9c40ec66e4b007b5446d27.jpg'></Logo>
          <Box component="form" noValidate={false} onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Box>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button type="submit" fullWidth sx={{ mt: 3 }}>
                Sign In
              </Button>
            </Box>
            <Grid container sx={{ mt: 3 }}>
              <Grid item xs>
                <Link href="#">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: 3 }}>
              <Grid item sx={{ mr: 2 }}>
                <Copyright sx={{ mt: 2 }} />
              </Grid>
              <Grid item>
                <p>Shop managment</p>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid >
  )
}

export default LoginPage;