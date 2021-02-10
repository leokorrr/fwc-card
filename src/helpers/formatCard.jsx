function formatCard(value){
	value = value.replace(/[^\d]/g, '').substring(0,16);
	value = value !== '' ? value.match(/.{1,4}/g).join(' ') : '';

    return value;
}

export default formatCard;