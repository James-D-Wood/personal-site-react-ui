import * as React from 'react';

function SvgFileEarmarkPerson(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      className="file-earmark-person_svg__bi file-earmark-person_svg__bi-file-earmark-person"
      viewBox="0 0 16 16"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <path d="M11 8a3 3 0 11-6 0 3 3 0 016 0z" />
      <path d="M14 14V4.5L9.5 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2zM9.5 3A1.5 1.5 0 0011 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 011-1h5.5v2z" />
    </svg>
  );
}

export default SvgFileEarmarkPerson;
