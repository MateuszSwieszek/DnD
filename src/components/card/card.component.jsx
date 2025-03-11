import { Component } from "react";
import './card.styles.css';

class Card extends Component {
    onDragStart = (event) => {
        const { id } = this.props.monster;
        event.dataTransfer.setData('monsterId', id);
    }

    render() {
        const { id, name, email } = this.props.monster;
        return (
            <div 
                className="card-container" 
                draggable 
                onDragStart={this.onDragStart}
            >
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}

export default Card;

