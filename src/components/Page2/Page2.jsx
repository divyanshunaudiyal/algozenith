import React from "react";

function Page2() {
  return (
    <div className="container">
      <div className="container__page2">
        <div className="text">
          <h1>
            Invest in skills , <span>earn 10x</span> of what you paid.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="image-grid">
            <img src="/package.png" alt="grey" />
            <img src="/iit.png" alt="" />
            <img src="/offer.png" alt="" />
            <img src="/rank.png" alt="" />
          </div>
        </div>
        <div className="pricing">
          <img src="/pricing.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Page2;
