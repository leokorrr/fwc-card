import blankCardLogo from '../assets/images/logo-blank.svg'
import mastercardLogo from '../assets/images/logo-mastercard.svg'
import visaLogo from '../assets/images/logo-visa.svg'
import {useState} from 'react'
import formHelper from '../helpers/formHelper'

function CardForm() {
    const [values, setValues] = useState({
        cardNumber: '',
        expDate: ''
    })
    const [cardLogos, setCardLogo] = useState({
        mastercard: false,
        visa: false
    })
    const [errors, setErrors] = useState({})
    const validateForm = values => {
        let errors = {}
        if(!values.cardNumber.trim()) errors.cardNumber = 'Card number is required'
        else {
            if(!formHelper.isCardNumberValid(values.cardNumber)) errors.cardNumber = 'Card number is not valid'
        }
        if(!values.expDate.trim()) errors.expDate = 'Expiration date is required'
        else {
            if(!formHelper.isCardExpired(values.expDate)) errors.expDate = 'Your card is expired'
        }
        return errors
    }
    const handleChange = e => {
        let { name, value } = e.target
        if (name === 'cardNumber') {
            if (value.length >= 1) {
                if (Number(value.substring(0, 1)) === 4) {
                    setCardLogo({
                        ...cardLogos,
                        visa: true,
                        mastercard: false
                    })
                }
                if (Number(value.substring(0, 1)) === 5) {
                    setCardLogo({
                        ...cardLogos,
                        visa: false,
                        mastercard: true,
                    })
                }
            } else {
                setCardLogo({
                    ...cardLogos,
                    mastercard: false,
                    visa: false
                })
            }
            value = formHelper.formatCard(value)
        }
        if (name === 'expDate') value = formHelper.formatDate(value)
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateForm(values))
    }
    return (
        <div className='card-form-ctn'>
            <div>
                <form className="card-form" onSubmit={(e) => handleSubmit(e)}>
                    {!cardLogos.visa && !cardLogos.mastercard && <div className="card-form__logo"><img src={blankCardLogo} alt="blank-logo"/></div>}
                    {cardLogos.visa && <div className="card-form__logo"><img src={visaLogo} alt="visa-logo"/></div>}
                    {cardLogos.mastercard && <div className="card-form__logo"><img src={mastercardLogo} alt="mastercard-logo"/></div>}
                    <div className="card-form__input-ctn card-form__card-input-ctn">
                        <input type="text"
                            className="input"
                            maxLength="19"
                            minLength="19"
                            name="cardNumber"
                            placeholder="1111 2222 3333 4444"
                            value={values.cardNumber}
                            onChange={(e) => handleChange(e)}/>
                            {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
                    </div>
                    <div className="card-form__input-ctn">
                        <input type="text"
                            className="input"
                            name="expDate"
                            maxLength="7"
                            minLength="7"
                            placeholder="MM / DD"
                            value={values.expDate}
                            onChange={(e) => handleChange(e)}/>
                            {errors.expDate && <span className="error">{errors.expDate}</span>}
                    </div>
                    <div className="card-form__input-ctn">
                        <input type="number"
                            className="input"
                            maxLength="3"
                            minLength="3"
                            name="CVC"
                            placeholder="CVC"
                            onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn">Pay</button>
                </form>
            </div>
        </div>
    );
}

export default CardForm;