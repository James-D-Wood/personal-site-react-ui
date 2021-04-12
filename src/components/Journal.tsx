import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { JournalEntryData, JournalEntriesDTO } from '../types/journalEntries';
import Loader from './Loader';

export default function Journal() {
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
        setEntries(data.data);
        setIsLoading(false);
      });
  }, []);

  // Does this effect just double the render each time entries is updated?
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

  return isLoading
    ? (
      <Loader />
    )
    : (
      <div>
        <h1>Welcome to the Dev Journal</h1>
        <ul>{entryPreviews}</ul>
      </div>
    );
}
