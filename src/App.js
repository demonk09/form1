// import React from 'react'
import { useState } from "react";
import Dsp from "./component/Dsp";
import"./App.css"


function App() {
  let [data,setData]=useState({})
  let [lang,setLang]=useState([])
  let[user,setUser]=useState([])
  let fun=(e)=>{
setData({...data,[e.target.name]:e.target.value})
  }
  let fun1=(e)=>{
    if (e.target.checked) {
      setLang([...lang,e.target.value])
      console.log(lang);
    }
    else{
      lang.splice(lang.indexOf(e.target.value),1)
      setLang([...lang])
      console.log(lang);
    }
  }
  let add=()=>{
    setUser([...user,{...data,lang:[...lang]}])
  }
  return (
    <div>
      <input type="text" name="name" onChange={fun} />
      <div>
          <input type="radio" name="gen" id="" onChange={fun} value="male"/>MALE
          <input type="radio" name="gen" id="" onChange={fun} value="female"/>FEMALE
      </div>
      <div>
          <input type="checkbox" value="telgue"  onChange={fun1}/>TELGUE
          <input type="checkbox" value="engilsh"onChange={fun1}/>ENGLISH
          <input type="checkbox" value="hindi"onChange={fun1}/>Hindi
      </div>
      <button onClick={add}>show table</button>
      <div>
        
        <table>
          <tr>
            <td>NAME</td>
            <td>GENDER</td>
            <td>LANGUAGE</td>
          </tr>

        </table >
        {
          user.map((item)=><Dsp data={data} lang={lang}/>)
        }
          
      </div>
    </div>
  )
}

export default App