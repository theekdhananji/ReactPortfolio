import React from "react";

function HeroSec() {
  return (
    <>
      <section className="hero">
        <div className="hero columns pt-6">
          <div className="hero columns mt-6" />
          <div className="hero columns pl-6" />
          <div className="column is-half  ml-6 hero-text-margin-y">
            <h1 className="title has-text-left textcolor-yellow mb-2 font-nurito">
              <span style={{ color: "#FDC435" }}>Software Developer</span>
              <div className="column is ml-1" />
            </h1>
            <h1 className="hero-header title has-text-left is-size-1 has-text-white font-PlayfairDisplay">
              Hello, my name is
              <br />
              Theekshana
              <br /> Dhananji
            </h1>
            <div className="column is ml-1" />
            <h1 className="has-text-left is-size-5 has-text-white font-nunito">
              I am a undergraduate of University of <br />
              Colombo School of Computing . 4 years
              <br />
              experience in C, Java and python, <br />
              having strong,analytical, and leadership <br />
              skills to work in a challenging
              <br />
              environment.
            </h1>
            <div className="column pt-5" />
            <div className="field is-grouped my-5">
              <p className="control">
                <button className="button is-size-5 bgcolor-brand is-roboto  is-info has-text-white">
                  Projects
                </button>
              </p>
              <p className="control"></p>
              <div className="column is-1" />
              <button className="button is-size-5 bgcolor-brand is-info is-black-outlined btn-outline ">
                <span className="icon is-small">
                  <i className="fab fa-linkedin" />
                </span>
                <span className="is-roboto">Linkedln</span>
              </button>
              <p />
            </div>
          </div>
          <div className="column is-half mt-0">
            <img className="photo" src="Group 1.png" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSec;
