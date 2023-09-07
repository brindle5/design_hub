import NavBar from './components/NavBar';
import './App.css';
import { Container } from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* Add styles main */}
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign In</h1>}/>

         
        </Switch>
      </Container>
    </div>
  );
}

export default App;