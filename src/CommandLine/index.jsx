import React from 'react';

import CommandLineInput from './CommandLineInput';
import CommandLineHistory from './CommandLineHistory';
import styles from './styles/index.css';


const KEYCODES = {
    BACKSPACE: 8,
    TAB: 9 ,
    ENTER: 13
};

class CommandLine extends React.Component {
    constructor(props) {
        super(props);

        const {defaultValue} = props;

        this.state = {
            value: defaultValue,
            history: []
        };

        this.runCommand = this.runCommand.bind(this);
        this.keyListener = this.keyListener.bind(this);
    }

    componentDidMount() {
        global.addEventListener('keydown', this.keyListener);
    }

    componentWillUnmount() {
        global.removeEventListener('keydown', this.keyListener);
    }

    runCommand(command) {
        const {history} = this.state;

        console.log('command invoked: ' + command);

        this.setState({
            value: '',
            history: history.concat([command])
        });
    }

    keyListener(e) {
        const {
            target: {
                value
            },
            keyCode
        } = e;

        if (keyCode === KEYCODES.ENTER && !!value) {
            e.preventDefault();
            this.runCommand(value);
        } else {
            this.setState({
                value
            });
        }
    }

    render() {
        const {value, history} = this.state;

        return (
            <div className={styles.cmdWrapper}>
                <CommandLineHistory history={history} />
                <CommandLineInput
                    value={value}
                    onChange={this.keyListener}
                />
            </div>
        );
    }
}

export default CommandLine;
