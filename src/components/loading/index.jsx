import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
    return (
        <div className="loading">
            <p>Carregando <FontAwesomeIcon icon={faSpinner} spinPulse /> </p>
        </div>
    );
}

export default Loading;