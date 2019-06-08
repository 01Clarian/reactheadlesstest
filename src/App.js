import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import ArtistNews from './components/ArtistNews'
import ArtistNewsPage from './components/ArtistNewsPage'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div>
    <Router>
    <Fragment>
      <Route exact path="/reactheadlesstest/" component={ArtistNews} />
      <Route exact path="/reactheadlesstest/artistnews/:id" component={ArtistNewsPage} />
    </Fragment>
    </Router>
     <Contact />
     </div>
  );
}

export default App;
