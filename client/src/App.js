import React,{ Component } from 'react';
import Navbar from "./components/Navbar";
import { Route } from 'react-router-dom';

import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import MailNew from './components/MailNew';

import { connect } from 'react-redux';
import * as actions from './actions'; 

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }
  render(){
    return (
      <div>
        <Navbar/>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/mail/new" component={MailNew}/>
      </div>
    );
  }
}

export default connect(null,actions)(App);
