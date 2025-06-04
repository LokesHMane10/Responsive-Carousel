import "./newcarousel.css";

function NewCarousel() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-touch="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src=" " className="d-block w-100" alt="..." />
            <div className="carousel-text">
              <h2>Welcome to Company Name</h2>
              <p>Designing Dreams Creating Realities</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src=" " className="d-block" alt="..." />
            <div className="carousel-text" data-bs-interval="3000">
              <h2>Modern Designs</h2>
              <p>Upgrade your home with stylish furniture.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src=" " className="d-block" alt="..." />
            <div className="carousel-text">
              <h2>Budget Friendly</h2>
              <p>Get premium furniture at affordable rates.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src=" " className="d-block" alt="..." />
            <div className="carousel-text">
              <h2> Personalized Designs</h2>
              <p>
                Create unique, customized spaces based on your style and needs.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default NewCarousel;
