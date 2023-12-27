// import React from 'react'

function Dsp(props) {
  return (
    <div>
      <tr>
        <td>{props.data.name}</td>
        <td>{props.data.gen}</td>
        <td>{props.lang.toString()}</td>
        </tr>
    </div>
  )
}

export default Dsp