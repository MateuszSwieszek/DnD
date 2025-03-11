import React, { Component } from 'react';
import './App.css';
import CardListContainer from './components/card-list/card-list-container.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    return (
      <div className="App">
        <h1 className="app-title">Monsters Inc.</h1>
        <CardListContainer 
          monsters={monsters} 
          searchField={searchField} 
          onSearchChange={this.onSearchChange} 
        />
      </div>
    );
  }
}

export default App;