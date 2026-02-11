import React from "react";

function Credential({ name, setName, error, onSubmit, minionLoves, isLoading }) {
  return (
    <div className="step-container credential-step">
      <h1 className="title-text">Eits, Berhenti Dulu!</h1>
      <p className="subtitle-text">
        Tamu wajib lapor, masukkan nama lengkap kamu ya...
      </p>
      <form onSubmit={onSubmit} className="name-form">
        <input
          type="text"
          className="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama Lengkap Kamu..."
          autoFocus
          disabled={isLoading}
        />
        {error && <p className="error-text">{error}</p>}
        <button type="submit" className="btn btn-submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Buka Pesan"}
        </button>
      </form>
    </div>
  );
}

export default Credential;
