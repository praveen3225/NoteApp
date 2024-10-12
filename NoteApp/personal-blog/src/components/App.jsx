import React, { useState } from "react";
import Header from "./Header";
import CardForm from "./CardForm";
import CardContainer from "./CardContainer"
import WelcomePage from "./WelcomePage";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

function App() {
    const [cards, setCards] = useState([]);

    function addCard(newCard) {
        const cardWithDate = {...newCard, id:Date.now()}
        setCards((prevCards) => [...prevCards, cardWithDate]);
    }

    function addServerCard(newCard){
        setCards((prevCards) => [...prevCards, ...newCard]);
    }

    function deleteCard(id)
    {
        setCards((prevCards) => {
            return prevCards.filter((item,index)=>{
                return index!==id;
            });
        })
    }

    function updateCard(item, id) {
        setCards((prevCards) => {
            const newCards = prevCards.map((card) => 
                card.id === id ? { ...card, ...item } : card
            );
            return newCards;
        });
    }
    

    const location = useLocation();
    const isWelcomePage = location.pathname === '/'; // Check if the current path is the root

    return (
        <>
            <Header />
            {isWelcomePage ? (
                <WelcomePage /> // Render WelcomePage only when the path is "/"
            ):(
                console.log("")
            )}

            <Routes>
                {/* Route for creating the card */}
                <Route path="/create-card" element={<CardForm addCard={addCard} addServerCard={addServerCard} updateCard={updateCard}/>} />
                <Route path="/cards" element={<CardContainer cards={cards} deleteCard={deleteCard}/>} />
                <Route path="/edit-card" element={<CardForm addCard={addCard} updateCard={updateCard} />} />
                {/* Default route to WelcomePage */}
            </Routes>
        </>
    );
}

export default function WrappedApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}
