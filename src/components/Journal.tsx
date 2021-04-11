import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import JournalEntryData from '../types/JournalEntryData';

export default function Journal() {
  // Needs to render a list of entry previews
  /*
    Entry preview:
      - Date
      - Summary
      - Tags

    So where should I fetch the entries?
    Let's try lifting the state first.
    I'll use a state hook to hold the entries
    and an effect hook to load entries.
  */

  const urlDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const urlTitle = (title: string) => title.split(' ').join('-').toLowerCase();
  // Data or component?
  // Try data first
  const dummyData = [
    {
      id: uuidv4(),
      title: 'Entry 1',
      timestamp: Date.now(),
      description: 'Here are some things I learned today.',
    },
  ];

  const [entries] = useState<JournalEntryData[]>(dummyData);
  const [entryPreviews, setEntryPreviews] = useState<React.ReactNode[]>([]);

  // Does this effect just double the render each time entries is updated?
  useEffect(() => {
    console.log('Updating entry previews.', entries);
    setEntryPreviews(entries.map((entry) => (
      <li key={entry.title}>
        <p>{entry.title}</p>
        <p>{entry.timestamp}</p>
        <Link to={
          {
            pathname: `/journal/entries/${urlDate(entry.timestamp)}/${urlTitle(entry.title)}`,
          }
        }
        >
          Show Entry
        </Link>
      </li>
    )));
  }, [entries]);

  return (
    <div>
      <h1>Welcome to the Dev Journal</h1>
      <ul>{entryPreviews}</ul>
    </div>
  );
}
