import "./styles.css";

const Login = () =>{


    return(
        <div className="containerLogin"> 
        <img src="/buy.png" className="imgLogo" />
            <div className="box">
                <form>
                    <div>
                        <label>email</label>
                        <input type="email" name="email" />
                        <span></span>
                    </div>
                    <div>
                        <label>senha</label>
                        <input type="password" name="senha" />
                        <span></span>
                    </div>
                    <button>ENTRAR</button>
                </form>
            </div>
        </div>
    )
};

export default Login;