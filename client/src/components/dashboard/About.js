import React, { Component } from 'react';
import Background from '../../assets/black.jpg';
import { Link } from "react-router-dom";
import logo from '../../assets/garud.png';

import Navbar from "../layout/Navbar.js";

class About extends Component{
    render() {
        return(
            <div>
                <Navbar/>

                <div style={{backgroundImage: `url(${Background})`, height: '760px', width: '100%', overflow: 'scroll'}}>
                    <div className='row'>
                        <div className="landing-copy col s12 center-align" style={{marginTop: "40px"}}>

                            <logo className='logo' style={{display: 'block'}}>
                                <img src={logo} alt="Logo" height='120' width='150'/>
                            </logo>

                        <div style={{margin: 75}}></div>

                        <div style={{marginLeft: 170}}>

                            <div style={{backgroundColor:'white', width: '85%',  height: '80%',paddingLeft: 20, paddingRight: 20}}>
                            
                                <div style={{padding: 10}}></div>

                                <text className="flow-text black-text text-darken-1" 
                                        style={{fontFamily: "Arial", fontSize: 25, fontWeight: 'bold'}}>
                                        About The Company{" "}
                                        <span style={{ fontFamily: "monospace" }}></span>🔖
                                </text>

                                <div style={{margin: 20}}></div>

                                <text className="orange-text text-darken-1"
                                        style={{fontFamily: 'Arial', fontSize: '15', fontWeight:'bold', padding: 20}}>
                                        In a world of look-alike security companies, Garud Securities stands apart. 
                                        Our years of experience helps us to provide clients with complete security 
                                        solutions designed to respond to real threats and meet customer’s requirements. 
                                        As we continue to pursue our corporate vision through dedicated procedures, new standards 
                                        for excellence have been developed. We understand that security is no longer a mundane 
                                        function, as now the threats are sophisticated and stakes are high. Garud Securities has
                                        elevated the standards required to negate the tide of crime and in keeping with 
                                        the ever-changing threat.

                                        Garud Securities prides itself on having solid infrastructure, 
                                        sound procedures and skilled people all combining to enforce a high level of integrity, 
                                        professionalism and quality of service that sets the foundation for our high standard of 
                                        excellence.

                                        VISION

                                        To become the security service provider of choice, known for its reliability, 
                                        trust and ability to provide peace of mind.

                                        MISSION

                                        Our mission is to provide our clients with the finest security services available 
                                        in the industry. Our value-for-money services will complement our clients to run 
                                        their operations with minimal concerns for their security.

                                        We will provide the most responsive customer service programs in the industry 
                                        by creating multiple lines of communication and investing in assets and emerging technology 
                                        that adds value for our customers.</text>
                            </div>
                        </div>

                                <div style={{margin:40}}></div>

                                <Link to = "/selection"
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

                                <div style={{margin:50}}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;