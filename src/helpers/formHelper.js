// eslint-disable-next-line import/no-anonymous-default-export
export default {
    formatCard(value) {
        value = value.replace(/[^\d]/g, '').substring(0,16)
        value = value !== '' ? value.match(/.{1,4}/g).join(' ') : ''
        return value
    },
    checkValue(str, max) {
        if (str.charAt(0) !== '0' || str === '00') {
            let num = parseInt(str);
            if (isNaN(num) || num <= 0 || num > max) num = 1
            str = num > parseInt(max.toString().charAt(0))
            && num.toString().length === 1 ? '0' + num : num.toString()
        }
        return str
    },
    formatDate(value) {
        if (/\D\/$/.test(value)) value = value.substr(0, value.length - 3)
        let values = value.split('/').map(function(v) {
            return v.replace(/\D/g, '')
        })
        if (values[0]) values[0] = this.checkValue(values[0], 12)
        if (values[1]) values[1] = this.checkValue(values[1], 31)
        let output = values.map(function(v, i) {
            return v.length === 2 && i < 1 ? v + ' / ' : v
        })
        value = output.join('').substr(0, 7)
        return value
    },
    isCardExpired(value) {
        const date = new Date()
        const month = Number(date.getMonth())
        let year = date.getFullYear()+''
        year = Number(year.match(/\d{2}$/))
        const expMonth = Number(value.substring(0, 2))
        const expYear = Number(value.substring(5, 7))
        if (expYear > year)  return true
        if (year === expYear && expMonth > month)  return true
        return false
    },
    isCardNumberValid(value) {
        if (/[^0-9-\s]+/.test(value)) return false
        let nCheck = 0
        let bEven = false
        value = value.replace(/\D/g, "")
        for (let n = value.length - 1; n >= 0; n--) {
            let cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);
            if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
            nCheck += nDigit
            bEven = !bEven
        }
        return (nCheck % 10) === 0;
    }
}