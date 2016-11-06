import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.identifier)) {
        errors.identifier = 'This field is require';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'This field is require';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}
