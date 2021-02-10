import { useState } from 'react';
import formatCard from '../helpers/formatCard';
import formatDate from '../helpers/formatDate';

const useForm = (validateForm) => {
    const [values, setValues] = useState({
        cardNumber: '',
        expDate: ''
    })

    const [cardLogos, setCardLogo] = useState({
        mastercard: false,
        visa: false
    })

    const [errors, setErrors] = useState({})

    const handleChange = e => {
        let { name, value } = e.target
        if (name === 'cardNumber') {
            if (value.length >= 1) {
                if(Number(value.substring(0, 1)) === 4) {
                    setCardLogo({
                        ...cardLogos,
                        visa: true,
                        mastercard: false
                    })
                }

                if(Number(value.substring(0, 1)) === 5) {
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
            value = formatCard(value)
        }
        
        if (name === 'expDate') {
            value = formatDate(value)
        }
        
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateForm(values));
    }
    return { handleChange, values, handleSubmit, errors, cardLogos };
}

export default useForm;