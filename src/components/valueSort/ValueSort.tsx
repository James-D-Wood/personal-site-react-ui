import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_URL from '../../utils/common';
import KanbanBoard from '../common/kanban/KanbanBoard';
import { KanbanBoardData, KanbanColumnData } from '../common/kanban/types';

interface ValueSortParams {
  boardName: string,
}

export default function ValueSort(): JSX.Element {
  const { boardName } = useParams<ValueSortParams>();
  const [valueSortColumns, setValueSortColumns] = useState<KanbanColumnData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/v1/value-sort/boards/${boardName}`)
      .then((response) => response.json())
      .then((board: KanbanBoardData) => {
        const cols = board.columns.sort((col1, col2) => col1.order - col2.order);
        setValueSortColumns(cols);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [boardName]);

  const onSave = (data: KanbanColumnData[]) => {
    const newBoard: KanbanBoardData = {
      name: boardName,
      columns: data,
    };
    fetch(
      `${API_URL}/api/v1/value-sort/boards/${boardName}`,
      {
        method: 'PUT',
        body: JSON.stringify(newBoard),
      },
    )
      .then((response) => response.json())
      .then((board: KanbanBoardData) => {
        const cols = board.columns.sort((col1, col2) => col1.order - col2.order);
        setValueSortColumns(cols);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container mx-auto pt-24 flex flex-col items-center">
      <div className="max-w-screen-lg">
        <h1 className="text-left pl-3 font-sansBold text-3xl text-white mb-2">
          Personal Values Card Sort
        </h1>
        <p className="text-left pl-3 text-purple-lighter mb-2">
          The purpose of this activity is clarification of personal values that
          are most meaningful to you. Click a card to flip it and see a
          description of the value. Drag cards to sort them by the level of
          importance that value has to you. Once all the cards are sorted,
          narrow your &quot;Most Important&quot; columns to 5-10 values and then
          sort them within the column in order of importance.
        </p>
        <p className="text-left pl-3 text-purple-lighter">
          This activity was created by William R. Miller, PhD, Janet C’de Baca,
          PhD, Daniel B. Matthews, PhD, & Paula L. Wilbourne, PhD from the
          University of New Mexico Department of Psychology. Please see the
          <a
            className="font-sansBold text-white"
            href="https://www.guilford.com/add/miller11_old/pers_val.pdf?t"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            original resource
          </a>
          {' '}
          for full instructions and guiding questions.
        </p>
      </div>
      { !isLoading && <KanbanBoard onSave={onSave} columns={valueSortColumns} /> }
    </div>
  );
}
