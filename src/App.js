import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './composants/Todo';

export default class App extends Component {

  state = {
  }

  render() {
    return (
      <div className="App container">

        <Todo />

      </div>
    );
  }

}
