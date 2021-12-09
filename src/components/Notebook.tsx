import React from 'react';
import NotebookPreviewSection from './NotebookPreviewSection';

export default function Notebook(): JSX.Element {
  return (
    <div className="container mx-auto pt-16 flex flex-col items-center">
      <NotebookPreviewSection previewCount={4} />
    </div>
  );
}
