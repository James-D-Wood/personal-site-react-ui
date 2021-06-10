import React, { ReactElement } from 'react';
import JournalPreviewSection from './JournalPreviewSection';

export default function Home(): ReactElement {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <JournalPreviewSection previewCount={2} />
    </div>
  );
}
