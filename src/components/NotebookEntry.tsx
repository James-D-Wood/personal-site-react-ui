import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { NotebookEntryData } from '../types/notebookEntries';
import Loader from './Loader';
import API_URL from '../utils/common';

interface NotebookEntryParams {
  date: string,
  title: string,
}

export default function NotebookEntry(): JSX.Element {
  const { title } = useParams<NotebookEntryParams>();
  const [isLoading, setIsLoading] = useState(true);
  const [notebookEntryData, setNotebookEntryData] = useState<NotebookEntryData | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/v1/articles/${title}`)
      .then((response) => response.json())
      .then((data: NotebookEntryData) => {
        console.log(data);
        setNotebookEntryData(data);
        setIsLoading(false);
      })
      .catch((reason) => {
        console.error(reason);
        setIsLoading(false);
      });
  }, []);

  return isLoading
    ? <Loader />
    : (
      <div className="container mx-auto py-16 px-8 flex flex-col items-center">
        { notebookEntryData
          && (
            <div className="pt-8 w-full md:w-3/4 max-w-screen-md mx-auto">
              <div className="my-8">
                <h1 className="font-sansBold text-white text-5xl text-center pb-4">{ notebookEntryData.title }</h1>
                <p className="text-xl text-purple-lighter text-center">{ notebookEntryData.summary }</p>
              </div>
              <ReactMarkdown
                className="font-sans text-purple-lighter"
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: (node) => {
                    const { children } = node;
                    return <h2 className="font-sansBold text-4xl text-white py-4">{children}</h2>;
                  },
                  h3: (node) => {
                    const { children } = node;
                    return <h3 className="font-sansBold text-2xl text-white py-2">{children}</h3>;
                  },
                  h4: (node) => {
                    const { children } = node;
                    return <h4 className="font-sansBold text-xl text-white py-1.5">{children}</h4>;
                  },
                  p: (node) => {
                    const { children } = node;
                    return <p className="font-sans text-lg text-purple-lighter leading-snug mb-1">{children}</p>;
                  },
                  a: (node) => {
                    const { children, href } = node;
                    return <a href={href} className="font-sans text-lg text-white hover:text-purple transition-colors duration-500 leading-snug mb-1">{children}</a>;
                  },
                  strong: (node) => {
                    const { children } = node;
                    return <strong className="font-sansBold text-lg text-white leading-snug mb-1">{children}</strong>;
                  },
                  ul: (node) => {
                    const { children } = node;
                    return <ul className="max-w-screen-md mx-auto leading-snug mb-1 text-lg" style={{ listStyleType: 'circle', listStylePosition: 'inside' }}>{children}</ul>;
                  },
                  code: (node) => {
                    const { className, children, inline } = node;
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={nord}
                        language={match[1]}
                        PreTag="div"
                        // eslint-disable-next-line react/jsx-props-no-spreading
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className}>
                        {children}
                      </code>
                    );
                  },
                }}
                // eslint-disable-next-line react/no-children-prop
                children={notebookEntryData.body}
              />
            </div>
          )}
      </div>
    );
}
