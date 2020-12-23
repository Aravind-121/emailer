import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'; 
import Card from './Card';
class Dashboard extends Component {
    renderDashboard() {
        return this.props.mails.reverse().map((mail,i) => {
            return <Card {...mail} key={i}/>
        })
    }
    componentDidMount() {
        this.props.fetchMails();
    }
    render() {
        return (
            <div>
                {this.renderDashboard()}
            </div>
        )
    }
}
const MapStateToProps = ({mails})=>{
    return {mails};
}

export default connect(MapStateToProps,actions)(Dashboard);