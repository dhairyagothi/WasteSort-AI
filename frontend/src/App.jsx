import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExampleComponent from './components/ExampleComponent';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/example" component={ExampleComponent} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;