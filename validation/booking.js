const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateInfoInput(data){
    let errors = {};
// Convert empty fields to an empty string so we can use validator functions
    data.emailing_address = !isEmpty(data.emailing_address) ? data.emailing_address : "";
    data.phone_number = !isEmpty(data.phone_number) ? data.phone_number: "";
    data.company_name = !isEmpty(data.company_name) ? data.company_name: "";
    data.company_address = !isEmpty(data.company_address) ? data.company_address: "";

//Validation
    if (Validator.isEmpty(data.emailing_address)) {
        errors.emailing_address = "This field is required";
    }
    else if (Validator.isEmpty(data.phone_number)) {
        errors.phone_number = "This field is required";
    }
    else if (Validator.isEmpty(data.company_name)) {
        errors.company_name = "This field is required";
    }
    else if (Validator.isEmpty(data.company_address)) {
        errors.company_address = "This field is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
}