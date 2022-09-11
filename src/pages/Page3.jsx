import "./style/page.css";
import "./style/page3.css";
import { ListItem } from "../components/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const PageThree = () => {
  const [collectionsDetails, setDetails] = useState([]);


  return (
    <div className={`first-page`}>
      <div className="container">
        <h2 className="text-center mb-5 fs-4 fw-semibold">
          Top collections over{" "}
          <a
            className="dropdown-toggle text-decoration-none "
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            last 24 hours
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                last 24 hours
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                last 7 days
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                last 30 days
              </a>
            </li>
          </ul>
        </h2>
        <div className="row">
          <ListItem 
          title={["RTFKT clone x Forgin", "Acid Monkeys", "Otherdeed", "DigiDaigaku Genesis", "Bored Ape Yacht Club"]}
          price={[0.03, 0.04, 1.82, 10.5, 77.66]} 
          startNum={0}
          />
          <ListItem 
          title={["RTFKT clone x Forgin", "Acid Monkeys", "Otherdeed", "DigiDaigaku Genesis", "Bored Ape Yacht Club"]}
          price={[53.78, 0.01, 6.6, 13.59, 15.88]} 
          startNum={5}
          />
          <ListItem 
          title={["RTFKT clone x Forgin", "Acid Monkeys", "Otherdeed", "DigiDaigaku Genesis", "Bored Ape Yacht Club"]}
          price={[0.16, 748, 64, 14.69, 3.44]} 
          startNum={10}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-primary mt-5 ranking-btn">
          Go to Rankings
        </button>
      </div>
    </div>
  );
};

export default PageThree;
