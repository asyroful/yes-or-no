import React from "react";

function Confess({ name, onContinue, gif }) {
  return (
    <div className="step-container confess-step">
      <div className="confess-content">
        <p>
          Hai, Meyta. 
          <br />
          Sebenernya aku bingung harus ungkapin apa engga. Entah kenapa, aku ngerasa aku suka sama kamu. Aku juga nggak tahu persis alasannya apa, tapi aku senang karena ada seseorang yang mau dengerin ceritaku dan mau berbagi cerita juga sama aku.
          <br />
          <br />
          Hal kecil itu ternyata bikin aku ngerasa hidup lagi. Pelan-pelan aku jadi punya semangat buat ngejar <i>goals</i>, entah itu untuk beberapa bulan atau tahun ke depan. Kedengarannya agak kurang masuk akal ya. Karena sebelumnya aku cuma mikir, selagi hari ini aku senang, ya udah cukup.
          <br />
          <br />
          Tapi ketika aku beneran suka sama seseorang (read: kamu), pikiranku selalu ikut jalan ke merencanakan dan mengusahakan hari-hari bahkan bulan-bulan ke depan. Dan itu yang bikin aku berani mengungkapkan perasaanku disini.
          <br />
          <br />
          Oh iya, kamu nggak perlu ngerasa harus membalas perasaanku kok. Aku cuma pengen kamu tahu perasaanku aja. terimakasih cantik ❤️
        </p>
      </div>
      <button className="btn btn-continue" onClick={onContinue}>
        Lanjutkan...
      </button>
    </div>
  );
}

export default Confess;
