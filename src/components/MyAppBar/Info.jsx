import React from 'react';
import GoogleMapReact from 'google-map-react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Container } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";


const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Info = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  return (
    <Container>
        <Typography variant="h1" component='div' textAlign='center'  sx={{ fontSize: '40px', color: '#2E2E2E', marginTop: '100px', marginBottom: '70px', fontWeight: "600" }}>Информация о новых посадках в КР</Typography>
    <Grid container spacing={2}  >
      <Grid item xs={12} >
        
        <Paper sx={{boxShadow:'none' , borderColor:'#fff'}} >
        <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={11} sx={{ position: 'relative',  }}>
       
        <Paper sx={{ backgroundColor:'#00BF4D', width:'275px', height:'140px', position: 'absolute', bottom: 0, right: 0 , textAlign:'start' , padding:'20px', }}>
          <Typography sx={{marginTop:'5px',}}>
           <Link    component={RouterLink} to="#" sx={{   textDecoration: 'none', color: '#fff',  }}>Посадка⠀⠀⠀⠀⠀⠀D002003 </Link>
          </Typography>
          <Typography sx={{marginTop:'5px',}}>
           <Link   component={RouterLink} to="#" sx={{  textDecoration: 'none', color: '#fff',  }}>Область⠀⠀⠀⠀⠀⠀Нарын</Link>
          </Typography>
          <Typography sx={{marginTop:'5px',}}>
           <Link component={RouterLink} to="#" sx={{  textDecoration: 'none', color: '#fff',  }}>Лесхоз⠀⠀⠀⠀⠀⠀⠀Фрунзенский</Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    </Container>
  );
}

export default Info ;
