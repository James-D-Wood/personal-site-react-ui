import React from 'react';

export interface ListViewColumn {
    text: string;
    width: string;
}

export interface ListViewData {
  columns: ListViewColumn[];
  rows: JSX.Element[][];
}

export interface ListViewProps {
  data: ListViewData;
  handleRowClick: (row: JSX.Element[]) => void;
}

export default function ListView(props: ListViewProps): JSX.Element {
  const { data, handleRowClick } = props;
  const headers = data.columns
    ? data.columns.map((column: ListViewColumn) => (
      <p
        style={{
          width: column.width,
        }}
        className="flex flex-row pl-2 font-bold text-xl text-purple-darker"
      >
        {column.text}
      </p>
    ))
    : null;
  const listItems = data.rows.map((row: JSX.Element[]) => (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={() => handleRowClick(row)}
      className="flex flex-row justify-around items-center py-2 hover:bg-slate-200"
    >
      {row.map((el: JSX.Element, idx: number) => (
        <div
          style={{
            width: data.columns[idx].width,
          }}
          className="flex flex-row pl-2"
        >
          {el}
        </div>
      ))}
    </div>
  ));

  return (
    <div className="bg-slate-100 rounded-lg border-solid border-white border-2">
      <div className="flex flex-row justify-around bg-slate-50 border-b-2 border-slate-200 rounded-lg py-2">
        {headers}
      </div>
      <div className="">{listItems}</div>
    </div>
  );
}
