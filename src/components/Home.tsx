import React, { ReactElement } from 'react';
import JournalPreviewSection from './JournalPreviewSection';

export default function Home(): ReactElement {
  return (
    <div className="container mx-auto">
      <h1>Welcome to jameswood.dev</h1>
      <JournalPreviewSection previewCount={2} />
    </div>
  );
}
