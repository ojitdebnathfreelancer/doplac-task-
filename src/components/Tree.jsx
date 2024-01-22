/* eslint-disable react/prop-types */
import TreeNode from "./TreeNode";

const Tree = () => {
  const data = {
    name: "Tree Start",
    children: [
      {
        name: "Step-1",
        children: [
          {
            name: "Step-2",
            children: [
              {
                name: "Sub tree",
                children: [{ name: "Step-1" }],
              },
              {
                name: "Sub tree",
                children: [{ name: "Step-1" }],
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="main-node-container">
      <TreeNode node={data} />
    </div>
  );
};

export default Tree;
