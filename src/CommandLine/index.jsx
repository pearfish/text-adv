import React from 'react';

import CommandLineInput from './CommandLineInput';
import CommandLineHistory from './CommandLineHistory';

class CommandLine extends React.component {
    constructor(props) {
        super(props);

        this.history = [];

        this.state = {
            value: ''
        };
    }

    runCommand(command) {
        console.log('command invoked: ' + command);
        this.history.push(command);
    }

    render() {
        const {value} = state;

        return (
            <div className={styles.cmdWrapper} />
                <CommandLineHistory history={this.history} />
                <CommandLineInput value={value} onEnter={this.runCommand} />
            </div>
        );
    }
}

export default CommandLine;
