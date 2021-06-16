import React, { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { JournalEntryData, JournalEntriesDTO } from '../types/journalEntries';
import Loader from './Loader';

interface JournalPreviewSectionProps {
  previewCount: number;
}

export default function JournalPreviewSection(props: JournalPreviewSectionProps): ReactElement {
  const urlDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const urlTitle = (title: string) => title.split(' ').join('-').toLowerCase();

  const [isLoading, setIsLoading] = useState(true);
  const [entries, setEntries] = useState<JournalEntryData[]>([]);
  const [entryPreviews, setEntryPreviews] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/journal/entries')
      .then((response) => response.json())
      .then((data: JournalEntriesDTO) => {
        setEntries(data.data.slice(0, props.previewCount));
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setEntryPreviews(entries.map((entry) => (
      <li key={entry.title}>
        <Link to={`/journal/entries/${urlDate(entry.timestamp)}/${urlTitle(entry.title)}`} className="font-sansBold text-white text-lg text-left">
          {entry.title.split('-').join(' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())}
        </Link>
        <p className="font-mono text-purple text-smol">{urlDate(entry.timestamp)}</p>
        <p className="font-sans text-purple-lighter text-base">
          {entry.description}
        </p>
      </li>
    )));
  }, [entries]);

  return (
    isLoading
      ? <Loader />
      : (
        <div className="my-6 mx-8">
          {/* <h2><Link to="/journal">Journal</Link></h2> */}
          <ul className="space-y-8">{entryPreviews}</ul>
        </div>
      )
  );
}
