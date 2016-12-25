import React from 'react';

import In from './CommandLine/';
import {generateMap} from './dungeon/Map';

const Inventory = ({items, onClick}) => (
    <ul>
        {
            items.map((item, i) => (
                <li key={i} onClick={onClick(item.id)}>{item.displayName}</li>
            ))
        }
    </ul>
);

const Out = ({lines}) => (
    <ul>
        {
            lines.map((line, i) => (
                <li key={i}>{line}</li>
            ))
        }
    </ul>
);

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            map: generateMap(),
            out: [],
            inventory: []
        };

        this.handleCommand = this.handleCommand.bind(this);
    }

    componentDidMount() {
        this.state.map.debug();
    }

    handleCommand(command) {
        this.setState({
            out: this.state.out.concat([
                `> ${command}`,
                `command \`${command}\` not recognized`
            ])
        });
    }

    render() {
        const {inventory, out} = this.state;

        return (
            <div>
                <Out lines={out}/>
                <Inventory items={inventory} onClick={(id) => console.log(id)} />
                <In autocompleteWords={['look', 'move']} handleCommand={this.handleCommand} override={''}/>
            </div>
        );
    }
}

export default Game;
