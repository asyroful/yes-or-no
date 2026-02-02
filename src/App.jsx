import { useState } from "react";
import "./index.css";
import minionLoves from "./gif/minion-minion-loves.gif";
import minionSuccess from "./gif/minions-cartoon.gif";
import m from "./gif/m.gif";

function App() {
  const [answered, setAnswered] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);

  // Array of annoying statements when "No" is clicked
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

  // Calculate Yes button size based on No clicks
  const getYesButtonSize = () => {
    const baseSize = 1;
    const increment = 0.15; // Increase by 15% each click
    return baseSize + noClickCount * increment;
  };

  const handleYesClick = () => {
    setAnswered(true);
  };

  const handleNoClick = () => {
    // Cycle through annoying statements
    if (noClickCount < annoyingStatements.length - 1) {
      setNoClickCount(noClickCount + 1);
    } else {
      // Keep showing the last statement
      setNoClickCount(annoyingStatements.length - 1);
    }
  };

  return (
    <div className="app-container">
      {!answered ? (
        <>
          <img src={minionLoves} alt="Minion Love" className="minion-gif" />
          <h1 className="question-text">
            Can I be yours? Or can you be mine? 💝
          </h1>
          <div className="buttons-container">
            <button
              className="btn btn-yes"
              onClick={handleYesClick}
              style={{
                transform: `scale(${getYesButtonSize()})`,
                transition: "transform 0.3s ease",
              }}
            >
              Yes! 😊
            </button>
            <button className="btn btn-no" onClick={handleNoClick}>
              {annoyingStatements[noClickCount]}
            </button>
          </div>
        </>
      ) : (
        <div className="success-message">
          <img
            src={minionSuccess}
            alt="Minion I Love You"
            className="success-gif"
          />
          <img src={m} alt="Minion I Love You" className="success-gif" />
          <h2 className="success-title">Yay! You're mine now!</h2>
          <p className="success-subtitle">I'm so happy you said yes! 💖</p>
        </div>
      )}
      <footer className="footer">Copyright &copy; by Asyroful</footer>
    </div>
  );
}

export default App;
