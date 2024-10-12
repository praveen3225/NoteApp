import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function CardForm({ addCard, addServerCard, updateCard }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const cardToEdit = location.state ? location.state : null;
  const isEdit = location.state ? location.state.isTrue : false;
  const isAppend = location.state ? location.state.isAppend : false;
  const serverCards = location.state ? location.state.serverCards : [];

  useEffect(() => {
    // Check if we are appending the data and if cards are not already added
    if (isAppend && serverCards.length > 0 && !location.state.isDataAppended) {
      addServerCard(serverCards);
      // Mark the data as appended to avoid appending it again
      location.state.isDataAppended = true;
      navigate('/cards');
    }
  }, [isAppend, serverCards, addServerCard, navigate, location.state]);

  useEffect(() => {
    if (isEdit && cardToEdit) {
      setTitle(cardToEdit.title);
      setAuthor(cardToEdit.author);
      setContent(cardToEdit.content);
    }
  }, [isEdit, cardToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { title, author, content };
    if (isEdit) {
      updateCard(newCard, cardToEdit.index);
    } else {
      addCard(newCard);
    }
    setTitle("");
    setAuthor("");
    setContent("");
    navigate('/cards');
  };

  return (
    <div className="card-form-container">
      <h2 className="form-title">{isEdit ? "Edit Note" : "Create Note"}</h2>
      <form onSubmit={handleSubmit} className="card-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="form-input"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="form-input"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="form-textarea"
            autoComplete="off"
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="form-button">
            {isEdit ? "Save Note" : "Add Note"}
          </button>
        </div>
        <div className="form-actions">
          <button onClick={() => { navigate("/cards"); }} className="btn btn-danger">Back</button>
        </div>
      </form>
    </div>
  );
}

export default CardForm;
