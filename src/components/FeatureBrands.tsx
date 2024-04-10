import React from "react";
import "../styles/FeatureBrands.scss";
const FeatureBrands = () => {
  const ["logo_amul","logo_berger","logo_mamaease"]
  return (
    <section className="feature__brands__container">
      <div className="brand__cards">
        {Array(7)
          .fill(null)
          .map((el) => (
            <div key={el}>
              <img src="/assets/images/logo_amul.avif" alt="" />
            </div>
          ))}
      </div>
      <div className="brand__des">
        <div>
          <h1>Empowering Brands Across the Globe</h1>
          <p>
            StoreHippo ecommerce platform builds extraordinary solutions to
            power brands across 15 countries and 30+ industries. Add your brand
            to the long list of brands that trust StoreHippo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureBrands;
