import "./style/page.css";
import "./style/page4.css";
import { TrenditionalCrad } from "../components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageFour = () => {
  return (
    <div className={` fourth-page`}>
      <div className="container">
        <h2 className="text-center trending-title fs-4 fw-semibold">
          Trending in{" "}
          <a
            className="dropdown-toggle text-decoration-none"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            all categories
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                All Categories
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Solana NFTs
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Art
              </a>
            </li>
          </ul>
        </h2>
        <div
          id="carouselExampleIndicators"
          className="carousel slide carusela"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active height">
              <div className="row">
                <div className="col">
                  <TrenditionalCrad 
                  src="https://lh3.googleusercontent.com/ZwsLpiJ-lnzjLgr67y7W1OAsPAjixZEos5-qeaEHrnjSYOVQz2Z5sLa_CAQ8YoPknP1P80eFN-UwW4-4VPw0IoubSqbgjiKFWihuWA=h400" 
                  bannerSrc="https://lh3.googleusercontent.com/ntBn5aWnCQ1Yi0seKu_xxztYTTm4-uHeViv0WUrWQrg1so4ULSnQ0dBBh9XVLvL5CCabjAaFGAjyiuoup1xsgT2-7XsXHGBY_Bi_7Q=s128"
                  description="sdjkfhsdkjfh"
                  />
                </div>
                <div className="col">
                  <TrenditionalCrad 
                  src="https://lh3.googleusercontent.com/m9eLIniL7CiQwyb7_ZidVIGXpEdM2g8sShj8IkEkIKZHtv2GxHuSVEiEc-juXJxO33-E54j73w5ZLknNa7LcNjOx1InUb1SQR5ucxg=h400" 
                  bannerSrc="https://lh3.googleusercontent.com/kKYNGoWd-qwSwP3vGX8OWFjONJkcaorIorzMfKTixENb2P13qKXlAFH0e3jzs4IAFseTgIM8x-lSTnXFmu8oFTmbZzcImEN4SInrEQ=s128"
                  description="sdjkfhsdkjfh"
                  />
                </div>
                <div className="col">
                  <TrenditionalCrad 
                  src="https://lh3.googleusercontent.com/8EgrBnRdaZZqlU6mJCPAJPmK4vDVn3S8rXWPT1RneYtUaJJMaAEJf5hMhSyR5e2RIkSSvtWGzq1ewylbSD9q16-0eCNA1pmUVd3u=h400" 
                  bannerSrc="https://lh3.googleusercontent.com/xRx6J7j8LKqzRX-Tt9-0NUu-CEidWFHylIpKFXRxlskd_rxf1mzWe5OIACQCF5q8AYQPNhrLGyS7X-oKFYr7EhSfRXSL3by5QYod=s128"
                  description="sdjkfhsdkjfh"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <TrenditionalCrad 
                  src="https://lh3.googleusercontent.com/M2nEf60xoxSn3sRz_YSe4phhBMUdx3_YhIR-OgVMjjFiNOSi3uujRPD9txCh3zWWC3yEHL3Jo2eg9YhjTtPxXGTRpSKhQnQfQvwaAQ=h400" 
                  bannerSrc="https://lh3.googleusercontent.com/ntBn5aWnCQ1Yi0seKu_xxztYTTm4-uHeViv0WUrWQrg1so4ULSnQ0dBBh9XVLvL5CCabjAaFGAjyiuoup1xsgT2-7XsXHGBY_Bi_7Q=s128"
                  description="sdjkfhsdkjfh"
                  />
                </div>
                <div className="col">
                  <TrenditionalCrad 
                  src="https://lh3.googleusercontent.com/6P3HW1RI9Zxaea6Ii4wnlmGAunPzlDY93rovT2JTlTA_7TYwnZqK851VW9EJfW9vZ8KAaVizEnfzeMvAvfDx5O0lwyPpVMeRlT_VKQ=h400" 
                  bannerSrc="https://lh3.googleusercontent.com/kKYNGoWd-qwSwP3vGX8OWFjONJkcaorIorzMfKTixENb2P13qKXlAFH0e3jzs4IAFseTgIM8x-lSTnXFmu8oFTmbZzcImEN4SInrEQ=s128"
                  description="sdjkfhsdkjfh"
                  />
                </div>
                <div className="col">
                  <TrenditionalCrad 
                  src="https://lh3.googleusercontent.com/pPq2nPXQZYaonwpYyawlOLXYr0dnDj5n6a0E2jFIhrT_n5Clv7xhU196iZukngNtstTnc0ELrtYYzSVcrbbPN6VS0epZsVF4-fW_0g8=h400" 
                  bannerSrc="https://lh3.googleusercontent.com/xRx6J7j8LKqzRX-Tt9-0NUu-CEidWFHylIpKFXRxlskd_rxf1mzWe5OIACQCF5q8AYQPNhrLGyS7X-oKFYr7EhSfRXSL3by5QYod=s128"
                  description="sdjkfhsdkjfh"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <TrenditionalCrad 
                  src="https://lh3.googleusercontent.com/M2nEf60xoxSn3sRz_YSe4phhBMUdx3_YhIR-OgVMjjFiNOSi3uujRPD9txCh3zWWC3yEHL3Jo2eg9YhjTtPxXGTRpSKhQnQfQvwaAQ=h400" 
                  bannerSrc="https://lh3.googleusercontent.com/ntBn5aWnCQ1Yi0seKu_xxztYTTm4-uHeViv0WUrWQrg1so4ULSnQ0dBBh9XVLvL5CCabjAaFGAjyiuoup1xsgT2-7XsXHGBY_Bi_7Q=s128"
                  description="sdjkfhsdkjfh"
                  />
                </div>
                <div className="col">
                  <TrenditionalCrad 
                  src="https://lh3.googleusercontent.com/6P3HW1RI9Zxaea6Ii4wnlmGAunPzlDY93rovT2JTlTA_7TYwnZqK851VW9EJfW9vZ8KAaVizEnfzeMvAvfDx5O0lwyPpVMeRlT_VKQ=h400" 
                  bannerSrc="https://lh3.googleusercontent.com/kKYNGoWd-qwSwP3vGX8OWFjONJkcaorIorzMfKTixENb2P13qKXlAFH0e3jzs4IAFseTgIM8x-lSTnXFmu8oFTmbZzcImEN4SInrEQ=s128"
                  description="sdjkfhsdkjfh"
                  />
                </div>
                <div className="col">
                  <TrenditionalCrad 
                  src="https://lh3.googleusercontent.com/pPq2nPXQZYaonwpYyawlOLXYr0dnDj5n6a0E2jFIhrT_n5Clv7xhU196iZukngNtstTnc0ELrtYYzSVcrbbPN6VS0epZsVF4-fW_0g8=h400" 
                  bannerSrc="https://lh3.googleusercontent.com/xRx6J7j8LKqzRX-Tt9-0NUu-CEidWFHylIpKFXRxlskd_rxf1mzWe5OIACQCF5q8AYQPNhrLGyS7X-oKFYr7EhSfRXSL3by5QYod=s128"
                  description="sdjkfhsdkjfh"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev prev-button"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next next-button"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageFour;
