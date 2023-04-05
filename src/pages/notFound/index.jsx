import Back from '../../components/back'
import BaseTemplate from '../../templates/base-template'
import './index.css'

const NotFound = () => {
    return(
        <BaseTemplate>
            <Back  link={'/home'}    />
            <div className='notFound-container'>
                <img src="../../../public/notfound.png" alt="Página não encontrada"  className='notFound-img'/>
                <p>Oooops...  Essa página não existe. =( </p>
            </div>
        </BaseTemplate>
    )
}
export default NotFound