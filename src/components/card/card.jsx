import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const Card = (props) => {
    const { name, image } = props.dados;
    
    return(
        <div className="card-container">
            <div className="card-container-icon" >
                <FontAwesomeIcon icon={faCircleExclamation} className="card-icon" />
            </div>
            <img src={image} alt={name} className="card-image" />
            <h3 className="card-title">{name}</h3>
        </div>
    )
}

export default Card;