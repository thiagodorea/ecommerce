import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth-context'
import { Link } from 'react-router-dom';

import './styles.css'

const Header = () => {

    const data =  useContext(AuthContext)

    return(
        <header>
            <img src="/buy.png" alt="Logo da Página"/>
            <ul>
                <li>Olá, {data.userName} </li>
                <li><Link to='/'>Sair</Link></li>
            </ul>
        </header>
    )
}

export default Header