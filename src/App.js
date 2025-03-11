import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  OnSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField: searchField}
    });
  };
  
  render(){

    const {monsters, searchField} = this.state;
    const {OnSearchChange} = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return(
      <div className="App">
        <h1 className="app-title"> Monsters Inc.</h1>
        <SearchBox 
          OnChangeHandler={OnSearchChange}
          className="monsters-search-box"
          placeholder="Search Monsters"
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
