import React from 'react'

const ErrorMsg = ({fItems}) => {
  return (
    <div className='text-white fw-semibold text-center'>
       {fItems.length === 0 ? <h3 className='mt-5'>I am still hungry...!</h3> : null}
    </div>
  )
}

export default ErrorMsg;
