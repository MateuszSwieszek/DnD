import { Component } from "react";
import './card-list-container.styles.css';
import CardList from './card-list.component';
import SearchBox from '../search-box/search-box.component';

class CardListContainer extends Component {
    render() {
        const { monsters, onSearchChange, searchField } = this.props;
        return (
            <div className="card-list-container">
                <SearchBox 
                    className="monsters-search-box" 
                    placeholder="Search monsters" 
                    onChangeHandler={onSearchChange} 
                />
                <CardList monsters={monsters.filter(monster => 
                    monster.name.toLowerCase().includes(searchField.toLowerCase())
                )} />
            </div>
        );
    }
}

export default CardListContainer;
