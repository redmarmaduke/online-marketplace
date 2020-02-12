import React, { Component } from 'react';

class NumberInput extends Component {
    constructor(props) {
        super(props);

        this.props = props;

        this.identifier = props.identifier || null;
        this.setValue = props.setValue || (() => {});

        this.onClickSelect = this.onClickSelect.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);

        this.state = { value: props.value || 0 };
    }

    onChangeSelect(event) {
        console.log("Change:",event.target.value);
        this.setState({ value: event.target.value });
    }

    onClickSelect(event) {
        console.log("Click:",this.identifier,this.state.value);
        this.setValue(this.identifier, this.state.value);
    }

    render() {
        return (
            <div>
                <input type="number" min="1" value={this.state.value} onChange={this.onChangeSelect} />
                <button className="btn btn-primary" onClick={this.onClickSelect}>Update</button>
            </div>
        );
    }
}

export default NumberInput;