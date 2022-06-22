export const CardComponent = (props) => {
  const { image, title, price } = props;
  return (
    <section>
      <div className="card">
        <img src={image} className="card-img-top" alt="Fissure in Sandstone" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{price}</p>
          <div>
            <a href="#!" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const LearnersHubHome = (props) => {
  const { images, text } = props;
  return (
    <section>
      <div className="card">
        <img src={images} alt="Fissure in Sandstone" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{text}</p>
          <a href="#!" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export const LearnersHubPage = (props) => {
  const { image, title, text } = props;
  return (
    <section>
      <div class="card mb-3 w-75 mx-auto mt-5">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={image}
              alt="Trendy Pants and Shoes"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{text}</p>
              <a href="#!" className="btn btn-primary text-end">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
