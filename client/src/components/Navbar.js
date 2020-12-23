import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//material ui
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
//css
import '../styles/Navbar.css';


function HideOnScroll(Props) {
    const { children, window } = Props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };


  class Navbar extends Component {

    renderBtns() {
        switch(this.props.auth) {
          case null:
            return;
          case false:
            return <Button key={3} variant="contained" color="secondary" href="/auth/google">
              Sign in with google</Button>
          default:
            return [
              <Button key={0} variant="outlined" style={{marginRight: '6px'}}> 
              <Link to="/dashboard" className="nav-link" >Dashboard</Link></Button>,
              <Button key={1} variant="outlined" style={{marginRight: '6px'}}>
              <Link to="/mail/new" className="nav-link" >Create New</Link></Button>,
              <Button key={2} variant="contained" color="secondary" href="/api/logout">
              Logout</Button>
            ]
        }
    }

    render(){
      return (
        <React.Fragment>
          <HideOnScroll>
            <AppBar style={{backgroundColor: '#79589f'}}>
              <Toolbar>
                <Link to="/" className="nav-link main">E-Mailer</Link>
                <div className="signup-btn">
                  {this.renderBtns()}
                </div>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
          <Toolbar />
        </React.Fragment>
      );
    }
  }

  const MapStateToProps = ({auth})=>{
    return {auth};
  }
  export default connect(MapStateToProps)(Navbar);

  