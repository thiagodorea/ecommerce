import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Back from "../../components/back";
import api from "../../service/api";
import BaseTemplate from "../../templates/base-template";
import "./styles.css";


const Info = () => {
    
    const {idTime} = useParams();

    const [infoTime, setInfoTime] = useState('');

    useEffect(() => {
        getInfoTimeById();
    },[])

    const getInfoTimeById = async () => {
        try {
            const response = await api.get(`/teams/${idTime}`,{
                headers: {
                    Authorization: localStorage.getItem("@times_token"),
                },
            })
            setInfoTime(response.data.response);
        } catch (error) {
            alert(error);
        }
    }
    
    return(
        <BaseTemplate>
            <Back /> 
            <div className="row containerInfo">
                <div className="col-4 imgLogoTime">
                    <div className="cardLogoTime">
                        <img className="logoTime" src={infoTime.image} />
                    </div>
                </div>
                <div className="col-8 infoTime">
                    <h2>{infoTime.name}</h2>
                    <p>{infoTime.description}</p>
                </div>
            </div>
        </BaseTemplate>
    )
}

export default Info;