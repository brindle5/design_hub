import NavBar from './components/NavBar';
import './App.css';
import { Container } from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import "./api/axiosDefaults";
import SignUpPage from './pages/auth/SignUpPage';
import AddArtworkPage from './pages/artwork/AddArtworkPage';
import SignInPage from './pages/auth/SignInPage';
import ArtPiecePage from './pages/artwork/ArtPiecePage';


function App() {

  return (

    <div className="App">
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <h1>Design Hub</h1>} />
          <Route exact path="/signin" render={() => <SignInPage />} />
          <Route exact path="/signup" render={() => <SignUpPage />} />     
          <Route exact path="/artwork/create" render={() => <AddArtworkPage />} />  
          <Route exact path="/artwork/:id" render={() => <ArtPiecePage />} />
        </Switch>
      </Container>
    </div>

  );
}

export default App;