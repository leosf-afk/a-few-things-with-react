

 export const handleOnClickButton = (text, textItem, price,priceItem, setText, setTextItem, setPrice, setPriceItem) => {
    setTextItem([...textItem, text]);
    setText('');
    setPriceItem([...priceItem, price]);
    setPrice(['']);
}


export const handleOnChangeInput = (setText) => {
    setText(event.target.value);


}




