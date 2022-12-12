import React, {useState } from 'react'
import { useDispatch } from 'react-redux';
import { sendForm } from '../../redux/Action.js';

function validation(input) {
    let errors = '';
    if (!input) {
        errors = '';
    } else if(!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input)) {
        errors = 'Debe colocar un email válido';
    }
    return errors;
}

export default function Form() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState('');
    const [enviado , setEnviado] = useState(false)
    const [input, setInput] = useState({
        email: ''
    });

    function handleChange(e){
        e.preventDefault()
        setInput({
            email: e.target.value,
        })
        setErrors(validation(e.target.value))
    }
    function handleSubmit(){
        if (input.email !== '') {
            dispatch(sendForm(input))
            setInput({
                email:''
            })
            setEnviado(true)
          setTimeout(()=>
            setEnviado(false),3000)
        }
    }
  return (
    <div className='form_container'> 
        <div className='form'>
            <input type="email" placeholder='Ingresa tu email' name='email' value={input.email} onChange={e => handleChange(e)} />
            <button disabled={errors ? true : false} onClick={e => handleSubmit(e)}>
                <img src='/icons/arrow_right.png' alt='arrow_right'/>
            </button>
        </div>
        <div className='mensaje'>
            {errors && (<p className="error">{errors}</p>)}
          {enviado === false ? null : <p className='exito'>Mensaje enviado con éxito!!</p>} 
        </div>
    </div>
  )
}
