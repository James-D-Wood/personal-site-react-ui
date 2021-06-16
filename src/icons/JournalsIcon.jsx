import * as React from 'react';

function SvgJournals(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      className="journals_svg__bi journals_svg__bi-journals"
      viewBox="0 0 16 16"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <path d="M5 0h8a2 2 0 012 2v10a2 2 0 01-2 2 2 2 0 01-2 2H3a2 2 0 01-2-2h1a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H3a1 1 0 00-1 1H1a2 2 0 012-2h8a2 2 0 012 2v9a1 1 0 001-1V2a1 1 0 00-1-1H5a1 1 0 00-1 1H3a2 2 0 012-2z" />
      <path d="M1 6v-.5a.5.5 0 011 0V6h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0V9h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 2.5v.5H.5a.5.5 0 000 1h2a.5.5 0 000-1H2v-.5a.5.5 0 00-1 0z" />
    </svg>
  );
}

export default SvgJournals;
