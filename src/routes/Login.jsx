import './login.css'
import MisNotitasLogo from '../images/MisNotitasLogo.png';
import { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

   
    const {loginUser} = useContext(UserContext);
    const navegate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('procesando form: ',email, password);
        try {
            await loginUser(email, password);
            console.log('Usuario logeado')
            navegate("/notes")

        } catch (error) {
            console.log(error.code);
            alert("Email ya esta en uso")
            navegate("/login")
        }
    };

    return (
        <>
        <div className='login'>
            <div className='logo'>
                <img src = {MisNotitasLogo} alt="logo"/>
            </div>
            <form onSubmit={handleSubmit} className='loginForm'>
                <input class = "email" 
                type="text" 
                placeholder="Escribe tu correo"
                value={email}
                onChange={ e => setEmail(e.target.value)}>
                </input>
                <input class = "password" 
                type="password" 
                placeholder="Escribe tu contraseña"
                value={password}
                onChange={ e => setPassword(e.target.value)}>
                </input>
                <button onClick={navegate} type = "submit" class="logIn">INICIAR SESIÓN</button>
            </form>
        </div>
        </>
    )
}

export default LogIn;