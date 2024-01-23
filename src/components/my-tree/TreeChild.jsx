/* eslint-disable react/prop-types */
import curve1 from "../../assets/curve1.png";
import curve2 from "../../assets/curve2.png";
import plus from "../../assets/plus.png";

const TreeChild = ({ data }) => {
  return (
    <>
      <h3
        className={
          data.title.toLowerCase().includes("sub") ? "sub-title" : "main-title"
        }
      >
        {data?.title}
      </h3>

      {!data?.child?.length && (
        <div className="main-plus">
          <div className="plus"></div>
        </div>
      )}

      {/* <div>hello</div> */}

      {data?.child && (
        <div className="child-container">
          {data.child.map((c, index) => (
            <div key={index} className="sub-tree">
              {c?.curve && (
                <div className="curve">
                  <img src={curve1} alt="curve1" className="curve1" />
                  <img src={plus} alt="plus button" className="plus-button" />
                  <img src={curve2} alt="curve2" className="curve2" />
                </div>
              )}
              <TreeChild data={c} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TreeChild;
