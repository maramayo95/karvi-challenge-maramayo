

const List = () => {
  const svgStyle = {
    fill: "rgba(0, 0, 0, 1)",
    transform: "",
    msFilter: "",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={svgStyle}
    >
      <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"></path>
    </svg>
  );
};

export default List;
