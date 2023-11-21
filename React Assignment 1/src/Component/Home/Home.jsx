import React from "react";
import avataaars from "./avataaars.svg";
import mo from "../../assets/—Pngtree—children s software programming_5401261 (1).png";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <section className="w-100 vh-100 home d-flex justify-content-center align-items-center ">
      <div className="row w-100">
        <div className="col-7  p-md-5 d-flex flex-column justify-content-center align-items-center ">
          <div className=" w-75">
            <p className="mb-0 fa-2x ">Hello I'm </p>
            <h1 className=" mb-0 fw-bolder fa-4x ">Mohammed Hossam</h1>
            <h2 className="mb-md-3 ">Frontend developer</h2>

            <Link className=" btn rounded-5 me-2 p-2 fw-bold" to={{}}>
              HIRE ME
            </Link>
            <Link className=" btn rounded-5 cv-btn p-2 fw-bold" to={{}}>
              DOWNLOAD CV
            </Link>
            <div className="social-ic mt-md-3 d-flex ">
              <div className="ic me-md-2 rounded-circle d-flex justify-content-center align-items-center">
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className="ic me-md-2 rounded-circle d-flex justify-content-center align-items-center">
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div className="ic me-md-2 rounded-circle d-flex justify-content-center align-items-center">
                <i className="fab fa-github"></i>
              </div>
              <div className="ic me-md-2 rounded-circle d-flex justify-content-center align-items-center">
                <i className="fab fa-whatsapp"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5  ">
          <div className=" rounded-circle imgg d-flex justify-content-center">
            <img src={mo} className="w-100 rounded-circle  " alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
