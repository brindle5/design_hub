import './App.css';
import { Container } from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import "./api/axiosDefaults";
import NavBar from './components/NavBar';
import SignUpPage from './pages/auth/SignUpPage';
import AddArtworkPage from './pages/artwork/AddArtworkPage';
import SignInPage from './pages/auth/SignInPage';
import ArtPiecePage from './pages/artwork/ArtPiecePage';
import ArtworkListPage from './pages/artwork/ArtworkListPage';
import EditArtworkPage from './pages/artwork/EditArtworkPage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" render={() => 
          <ArtworkListPage message="No results found. Adjust the search terms." />} />
          <Route exact path="/signin" render={() => <SignInPage />} />
          <Route exact path="/signup" render={() => <SignUpPage />} />     
          <Route exact path="/artwork/create" render={() => <AddArtworkPage />} />  
          <Route exact path="/artwork/:id" render={() => <ArtPiecePage />} />
          <Route exact path="/artwork/:id/edit" render={() => <EditArtworkPage />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;