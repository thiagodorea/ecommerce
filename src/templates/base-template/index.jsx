
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import Footer from "../../components/footer"
import Header from "../../components/header"
import './styles.css'


const BaseTemplate = (props) => {
    
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("@times_token");
        if (!token) {
            navigate("/");
        }
    },[])

    return(
        <div className="container">
            <Header />
                <div className="main ">
                    <ToastContainer theme="dark" />
                    {props.children}
                </div>
            <Footer />
        </div>
    )
}

export default BaseTemplate