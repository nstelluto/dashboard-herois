import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import { styled } from '@material-ui/core/styles';

export default function App() {

  const mystyle = {
    padding: "0",
    margin: "0",
  }

  return <Container maxWidth="xl" style={mystyle}>
    <Grid container>
      <Grid item xs={2}>
        teste
      </Grid>
      <Grid item xs={7}>
        teste
      </Grid>
      <Grid item xs={3}>
        teste
      </Grid>
    </Grid>
  </Container>;
}