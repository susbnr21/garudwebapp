import React, { Component } from 'react';
import M from 'materialize-css';
import { truckValue } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class Modal extends Component{
    
    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {inDuration: 300, outDuration: 225});
    }

    render() {
        return(
            <button className="btn modal-trigger" href="#modal5" style={{height:'160px', width: '430px'}}>
                Click Me
            </button>
        )
    }
}

export default Modal;