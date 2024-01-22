import TreeChild from "./TreeChild";

const TreeBoard = () => {
  const data = [
    {
      title: "Tree Start",
    },
    {
      title: "Step 1",
    },
    {
      title: "Step 2",
      child: [
        {
          title: "Sub Tree",
          curve: true,
          child: [
            {
              title: "Step 1",
            },
          ],
        },
        {
          title: "Sub Tree",
          curve: true,
          child: [
            {
              title: "Step 1",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="container">
      <div className="tree-board">
        {data.map((d, i) => (
          <TreeChild key={i} data={d} />
        ))}
      </div>
    </div>
  );
};

export default TreeBoard;
