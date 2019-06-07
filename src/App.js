import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import ArtistNews from './components/ArtistNews'
import ArtistNewsPage from './components/ArtistNewsPage'
function App() {
  return (
    <Router>
    <Fragment>
      <Route exact path="/" component={ArtistNews} />
      <Route exact path="/artistnews/:id" component={ArtistNewsPage} />
    </Fragment>
    </Router>
  );
}

export default App;
