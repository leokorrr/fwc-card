import useForm from '../hooks/useForm';
import validateForm from '../validation/validateForm';
import blankCardLogo from '../images/logo-blank.svg';
import mastercardLogo from '../images/logo-mastercard.svg';
import visaLogo from '../images/logo-visa.svg';

function CardForm() {
    const {handleChange, errors, values, cardLogos, handleSubmit} = useForm(validateForm)

    return(
        <div className='card-form-ctn'>
            <div>
                <form className="card-form" onSubmit={handleSubmit}>
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
                            onChange={handleChange}/>
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
                            onChange={handleChange}/>
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