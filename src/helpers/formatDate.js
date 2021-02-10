function formatDate(value) {
    function checkValue(str, max) {
        if (str.charAt(0) !== '0' || str === '00') {
            let num = parseInt(str);
            if (isNaN(num) || num <= 0 || num > max) num = 1;
            str = num > parseInt(max.toString().charAt(0))
            && num.toString().length === 1 ? '0' + num : num.toString();
        }
        return str;
    }

    if (/\D\/$/.test(value)) value = value.substr(0, value.length - 3);
    let values = value.split('/').map(function(v) {
        return v.replace(/\D/g, '')
    });
    if (values[0]) values[0] = checkValue(values[0], 12);
    if (values[1]) values[1] = checkValue(values[1], 31);

    let output = values.map(function(v, i) {
        return v.length === 2 && i < 1 ? v + ' / ' : v;
    });
    value = output.join('').substr(0, 7);

    return value;
}

export default formatDate