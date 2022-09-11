import "./style/page.css";
import "./style/page7.css";
import { CategoryCard } from "../components/card";

const PageSeven = () => {
  return (
    <div className={`seventh-page`}>
      <div className="contain">
        <h2 className="text-center pb-3 mb-5 fs-4 fw-semibold">
          Browse by category
        </h2>
        <div className="row">
          <div className="col ">
            <CategoryCard 
            src="https://opensea.io/static/images/categories/art.png" 
            description="Art"
            addClass=""
            />
          </div>
          <div className="col px-1">
            <CategoryCard 
            src="https://opensea.io/static/images/categories/collectibles.png" 
            description="Collectibles"
            addClass=""
            />
          </div>
          <div className="col">
            <CategoryCard 
            src="https://opensea.io/static/images/categories/domain-names.png" 
            description="Domain Names"
            addClass=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CategoryCard 
            src="https://opensea.io/static/images/categories/music.png" 
            description="Music"
            addClass=""
            />
          </div>
          <div className="col px-1">
            <CategoryCard 
            src="https://opensea.io/static/images/categories/photography-category.png" 
            description="Photography"
            addClass=""
            />
          </div>
          <div className="col">
            <CategoryCard 
            src="https://opensea.io/static/images/categories/sports.png" 
            description="Sport"
            addClass=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CategoryCard 
            src="https://opensea.io/static/images/categories/trading-cards.png" 
            description="Trading Cards"
            addClass=""
            />
          </div>
          <div className="col px-1">
            <CategoryCard 
            src="https://opensea.io/static/images/categories/utility.png" 
            description="Utility"
            addClass=""
            />
          </div>
          <div className="col">
            <CategoryCard 
            src="https://opensea.io/static/images/categories/virtual-worlds.png" 
            description="Virtual Worlds"
            addClass=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSeven;
