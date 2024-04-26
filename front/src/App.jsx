import {useEffect, useState} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/cards/Cards.jsx';
import About from './components/about/About.jsx'
import Detail from "./components/detail/Detail.jsx"
import Error404 from './components/error404/Error404.jsx'
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/Favorites.jsx';

function App() {
   const { pathname } = useLocation()
   const [characters, setCharacters] = useState([]) //estados
   const [access, setAccess] = useState(false)

   const API_KEY = 'pi-gonzadeveloper'
   const URL = `http://localhost:3001/rickandmorty/`
   
   //funcion para agregar persoanjes
   async function onSearch(id){
      if(!id) alert('Ingresa por favor un ID')
      if(characters.find(char => char.id === parseInt(id))) return alert(`Ya existe el personaje con ese id ${id}`) //comprueba que no pongamos 2 veces el mismo personaje
      
      try {
         const {data} = await axios.get(`${URL}/character/${id}`)

         setCharacters(oldcharacters => [...oldcharacters, data])

      } catch (error) {
         
         alert(error.response.data);
      
      }
   } 

    //con esta funcin vaamos a cerrar un personaje pasado por id 
    const onClose = (id)=> setCharacters(characters.filter(char => char.id !== parseInt(id)))

    const navigate = useNavigate()

   async function login(userData){

      try {
         const { data } = await axios(`${URL}/login?email=${userData.email}&password=${userData.password}`)
         
         const { access } = data

         setAccess(access)
         access && navigate('/home')
      } catch (error) {
         alert(error.response.data.message)
      }

   }

   //Esta funcion proteje el acceso a las demas rutas
   useEffect(()=> {
      !access && navigate('/');
   },[access]);



   return (
      // linea 46 esto hace que si la ruta en la que se encuntra el usuario es difernte a la raiz se renderice el nav
      <div className='App'>
         { pathname !== '/' && <Nav onSearch= {onSearch}/> }  
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About />} />
            <Route path="/detail/:id" element={<Detail />} /> 
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<Error404 />} /> 
         </Routes>
      </div>
   );
}

export default App;
