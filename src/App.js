import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Gallery from './gallery'
import Gallery1 from './gallery1'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
              <Route exact path='/' component={Gallery} />
              <Route path='/gallery' component={Gallery1} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;