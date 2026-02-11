import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import minionLoves from "./gif/minion-minion-loves.gif";
import minionSuccess from "./gif/minions-cartoon.gif";
import m from "./gif/m.gif";

import Credential from "./components/Credential";
import Confess from "./components/Confess";
import Question from "./components/Question";
import Monitor from "./components/Monitor";

function App() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Credential, 1: Confession, 2: Question
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [answered, setAnswered] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);

  const targetName = "Meyta Alfi Maharani";

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const inputName = name.trim().toLowerCase();
    const fullName = targetName.toLowerCase();

    if (inputName === fullName) {
      setCurrentStep(1);
      setError("");
    } else if (inputName === "meyta" || inputName === "meyta alfi") {
      setError("Isi nama lengkap ya, bisa jadi salah orang... 🧐");
    } else {
      setError("Ups, sepertinya kamu bukan orang yang dicari...");
    }
  };

  const handleContinue = () => {
    setCurrentStep(2);
  };

  const annoyingStatements = [
    "No",
    "Are you sure? 🥺",
    "Really? Don't want to be mine? 😢",
    "Think again! 🤔",
    "Come on, click Yes! 😭",
    "Please? 🙏",
    "Pretty please? 🥹",
    "I'm begging you! 😩",
    "Just click Yes already! 😤",
    "Why are you doing this? 💔",
    "You're breaking my heart! 😭",
    "Seriously? Just click Yes please! 🙏",
    "The Yes button is getting bigger! 👀",
    "Look how big the Yes button is now! 😏",
    "Just give in and click Yes! 💕",
  ];

  const getYesButtonSize = () => {
    const baseSize = 1;
    const increment = 0.15;
    return baseSize + noClickCount * increment;
  };

  const handleYesClick = async () => {
    setAnswered(true);
    try {
      await fetch("/api/yes", { method: "POST" });
    } catch (error) {
      console.error("Error sending yes click:", error);
    }
  };

  const handleNoClick = async () => {
    if (noClickCount < annoyingStatements.length - 1) {
      setNoClickCount(noClickCount + 1);
    } else {
      setNoClickCount(annoyingStatements.length - 1);
    }
    try {
      await fetch("/api/no", { method: "POST" });
    } catch (error) {
      console.error("Error sending no click:", error);
    }
  };

  const MainApp = () => (
    <div className="app-container">
      {currentStep === 0 && (
        <Credential
          name={name}
          setName={setName}
          error={error}
          onSubmit={handleNameSubmit}
        />
      )}

      {currentStep === 1 && (
        <Confess name={name} onContinue={handleContinue} gif={minionLoves} />
      )}

      {currentStep === 2 && (
        <Question
          answered={answered}
          handleYesClick={handleYesClick}
          handleNoClick={handleNoClick}
          getYesButtonSize={getYesButtonSize}
          annoyingStatements={annoyingStatements}
          noClickCount={noClickCount}
          minionLoves={minionLoves}
          minionSuccess={minionSuccess}
          mGif={m}
        />
      )}
      <footer className="footer">Copyright &copy; by M.A.M</footer>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/monitor" element={<Monitor />} />
    </Routes>
  );
}

export default App;
