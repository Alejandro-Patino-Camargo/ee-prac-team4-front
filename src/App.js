import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/home/Home";
import Resources from "./pages/resources/Resources";
import DeckCreation from "./pages/deck/Deck";
import FlashCardForm from "./pages/deck/FlashcardForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/createDeck" element={<DeckCreation />} />
        <Route path="/createCard" element={<FlashCardForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
