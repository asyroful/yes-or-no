import React from "react";

function Confess({ name, onContinue, gif }) {
  return (
    <div className="step-container confess-step">
      <img src={gif} alt="Minion" className="minion-gif" />
      <h1 className="title-text">Halo, Meyta! ❤️</h1>
      <div className="confess-content">
        <p>
          aku di sini cuma pengen jujur soal apa yang aku rasain.
          Entah kenapa, aku ngerasa aku suka sama kamu, mungkin bahkan udah di titik sayang. Aku juga nggak tahu persis alasannya apa, tapi aku senang karena ada seseorang yang mau dengerin ceritaku dan mau berbagi cerita juga sama aku.
          <br />
          <br />
          Hal kecil itu ternyata bikin aku ngerasa hidup lagi. Pelan-pelan aku jadi punya semangat buat ngejar goals, entah itu buat beberapa bulan atau tahun ke depan. Kedengarannya agak kurang masuk akal ya, soalnya sebelumnya aku ngerasa kayak udah nggak punya harapan buat suka sama orang lagi. Aku cuma mikir, selagi hari ini aku senang, ya udah cukup.
          <br />
          <br />
          Tapi tiap kali aku beneran suka sama seseorang, pikiranku selalu ikut jalan ke hari-hari ke depan. Dan itu yang bikin aku berani bilang, kamu bikin aku bersemangat.
          <br />
          <br />
          Oh iya, kamu nggak perlu ngerasa harus membalas perasaanku kok. Aku cuma pengen kamu tahu perasaanku aja.
        </p>
      </div>
      <button className="btn btn-continue" onClick={onContinue}>
        Lanjutkan...
      </button>
    </div>
  );
}

export default Confess;
