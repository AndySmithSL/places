import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.state = { temperature: '' };
    }

    handleChange(e) {
        //this.setState({ temperature: e.target.value });
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        //const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter the temperature in {scaleNames[scale]}</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput;
