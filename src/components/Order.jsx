import React, { useEffect, useState } from "react";
import veriList from "../veriList.js";
import axios from "axios";
import { Button, Form } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function Order({
  ekstraMalzeme,
  pizzaBoy,
  hamur,
  not,
  errors,
  setErrors,
  orderPost1,
  setOrderPost1,
  adSoyad,
}) {
  const [counter, setCounter] = useState(1);
  const [isValid, setIsValid] = useState(false);

  const fiyatListesi = veriList.fiyat[0];
  const [toplamFiyat, setToplamFiyat] = useState(0);

  useEffect(() => {
    const yeniToplamFiyat =
      counter * fiyatListesi.ücret + ekstraMalzeme.length * 5;
    setToplamFiyat(yeniToplamFiyat);
  }, [counter, ekstraMalzeme]);

  const handleClick = (item) => {
    if (item === "azalt" && counter > 1) {
      setCounter(counter - 1);
    } else if (item === "artir") {
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    // Form alanlarının durumunu kontrol eden bir fonksiyon
    const checkFormValidity = () => {
      // Tüm form alanlarının dolu olup olmadığını kontrol et
      const isFormValid =
        pizzaBoy && hamur && ekstraMalzeme.length > 0 && adSoyad.length > 0;
      // isValid durumunu güncelle
      setIsValid(isFormValid);
    };

    // Herhangi bir form alanı değiştiğinde form geçerliliğini kontrol et
    checkFormValidity();
  }, [pizzaBoy, hamur, ekstraMalzeme, adSoyad]);

  const handleSumbit = (event) => {
    event.preventDefault();
    let newErrors = {};

    if (!pizzaBoy) {
      newErrors.pizzaBoy = "Lütfen bir pizza boyutu seçin.";
    }
    if (!hamur) {
      newErrors.hamur = "Lütfen bir hamur tipi seçin.";
    }
    if (ekstraMalzeme.length > 10) {
      newErrors.ekstraMalzeme = "En fazla 10 adet seçim yapabilirsiniz.";
    }
    if (ekstraMalzeme.length < 4) {
      newErrors.ekstraMalzeme = "En az 4 adet seçim yapmalısınız.";
    }
    if (adSoyad.length < 3) {
      newErrors.adSoyad = "Lütfen en az 3 karakter giriniz!";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsValid(false);
    } else {
      axios
        .post("https://reqres.in/api/pizza", {
          isim: fiyatListesi.id,
          boyut: pizzaBoy,
          malzemeler: ekstraMalzeme,
          ücret: toplamFiyat,
          "Hamur Tipi": hamur,
          "Sipariş Notu": not,
          adet: counter,
        })
        .then(function (response) {
          setOrderPost1(response.data);
          history.push("./success");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const history = useHistory();

  return (
    <form onSubmit={handleSumbit} className="order-genel">
      <div className="button1">
        <Button
          onClick={() => handleClick("azalt")}
          className="button2"
          data-cy="pizzaAzalt"
          style={{ backgroundColor: "#FAF7F2" }}
        >
          -
        </Button>
        <span className="counter-style" style={{ backgroundColor: "#FAF7F2" }}>
          {" "}
          {counter}{" "}
        </span>
        <Button
          onClick={() => handleClick("artir")}
          className="button2"
          data-cy="pizzaArtır"
          style={{ backgroundColor: "#FAF7F2" }}
        >
          +
        </Button>
      </div>

      <section className="order-container">
        <h4 className="acs">Sipariş Toplamı</h4>
        <div>
          <div className="seçimler-ücret">
            <p>Seçimler</p>
            <p data-cy="secimlerFiyat">{ekstraMalzeme.length * 5}₺</p>
          </div>
        </div>
        <div className="toplam-fiyat">
          <p style={{ color: "red" }}>Toplam</p>
          <p>{toplamFiyat}₺</p>
        </div>
        <Button
          type="submit"
          className="button"
          data-cy="SiparişButon"
          style={{ backgroundColor: "#FDC913" }}
        >
          SİPARİŞ VER
        </Button>
      </section>
    </form>
  );
}
