import React, { useState } from 'react'
import { handleOnChangeInput } from './Functions';

function Pagination({ page, setPage, max }) {

    const [input, setInput] = useState(1);

    console.log(max)

    function maxInt() {
        const numer = Math.round(max)
        return numer

    }

    function nextPage() {
        setPage(page + 1);
        setInput(input + 1);
    }

    function previusPage() {
        setPage(page - 1);
        setInput(input - 1);
    }

    //validacion input
    const handleOnKeyDownInput = e => {
        if (e.keyCode == 13) {
            const inputValue = parseInt(e.target.value);
            if (
                inputValue < 1 ||
                inputValue > Math.ceil(maxInt()) ||
                isNaN(inputValue)
            ) {
                setPage(1);
                setInput(1);
            } else {
                setPage(inputValue);
            }
        }
    };





    return (
        <div className="flex items-center">
            <button disabled={page === 1 || page < 1}
                className={`py-2 px-4 h-7  bg-blue-100 ${page <= 1 ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"}`} onClick={previusPage}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="15" height="15">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
            </button>
            <input onChange={() => handleOnChangeInput(setInput)} onKeyDown={e => handleOnKeyDownInput(e)} type="text" className="w-10 mx-2 h-7 text-center" value={input} />
            <p className="ml-0">de {maxInt()} </p>
            <button disabled={page >= maxInt()  }
             className={`py-2 px-4 h-7 m-2 bg-blue-100 ${page >= maxInt() ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"}`} onClick={nextPage}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="15" height="15">
                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L14.17 12z" />
                </svg>
            </button>
        </div>
    )
}




export default Pagination