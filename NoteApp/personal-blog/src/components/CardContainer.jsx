import React from "react";
import CardTemplate from "./CardTemplate";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function CardContainer(props) {

    async function handleNavigate()
    {
            const response = await axios.get("//localhost:8080/get-note").catch((error)=>{alert(error+"Error Fetching data from server")});
            const finalResponse = response.data.map((note) => ({
                ...note,
                id: Date.now() + Math.random() // Generate unique id for each server card if not present
            }));
            //console.log(finalResponse);
            navigate("/create-card", {state:{serverCards:finalResponse,isAppend:true}})
    }

    const navigate = useNavigate();
    console.log(props.cards)
    return (
        <div className="card-container">
            <div className="card-content d-flex flex-wrap justify-content-center">
                {props.cards.length > 0 ? (
                    props.cards.map((card, index) => (
                        <CardTemplate
                            key={card.id}
                            index={card.id}
                            title={card.title}
                            author={card.author}
                            content={card.content}
                            deleteCard={() => { props.deleteCard(index); }}
                        />
                    ))
                ) : (
                    <p>No notes available.</p>
                )}
            </div>
            <div className="button-container">
                <button style={{margin:"10px"}} className="btn btn-success" onClick={() => { navigate("/create-card"); }}>
                    Create Note
                </button>
                <button style={{margin:"10px"}} className="btn btn-primary" onClick={handleNavigate}>
                    View Note
                </button>
            </div>
        </div>
    );
}

export default CardContainer;
