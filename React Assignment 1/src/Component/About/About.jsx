import React from "react";
import aboutimg from "../../assets/IMG_20220703_120338_836.jpg";
export default function About() {
  return (
    <>
      <section className="about w-100 vh-100 home d-flex justify-content-center align-items-center ">
        <div className="container d-flex flex-column justify-content-center align-items-center">

          <div className="row my-4 ">
            <div className="col-md-4 ">
              <div className="p-1 border border-2 ">
                <img src={aboutimg} alt="mohammed hossam" className="w-100" />
              </div>
            </div>
            <div className="col-md-8  d-flex justify-content-center flex-column">
              <h1 className="mb-md-2">Mohammed Hossam Fayyad <span className="fs-5 fw-normal opacity-75 mb-md-3">Frontend developer</span></h1>
              <hr  className="w-50 mt-0"/>
              <p className="lead fw-normal ">
                I'm an Egyption based front-end developer focused on crafting
                clean & user-friendly experiences, I am passionate about
                building excellent software that improves the lives of those
                around me.
              </p>

              <div className="position-relative mt-md-4">
                <hr />
                <h5 className="position-absolute z-2 ">Education</h5>
                <p className="lead fw-normal mb-1">-Bachelor's degree in Accounting <span className="opacity-50 fs-6">2020</span></p>
                <p className="lead fw-normal mb-1">-Frontend developer <span className="opacity-50 fs-6">Roote academy</span></p>
                <p className="lead fw-normal mb-1">-Fundemental of programming <span className="opacity-50 fs-6">Roote academy</span></p>
              </div>
              {/* <button className="btn text-white fw-bold rounded-5 mt-md-3">DOWNLOAD CV</button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
