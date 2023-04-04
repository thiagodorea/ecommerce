import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Back = () =>{

    

    return(
        <Link to="/home" className="icon_back">
            <FontAwesomeIcon icon={faCircleArrowLeft} />
        </Link>
    )
}
export default Back;