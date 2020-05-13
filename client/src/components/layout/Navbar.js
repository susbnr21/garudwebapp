import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper" style={{backgroundColor: '#909090'}}>
            <a href="/" className="col s5 brand-logo center black-text" style={{fontFamily: 'Arial', fontWeight: 'bold'}}>GARUD SERVICES</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a style={{fontFamily: 'Arial', color: '#FF9300', fontWeight: 'bold', marginRight: 10}} href="/dashboard">Home</a></li>
              <li><a style={{fontFamily: 'Arial', color: '#FF9300', fontWeight: 'bold', marginRight: 10}} href="/about">About</a></li>
              <li><a style={{fontFamily: 'Arial', color: '#FF9300', fontWeight: 'bold', marginRight: 10}} href="/selection">Selection</a></li>
              <li><a style={{fontFamily: 'Arial', color: '#FF9300', fontWeight: 'bold', marginRight: 10}} href="/location">Gallery</a></li>
              <li><a
                    className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                    onClick={this.onLogoutClick}
                    style={{fontFamily: 'Arial', fontWeight: 'bold', marginRight: 10}} href="#">
                Logout
                  </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);

