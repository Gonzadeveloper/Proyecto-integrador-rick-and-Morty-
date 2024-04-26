const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const exLongChar = /^(?=.{1,35}$).+/;
const regexPassword = /^(?=.*\d)[0-9a-zA-Z]{6,10}$/

function validation(data){
    let errors = {}

    if(!regexEmail.test(data.email)) errors.email = 'El correo electronico no es valido'
    if(!exLongChar.test(data.email)) errors.email = 'La longitud debe tener menos entre 1 y 35 caracteres'
    if(regexPassword.test(data.password)) errors.password = 'La contraseña debe tener al menos un numero y tener entre 6 y 10 caracteres'

    return errors;
}

export default validation;