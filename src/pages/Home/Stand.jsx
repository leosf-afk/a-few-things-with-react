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
    <>

      <br />
      <span>ingresar el producto: </span>
      <input value={text} onChange={() => handleOnChangeInput(setText)} />
      <br />
      <span>ingrese precio: </span>
      <input value={price} onChange={() => handleOnChangeInput(setPrice)} />
      <br />
      <button onClick={() => handleOnClickButton(text, textItem,price,priceItem, setText, setTextItem, setPrice, setPriceItem)} >enviar </button>

      <ul>
        {/* al metodo .map se le añaden 2 elementos, un elemento 
        y un indice, es diferente a for por que itera y cambiar el arreglo */}
        {textItem.map((textItem, index) => (
          <p key={index}>producto: {textItem}, precio: {priceItem[index]}</p>
        ))}
      </ul>

     <table>
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





    </>
  )
}

export default Stand