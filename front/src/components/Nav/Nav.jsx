import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from 'react-router-dom'
import NavLinkComp from "../navLink/NavLinkComp"
import style from './Nav.module.css'

export default function Nav({onSearch}){
    
    return <div className={style.nav}>
        <Link to='/Home'>
        <button>Home</button>
        </Link>
        <NavLinkComp to='/favorites'>
            <button>Favorites</button>
        </NavLinkComp>
        <NavLinkComp to='/about'>
            <button>About</button>
        </NavLinkComp>
        <SearchBar onSearch={onSearch} />        
    </div>
}