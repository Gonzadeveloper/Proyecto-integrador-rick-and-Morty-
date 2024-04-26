import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function Detail(){
    const { id } = useParams()
    const [character,setCharacter] = useState({})

    useEffect(() => {
        const characterId = id.slice(1);
        axios(`http://localhost:3001/rickandmorty/character/${characterId}`)
        .then(({ data }) => setCharacter(data)
        )
          return setCharacter({});
     },[id]);                                     
    
    
    return <div>
        {
            character ? (
                <div>
                    <h2>Id:{character.id}</h2>
                    <h2>Name: {character.name}</h2>
                    <h4>Status: {character.status}</h4>
                    <h4>Species: {character.gender}</h4>
                    <h4>Gender: {character.gender}</h4>
                    <h4>Origin: {character.origin?.name}</h4>
                    <h4>Type:{character.type}</h4>
                    <img src={character.image} alt={character.name} />
                </div>
            ) : ''
        }
    </div>
}

export default Detail;