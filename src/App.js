import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Menu from './menu/Menu';
// import { styled } from '@material-ui/core/styles';

const containerStyle = {
  padding: "0",
  margin: "0",
  backgroundColor: "#0A0A0A",
  height: "100vh",
}

export default function App() {

  return (
    <Container maxWidth="xl" style={containerStyle}>
      <Grid container>
        <Menu/>
        <Grid item xs={7}>
          teste
        </Grid>
        <Grid item xs={3}>
          teste
        </Grid>
      </Grid>
    </Container>
  );
}