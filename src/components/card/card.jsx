import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const Card = () => {
    return(
        <div className="card-container">
            <div className="card-container-icon" >
                <FontAwesomeIcon icon={faCircleExclamation} className="card-icon" />
            </div>
            <img src='https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0.png' alt='{titulo}' className="card-image" />
            <h3 className="card-title">Flamengo</h3>
        </div>
    )
}

export default Card;