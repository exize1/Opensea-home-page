export const NotableDropsCard = (props) => {
  return (
    <div className="col">
      <div className={`card text-bg-dark ${props.addClass}`}>
        <img
          src={props.src}
          className="card-img"
          alt={`${props.cardTitle} banner`}
        />
        <div className="card-img-overlay overlay">
          <div className="live">
            <p className="live-text">Live</p>
          </div>
          <div className="mask">
            <h5 className="card-title fs-5 mb-3 ">{`${props.cardTitle}`}</h5>
            <p className="card-text">{`${props.description}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TrenditionalCrad = (props) => {
  return (
    <div className="card trending-card">
      <div className="card-contain">
        <img src={props.src} className="card-img-top image" alt="..." />
      </div>
      <div className="card-body bottom-card-container">
        <div className="banner-container">
          <div className="banner-img">
            <img src={props.bannerSrc} className="banner" alt="" />
          </div>
        </div>
        <div className={` ms-4 mt-4 fw-semibold ${props.addClass} `}>
          <p className="card-text">{`${props.description}`}</p>
        </div>
      </div>
    </div>
  );
};

export const ResourcesCard = (props) => {
  return (
    <div className="card resources-card">
      <img src={props.src} className="card-img-top" alt="..." />
      <div className={`me-4 mb-4 card-body fw-semibold ${props.addClass} `}>
        <p className="card-text">{`${props.description}`}</p>
      </div>
    </div>
  );
};

export const CategoryCard = (props) => {
  return (
    <div className="card category-card">
      <img src={props.src} className="card-img-top img-border-radius" alt="..." />
      <div className={`card-body fw-semibold fs-5 d-flex justify-content-center ${props.addClass} `}>
        <p className="card-text">{`${props.description}`}</p>
      </div>
    </div>
  );
};

export default NotableDropsCard;
