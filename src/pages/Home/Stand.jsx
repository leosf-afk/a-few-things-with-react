import React, { useState } from 'react'
import { handleOnClickButton } from '../../Components/Functions';
import { handleOnChangeInput } from '../../Components/Functions';
import '../../Stand.css'
function Stand() {
  //  se declara una variable "text" (la que permanece con el valor) y una funcion de estado "setText"
  // (la que cambia el valor) y se utiliza el 
  // usestate para inicializar (es un hook y se utiliza para declarar variables de estado)
  const [text, setText] = useState('');
  const [price, setPrice] = useState('');
  const [isChecked, setIschecked] = useState(false);
  const [textItem, setTextItem] = useState([]);
  const [priceItem,setPriceItem] = useState([]);

  // // evento para actualizar el estado del input
  //   const handleOnChangeInput = () => {
  //      setText(event.target.value)
  //   }

  //evento al realizar click en el button
  // const handleOnClickButton = () => {
  //   //los 3 puntos son necesarios, son un operador de propagacion
  //   setTextItem([...textItem, text])
  //   setText('');

  // }



  return (
    // "flex justify-center w-full" en el contenedor padre para evitar problemas en los contenedores hijos
    //respecto al margin (en el caso del problema fue hacia la derecha)
    <div className="flex justify-center w-full">

<div className="sm:ml-0 md:ml-40 lg:ml-80 ">
      <span className="mr-4" >ingresar el producto: </span>
      <input className="border bg-blue-100 rounded py-0 px-0  justify-center mb-7" value={text} onChange={() => handleOnChangeInput(setText)} />
      <br />
      <span className="mr-11">ingrese el precio:</span>
      <input className="border bg-blue-100 rounded py-0 px-0  justify-center mb-7" value={price} onChange={() => handleOnChangeInput(setPrice)} />
      <br />
      <button className="py-2 px-2 btnSendProduct"  onClick={() => handleOnClickButton(text, textItem,price,priceItem, setText, setTextItem, setPrice, setPriceItem)} >enviar </button>


      <table className="ml-0" >
      <thead>
        <tr>
          <th>Numero</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>En stock?</th>
        </tr>
      </thead>
      
      <tbody>
        {textItem.map( (textItem, index) => (

          <tr key={index}>
            <td>{index+1}</td>
            <td>{textItem}</td>
            <td>{priceItem[index]}</td>
            <td><input type="checkbox" value={isChecked}/></td>
          </tr>
          ))}

      </tbody>
     </table>
    </div>
    
    
      
      {/* <ul>
      -  al metodo .map se le añaden 2 elementos, un elemento 
        y un indice, es diferente a for por que itera y cambiar el arreglo -
        {textItem.map((textItem, index) => (
          <p key={index}>producto: {textItem}, precio: {priceItem[index]}</p>
        ))}
      </ul> */}

     


    </div>
   
  )
}

export default Stand