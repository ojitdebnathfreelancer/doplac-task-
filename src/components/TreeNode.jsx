/* eslint-disable react/prop-types */

const TreeNode = ({ node }) => {
  return (
    <div className="node-tree-container">
      <div className="title-container">
        <span
          className={
            node.name.toLowerCase().includes("sub") ? "sub-title" : "main-title"
          }
        >
          {node.name}
        </span>
      </div>

      {node?.children?.length && (
        <div className="main-plus">
          <div className="plus"></div>
        </div>
      )}

      {node.children && (
        <div className="child-container">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
