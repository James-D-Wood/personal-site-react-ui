import React, { ReactElement } from 'react';
import JournalPreviewSection from './JournalPreviewSection';

export default function Blog(): ReactElement {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <JournalPreviewSection previewCount={4} />
    </div>
  );
}
