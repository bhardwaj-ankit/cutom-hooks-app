import React, { Component } from 'react'

export default class Uncontrolledcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myvar: 'Eg. of controlled component'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ myvar: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.myvar);
        event.preventDefault();
    }


    render() {
        return (
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                    <input onChange={this.handleChange} type="text" name="controlled" value={this.state.myvar} />
                    {this.state.myvar}
                </label>
                <input type="submit" value="Submit" />
            </form>


        )
    }
}
