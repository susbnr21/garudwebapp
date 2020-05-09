import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/garud.png';
// import Background from '../../assets/boxs.jpeg';
// backgroundImage: `url(${Background})`,
class Landing extends Component {
  render() {
    return (
      <div style={{ height: '823px', width: '100%'}}>
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row" style={{ marginTop: '170px'}}>
            <div className="col s12 center-align">
              <h4>
                <b style= {{fontFamily: 'Arial'}}> WELCOME TO </b>
                <span style={{ fontFamily: "monospace" }}></span>
              </h4>
              <logo className='logo'>
                  <img src={logo} alt="Logo" height='200' width='280'/>
              </logo>
              <p className="flow-text red-text text-darken-1" style={{fontFamily: 'Arial', fontWeight: 'bold'}}>
                  YOU ARE IN SAFE HANDS
              </p>
              <br />
              <div className="col s6" style= {{paddingLeft: '50px'}}>
                <Link
                  to="/login"
                  style={{
                    width: "230px",
                    borderRadius: "35px",
                    fontFamily: 'Arial',
                    fontSize: 20,
                    fontWeight: 'bold'
                  }}
                  className="btn btn-large waves-effect red black-text hoverable"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
