import { Link } from "react-router-dom";
import kart1 from "../../Assets/mile2-aseets/cta/kart-1.png";
import kart2 from "../../Assets/mile2-aseets/cta/kart-2.png";
import kart3 from "../../Assets/mile2-aseets/cta/kart-3.png";
import food1 from "../../Assets/mile2-aseets/pictures/food-1.png";
import food2 from "../../Assets/mile2-aseets/pictures/food-2.png";
import food3 from "../../Assets/mile2-aseets/pictures/food-3.png";

export function HomePage() {
  return (
    <>
      <div className="homepageBack">
        <div className="homepage-container">
          <img src={kart1} alt="Kart-1" className="homepage-item1" />
          <div className="homepage-textContainer">
            <div className="homepage-text1">
              <span>Özel </span>
              <span>Lezzetus</span>
            </div>
            <p className="homepage-text2">Position:Absolute Acı Burger</p>
          </div>
          <div className="homepage-item2">
            <img src={kart2} alt="Kart-2" className="homepage-item3" />
            <div>
              <div className="homepage-text3">
                <span>Hackathlon</span>
                <span>Burger Menü</span>
              </div>
            </div>
            <img src={kart3} alt="Kart-3" className="homepage-item4" />
            <div>
              <div className="homepage-text4">
                <span>
                  <span style={{ color: "#D80027" }}>Çoooook</span> hızlı
                </span>
                <span>npm gibi kurye</span>
              </div>
            </div>
          </div>

          <div className="homepageMid-container">
            <div className="homepageMid-text0">
              <span className="homepageMid-text1">
                en çok paketlenen menüler
              </span>
              <div>
                <span className="homepageMid-text2">
                  Acıktıran Kodlara Doyuran Lezzetler
                </span>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="homepage-card0">
              <img
                src={food1}
                alt="Terminal pizza"
                className="homepage-card1"
              />
              <div className="homepageCard-text1">
                <Link
                  to="/orderpage"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Terminal Pizza
                </Link>
                <div className="homepageCard-text2">
                  <span>4.8</span>
                  <span>(200)</span>
                  <span style={{ fontWeight: "bold" }}>60₺</span>
                </div>
              </div>
            </div>
            <div className="homepage-card0">
              <img src={food2} alt="Food2" />
              <div className="homepageCard-text1">
                <Link
                  to="/orderpage"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Position:Absolute Acı Burger
                </Link>
                <div className="homepageCard-text2">
                  <span>4.9</span>
                  <span>(928)</span>
                  <span style={{ fontWeight: "bold" }}>85₺</span>
                </div>
              </div>
            </div>
            <div className="homepage-card0">
              <img src={food3} alt="Food3" />
              <div className="homepageCard-text1">
                <Link
                  to="/orderpage"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  useEffect Tavuklu Burger
                </Link>
                <div className="homepageCard-text2">
                  <span>4.9</span>
                  <span>(462)</span>
                  <span style={{ fontWeight: "bold" }}>75₺</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
