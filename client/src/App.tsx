import * as React from 'react';
import { 
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Add from './components/Add';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';

import './App.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Header}/>
        <Route exact={true} path="/recipes" component={Recipes}/>
        <Route exact={true} path="/recipes/:id" component={Recipe}/>
        <Route exact={true} path="/add" component={Add}/>
      </div>
    );
  }
}

export default App;
