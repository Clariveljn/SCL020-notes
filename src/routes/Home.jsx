import './Home.css'
import MisNotitasLogo from '../images/MisNotitasLogo.png'
import { useState,useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const {registerUser} = useContext(UserContext);
    const navegate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(email, password);
            alert("Usuario registrado con éxito")
            navegate("/notes")
    
        } catch (error) {
            alert("usuario ya se encuentra registrado, debes iniciar sesión");
            navegate("/login")
        }
    };
    
    return (
        <>
        <div className='home'>
            <div className='logo'>
                <img src = {MisNotitasLogo} alt="logo"/>
            </div>
            <form onSubmit={handleSubmit} className='registerForm'>
                <input class = "name" 
                    type="text" 
                    placeholder="Escribe tu nombre">
                </input>
                <input 
                    class = "email" 
                    type="text" 
                    name='email'
                    placeholder="Escribe tu correo" 
                    value={email}
                    onChange={ e => setEmail(e.target.value)}>
                </input>
                <input 
                    class = "password" 
                    type="password" 
                    name='password'
                    placeholder="Escribe tu contraseña"
                    value={password}
                    onChange={e => setPassword(e.target.value)}></input>
                <button onClick={navegate} type = "submit" class="logUp">REGÍSTRATE</button>
            </form>
        </div>
        </>
    )
}

export default Home;