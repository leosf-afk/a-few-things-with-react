

export const handleOnClickButton = (text, textItem, price, priceItem, setText, setTextItem, setPrice, setPriceItem) => {
    setTextItem([...textItem, text]);
    setText('');
    setPriceItem([...priceItem, price]);
    setPrice('');
}


export const handleOnChangeInput = (setText) => {
    setText(event.target.value);


}

export const handleOnKeyDownInput = (e) => {
    const validKey = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "Backspace",
        ",",
        "."
    ];

    if (!validKey.includes(e.key)) {
        e.preventDefault();
    }

}



