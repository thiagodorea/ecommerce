import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth-context";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from "../../service/api";
import "./styles.css";

const Login = () =>{

    const [ email, setEmail ] = useState("");
    const [ senha, setSenha ] = useState("");
    const [done, setDone] = useState(false);
    
    const navigate = useNavigate();
    const context = useContext(AuthContext);

    const acessar = async (event) =>{
        event.preventDefault();
        try {
            setDone(true);
            const {data} = await api.post("/auth",{ 
                email: email,
                password: senha,
            })
            context.saveData(data.name,data.token);
            navigate('/home')
        } catch (error) {
            setDone(false);
            toast.error(error.response.data.message);
        }
    }

    return(
        <div className="containerLogin"> 
        <ToastContainer theme="dark" />
        <img src="/buy.png" className="imgLogo" />
            <div className="box">
                <form>
                    <div>
                        <label>email</label>
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        <span></span>
                    </div>
                    <div>
                        <label>senha</label>
                        <input type="password" value ={senha} onChange={(event)=> setSenha(event.target.value)} />
                        <span></span>
                    </div>
                    <button className="btn_login" onClick={()=>acessar(event)} > {!done ? 'ENTRAR' : <FontAwesomeIcon icon={faSpinner} spinPulse /> }  </button>
                </form>
            </div>
        </div>
    )
};

export default Login;