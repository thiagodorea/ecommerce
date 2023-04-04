import './styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const { name, image } = props.dados;

    const navigate = useNavigate();

    const info = () => {
        navigate('/info')
    }
    
    return(
        <div className="card-container">
            <div className="card-container-icon" onClick={info} >
                <FontAwesomeIcon icon={faCircleExclamation} className="card-icon" />
            </div>
            <img src={image} alt={name} className="card-image" />
            <h3 className="card-title">{name}</h3>
        </div>
    )
}

export default Card;