import React from 'react';
import { useParams } from 'react-router-dom';

interface JournalEntryParams {
  date: string,
}

export default function JournalEntry() {
  const { date } = useParams<JournalEntryParams>();

  return (
    <h1>{ date }</h1>
  );
}
