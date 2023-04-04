import Back from "../../components/back";
import BaseTemplate from "../../templates/base-template";
import "./styles.css";


const Info = () => {
    
    return(
        <BaseTemplate>
            <Back /> 
            <div className="row containerInfo">
                <div className="col-4 imgLogoTime">
                    <div className="cardLogoTime">
                        <img className="logoTime" src="../../../public/cruzeiro.png" />
                    </div>
                </div>
                <div className="col-8 infoTime">
                    <h2>Cruzeiro Esporte Clube</h2>
                    <p>O Cruzeiro Esporte Clube é uma associação polidesportiva brasileira, com sede em Belo Horizonte, Minas Gerais. É considerado um dos maiores clubes de futebol do Brasil e da América do Sul. Fundado em 1921 com o nome de Società Sportiva Palestra Italia, foi rebatizado para seu nome atual em 1942 - em referência ao Cruzeiro do Sul - por imposição do governo federal à época proibiu o uso no país de quaisquer símbolos de Alemanha, Itália e Japão, nações inimigas do Brasil no contexto da Segunda Guerra Mundial.
                    É um dos clubes mais populares do Brasil, tendo hoje a sexta maior torcida do país e a maior torcida do estado de Minas Gerais.[12][13][14][15] Seu maior rival é o Atlético Mineiro, com quem faz um dos maiores clássicos do futebol brasileiro. Em menor grau, há também a rivalidade com o América Mineiro.
                    </p>
                </div>
            </div>
        </BaseTemplate>
    )
}

export default Info;