import "./styles.css";

import Card from "../../components/card/card";
import BaseTemplate from "../../templates/base-template";
import api from "../../service/api";
import Loading from "../../components/loading";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Home = () => {

    const [times, setTimes] = useState([]);
    const [done, setDone] = useState(false);

    const getTimes = async () => {
        try {
            const response = await api.get("/teams", {
                headers: {
                    Authorization: localStorage.getItem("@times_token"),
                },
            })
            setDone(true);
            setTimes(response.data);
        } catch (error) {
            toast.error('Erro ao buscar informação.')
        }
    }
    
    useEffect(() => {
        getTimes();
    },[])


    return (
        <BaseTemplate>
            {!done ? <Loading /> :
            <div className="list-container">
                <div className="list-items">
                    { times.map((time) =>(
                            <div key={time._id}>
                                <Card dados={time} />
                            </div>
                        ))
                    }
                </div>
            </div>
            }
        </BaseTemplate>
    );
};

export default Home;
