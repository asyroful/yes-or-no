import React from "react";

function Credential({ name, setName, error, onSubmit, minionLoves, isLoading }) {
  return (
    <div className="step-container credential-step">
      <h1 className="valentine-title">Happy Valentines Day</h1>
      <p className="subtitle-text">
        Sebelum lanjut, isi nama lengkap kamu dulu ya
        <br />
        Ini wajib supaya aku yakin kalau ini beneran kamu.
      </p>

      <form onSubmit={onSubmit} className="name-form">
        <input
          type="text"
          className="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tulis Nama Lengkap Kamu..."
          autoFocus
          disabled={isLoading}
        />
        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="btn btn-submit" disabled={isLoading}>
          {isLoading ? "Tunggu Sebentar..." : "Buka Pesan Valentine 💕"}
        </button>
      </form>
    </div>
  );
}

export default Credential;
