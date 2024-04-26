import { NavLink } from "react-router-dom";
import style from './NavLinkComp.module.css'

function NavLinkComp({ to, children, ...props}){

    return(
        <NavLink
            { ...props }
            to={to}
            className={({isActive})=> isActive ? style.isActive : style.unActive }
        >{children}</NavLink>
    )
}

export default NavLinkComp;