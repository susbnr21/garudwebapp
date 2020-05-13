import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import Background from '../../assets/black.jpg';


import Navbar from "../layout/Navbar.js";


class Dashboard extends Component {

  render() {
    const { user } = this.props.auth;

    return (
      <div>
      <Navbar/>
      <div style={{backgroundImage: `url(${Background})`, height: '760px', width: '100%'}}>
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row" style={{marginTop: "150px"}}>
            <div className="landing-copy col s12 center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                {this.testfunction}
                <p className="flow-text black-text text-darken-1" style={{fontFamily: "Arial", fontWeight: 'bold'}}>
                  Welcome to Garud Services{" "}
                  <span style={{ fontFamily: "monospace"}}></span> 👏
                </p>
              </h4>
              <Link to = "/about"
                  style={{
                    width: "150px",
                    borderRadius: 35,
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    flex: 1,
                    flexDirection: "row"
                  }}
                  className="btn btn-large white-text waves-effect waves-light hoverable blue accent-3"
                >
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
