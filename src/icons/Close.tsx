import React from 'react'
type CloseIcon = {
  color: string;
  width: string;
  height : string;
}

const Close:React.FC<CloseIcon> = ({color, width, height}) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4L12 12M4 12L12 4L4 12Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Close;
