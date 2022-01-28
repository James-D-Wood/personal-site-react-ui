import React, { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NotebookEntryData } from '../types/notebookEntries';
import API_URL from '../utils/common';
import Loader from './Loader';

interface NotebookPreviewSectionProps {
  previewCount: number;
}

export default function NotebookPreviewSection(props: NotebookPreviewSectionProps): ReactElement {
  const [isLoading, setIsLoading] = useState(true);
  const [entries, setEntries] = useState<NotebookEntryData[]>([]);
  const [entryPreviews, setEntryPreviews] = useState<React.ReactNode[]>([]);
  const { previewCount } = props;

  useEffect(() => {
    fetch(`${API_URL}/api/v1/articles`)
      .then((response) => response.json())
      .then((data: NotebookEntryData[]) => {
        setEntries(data.slice(0, previewCount));
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setEntryPreviews(entries.map((entry) => (
      <li key={entry.title}>
        <Link to={`/notebook/${entry.uri}`} className="font-sansBold text-white text-2xl text-left hover:text-purple transition-colors duration-500">
          {entry.title}
        </Link>
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
          <div className="my-8">
            <h1 className="font-sansBold text-white text-5xl text-center">Dev Notebook</h1>
            <p className="text-white text-xl text-center">Learning Bit by Byte</p>
          </div>
          <ul className="space-y-8">{entryPreviews}</ul>
        </div>
      )
  );
}
