import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import MailReview from './MailReview';
import MailForm from './MailForm';

class MailNew extends Component {
    state = { reviewPage: false};

    renderComp() {
        if(this.state.reviewPage)
            return <MailReview onCancel={()=>this.setState({reviewPage: false})}/>;
        return <MailForm onMailSubmit={()=>this.setState({reviewPage: true})}/>;
    } 
    render() {
        return (
            <div>
                {this.renderComp()}
            </div>
        )
    }
}
export default reduxForm({
    form: 'mailForm'
})(MailNew);