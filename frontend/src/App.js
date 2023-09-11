import NavBar from './components/NavBar';
import './App.css';
import { Container } from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import AddArtworkForm from './pages/artwork/AddArtworkForm';


function App() {

  return (

    <div className="App">
      {/* Add styles main */}
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <h1>Design Hub</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />     
          <Route exact path="/artwork/add" render={() => <AddArtworkForm />} />   
        </Switch>
      </Container>
    </div>

  );
}

export default App;