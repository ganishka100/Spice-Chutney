import React from 'react'

function Input({handleOnKeyDowned}) {
  return (
    <div>
      <input type="text" autoFocus placeholder="Enter Food Item here..." onKeyDown={handleOnKeyDowned}/>
    </div>
  )
}

export default Input
