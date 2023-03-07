import React from "react";

function ContactMe() {
  return (
    <div>
      <section>
        <div className="columns">
          <div className="column is-one-third is-align-self-center">
            <div className="card-3 is-horizontal columns mt-6">
              <div className="column is-one-third">
                <img className="group2" src="Group 2.png" />
              </div>
              <div className="card-content column is-two-third is-align-self-center">
                <div className="media">
                  <div className="media-left" />
                  <div className="media-content" />
                </div>
                <div
                  className="column is-full title has-text-centered"
                  id="font-SeoulNamsan"
                >
                  Contact ME
                </div>
                <div className="card-content font4  has-text-white has-text-centered is-align-self-center ">
                  +94772278456
                  <br />
                  dhananji@gmail.com
                  <br />
                  Negombo,Srilanka
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <img className="photo2" src="form.png" />
      </div>
    </div>
  );
}

export default ContactMe;
