import React from "react";

function Question({
  answered,
  handleYesClick,
  handleNoClick,
  getYesButtonSize,
  annoyingStatements,
  noClickCount,
  minionLoves,
  minionSuccess,
  mGif,
}) {
  return (
    <>
      {!answered ? (
        <div className="step-container question-step">
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
        </div>
      ) : (
        <div className="success-message">
          <img
            src={minionSuccess}
            alt="Minion I Love You"
            className="success-gif"
          />
          <img src={mGif} alt="Minion I Love You" className="success-gif" />
          <h2 className="success-title">Yay! You're mine now!</h2>
          <p className="success-subtitle">I'm so happy you said yes! 💖</p>
        </div>
      )}
    </>
  );
}

export default Question;
