import './style/page.css'
import './style/page5.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageFive = () => {
  
    return (
      <div className="first-page">
        <div className='container text-center'>
          <h2 className='text-center mb-4 fs-4 fw-semibold mb-5'>Create and sell your NFTs</h2>
          <div className='row'>
            <div className='col col-flex-align-center mt-3'>
              <img className='size' src="https://opensea.io/static/images/icons/wallet.svg" alt="" />
              <p className='mt-3 fw-semibold'>Set your wallet</p>
              <p>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.</p>
            </div>
            <div className='col col-flex-align-center mt-3'>
              <img className='size' src="https://opensea.io/static/images/icons/collection.svg" alt="" />
              <p className='mt-3 fw-semibold'>Create your collection</p>
              <p>Click My Collections and set up your collection. Add social links, a description, profile {'&'} banner images, and set a secondary sales fee.</p>
            </div>
            <div className='col col-flex-align-center mt-3'>
              <img className='size' src="https://opensea.io/static/images/icons/nft.svg" alt="" />
              <p className='mt-3 fw-semibold'>Add your NFTs</p>
              <p>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</p>
            </div>
            <div className='col col-flex-align-center mt-3'>
              <img className='size' src="https://opensea.io/static/images/icons/sale.svg" alt="" />
              <p className='mt-3 fw-semibold'>List them for sale</p>
              <p>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PageFive