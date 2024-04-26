const axios = require('axios')
const errorHandler = require ('../utils/errors')

const URL_BASE = 'https://rickandmortyapi.com/api/character/'
const API_KEY = 'pi-gonzadeveloper'




const getCharById = async (req, res) => {
    const { id } = req.params;
    const ID = id;
    try {
    const response = await axios(`${URL_BASE}${ID}?key=${API_KEY}`)
   
    const { id, name, species, status, gender, origin, image} = response.data

    const character = {id, name, species, status, gender, origin, image}
    
    if(character.id) return res.status(200).json(character)
    else throw Error ('Character not found')
    
} catch (error) {
        errorHandler(res, error)
    }
};

module.exports = getCharById;