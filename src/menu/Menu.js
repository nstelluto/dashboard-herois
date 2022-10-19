import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import HomeIcon from '@mui/icons-material/Home';
import LocationIcon from '@mui/icons-material/LocationCity';
import LogoHero from '../images/logo-hero.png';
import ImgSuperman from '../images/superman.png';

const drawerWidth = 240;

const iconStyle = {
  color: "#FFFF",
}

const imgLogoStyle = {
    width: '150px',
    height: 'auto',
    margin: '1rem',
    marginTop: '2rem',
    marginBottom: '2rem',
}

const imgSupermanStyle = {
  width: '100%',
  height: 'auto',
  marginTop: '2rem',
  marginBottom: 0,
}

const boxLogoStyle = {
  width: '100%',
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default function Menu() {

  return(
    <Grid item xs={2}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: "#0E0E0E",
            color: "#FFFF",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div style={boxLogoStyle}>
          <img src={LogoHero} style={imgLogoStyle}/>
        </div>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon style={iconStyle}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>
                Início
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon style={iconStyle}>
                <LocationIcon />
              </ListItemIcon>
              <ListItemText>
                Agência
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon style={iconStyle}>
                <StarIcon />
              </ListItemIcon>
              <ListItemText>
                Favoritos
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
          <Toolbar />
          <div style={boxLogoStyle}>
            <img src={ImgSuperman} style={imgSupermanStyle}/>
          </div>
      </Drawer>
    </Grid>
  );
}