import { propTypes } from "react-bootstrap/esm/Image";

export const ListItem = (props) => {
  let listNum = props.startNum;
  return (
    <div className="col">
      <ol className="list-group">
        {props.title.map((e) => {
          listNum++;
          return (
            <li className="list-group-item 
            d-flex 
            justify-content-between 
            align-items-start 
            border-bottom
            py-3">
              <div className="listNum fw-semibold mt-3 pe-2">{`${listNum}`}</div>
              <div className="collection-profile">
                <img
                  className="collection-background"
                  src="https://openseauserdata.com/files/7b0c87d3326e91e267fbb190d3fd1d7f.gif"
                  alt=""
                />
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">{e}</div>
                Floor price: {`${props.price[1]}`}
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
          );
        })}
        {/* <li className="list-group-item d-flex justify-content-between align-items-start border-bottom">
             <div>
                {`${props.listNum}`}
            </div>
            <div className="collection-profile">
                <img className="collection-background" src="https://openseauserdata.com/files/7b0c87d3326e91e267fbb190d3fd1d7f.gif" alt="" />
            </div>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{`${props.title}`}</div>
                {`${props.price}`}
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start border-bottom">
             <div>
                {`${props.listNum}`}
            </div>
            <div className="collection-profile">
                <img className="collection-background" src="https://openseauserdata.com/files/7b0c87d3326e91e267fbb190d3fd1d7f.gif" alt="" />
            </div>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{`${props.title}`}</div>
                {`${props.price}`}
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start border-bottom">
             <div>
                {`${props.listNum}`}
            </div>
            <div className="collection-profile">
                <img className="collection-background" src="https://openseauserdata.com/files/7b0c87d3326e91e267fbb190d3fd1d7f.gif" alt="" />
            </div>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{`${props.title}`}</div>
                {`${props.price}`}
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start border-bottom">
             <div>
                {`${props.listNum}`}
            </div>
            <div className="collection-profile">
                <img className="collection-background" src="https://openseauserdata.com/files/7b0c87d3326e91e267fbb190d3fd1d7f.gif" alt="" />
            </div>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{`${props.title}`}</div>
                {`${props.price}`}
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
            </li> */}
      </ol>
    </div>
  );
};

export default ListItem;
