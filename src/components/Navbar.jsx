import MisNotitasLogo from '../images/MisNotitasLogo.png';
import salir from '../images/salir.png'
//import { Link } from "react-router-dom";
import './navbar.css';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const {signOutUser} = useContext(UserContext);
    const navegate = useNavigate();

    const handleClickLogOut = async() => {
        try {
            await signOutUser()
            console.log("Usuario deslogueado")
            navegate("/login")
        } catch (error) {
            console.log("Usuario no puede cerrar sesión")
            console.log(error.code)
            
        }
    }
    return (
            <div className='navbar'>
                <img src={MisNotitasLogo} alt="Logo"></img>
                <img src={salir} alt="salir" onClick={handleClickLogOut} className="link" to="/"></img>
                
            </div>
    )
}

export default Navbar;