import React from 'react';
import TerminalIcon from '../../icons/TerminalIcon';
import ListView from '../common/listview/ListView';

export default function ProjectBoardList(): JSX.Element {
  return (
    <div className="container mx-auto pt-16 pb-4 flex flex-col items-center px-8">
      <div className="pt-8 w-full md:w-3/4 max-w-screen-md mx-auto my-6 space-y-8">
        <h1 className="font-sansBold text-white text-5xl text-center">
          Project Boards
        </h1>
        <p className="text-white text-xl text-center">
          Kanban boards for projects in the digital and real world.
        </p>
        <ListView
          data={{
            columns: [
              {
                text: 'Project',
                width: '20%',
              },
              {
                text: 'Description',
                width: '70%',
              },
              {
                text: '',
                width: '7.5%',
              },
            ],
            rows: [
              [
                <p>GS750 Rebuild</p>,
                <p>A cafe racer build from an 80s motorcycle.</p>,
                <TerminalIcon />,
              ],
              [
                <p>Personal Site</p>,
                <p>A tracker for features I am planning to build out on my personal site.</p>,
                <TerminalIcon />,
              ],
              [
                <p>Learning Unity</p>,
                <p>Small Projects Related to Game Dev and Modeling</p>,
                <TerminalIcon />,
              ],
            ],
          }}
          handleRowClick={(row) => alert(row[1])}
        />
      </div>
    </div>
  );
}
