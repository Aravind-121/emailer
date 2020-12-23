import React from 'react';
import '../styles/Dashboard.css';

const Card = ({ title, body, dateSent, recipients}) => {
    // console.log(props);
    return (
        <div className="container-history">
            <h2>{`Title:  ${title}`}</h2>
            <p id="b-card">{`Body:  ${body}`}</p>
            <h6 style={{float: 'right'}}><i>{`Sent on: ${new Date(dateSent).toLocaleDateString()}`}</i></h6>
            <strong><p>{`Sent to: ${recipients.length} people`}</p></strong>
        </div>
    )
}

export default Card;