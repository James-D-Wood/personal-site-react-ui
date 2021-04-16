import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { JournalEntryData, JournalEntryDTO } from '../types/journalEntries';
import Loader from './Loader';

interface JournalEntryParams {
  date: string,
  title: string,
}

export default function JournalEntry() {
  const { date, title } = useParams<JournalEntryParams>();
  const [isLoading, setIsLoading] = useState(true);
  const [journalEntryData, setJournalEntryData] = useState<JournalEntryData | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8000/journal/entries/${title}`)
      .then((response) => response.json())
      .then((data: JournalEntryDTO) => {
        setJournalEntryData(data.data);
        setIsLoading(false);
      });
  }, []);

  return isLoading
    ? <Loader />
    : (
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
