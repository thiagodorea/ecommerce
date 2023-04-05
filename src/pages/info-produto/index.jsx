import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Back from "../../components/back";
import Loading from "../../components/loading";
import api from "../../service/api";
import BaseTemplate from "../../templates/base-template";
import "./styles.css";


const InfoProduto = () => {
    
    const {idProduto} = useParams();
    const [nomeTime, setNomeTime] = useState('');
    const [idTime, setidTime] = useState('');
    const [infoProduto, setInfoProduto] = useState('');

    useEffect(() => {
        getInfoProdutoById();
        setNomeTime(localStorage.getItem("@times_name" ));
        setidTime(localStorage.getItem("@times_id" ));
    },[])

    const getInfoProdutoById = async () => {
        try {
            const response = await api.get(`/product/${idProduto}`,{
                headers: {
                    Authorization: localStorage.getItem("@times_token"),
                },
            })
            setInfoProduto(response.data);
        } catch (error) {
            toast.error('Erro ao buscar informação.')
        }
    }
    
    return(
        <BaseTemplate>
            <Back  link={`/produtos/${idTime}`} /> 
            <h1 className='title-time'>{nomeTime}</h1>
            {infoProduto ?<div className="row containerInfo">
                <div className="col-4 imgLogoTime">
                    <div className="cardLogoTime">
                        <img className="logoTime" src={infoProduto.urlImage} />
                    </div>
                </div>
                <div className="col-8 info-produto">
                    <h2>{infoProduto.name}</h2>
                    <small className="info-produto-fabricante">{infoProduto.maker}</small>
                    <p className="info-produto-preco-desconto">{infoProduto.discountPrice ? `R$ ${infoProduto.discountPrice}`:null}</p>
                    <p className="info-produto-preco">{infoProduto.available ?`R$ ${infoProduto.price}`:`INDISPONÍVEL`}</p>
                    <p className="info-produto-descricao">{infoProduto.length >0 ? Descrição: null}</p>
                    <p>{infoProduto.description}</p>
                </div>
            </div> : <Loading />}
        </BaseTemplate>
    )
}

export default InfoProduto;