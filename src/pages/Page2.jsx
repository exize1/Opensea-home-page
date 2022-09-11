import "./style/page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/page2.css";
import NotableDropsCard from "../components/card";

const PageTwo = () => {
  return (
    <div className={`second-page`}>
      <h2 className="text-center mb-5 fs-4 fw-semibold">Notable Drops</h2>
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                  <NotableDropsCard
                    addClass="border scroll-cards-text"
                    src="https://openseauserdata.com/static/promocards/WoWcapacitors.png"
                    cardTitle="WoW - Capacitors"
                    description="Energy-charged devices with mysterious transformational properties"
                  />
                  <NotableDropsCard
                    src="https://openseauserdata.com/static/promocards/coverImage.png"
                    addClass="border scroll-cards-text "
                    cardTitle={`oncyber & friends`}
                    description={`Create worlds with WoW, Outland, & Deadfellaz powered by oncyber.`}
                  />
                  <NotableDropsCard
                    src="https://openseauserdata.com/static/promocards/RarityLeague_OpenSea_NotableDrop_1125x1740.jpg"
                    addClass="border scroll-cards-text"
                    cardTitle="Next level NFL fan gear"
                    description="Officially NFL licensed. One-of-a-kind. Fan-inspired ownership."
                  />
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <NotableDropsCard
                    addClass="border scroll-cards-text"
                    src="https://openseauserdata.com/static/promocards/WoWcapacitors.png"
                    cardTitle="WoW - Capacitors"
                    description="Energy-charged devices with mysterious transformational properties"
                  />
                  <NotableDropsCard
                    src="https://openseauserdata.com/static/promocards/coverImage.png"
                    addClass="border scroll-cards-text"
                    cardTitle={`oncyber & friends`}
                    description={`Create worlds with WoW, Outland, & Deadfellaz powered by oncyber.`}
                  />
                  <NotableDropsCard
                    src="https://openseauserdata.com/static/promocards/RarityLeague_OpenSea_NotableDrop_1125x1740.jpg"
                    addClass="border scroll-cards-text"
                    cardTitle="Next level NFL fan gear"
                    description="Officially NFL licensed. One-of-a-kind. Fan-inspired ownership."
                  />
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <NotableDropsCard
                    addClass="border scroll-cards-text"
                    src="https://openseauserdata.com/static/promocards/WoWcapacitors.png"
                    cardTitle="WoW - Capacitors"
                    description="Energy-charged devices with mysterious transformational properties"
                  />
                  <NotableDropsCard
                    src="https://openseauserdata.com/static/promocards/coverImage.png"
                    addClass="border scroll-cards-text"
                    cardTitle={`oncyber & friends`}
                    description={`Create worlds with WoW, Outland, & Deadfellaz powered by oncyber.`}
                  />
                  <NotableDropsCard
                    src="https://openseauserdata.com/static/promocards/RarityLeague_OpenSea_NotableDrop_1125x1740.jpg"
                    addClass="border scroll-cards-text"
                    cardTitle="Next level NFL fan gear"
                    description="Officially NFL licensed. One-of-a-kind. Fan-inspired ownership."
                  />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev prev-button"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon carousel-btn" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next next-button"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon carousel-btn" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
