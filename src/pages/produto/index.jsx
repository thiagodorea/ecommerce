import './styles.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import BaseTemplate from '../../templates/base-template'
import Back from '../../components/back'
import api from '../../service/api';
import Loading from "../../components/loading";

const Produto = () => {

    const {idTime} = useParams();
    const [nomeTime, setNomeTime] = useState('');
    const [produtosTime, setProdutosTime] = useState([]);
    const [done, setDone] = useState(false);
    const navigate = useNavigate();



    useEffect(() => {
        getProdutosPorTime();
        setNomeTime(localStorage.getItem("@times_name" ));
        localStorage.removeItem("@times_id")
    },[])
    
    const verDetalhe = (id) => {
        navigate(`/info-produto/${id}`)
        setNomeTime(localStorage.setItem("@times_id",idTime));
    }
    
    const getProdutosPorTime = async () => {
        try {
            const response =  await api.get(`/products/${idTime}`,{
                headers: {
                    Authorization: localStorage.getItem("@times_token"),
                },
            })
            setDone(true);
            setProdutosTime(response.data);
        } catch (error) {
            toast.error('Erro ao buscar informação.')
        }
    }
    
    return(
        <BaseTemplate>
            <Back link={'/home'} />
                <h1 className='title-time'>{nomeTime}</h1>
                {
                !done ? <Loading /> :
                    produtosTime.length <= 0 ?
                    <h2 className='nenhum-produto' >Nenhum produto encontrado =(</h2>
                    :
                    <div className='list-produto-container'>
                        <div className='list-produto-items'>
                            {produtosTime.map(produto => (
                                    <div className="produto-container"  key={produto._id} onClick={() =>verDetalhe(produto._id)} >
                                        <div className='produto-container-image' >
                                            <img src={ produto.urlImage } alt={produto.name} className="produto-image" />
                                        </div>
                                        <div className="col-12">
                                            <h3 className="produto-title">{produto.name}</h3>
                                            <p className="produto-preco-desconto"> {produto.discountPrice ? `R$ ${produto.discountPrice}`:``}</p>
                                            <p className="produto-preco">{produto.available ?`R$ ${produto.price}`:`INDISPONÍVEL` } </p>
                                        </div>
                                    </div>
                            ))}
                        </div>
                    </div>
                }
        </BaseTemplate>
    )
}

export default Produto