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
        <p>{entry.title}</p>
        <p>{entry.timestamp}</p>
        <Link to={`/journal/entries/${urlDate(entry.timestamp)}/${urlTitle(entry.title)}`}>
          Show Entry
        </Link>
      </li>
    )));
  }, [entries]);

  return (
    isLoading
      ? <Loader />
      : (
        <>
          <h2><Link to="/journal">Journal</Link></h2>
          <ul>{ entryPreviews }</ul>
        </>
      )
  );
}
