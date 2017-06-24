import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import TodoItem from './TodoItem';
import AddItem from './AddItem';
import About from './About';

class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact={true} path={'/'} component={TodoComponent}></Route>
          <Route path={'/about'} component={About}></Route>
        </Switch>
      </Router>
    )
  }
}
export default App;

// create component
class TodoComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ['Clean room', 'Do the dishes', 'Do shoping', 'Make a bed'],
    }
  }

  render() {
    let todos = this.state.todos;
    todos = todos.map((item, index) => {
      return (
        // output TodoItem component with props
        <TodoItem item={item} key={index} onCheck={this.onCheck.bind(this)} onDelete={this.onDelete.bind(this)} />
      )
    })

    return (
      <div id="todo-list">
      <Link className="link" to={'/'}>Home</Link>
      <Link className="link" to={'/about'}>About</Link>
        <h2>Tasks to do:</h2>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd.bind(this)} />
      </div>
    )
  }

  onDelete(item) {
    let updatedTodos = this.state.todos.filter((val, index) => {
      return item !== val;
    });

    this.setState({
      todos: updatedTodos
    });
  }

  onAdd(item) {
    let updatedTodos = this.state.todos;
    updatedTodos.push(item);

    this.setState({
      todos: updatedTodos
    });
  }

  onCheck(item) {
    // item = checkbox
    // text = span with text
    let text = item.nextElementSibling;

    if (item.checked) {
      text.classList.add('done');
    } else {
      text.classList.remove('done');
    }
  }
}
