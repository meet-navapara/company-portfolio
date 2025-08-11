import React, { useState } from "react";
import "../style/style.min.css";
import "../style/style.css";
import testimonialImg1 from "../img/testimonial-1.jpg";
import testimonialImg2 from "../img/testimonial-2.jpg";
import testimonialImg3 from "../img/testimonial-3.jpg";
import testimonialImg4 from "../img/testimonial-4.jpg";

const testimonials = [
  {
    text: "Working with Infynitive solution  was an outstanding experience. Their team delivered our website on time, exceeded expectations, and provided ongoing support that truly sets them apart.",
    img: testimonialImg1,
    name: "Walker Brown",
    profession: "Marketing Director, NextGen Solutions",
  },
  {
    text: "Infynitive solution 's app development expertise allowed us to launch our mobile platform seamlessly. The communication and transparency throughout the process were top-notch.",
    img: testimonialImg2,
    name: "Harrison Lee",
    profession: "Product Manager, UrbanGrocer",
  },
  {
    text: "The designers at Infynitive solution  have a creative eye and technical finesse. Our new UI/UX has improved user engagement and made our SaaS product a client favorite.",
    img: testimonialImg3,
    name: "Smith, Murphy",
    profession: "Founder, SaaSify",
  },
  {
    text: "I fully recommend Infynitive solution  for ambitious companies. Their SEO and digital marketing experts helped us double our online leads in just three months.",
    img: testimonialImg4,
    name: "Josh Perry",
    profession: "CEO, QuickTax Services",
  },
];

const services = [
  {
    icon: "fa-laptop-code",
    title: "Web Development",
    desc: "Building responsive, fast, and user-friendly websites using modern web technologies tailored to your business needs.",
  },
  {
    icon: "fa-envelope-open-text",
    title: "App Development",
    desc: "Creating high-quality mobile applications for iOS and Android platforms with seamless user experiences and robust performance.",
  },
  {
    icon: "fa-code",
    title: "UI/UX Designing",
    desc: "Designing intuitive, engaging, and visually appealing user interfaces optimized for an excellent user experience across all devices.",
  },
  {
    icon: "fa-vials",
    title: "QA & Testing",
    desc: "Ensuring the highest quality of your software through comprehensive testing, bug tracking, and performance optimization.",
  },
  {
    icon: "fa-user-tie",
    title: "IT Consultancy",
    desc: "Providing expert IT consulting to help you strategize, plan, and implement technology solutions that drive business success.",
  },
  {
    icon: "fa-users-cog",
    title: "Dedicated Team",
    desc: "Offering a skilled and dedicated team of professionals to work exclusively on your projects, ensuring focus and efficiency.",
  },
];

function Service() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <>
      <div className="container-fluid pt-5 pb-3" style={{ maxWidth: "1700px" }}>
        <div
          className="container-fluid pt-5 pb-3"
          style={{ maxWidth: "1700px" }}
        >
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 text-center mb-5">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
                What We Do
              </small>
              <h1 className="mt-2 mb-3">We Offer Creative Services</h1>
              <h4 className="font-weight-normal text-muted mb-4">
                We specialize in creating tailored digital experiences that
                empower your business to grow and succeed.
              </h4>
              <span className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">
                Discover More
              </span>
            </div>
          </div>
        </div>

        {/* Responsive Service Grid Start */}
        <div className="px-2 px-md-4">
          <div className="row">
            {services.map((service) => (
              <div
                className="col-12 col-sm-6 col-lg-4 mb-5"
                key={service.title}
              >
                <div className="d-flex">
                  <i
                    className={`fa fa-3x ${service.icon} text-primary mr-4`}
                  ></i>
                  <div className="d-flex flex-column">
                    <h4 className="font-weight-bold mb-3">{service.title}</h4>
                    <p>{service.desc}</p>
                    <span
                      className="font-weight-semi-bold"
                      style={{ cursor: "pointer", color: "#fdac53" }}
                    >
                      Read More <i className="fa fa-angle-double-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Responsive Service Grid End */}
      </div>

      {/* Services End */}

      {/* Testimonial Start */}
      <div className="container-fluid pt-5">
        <div
          className="container-fluid pt-5 pb-3"
          style={{ maxWidth: "1700px" }}
        >
          <div className="row">
            <div className="col-lg-4 mb-5">
              <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
                What clients say
              </small>
              <h1 className="mt-2 mb-3">Clients Say About Our Services</h1>
              <h4 className="font-weight-normal text-muted mb-4">
               We take pride in delivering top-quality service and building lasting relationships.
Here’s what our clients have to say about working with us.
              </h4>
              <span className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">
                Submit Review
              </span>
            </div>
            <div className="col-lg-8 mb-5">
              <div
                className="testimonial-carousel position-relative"
                style={{ minHeight: 250 }}
              >
                <div className="testimonial-item" key={testimonialIndex}>
                  <div
                    className="testimonial-text position-relative border mb-4"
                    style={{ padding: "25px 30px" }}
                  >
                    {testimonials[testimonialIndex].text}
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid rounded-circle"
                      src={testimonials[testimonialIndex].img}
                      alt="Testimonial"
                      style={{ width: 80, height: 80 }}
                    />
                    <div className="pl-4">
                      <h6 className="font-weight-bold">
                        {testimonials[testimonialIndex].name}
                      </h6>
                      <i className="text-muted">
                        {testimonials[testimonialIndex].profession}
                      </i>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3 p-3 p-md-0">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      className={`mx-1 btn btn-sm ${
                        idx === testimonialIndex
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                      style={{
                        borderRadius: "50%",
                        width: 12,
                        height: 12,
                        padding: 0,
                      }}
                      onClick={() => setTestimonialIndex(idx)}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
}

export default Service;
