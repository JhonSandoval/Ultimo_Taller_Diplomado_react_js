import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <div class="hero-container" data-aos="fade-in">
        <h1>Jhon Sandoval</h1>
        <p>
          I'm{" Designer, Developer, Freelancer "}
          <span
            class="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          ></span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
