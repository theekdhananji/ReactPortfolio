import React from "react";

function Edu() {
  return (
    <div>
      <section>
        <div className="column is-half mt-6" />
        <div
          className="home-hero"
          style={{
            marginLeft: "4rem",
            width: "90%",
            height: "400px",
            backgroundColor: "#383a3d",
          }}
        >
          <p
            className="font2-PlayfairDisplay"
            style={{ marginLeft: "2rem", paddingTop: "1rem", color: "white" }}
          >
            Education
          </p>
          <div
            style={{
              marginLeft: "3rem",
              fontSize: "24px",
              color: "white",
              marginTop: "1rem",
            }}
          >
            <br />
            <ul type="disc">
              <li>
                Bsc in Information Systems, University of Colombo School of
                Computing.
              </li>
              <li>
                Passed GCE A/L in Science Stream- Wen/Holy Family Balika Maha
                Vidyalaya- 2019
              </li>
            </ul>
          </div>
          <div>
            <img
              src="photo2.png"
              style={{
                width: "320px",
                height: "320px",
                marginLeft: "950px",
                marginTop: "-12rem",
              }}
            />
          </div>
        </div>
      </section>
      <br />
    </div>
  );
}

export default Edu;
