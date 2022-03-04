import { Avatar, Grid,  Paper, TextField, Typography, Link } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';




import React from 'react'

const signin=()=> {
    const paperStyle={padding:10,height:'80vh',width:250,margin:'20px auto'}
  return (
      <Grid >
          <Paper elevation={20} style={paperStyle}>
              <Grid align='center'>
              <Avatar><AccountCircleIcon/></Avatar>
              <h2>Sign In</h2>
              </Grid>
                  <TextField label='Email' placeholder='Enter your email' fullWidth required/>
                  <FormControlLabel 
                        control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Remember me"
                    />
                    <Button variant="contained" color="primary" fullWidth>Submit </Button>
                       <Typography>
                          <Link href='0' >
                          Forgot Password
                          </Link>
                       </Typography>
                       <Typography>Do you have an account
                          <Link href='0' >
                          Sign up?
                          </Link>
                       </Typography>
          </Paper>
      </Grid>
  )
}

export default signin
