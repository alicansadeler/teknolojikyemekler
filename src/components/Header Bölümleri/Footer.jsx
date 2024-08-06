import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Footer({ showFooter, setShowFooter }) {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/success") {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  }, [location.pathname, setShowFooter]);

  return (
    <>
      {showFooter && (
        <div className="footer-container">
          <div>
            <img src={"/logoFooter.svg"} alt="Banner" className="home-item1" />
            <div className="footerItem-container">
              <div className="footer-item1">
                <img src={"/icon-1.png"} alt="İcon1" />
                <p style={{ lineHeight: "1.5rem" }}>
                  341 Londonderry Road, <br /> Istanbul Türkiye
                </p>
              </div>
              <div className="footer-item1">
                <img src={"/icon-2.png"} alt="İcon2" />
                <p>aciktim@teknolojikyemekler.com</p>
              </div>
              <div className="footer-item1">
                <img src={"/icon-3.png"} alt="İcon3" />
                <p>+90 216 123 45 67</p>
              </div>
            </div>
          </div>
          <div className="footer-item2">
            <div>
              <h4>Hot Menu</h4>
              <p>Terminal Pizza</p>
              <p>5 kişilik Hackathlon Pizza</p>
              <p>useEffect Tavuklu Pizza</p>
              <p>Beyaz Console Frosty</p>
              <p>Testler Geçti Mutlu Burger</p>
              <p>Position Absolute Acı Burger</p>
            </div>
            <div className="footer-item3">
              <h4>Instragram</h4>
              <div className="footer-item4">
                <img src={"/li-0.png"} alt="Insta0" className="footer-item5" />
                <img src={"/li-1.png"} alt="Insta1" className="footer-item5" />
                <img src={"/li-2.png"} alt="Insta2" className="footer-item5" />
                <img src={"/li-3.png"} alt="Insta3" className="footer-item5" />
                <img src={"/li-4.png"} alt="Insta4" className="footer-item5" />
                <img src={"/li-5.png"} alt="Insta5" className="footer-item5" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
