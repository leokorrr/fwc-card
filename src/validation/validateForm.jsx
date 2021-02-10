import isCardNumberValid from '../helpers/isCardNumberValid';
import isCardExpired from '../helpers/isCardExpired'

export default function validateForm(values) {
    let errors = {}

    if(!values.cardNumber.trim()) {
        errors.cardNumber = 'Card number is required'
    } else {
        if(!isCardNumberValid(values.cardNumber)) errors.cardNumber = 'Card number is not valid';
    }

    if(!values.expDate.trim()) {
        errors.expDate = 'Expiration date is required'
    } else {
        if(!isCardExpired(values.expDate)) {
            errors.expDate = 'Your card is expired'
        }
    }

    return errors;
}