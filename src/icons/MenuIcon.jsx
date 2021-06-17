import * as React from 'react';

function SvgMenu(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 13"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <g
        stroke="currentColor"
        strokeWidth={2.5}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
      >
        <path d="M2 1.5h18M2 6.5h18M2 11.5h18" />
      </g>
    </svg>
  );
}

export default SvgMenu;
