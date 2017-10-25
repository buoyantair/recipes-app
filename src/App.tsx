import * as React from 'react';
import { 
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Recipes from './components/Recipes';

import './App.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Header}/>
        <Route path="/recipes" component={Recipes}/>
      </div>
    );
  }
}

export default App;
