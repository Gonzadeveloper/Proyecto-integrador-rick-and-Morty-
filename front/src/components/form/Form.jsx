import {useState} from 'react';
import validation from './validation';
import style from './form.module.css'
import imagen1 from '../../assets/imagen1.gif'

function Form({login}){
    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({})

    function handleChange(evento){
        setErrors(validation({...userData,[evento.target.name]:evento.target.value}))
        setUserData({...userData, [evento.target.name] : evento.target.value })
    }

    function handleSubmit(evento){
        evento.preventDefault()
        login(userData)
    }
    
    return <div className={style.div}>
        <img src={imagen1} alt="" />
        <form className={style.form} onSubmit={handleSubmit}>
            <label htmlFor="email">
            Email:
            <input 
            type="text" 
            placeholder='Ingrese un email'
            id='email'
            name='email'
            value={userData.email}
            onChange={handleChange}/>
            </label>
            <span>{errors.email}</span>
            
            <br />

            <label htmlFor="password">
                Password:
                <input type="text" 
                placeholder="Ingrese una contraseña"
                id='password'
                name='password'
                value={userData.password}
                onChange={handleChange}/>
            </label>
            <span>{errors.password}</span>

            <br />

            <button>Submit</button>
        </form>
    </div>

}

export default Form;