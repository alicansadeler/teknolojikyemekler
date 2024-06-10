import food1 from "../../Assets/mile2-aseets/pictures/food-1.png";
import food2 from "../../Assets/mile2-aseets/pictures/food-2.png";
import food3 from "../../Assets/mile2-aseets/pictures/food-3.png";
import { Link } from "react-router-dom";

export const HomePageLink = () => {
  return (
    <>
      <div className="homepageMid-container">
        <div className="homepageMid-text0">
          <span className="homepageMid-text1">en çok paketlenen menüler</span>
          <div>
            <span className="homepageMid-text2">
              Acıktıran Kodlara Doyuran Lezzetler
            </span>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="homepage-card0">
          <img src={food1} alt="Terminal pizza" className="homepage-card1" />
          <div className="homepageCard-text1">
            <Link to="/orderpage" style={{ color: "black", fontWeight: "600" }}>
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
            <Link to="/orderpage" style={{ color: "black", fontWeight: "600" }}>
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
            <Link to="/orderpage" style={{ color: "black", fontWeight: "600" }}>
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
    </>
  );
};
