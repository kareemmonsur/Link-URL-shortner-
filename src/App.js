import Grid from '@material-ui/core/Grid';
import Search from './components/Search';
import './App.css';
import TopMessage from './components/TopMessage';

function App() {
  return (
    <Grid 
    className="App" 
    container 
    direction='column' 
    justify='center' 
    alignItems='center'
    >
      <TopMessage/>
      <Search/>

      
    </Grid>
  );
}

export default App;
