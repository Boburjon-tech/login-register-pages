import React from 'react'

function FormTextArea({label,name}) {
  return (
   <fieldset className='fieldset'>
    <legend className='fieldset-legend'>{label}</legend>
    <textarea className='textarea h-24 w-full' name={name} placeholder='type here'></textarea>
   </fieldset>
  )
}

export default FormTextArea
