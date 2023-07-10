import React from 'react'
import Typewriter from 'typewriter-effect';

function Typist() {
  return (
    <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Practica de React & tailwidcss')
      .pauseFor(2500)
      .deleteAll()
      typewriter.typeString('hecho por leo')
      .pauseFor(2500)
      .deleteAll()
      .start();
  }}
  options={{
    loop: true,
  }}
/>
  )
}

export default Typist







