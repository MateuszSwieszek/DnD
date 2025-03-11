import { Component } from "react";
import './interactive-map.styles.css';

class InteractiveMap extends Component {
    constructor() {
        super();
        this.state = {
            droppedMonsters: {}
        };
    }

    onDragOver = (event) => {
        event.preventDefault();
    }

    onDrop = (event) => {
        event.preventDefault();
        const monsterId = event.dataTransfer.getData('monsterId');
        const mapRect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - mapRect.left;
        const y = event.clientY - mapRect.top;
        this.setState(prevState => ({
            droppedMonsters: {
                ...prevState.droppedMonsters,
                [monsterId]: { id: monsterId, x, y }
            }
        }));
    }

    onDragStart = (event, monsterId) => {
        event.dataTransfer.setData('monsterId', monsterId);
    }

    render() {
        const { droppedMonsters } = this.state;
        return (
            <div 
                className="interactive-map" 
                onDrop={this.onDrop} 
                onDragOver={this.onDragOver}
            >
                {Object.values(droppedMonsters).map((monster) => (
                    <div 
                        key={monster.id} 
                        className="monster-icon" 
                        style={{ left: `${monster.x}px`, top: `${monster.y}px` }}
                        draggable 
                        onDragStart={(event) => this.onDragStart(event, monster.id)}
                    >
                        {monster.id}
                    </div>
                ))}
            </div>
        );
    }
}

export default InteractiveMap;
