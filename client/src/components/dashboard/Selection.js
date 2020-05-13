import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from '../../assets/black.jpg';
import logo from '../../assets/garud.png';

// Importing Modals
import One from '../modal/One';
import Two from '../modal/Two';
import Three from '../modal/Three';
import Four from '../modal/Four';
import Five from '../modal/Five';

// Importing Navbar
import Navbar from "../layout/Navbar.js";


class Selection extends Component {
    
    render() {
        return(
            <div>
            <Navbar/>
            <div style={{backgroundImage: `url(${Background})`, height: '760px', width: '100%', overflow: 'scroll'}}>
                <div className="row">
                    <div className="landing-copy col s12 center-align" style={{marginTop: "40px"}}>
                    <logo className='logo' style={{display: 'block'}}>
                        <img src={logo} alt="Logo" height='120' width='150'/>
                    </logo>

                        {/* FOR OFFICE SELECTION */}
                        <div>
                            <h4>
                                <p className="flow-text black-text text-darken-1" 
                                    style={{fontFamily: "Arial", fontSize: 25, fontWeight: 'bold', textDecoration: 'underline'}}>
                                    Select Your Office Size {" "}
                                    <span style={{ fontFamily: "monospace" }}></span> 
                                </p>
                            </h4>
                            
                            <div>
                                <One className="hoverable"/>
                                <Two className="hoverable"/>
                                <Three className="hoverable"/>
                                <Four className="hoverable"/>
                                <Five className="hoverable"/>
                            </div>

                            <div style={{margin: 40}}/>

                        </div>

                        <div style={{margin: 10}}></div>

                        <div>

                            <div style={{margin: 10}}></div>

                            <Link to = "/location"
                                style={{
                                    width: "150px",
                                    borderRadius: 35,
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                    flex: 1,
                                    flexDirection: "row"
                                }}
                                type="submit" 
                                className="btn btn-large white-text waves-effect waves-light hoverable blue accent-3"
                                >
                                Gallery
                            </Link>

                            <div style={{margin: 50}}></div>

                        </div>

                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Selection;