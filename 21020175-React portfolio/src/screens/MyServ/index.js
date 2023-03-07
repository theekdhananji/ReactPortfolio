import React from "react";

function MyServ() {
  return (
    <section>
      <div className="card-2 is-horizontal columns ml-3">
        <div className="column is-two-third is-align-self-center">
          <div className="media">
            <div className="media-left" />
            <div className="media-content">
              <p className="title is-3"></p>
              <div className="font2-PlayfairDisplay">
                <span style={{ color: "white" }}> My Services</span>
                <p />
              </div>
            </div>
          </div>
          <div className="column is-two-third mt-6 " />
          <div className="column is-two-third ml-6 " />
          <button className="button  is-size-3 color is-info is-roboto has-text-white">
            Web Development
          </button>
          <button className="button  is-size-3  is-info is-roboto has-text-white">
            UI/VI Design
          </button>
          <button className="button  is-size-3  is-info is-roboto has-text-white">
            Sound Design
          </button>
        </div>
        <div className="card-image has-background-link is-align-self-center ">
          <figure className="image is-310x283 ">
            <img src="3.png" alt="my services" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default MyServ;
