import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';
import '../styles/review.css';

class MailReview extends Component {

    handleClick = () => {
        const emails = this.props.values.recipients.split(',').map(mail => mail.trim());
        const data = {
            title: this.props.values.title,
            subject: this.props.values.subject,
            body: this.props.values.body,
            recipients: emails.toString()
        }
        this.props.sendMailDetails(data,this.props.history);
    }
    
    render() {
        const { title, subject, recipients, body} = this.props.values;
    
        return (
            <div>
                <h5 className="confirm-text">Please confirm your entries</h5>
                <div className="container-review">
                    <p><span>Title:  </span><span className="res">{ title }</span></p>
                    <p><span>Subject:  </span><span className="res">{ subject }</span></p>
                    <p><span>Body:  </span><span className="res">{ body }</span></p>
                    <p><span>Recipients:  </span><span className="res">{ recipients }</span></p>
                </div>
                <div className="btns-container">
                    <button className="back-btn" onClick={this.props.onCancel}>Back</button>
                    <button className="send-btn" onClick={this.handleClick}>Submit</button>
                </div>
            </div>
        )
    }
}

const MapStateToProps = ({ form }) => {
    return form.mailForm;
}
export default connect(MapStateToProps,actions)(withRouter(MailReview));