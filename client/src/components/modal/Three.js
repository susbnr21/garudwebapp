import React, { Component } from 'react';
import M from 'materialize-css'; 
import Spray from '../../assets/spray1.jpg'
import { bookingValue } from '../../actions/authActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class Three extends Component{
    constructor() {
        super();
        this.state = {
            name: "",
            room_size: "3000 SQFT. OFFICE ROOM",
            emailing_address: "",
            phone_number: "",
            company_name: "",
            company_address: "",
            errors: {}
        };
    }
    
    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {inDuration: 300, outDuration: 225});
        M.AutoInit();
        const { user } = this.props.auth;
        console.log(this.props.auth.user.name)
        this.setState({name:user.name})
        console.log(this.state.name)
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault();

        const bookingData = {
            name: this.props.auth.user.name,
            room_size: this.state.room_size,
            emailing_address: this.state.emailing_address,
            phone_number: this.state.phone_number,
            company_name: this.state.company_name,
            company_address: this.state.company_address
        };

        this.props.bookingValue(bookingData);
    };

    render() {
        const { errors } = this.state;
        const { user } = this.props.auth;
        
        return(
            <div style={{display: 'inline', marginRight: 40}}>
               <button className="btn modal-trigger" href="#modal3" style={{height:'100px', width: '200px'}}>
                    <img src={Spray} style={{height:'100px', width: '200px'}} className='hoverable'/>
                </button> 
                <form id="modal3" className="modal" noValidate onSubmit={this.handleSubmit}>
                    <div className="modal-content" style={{height: 450}}>
                    <h5 style={{textDecoration: 'underline', fontWeight: 'bold'}}>You Have Selected 3000 Sqft Office Room </h5>
                        <div className="row">
                        <div style={{padding: 20}}>
                            <text style={{fontWeight: 'bold', color: 'orange'}}>YOUR DETAILS HERE</text>
                        </div>
                        <div className="disabled-input-field col s6" value={this.state.name}>
                            <label for="disabled">Name</label>
                            <input disabled value={user.name} id="disabled" type="text" className="validate"/>
                        </div>
                        <div className="disabled-input-field col s6">
                            <label for="disabled">Office Size</label>
                            <input disabled value="3000 SQFT. OFFICE ROOM" id="disabled" type="text" className="validate"/>
                        </div>

                        <div className="input-field col s6">
                            <input type="text" 
                            value={this.state.emailing_address}
                            error={errors.emailing_address}
                            id="emailing_address" 
                            onChange={this.handleChange}
                            className={classnames("", {
                            invalid: errors.emailing_address
                            })}
                            />
                            <label htmlFor="emailing_address">Emailing Address</label>
                            <span className="red-text">
                            {errors.emailing_address}
                            </span>
                        </div>

                        <div className="input-field col s6">
                            <input type="text" 
                            value={this.state.phone_number}
                            error={errors.phone_number}
                            id="phone_number" 
                            onChange={this.handleChange}
                            className={classnames("", {
                            invalid: errors.phone_number
                            })}
                            />
                            <label htmlFor="phone_number">Phone Number</label>
                            <span className="red-text">
                            {errors.phone_number}
                            </span>
                        </div>

                        <div className="input-field col s6">
                            <input type="text" 
                            value={this.state.company_name}
                            error={errors.company_name}
                            id="company_name" 
                            onChange={this.handleChange}
                            className={classnames("", {
                            invalid: errors.company_name
                            })}
                            />
                            <label htmlFor="company_name">Company Name</label>
                            <span className="red-text">
                            {errors.company_name}
                            </span>
                        </div>

                        <div className="input-field col s6">
                            <input type="text" 
                            value={this.state.company_address}
                            error={errors.company_address}
                            id="company_address" 
                            onChange={this.handleChange}
                            className={classnames("", {
                            invalid: errors.company_address
                            })}
                            />
                            <label htmlFor="company_address">Company Address</label>
                            <span className="red-text">
                            {errors.company_name}
                            </span>
                        </div>

                        <div className="modal-footer">
                            <button className="modal-close waves-effect waves-green btn-flat"
                                type='submit' style={{marginRight: 20}}>Submit</button>
                            <a href="#!" className="modal-close waves-effect waves-red btn-flat">Cancel</a>
                        </div>

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

Three.propTypes = {
    bookingValue: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { bookingValue }
)(Three);