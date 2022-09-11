import "./style/page.css";
import "./style/page6.css";
import { ResourcesCard } from "../components/card";

const PageSix = () => {
  return (
    <div className={` first-page`}>
      <div className="container">
        <h2 className="text-center my-5 pt-5 fs-4 fw-semibold">
          Resources for getting started
        </h2>
        <div className="row">
          <div className="col">
            <ResourcesCard 
            src="https://blogmigration.kinsta.cloud/wp-content/uploads/2022/02/image-13-300x200.png" 
            description="How to Easily Setup a MetaMask Wallet"
            addClass=""
            />
          </div>
          <div className="col">
            <ResourcesCard 
            src="https://blogmigration.kinsta.cloud/wp-content/uploads/2022/02/76edde93ea6402d5818fbc03767aeda0-300x200.jpg" 
            description="How to Fund MetaMask with ETH"
            addClass=""
            />
          </div>
          <div className="col">
            <ResourcesCard 
            src="https://blogmigration.kinsta.cloud/wp-content/uploads/2022/01/image-10-300x200.png" 
            description="How to Find an NFT You Love"
            addClass=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSix;
