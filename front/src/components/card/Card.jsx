import { connect, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions/actions'
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import style from './card.module.css'

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav,}) {
   
   const myFavorites = useSelector((state) => state.myFavorites);
   const { pathname } = useLocation()
   const [isFav, setIsFav] = useState(false)

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({id, name, status, species, gender, origin, image})
      }
   }
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }, [myFavorites]);

  

    return (
      <div className={style.card}>
         {
            pathname === '/home' && <button className={style.buttonClose} onClick={() => onClose(id)}> <span className={style.crossIcon}>X</span> </button>
         }
   
         {
            isFav ? (
               <button onClick={handleFavorite}>💚</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
   
         <div className={style.cardImageContainer}>
            <img src={image} alt='' />
            <Link to={`/detail/:${id}`}>
               <button className={style.botonName}>{name}</button>
            </Link>
         </div>
      </div>
   );
}

// algunas props que ya no queremos que se vean en la card
/* <h2>Id: {id}</h2>
<h2>Status: {status}</h2>
<h2>Species: {species}</h2>
<h2>Gender: {gender}</h2>
<h2>Origin: {origin}</h2> */


function mapDispatchToProps(dispatch){
   return{
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      },
   };
}

// function mapStateToProps(state){
//    return{
//       myFavorites: state.myFavorites
//    }
// }

export default connect(null, mapDispatchToProps)(Card);