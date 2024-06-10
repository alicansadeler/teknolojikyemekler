import React from "react";

export default function Success({ orderPost1 }) {
  const {
    isim,
    boyut,
    malzemeler,
    ücret,
    "Hamur Tipi": hamurTipi,
    "Sipariş Notu": siparisNotu,
    adet,
  } = orderPost1;

  return (
    <div className="success-container">
      <div className="success-text0">
        <span
          style={{
            fontFamily: "Satisfy",
            fontSize: "32px",
            fontWeight: "400",
            color: "#FDC913",
          }}
        >
          lezzetin yolda
        </span>
        <span
          style={{
            fontFamily: "Roboto Condensed",
            fontSize: "86px",
            fontWeight: "300",
            color: "white",
            borderBottom: "1px solid white",
          }}
        >
          SİPARİŞ ALINDI
        </span>
      </div>
      <div className="success-text1">
        <span
          style={{
            fontFamily: "Barlow",
            fontSize: "22px",
            fontWeight: "600",
          }}
        >
          {isim}
        </span>
        <div className="success-text4">
          <span>
            <span style={{ fontWeight: "400" }}>Boyut:</span> {boyut}
          </span>

          <span>
            <span style={{ fontWeight: "400" }}>Hamur Tipi:</span> {hamurTipi}
          </span>
          <span>
            {" "}
            <span style={{ fontWeight: "400" }}>Ek seçimler:</span>{" "}
            {malzemeler.join(", ")}
          </span>
        </div>
      </div>
      <div className="orderToplam-item1">
        <span style={{ textAlign: "center" }}>Sipariş Toplamı</span>
        <div className="orderToplam-item2">
          <span style={{ fontWeight: "400" }}>Seçimler :</span>{" "}
          <span>{malzemeler.length * 5}₺</span>
        </div>
        <div className="orderToplam-item2">
          <span style={{ fontWeight: "400" }}>Toplam Fiyat:</span>
          <span>{ücret}₺</span>
        </div>
      </div>
    </div>
  );
}
