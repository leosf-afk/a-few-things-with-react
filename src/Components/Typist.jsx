import React from 'react'
import Typewriter from 'typewriter-effect';

function Typist() {
  return (
    <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hello World!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      typewriter.typeString('im a message!')
      .pauseFor(2500)
      .deleteAll()
      typewriter.typeString('by leo')
      .pauseFor(2500)
      .deleteAll()
      typewriter.typeString('<33')
      .pauseFor(2500)
      .deleteAll()
      typewriter.typeString('si lees esto es por que te quiero.')
      .pauseFor(2500)
      .deleteAll()
      .start();
  }}
/>
  )
}

export default Typist







