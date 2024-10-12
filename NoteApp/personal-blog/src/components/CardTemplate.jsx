import React from "react"
import Card from "react-bootstrap/Card"
import { useNavigate } from "react-router-dom";

function CardTemplate(props){

  const navigate = useNavigate();

  function handleEdit()
  {
      navigate("/edit-card",{state:{title:props.title,author:props.author,content:props.content, isTrue:true, index:props.index}})
  }

    return (
        <Card style={{ width: '18rem',height:"max-content" }} className="m-3">
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.author}</Card.Subtitle>
            <Card.Text>
              {props.content}
            </Card.Text>
            <div className="card-template-buttons-placement">
             <button onClick={handleEdit} type="button" style={{border:"none",backgroundColor:"white", marginRight:"20px"}}> <i class="bi bi-pencil-fill" style={{color:"green"}}></i></button>
             <button onClick={props.deleteCard} type="button" style={{border:"none",backgroundColor:"white", marginLeft:"20px"}}> <i class="bi bi-trash3-fill" style={{color:"red"}}></i></button>
            </div>
          </Card.Body>
        </Card>
      );
}

export default CardTemplate