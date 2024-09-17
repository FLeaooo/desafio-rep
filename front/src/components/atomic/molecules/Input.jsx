import React from 'react';
import { useForm } from 'react-hook-form';
import '@/components/atomic/organisms/InvoiceForm.css'

const Input = ({ register, name, label, type, errors, requiredState = true, disabled = false }) => {
  return (
    <div>
      <label className="label">{ label }</label>
      <input {...register(name, { required: requiredState})}
        type={ type }
        className={`input ${disabled ? 'disabled-input' : ''}`}
        disabled={disabled}/>

        {errors?.[name]?.type === "required" && (
          <p className="error-message"> { label } da nota é obrigatório</p>
        )}
    </div>
  )
}

export default Input;
