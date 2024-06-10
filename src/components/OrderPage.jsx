import React, { useEffect, useState } from "react";
import { FormGroup, Label, Input, ButtonGroup } from "reactstrap";
import veriList from "../veriList.js";
import Order from "./Order.jsx";
import formBanner from "../../Assets/mile2-aseets/pictures/form-banner.png";

const pizzaMalzeme = veriList.pizza;
const pizzaFiyat = veriList.fiyat;
const textContent = veriList.texts;

export default function OrderPage({ orderPost1, setOrderPost1 }) {
  const [ekstraMalzeme, setekstraMalzeme] = useState([]);
  const [pizzaBoy, setPizzaBoy] = useState("");
  const [hamur, setHamur] = useState("");
  const [not, setNot] = useState("");
  const [adSoyad, setAdSoyad] = useState("");

  const [errors, setErrors] = useState({
    pizzaBoy: false,
    hamur: false,
    ekstraMalzeme: false,
    adSoyad: false,
  });

  const handleChange = (event) => {
    const { name, checked, value } = event.target;
    if (name === "ekMalzeme") {
      if (checked) {
        setekstraMalzeme([...ekstraMalzeme, value]);
      } else {
        setekstraMalzeme(ekstraMalzeme.filter((item) => item !== value)); // value eşit olmayanlar.
      }
    }
  };

  const addCheckbox = pizzaMalzeme.map((checkbox, index) => (
    <Label key={checkbox.id} style={{ display: "flex", alignItems: "center" }}>
      <Input
        type="checkbox"
        name={checkbox.name}
        onChange={handleChange}
        checked={ekstraMalzeme.includes(checkbox.value)} // value değerinin bulunup bulunmadığının kontrolü (checkbox'da)
        value={checkbox.value} // chechbox'ın taşıdığı değer.
        style={{
          height: "45px",
          width: "45px",
          accentColor: "#FDC913",
          borderRadius: "5px",
        }}
      />
      {checkbox.value}
    </Label>
  ));

  const handleChangePizzaBoy = (event) => {
    setPizzaBoy(event.target.value);
  };

  const handleChangeAdsoyad = (event) => {
    setAdSoyad(event.target.value);
  };

  const addPizzaBoy = veriList.boyut.map((boyut, index) => (
    <FormGroup key={boyut.id}>
      <Label>
        <Input
          type="radio"
          name={boyut.name}
          value={boyut.label}
          checked={pizzaBoy === boyut.label}
          onChange={handleChangePizzaBoy}
        />
        {boyut.label}
      </Label>
    </FormGroup>
  ));

  const hamurTipi = (event) => {
    const selectedHamur = event.target.value;
    setHamur(selectedHamur);
  };

  const notlar = (event) => {
    const result = event.target.value;
    setNot(result);
  };

  return (
    <section className="formSon">
      <header className="formIT2-item2">
        <div className="formIT2-container">
          <img src={formBanner} alt="Form Banner" />
        </div>
      </header>
      <section className="form-container">
        <div className="orderpage-container">
          <div className="form-item1">
            <div className="formIT2-item3">
              <h4>Position Absolute Acı Pizza</h4>
              <div className="form-item2">
                <span className="ucret">{pizzaFiyat[0].ücret}₺</span>
                <span>{pizzaFiyat[0].puan}</span>
                <span>{pizzaFiyat[0].degerlendirmeSayisi}</span>
              </div>
              {textContent[0].absolutePizza}
            </div>
          </div>
          <div className="form-item3">
            <FormGroup>
              <h4>
                Boyut Seç <span style={{ color: "red" }}>*</span>
              </h4>
              {addPizzaBoy}
              {errors.pizzaBoy && (
                <p style={{ color: "red" }} data-cy="pizzaBoyErrors">
                  {errors.pizzaBoy}
                </p>
              )}
            </FormGroup>
            <FormGroup className="form-hamur">
              <Label for="exampleSelect">
                <h4>
                  Hamur Seç <span style={{ color: "red" }}>*</span>{" "}
                </h4>
              </Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                onChange={hamurTipi}
                style={{
                  width: "15rem",
                  textAlign: "center",
                  backgroundColor: "#FAF7F2",
                  height: "2rem",
                  borderRadius: "0.3rem",
                }}
              >
                <option>--Hamur Kalınlığı Seç--</option>
                <option>İnce</option>
                <option>Orta</option>
                <option>Kalın</option>
              </Input>
              {errors.hamur && (
                <p style={{ color: "red" }} data-cy="hamurErrors">
                  {errors.hamur}
                </p>
              )}
            </FormGroup>
          </div>
          <div className="form-item4-container">
            <FormGroup>
              <h4>Ek Malzemeler</h4>
              <p>En az 4, en fazla 10 malzeme seçmelisiniz. 5₺</p>
              <ButtonGroup className="form-item4">{addCheckbox}</ButtonGroup>
              {errors.ekstraMalzeme && (
                <p style={{ color: "red" }} data-cy="ekMalzemeErrors">
                  {errors.ekstraMalzeme}
                </p>
              )}
            </FormGroup>
          </div>
          <FormGroup>
            <Label for="exampleText">
              <h4>Ad Soyad</h4>
            </Label>
            <Input
              id="exampleAdSoyad"
              name="text"
              type="text"
              placeholder="Lütfen adınızı giriniz.."
              onChange={handleChangeAdsoyad}
              className="form-text"
              style={{ backgroundColor: "#FAF7F2" }}
            />
            {errors.adSoyad && (
              <p style={{ color: "red" }} data-cy="ekMalzemeAdSoyad">
                {errors.adSoyad}
              </p>
            )}
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">
              <h4>Sipariş Notu</h4>
            </Label>
            <Input
              id="exampleText"
              name="text"
              type="textarea"
              placeholder="Siparişine eklemek istediğin bir not var mı ?"
              onChange={notlar}
              className="form-text"
              style={{ backgroundColor: "#FAF7F2" }}
            />
          </FormGroup>
          <hr />
          <Order
            ekstraMalzeme={ekstraMalzeme}
            pizzaBoy={pizzaBoy}
            hamur={hamur}
            not={not}
            adSoyad={adSoyad}
            errors={errors}
            setErrors={setErrors}
            orderPost1={orderPost1}
            setOrderPost1={setOrderPost1}
          />
        </div>
      </section>
    </section>
  );
}
