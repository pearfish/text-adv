import React from 'react';

const KEYCODES = {
    BACKSPACE: 8,
    TAB: 9 ,
    ENTER: 13
};

//TODO this component doesnt need to be stateful

class CommandLineInput extends React.Component {
    component(props) {
        super(props);

        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(e) {

        switch (e.keyCode) {
            case KEYCODES.BACKSPACE:
                if (!this.value && e.keyCode ) {
                    //more is TODO
                    return;
                }
                break;

            case KEYCODES.TAB:
                e.preventDefault();
                //TODO: tab completion
                break;

            case KEYCODES.ENTER:
                if(this.value) {
                    var aCommand = this.value;
                    this.value = '';

                    addHistory('> ' + aCommand);
                    output(aCommand)
                    doCommand(aCommand);
                }
                break;
        }
    }

    render() {
        const {value} = this.props;

        return (
            <input value={value} onChange={this.onKeyDown} />
        );
    }
}

export default CommandLineInput;
