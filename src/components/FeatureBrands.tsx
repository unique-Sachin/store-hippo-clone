import React from "react";
import "../styles/FeatureBrands.scss";
const FeatureBrands = () => {
  const brandLogos = [
    "logo_amul",
    "logo_berger",
    "logo_mamaease",
    "logo_syngenta",
    "logo_dow",
    "logo_whites",
    "logo_mystore",
  ];
  return (
    <section className="feature__brands__container">
      <div className="brand__cards">
        {brandLogos.map((el, i) => (
          //INFO: using index as a key because its a constant array and won't cause index shift
          <div key={i}>
            <img src={`/assets/images/${el}.avif`} alt="" />
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
