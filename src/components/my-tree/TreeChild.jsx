/* eslint-disable react/prop-types */
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

      {data?.child && (
        <div className="child-container">
          {data.child.map((c, index) => (
            <div key={index} className="sub-tree">
              <TreeChild data={c} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TreeChild;
