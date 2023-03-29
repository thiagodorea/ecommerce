import Card from "../../components/card/card";
import BaseTemplate from "../../templates/base-template";
import "./styles.css";

const Home = () => {
    return (
        <BaseTemplate>
            <div className="list-container">
                <div className="list-items">
                    <Card />
                </div>
            </div>
        </BaseTemplate>
    );
};

export default Home;
