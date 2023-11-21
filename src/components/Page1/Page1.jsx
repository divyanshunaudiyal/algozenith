import React from "react";

function Page1() {
  return (
    <div className="container">
      <div className="container__page1">
        <div className="text">
          <div>
            <h2>Be better at DSA & CP</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              dicta!
            </p>
            <span className="buttons">
              <button className="join">Join now</button>
              <button className="view">View Curriculum</button>
            </span>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" />
              Lorem ipsum dolor sit amet.
            </label>
            <label>
              <input type="checkbox" />
              Lorem ipsum dolor sit amet.
            </label>
            <label>
              <input type="checkbox" />
              Lorem ipsum dolor sit amet.
            </label>
            <label>
              <input type="checkbox" />
              Lorem ipsum dolor sit amet.
            </label>
          </div>
        </div>
        <div className="img">
          <img src="/page1.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Page1;
