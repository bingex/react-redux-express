import React from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventActions';
import TextFieldGroup from '../common/TextFieldGroup';

class EventForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            errors: {},
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.createEvent(this.state);
    }

    render() {
        const { title, errors, isLoading } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Create new Game Event</h1>

                <TextFieldGroup
                    label="Event title"
                    name="title"
                    field="title"
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
                    />

                <button className="btn btn-primary" disabled={isLoading}>Create</button>
            </form>
        );
    }
}

EventForm.PropTypes = {
    createEvent: React.PropTypes.func.isRequired
}

export default connect(null, { createEvent })(EventForm);
