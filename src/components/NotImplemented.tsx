import React, { ReactElement } from 'react';
import TerminalIcon from '../icons/TerminalIcon';

export default function NotImplemented(): ReactElement {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <TerminalIcon className="text-yellow w-36 h-36" />
      <p className="text-3xl font-sansBold text-white w-3/5 text-center">This Page is in Progress</p>
    </div>
  );
}
