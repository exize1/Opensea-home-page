import "./style/page.css";
import "./style/page8.css";

const PageEight = () => {
  return (
    <div className={`eighth-page pt-5`}>
      <div className="eighth-page-container text-center">
        <h1 className="fw-semibold mb-4">Meet Opensea</h1>
        <p>The NFT marketplace with everything for everyone</p>
        <div className="w-background">
          <div className="video-container">
            <iframe
            className="opensea-video"
            width="1120"
            height="630"
            src="https://www.youtube.com/embed/gfGuPd1CELo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
          </div>
        </div>
        <button type="button" className="btn btn-primary btn-lg fw-semibold _marketplace-btn">Explore the marketplace</button>
      </div>
    </div>
  );
};

export default PageEight;
