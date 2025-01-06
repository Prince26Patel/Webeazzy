import MainFilterSearchBox from "./MainFilterSearchBox";

const Index = () => {
  return (
    <section className="masthead -type-5">
      <div className="masthead__bg">
        {/* <img alt="image" src="/img/masthead/5/bg.svg" className="js-lazy" /> */}
      </div>
      {/* End bg image */}

      <div className="container">
        <div className="row w-100">
          <div className="col-xl-9 w-50">
            <h1
              className="text-60 lg:text-40 md:text-30"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Eazzy Website Builder & Marketing{" "}
              <span
                className="text-blue-1 relative"
                // style={{ color: "#5693c1" }}
              >
                Experience{" "}
                <span className="-line">
                  <img src="/img/general/line.png" alt="image" />
                </span>
              </span>
            </h1>
            <p className="mt-20" data-aos="fade-up" data-aos-delay="500">
              Experience the various exciting websites & marketing packages and
              make your company grow <b>2X to 5X times</b>. Amazingly improve
              marketing using Artificial Intelligence.
              <br />
              <b>Try out now!</b>
            </p>

            {/* <MainFilterSearchBox /> */}
            {/* End filter content */}
          </div>

          <div
            className="masthead__image w-50"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img
              src="/img/masthead/5/27 - Video chatting.svg"
              alt="image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      {/* End .container */}

      {/* End .masthead__image */}
    </section>
  );
};

export default Index;
