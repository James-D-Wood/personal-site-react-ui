import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import marked from 'marked';
import DOMPurify from 'dompurify';
import { JournalEntryData } from '../types/journalEntries';

interface JournalEntryParams {
  date: string,
  title: string,
}

export default function JournalEntry() {
  const { date, title } = useParams<JournalEntryParams>();
  const [journalEntryData, setJournalEntryData] = useState<JournalEntryData | null>(null);

  const dummyData:JournalEntryData = {
    id: uuidv4(),
    title,
    timestamp: Date.now(),
    description: 'A description',
    mdBody: '## Getting Started\nWhen getting started with markdown consider this.',
    htmlBody: marked('## Getting Started\nWhen getting started with markdown consider this.'), // TODO: sanitize
  };

  useEffect(() => {
    setJournalEntryData(dummyData);
  }, []);

  return (
    <>
      <h1>{ date }</h1>
      { journalEntryData
        && (
          <div dangerouslySetInnerHTML={
            { __html: DOMPurify.sanitize(journalEntryData.htmlBody) }
          }
          />
        )}
    </>
  );
}
