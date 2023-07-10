import React, { useState, useEffect } from 'react'
import { handleOnClickButton, handleOnChangeInput, handleOnKeyDownInput } from '../../Components/Functions';
import '../../Stand.css'
import Pagination from '../../Components/Pagination';
import Body from '../../Components/Body';

function Stand() {
  //  se declara una variable "text" (la que permanece con el valor) y una funcion de estado "setText"
  // (la que cambia el valor) y se utiliza el 
  // usestate para inicializar (es un hook y se utiliza para declarar variables de estado)
  const [text, setText] = useState('');
  const [price, setPrice] = useState('');
  const [isChecked, setIschecked] = useState(false);
  const [textItem, setTextItem] = useState([]);
  const [priceItem, setPriceItem] = useState([]);

  //paginacion
  const [page, setPage] = useState(1);
  const [forPage, setForPage] = useState(4);

  //useEffect para max

  const [max, setMax] = useState(0);

  useEffect(() => {
    const calculateMax = () => {
      const max = textItem.length / forPage;
      setMax(max)
      // Hacer algo con el valor de max, por ejemplo, asignarlo a una variable o actualizar el estado
    };

    calculateMax(); // Llamar a la función para calcular max cuando textItem se actualice
  }, [textItem, forPage]);






  // // evento para actualizar el estado del input
  //   const handleOnChangeInput = () => {
  //      setText(event.target.value)
  //   }

  //evento al realizar click en el button
  // const handleOnClickButton = () => {
  //   //los 3 puntos son necesarios, son un operador de propagacion
  // ([...arregloActual, nuevoValor]), es necesario para evitar sobreescribir el arreglo.
  //   setTextItem([...textItem, text])
  //   setText('');

  // }



  return (

    // "flex justify-center w-full" en el contenedor padre para evitar problemas en los contenedores hijos
    //respecto al margin (en el caso del problema fue hacia la derecha)


    <div className="flex flex-col relative justify-center    ">
      <Body>
        <div className="sm:ml-0 md:ml-40 lg:ml-80  ">
          <span className="mr-1" >ingresar el producto: </span>
          <input className="border bg-blue-100 rounded py-0 px-0  justify-center mb-7" value={text} onChange={() => handleOnChangeInput(setText)} />
          <br />
          <span className="mr-1">ingrese el precio:</span>
          <input className="border bg-blue-100 rounded py-0 px-0  justify-center mb-7" onKeyDown={(e) => handleOnKeyDownInput(e)}  value={price}  onChange={() => handleOnChangeInput(setPrice)} />
          <br />
          <button className="py-2 px-4  btnSendProduct bg-blue-100" onClick={() => {

            if (text.trim() === '' || price.trim() === '') {
              alert("Por favor, complete uno de los dos campos.")

            }

            else {
              handleOnClickButton(text, textItem, price, priceItem, setText, setTextItem, setPrice, setPriceItem)
            }

          }} >enviar </button>




          <div className="overflow-x-auto">
            <table className=" ml-0  " >

              <thead>

                <tr>
                  <th>Numero</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>En stock?</th>
                </tr>
              </thead>

              <tbody>
                {textItem
                  .slice((page - 1) * forPage, (page - 1) * forPage + forPage)
                  //.map con callback
                  .map((text, index) => {
                    const priceIndex = (page - 1) * forPage + index;
                    return (
                      <tr key={index}>
                        <td>{priceIndex + 1}</td>
                        <td>{text}</td>
                        <td>{priceItem[priceIndex]}</td>
                        <td>
                          <input type="checkbox" value={isChecked} />
                        </td>
                      </tr>
                    );
                  })}

              </tbody>

            </table>
          </div>

          <Pagination page={page} setPage={setPage} max={max} />




        </div>

      </Body>


    </div>







  )
}

export default Stand