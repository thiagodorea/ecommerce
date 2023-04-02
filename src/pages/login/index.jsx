import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth-context";
import { useNavigate } from "react-router-dom";
import api from "../../service/api";
import "./styles.css";

const Login = () =>{

    const navigate = useNavigate();
    const [ email, setEmail ] = useState("");
    const [ senha, setSenha ] = useState("");
    const [ msgErro, setMsgErro ] = useState("");
    const  context  =  useContext(AuthContext);

    const acessar = async (event) =>{
        event.preventDefault();
        try {
            const {data} = await api.post("/auth",{ 
                email: email,
                password: senha,
            })
            context.setUserName(data.name);
            setMsgErro("");
            navigate('/home')
            console.log(data);
        } catch (error) {
            console.log(error);
            setMsgErro(error.response.data.message)
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
                    <button onClick={()=>acessar(event)} >ENTRAR</button>
                </form>
            </div>
        </div>
    )
};

export default Login;