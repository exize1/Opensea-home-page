import "./style/page.css";
import "./style/page1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageOne = () => {
  return (
    <div className={`page first-page`}>
      <div className="background"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <div className="row">
              <h1 className="title">
                Discover, collect, and sell extraordinary NFTs
              </h1>
            </div>
            <div className="row">
              <p className="description">
                OpenSea is the world's first and largest NFT marketplace
              </p>
            </div>
            <div className="row">
              <div className="col">
                <button
                  type="button"
                  className="btn explore-btn btn-primary btn-lg"
                >
                  Explore
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-lg white-btn"
                >
                  Create
                </button>
              </div>
            </div>
            <div className="row about">
              <FontAwesomeIcon icon="fa-circle-play" className="about-icon" />
              <p href="" className="about-link">
                Learn more about OpenSea
              </p>
            </div>
          </div>
          <div className="col _card">
            <div className="card-body card discover-card">
              <img
                src="https://storage.googleapis.com/opensea-prod.appspot.com/files/CloneX_Feature_550x367_opensea_homepage_UNFORGED_20220831.jpg"
                className="card-img-top card-image"
                alt="..."
              />
              <footer className="card-text-container">
                <div className="row">
                  <div className="col-1 profil-container">
                    <img
                      className="card-profil-pic"
                      src="https://lh3.googleusercontent.com/GI7544nzneZOLVmngy8gSJYhrLSnPdpfryTw20APrXhVXt3JbqnrHca42YJWlfq9DuDGcQF0SFzj4SyhnSpg19Uj0ABM1pLfJ5_4nA=s76"
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className="card-text card-title">RTFKT Clone X Forging SZN 1</p>
                    <p className="card-text card-link">by <strong>RTFKT</strong></p>
                  </div>
                  <div className="col-1">
                    <FontAwesomeIcon
                      icon="fa-solid fa-circle-info"
                      className="card-icon"
                    />
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
