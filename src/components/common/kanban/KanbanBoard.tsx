import React, { useCallback, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { KanbanColumn } from './KanbanColumn';
import { KanbanFlipCard } from './KanbanCard';
import { KanbanCardData, KanbanColumnData } from './types';

interface KanbanBoardProps {
  columns: KanbanColumnData[];
  onSave: (data: KanbanColumnData[]) => void;
}

export default function KanbanBoard(props: KanbanBoardProps): JSX.Element {
  const { onSave } = props;
  // eslint-disable-next-line react/destructuring-assignment
  const [columns, setColumns] = useState(props.columns);

  const onCardDelete = (draggableID: string) => {
    const cols = columns.slice();
    cols.forEach((col: KanbanColumnData) => {
      col.cards.forEach((card: KanbanCardData, cardIndex: number) => {
        if (card.body === draggableID) {
          // remove card
          col.cards.splice(cardIndex, 1);
        }
      });
    });
    setColumns(cols);
    onSave(cols);
  };

  const onDragEnd = useCallback(
    (result) => {
      // the only one that is required
      const cols = columns.slice();
      let card: KanbanCardData | null = null;
      cols.forEach((col) => {
        if (col.title === result.source.droppableId) {
          // remove card
          card = col.cards[result.source.index];
          col.cards.splice(result.source.index, 1);
        }
      });
      if (card) {
        cols.forEach((col) => {
          if (col.title === result.destination.droppableId) {
            // add card
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            col.cards.splice(result.destination.index, 0, card!);
          }
        });
        setColumns(cols);
        onSave(cols);
      }
    },
    [props, columns],
  );

  return (
    <DragDropContext
      // onBeforeCapture={this.onBeforeCapture}
      // onBeforeDragStart={this.onBeforeDragStart}
      // onDragStart={this.onDragStart}
      // onDragUpdate={this.onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <div className="w-full h-screen mt-8">
        <div className="flex flex-row overflow-x-auto h-full w-full">
          {columns.map((col: KanbanColumnData, i: number) => (
            <KanbanColumn index={i} title={col.title}>
              {col.cards.map((card: KanbanCardData, j: number) => (
                <KanbanFlipCard
                  id={card.body}
                  index={j}
                  front={
                    (
                      <p className="font-sansBold text-xl text-purple-dark">
                        {card.body}
                      </p>
                    )
                  }
                  back={
                    <p className="font-sansBold text-md text-purple-dark">{card.details}</p>
                  }
                  onDelete={onCardDelete}
                />
              ))}
            </KanbanColumn>
          ))}
        </div>
      </div>
      ;
    </DragDropContext>
  );
}
