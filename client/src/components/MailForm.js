import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import FieldComponent from './FieldComponent';
import helpers from './helpers';
import emailValidator from './utils/emailValidator';
import '../styles/form.css';

class MailForm extends Component {

    renderForm() {
        return helpers.map(({name, label}) =>{
            return <Field 
                key={name}
                component={FieldComponent}
                type="text"
                label={label}
                name={name}
            />
        })
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onMailSubmit)}>
                {this.renderForm()}
                <div className="btn-wrap">
                    <div><Link className="cancel-link" to='/dashboard'>Cancel</Link></div>
                    <button className="next-btn" type="submit">Next</button>
                </div>
            </form>
        )
    }
}

const validate = (vals) => {

    const error = {};
    error.recipients = emailValidator(vals.recipients || '');
    helpers.forEach(({ name })=>{
        if(!vals[name]) {
            error[name] =  'You must provide a value';
        }
    })
    return error;
}
export default reduxForm({
    validate,
    form: 'mailForm',
    destroyOnUnmount: false
})(MailForm);