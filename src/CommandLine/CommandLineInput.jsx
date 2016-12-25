import React from 'react';

import styles from './styles/index.css';

const KEYCODES = {
    BACKSPACE: 8,
    TAB: 9 ,
    ENTER: 13
};

class CommandLineInput extends React.Component {
    constructor(props) {
        super(props);

        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(e) {
        const value = e.target.value;
        const {onEnter, onChange} = this.props;

        switch (e.keyCode) {
            case KEYCODES.ENTER:
                if(value) {
                    onEnter(value);
                }
                e.preventDefault();
                break;
            default:
                onChange(value);
        }
    }

    render() {
        const {value} = this.props;

        return (
            <input
                className={styles.inputBar}
                value={value}
                onChange={this.onKeyDown}
            />
        );
    }
}

export default CommandLineInput;
