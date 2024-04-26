module.exports = (res, error) => {
    return res.status(404).send('no existe el personaje')

    // * Manejo de error con api R&M original
    // const { response } = error
    // if(response){
    //     const { status, data } = response

    //     const statusCode = status || 404
    //     const errorMessage = data.error || 'No existe el personaje'

    //     res.status(statusCode).json({error:errorMessage})
    // }else {
    //     res.status(500).send('Error interno de servidor')
    // }
}