import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth-context";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import api from "../../service/api";
import "./styles.css";

const Login = () =>{

    const [ email, setEmail ] = useState("");
    const [ senha, setSenha ] = useState("");
    const [ msgErro, setMsgErro ] = useState("");
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
            setMsgErro("");
            navigate('/home')
        } catch (error) {
            setMsgErro(error.response.data.message);
            setDone(false);
        }
    }

    return(
        <div className="containerLogin"> 
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
                        <input type="senha" value ={senha} onChange={(event)=> setSenha(event.target.value)} />
                        <span></span>
                    </div>
                    {msgErro.length > 0 && <p className="error__" >{ msgErro }</p>}
                    <button className="btn_login" onClick={()=>acessar(event)} > {!done ? 'ENTRAR' : <FontAwesomeIcon icon={faSpinner} spinPulse /> }  </button>
                </form>
            </div>
        </div>
    )
};

export default Login;