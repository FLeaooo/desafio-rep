import React from 'react';
import { useForm } from 'react-hook-form';
import '@/components/atomic/organisms/InvoiceForm.css';

const Input = ({ register, name, label, type, errors, requiredState = true, value }) => {
  return (
    <div>
      <label className="label">{label}</label>
      <input
        {...register(name, { 
          required: requiredState, 
          valueAsNumber: type === 'number',
          validate: type === 'number' && requiredState === true ? (value) => value > 0 || 'O valor deve ser maior que zero' : undefined
        })}
        type={type}
        className={`input ${!requiredState ? 'disabled-input' : ''}`}
        disabled={!requiredState}
        defaultValue={value}
      />

      {errors?.[name]?.type === "required" && (
        <p className="error-message">{label} da nota é obrigatório</p>
      )}

      {errors?.[name]?.type === "validate" && (
        <p className="error-message">{errors[name].message}</p>
      )}
    </div>
  );
};

export default Input;

