import React, { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NotebookEntryData } from '../types/notebookEntries';
import Loader from './Loader';

interface NotebookPreviewSectionProps {
  previewCount: number;
}

export default function NotebookPreviewSection(props: NotebookPreviewSectionProps): ReactElement {
  const urlDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const urlTitle = (title: string) => title.split(' ').join('-').toLowerCase();

  const [isLoading, setIsLoading] = useState(true);
  const [entries, setEntries] = useState<NotebookEntryData[]>([]);
  const [entryPreviews, setEntryPreviews] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    fetch('http://192.168.0.17:8080/api/v1/articles')
      .then((response) => response.json())
      .then((data: NotebookEntryData[]) => {
        setEntries(data.slice(0, props.previewCount));
        setIsLoading(false);
      })
      .catch((reason) => {
        console.error(reason);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setEntryPreviews(entries.map((entry) => (
      <li key={entry.title}>
        <Link to={`/notebook/${urlTitle(entry.uri)}`} className="font-sansBold text-white text-2xl text-left hover:text-purple transition-colors duration-500">
          {entry.title}
        </Link>
        {/* <p className="font-mono text-purple text-smol">{urlDate(entry.timestamp)}</p> */}
        <p className="font-sans text-purple-lighter text-lg">
          {entry.summary}
        </p>
      </li>
    )));
  }, [entries]);

  return (
    isLoading
      ? <Loader />
      : (
        <div className="mx-8 sm:my-6 sm:mx-auto sm:max-w-screen-sm md:max-w-screen-md">
          {/* <h2><Link to="/notebook">Notebook</Link></h2> */}
          <div className="my-8">
            <h1 className="font-sansBold text-white text-5xl text-center">Dev Notebook</h1>
            <p className="text-white text-xl text-center">Learning Bit by Byte</p>
          </div>
          <ul className="space-y-8">{entryPreviews}</ul>
        </div>
      )
  );
}
