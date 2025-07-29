import React from "react";
import AboutImage from "../img/about.jpg";

const AboutSection = () => {
  return (
    <div className="container-fluid pt-5 pb-3" style={{ maxWidth: "1700px" }}>
      <div className="container-fluid pt-5 pb-3" style={{ maxWidth: "1700px" }}>
        <div className="row align-items-center pb-1">
          <div className="col-lg-5">
            <img
              className="img-thumbnail p-3"
              src={AboutImage}
              alt="About us"
            />
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0">
            <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
              Who We Are
            </small>
            <h1 className="mt-2 mb-4">
              Most Effective Creative Service Provider For Companies
            </h1>
            <p className="mb-4">
              Infynitive Solutions is a full-service IT company specializing in
              delivering cutting-edge digital solutions. Since 2021, we've
              helped over 50 clients transform their businesses through
              innovative web development, mobile applications, and strategic IT
              consulting.
            </p>
            <p className="mb-4">
              Our team of certified developers, UX/UI designers, and QA experts
              work collaboratively to create solutions that are not just
              functional but deliver exceptional user experiences. We follow
              agile methodologies to ensure timely delivery without compromising
              on quality.
            </p>
            <span
              href=""
              className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold"
            >
              Read More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
