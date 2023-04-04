import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth-context'
import { Link, useNavigate } from 'react-router-dom';

import './styles.css'

const Header = () => {

    const data =  useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () =>{
        data.removeData()
        navigate('/')
    }

    return(
        <header>
            <img src="/buy.png" alt="Logo da Página"/>
            <ul>
                <li>Olá, {data.userName} </li>
                <li><button className='btn_sair' onClick={logout} >Sair</button></li>
            </ul>
        </header>
    )
}

export default Header