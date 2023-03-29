import Footer from "../../components/footer"
import Header from "../../components/header"
import './styles.css'

const BaseTemplate = (props) => {
    return(
        <div className="container">
            <Header />
                <div className="main ">
                    {props.children}
                </div>
            <Footer />
        </div>
    )
}

export default BaseTemplate