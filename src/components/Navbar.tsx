import React, { ReactNode } from 'react';

interface NavbarProps {
    leftChildren?: ReactNode,
    rightChildren?: ReactNode,
}

export default function Navbar(props: NavbarProps) {
  const { leftChildren, rightChildren } = props;

  return (
    <div className="py-4 md:px-40 flex justify-between bg-green-500">
      {leftChildren}
      {rightChildren}
    </div>
  );
}

Navbar.defaultProps = {
  leftChildren: <div />,
  rightChildren: <div />,
};
