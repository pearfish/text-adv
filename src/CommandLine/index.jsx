import React from 'react';

import CommandLineInput from './CommandLineInput';
import styles from './styles/index.css';


const KEYCODES = {
    BACKSPACE: 8,
    TAB: 9 ,
    ENTER: 13
};

class CommandLine extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            history: []
        };

        this.attemptAutocomplete = this.attemptAutocomplete.bind(this);
        this.runCommand = this.runCommand.bind(this);
        this.keyListener = this.keyListener.bind(this);
    }

    componentDidMount() {
        global.addEventListener('keydown', this.keyListener);
    }

    componentWillUnmount() {
        global.removeEventListener('keydown', this.keyListener);
    }

    //TODO
    attemptAutocomplete() {
        const typed = this.state.value;
        const candidates = this.props.autocompleteWords;

        // candidates.forEach(word => {
        //     const regxp = new RegExp(`^${word}$`);
        //
        // });
    }

    runCommand(command) {
        const {history} = this.state;
        const {handleCommand} = this.props;

        this.setState({
            value: '',
            history: history.concat([command])
        });

        handleCommand(command);
    }

    keyListener(e) {
        const {
            target: {
                value
            },
            keyCode
        } = e;

        switch (keyCode) {
            case KEYCODES.ENTER:
                if (!!value) {
                    this.runCommand(value);
                }
                e.preventDefault();
                break;

            case KEYCODES.TAB:
                this.attemptAutocomplete();
                e.preventDefault();
                break;

            default:
                this.setState({
                    value
                });
        }
    }

    render() {
        const {value, history} = this.state;

        return (
            <div className={styles.cmdWrapper}>
                <CommandLineInput
                    value={value}
                    onChange={this.keyListener}
                />
            </div>
        );
    }
}

export default CommandLine;
