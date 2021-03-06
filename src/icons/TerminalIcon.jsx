import * as React from 'react';

function SvgTerminal(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      className="terminal_svg__bi terminal_svg__bi-terminal"
      viewBox="0 0 16 16"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <path d="M6 9a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3A.5.5 0 016 9zM3.854 4.146a.5.5 0 10-.708.708L4.793 6.5 3.146 8.146a.5.5 0 10.708.708l2-2a.5.5 0 000-.708l-2-2z" />
      <path d="M2 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2H2zm12 1a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h12z" />
    </svg>
  );
}

export default SvgTerminal;
