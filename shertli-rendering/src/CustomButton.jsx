import React from 'react'
import "./CustomButton.css"
import { useState } from 'react'

function CustomButton() {
  const [button, setButton] = useState(true)
  
  function event() {
    let h3 = document.querySelector("h3")
    if (button == true) {
      h3.innerText = "Message"
      let a = document.querySelector("button");
      let h4 = document.querySelector("h4")
      a.style.backgroundColor = "yellow"
      a.style.color = "white"
      h4.style.display = "block"
      let p = document.querySelector("p");
      p.style.display = "block";
      setButton(!button)
    } else {
      h3.innerText = ""
      let a = document.querySelector("button");
      let h4 = document.querySelector("h4")
      a.style.backgroundColor = "black"
      a.style.color = "white"
      h4.style.display = "none"
      let p = document.querySelector("p");
      p.style.display = "none";
      setButton(!button)
    }
  }

  return (
    <div className='main'>
      <button onClick={event}>Click</button>
      <p className='text'>paragraph</p>
      <h3></h3>
      <h4>warning</h4>
    </div>
  )
}

export default CustomButton