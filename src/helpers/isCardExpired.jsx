const isCardExpired = (value) => {
    const date = new Date();
    const month = Number(date.getMonth());
    let year = date.getFullYear()+'';
    year = Number(year.match(/\d{2}$/));
    const expMonth = Number(value.substring(0, 2));
    const expYear = Number(value.substring(5, 7));

    if (expYear > year) { return true }

    if (year === expYear && expMonth > month) { return true }

    return false
}

export default isCardExpired