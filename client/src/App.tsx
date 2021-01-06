import React from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Articles from './pages/articles/articles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ArticleDetails from './pages/articleDetails';

function App() {
  return (
    <main style={{height: '100vh'}}>
      <Router>
        <Header />
        <Sidebar />
        <Switch>
          <Route path='/article/:articleId'>
            <ArticleDetails />
          </Route>
          <Route path='/notes' exact>
            NOTES
          </Route>
          <Route path='/' exact>
            <Articles />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
