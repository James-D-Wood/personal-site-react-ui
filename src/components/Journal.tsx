import React from 'react';
import JournalPreviewSection from './JournalPreviewSection';

export default function Journal(): JSX.Element {
  return (
    <div className="container mx-auto pt-16 flex flex-col items-center">
      <JournalPreviewSection previewCount={4} />
    </div>
  );
}
