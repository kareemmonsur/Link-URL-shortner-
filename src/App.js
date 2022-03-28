import Grid from '@material-ui/core/Grid';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <Grid 
    className="App" 
    container 
    direction='column' 
    justify='center' 
    alignItems='center'
    >
      <h1>Short links, big results</h1>
      <p>A URL shortener built with powerful tools to help you grow and protect your brand.</p>
      <Search/>
      
    </Grid>
  );
}

export default App;
