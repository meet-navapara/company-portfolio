import React, { useState, useEffect, useRef } from "react";

const Feature = () => {
  const [counts, setCounts] = useState({
    years: 0,
    experts: 0,
    clients: 0,
    projects: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCounting();
        }
      },
      { threshold: 0.5 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [isVisible]);

  const startCounting = () => {
    const targetValues = {
      years: 25,
      experts: 225,
      clients: 1050,
      projects: 2500,
    };

    const duration = 1000; // 1 second
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      const progress = currentStep / steps;

      setCounts({
        years: Math.floor(targetValues.years * progress),
        experts: Math.floor(targetValues.experts * progress),
        clients: Math.floor(targetValues.clients * progress),
        projects: Math.floor(targetValues.projects * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetValues);
      }
    }, stepDuration);
  };

  return (
    <div className="container-fluid pt-5 pb-2" ref={componentRef}>
      <div className="container-fluid pt-5 pb-3" style={{ maxWidth: "1700px" }}>
        <div className="row">
          <div className="col-lg-6 mb-5">
            <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
              Why Choose Us
            </small>
            <h1 className="mt-2 mb-3">25 Years of Digital Excellence</h1>
            <h4 className="font-weight-normal text-muted mb-4">
              We specialize in creating cutting-edge mobile applications,
              responsive web solutions, and intuitive user experiences that
              drive business growth and user engagement.
            </h4>
            <div className="list-inline mb-4">
              <p className="font-weight-semi-bold mb-2">
                <i className="fa fa-angle-right text-primary mr-2"></i>Mobile
                App Development (iOS & Android)
              </p>
              <p className="font-weight-semi-bold mb-2">
                <i className="fa fa-angle-right text-primary mr-2"></i>Web
                Development & E-commerce Solutions
              </p>
              <p className="font-weight-semi-bold mb-2">
                <i className="fa fa-angle-right text-primary mr-2"></i>UI/UX
                Design & User Experience Optimization
              </p>
            </div>
            <span className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">
              Learn More
            </span>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-6 pb-1">
                <div className="d-flex flex-column align-items-center border px-4 mb-4">
                  <h2 className="display-3 text-primary mb-3">
                    {counts.years}
                  </h2>
                  <h5 className="font-weight-bold mb-4">Years Experience</h5>
                </div>
              </div>
              <div className="col-sm-6 pb-1">
                <div className="d-flex flex-column align-items-center border px-4 mb-4">
                  <h2 className="display-3 text-primary mb-3">
                    {counts.experts}
                  </h2>
                  <h5 className="font-weight-bold mb-4">Tech Experts</h5>
                </div>
              </div>
              <div className="col-sm-6 pb-1">
                <div className="d-flex flex-column align-items-center border px-4 mb-4">
                  <h2 className="display-3 text-primary mb-3">
                    {counts.clients}
                  </h2>
                  <h5 className="font-weight-bold mb-4">Happy Clients</h5>
                </div>
              </div>
              <div className="col-sm-6 pb-1">
                <div className="d-flex flex-column align-items-center border px-4 mb-4">
                  <h2 className="display-3 text-primary mb-3">
                    {counts.projects}
                  </h2>
                  <h5 className="font-weight-bold mb-4">Digital Projects</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
