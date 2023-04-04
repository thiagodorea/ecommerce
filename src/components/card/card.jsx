import './styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const { name, image, _id } = props.dados;

    const navigate = useNavigate();

    const info = (id) => {
        navigate(`/info/${id}`)
    }

    const produto = (id) => {
        localStorage.setItem("@times_name",name )
        navigate(`/produtos/${id}`)
    }
    
    return(
        <div className="card-container"  >
            <div className="card-container-icon" >
                <FontAwesomeIcon icon={faCircleExclamation} className="card-icon"  onClick={() => info(_id)} />
            </div>
            <div className='card-container-image' onClick={() => produto(_id)}>
                <img src={image} alt={name} className="card-image" />
                <h3 className="card-title">{name}</h3>
            </div>
        </div>
    )
}

export default Card;