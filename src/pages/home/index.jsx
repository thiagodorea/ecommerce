import "./styles.css";

import Card from "../../components/card/card";
import BaseTemplate from "../../templates/base-template";
import api from "../../service/api";
import Loading from "../../components/loading";
import { useEffect, useState } from "react";

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
            alert(error);
        }
    }
    
    useEffect(() => {
        getTimes();
    },[])


    return (
        <BaseTemplate>
            <div className="list-container">
                <div className="list-items">
                    {!done ? <Loading />
                        : times.map((time) =>(
                            <div key={time._id}>
                                <Card dados={time} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </BaseTemplate>
    );
};

export default Home;
