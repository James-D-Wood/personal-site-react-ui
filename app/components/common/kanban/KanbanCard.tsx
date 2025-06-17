// react-beautiful-dnd has been deprecated which means this capability 
// was removed while migrating from CRA to React Router + Vite as React 19 was not supported
// I will need to find a replacement in a future iteration

// import React, { useState } from 'react';
// import { Draggable } from 'react-beautiful-dnd';

// export interface KanbanCardProps {
//   index: number;
//   id: string;
//   front: React.ReactNode;
//   back: React.ReactNode;

//   onDelete?: (draggableID: string) => void;
// }

// export type KanbanCard = (props: KanbanCardProps) => React.ReactNode;

// export function KanbanFlipCard(props: KanbanCardProps): JSX.Element {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [hasHoverOver, setHasHoverOver] = useState(false);
//   const {
//     id, index, front, back, onDelete,
//   } = props;

//   return (
//     <Draggable key={id} draggableId={id} index={index}>
//       {(provided, snapshot) => {
//         const style = {
//           backgroundColor: snapshot.isDragging ? 'blue' : 'grey',
//         };
//         return (
//           // eslint-disable-next-line max-len
//           // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
//           <div
//             ref={provided.innerRef}
//             className="relative bg-slate-50 rounded-md h-36 shadow-lg text-center flex flex-col justify-center items-center p-4"
//             style={style}
//             onClick={() => setIsFlipped(!isFlipped)}
//             onMouseEnter={() => setHasHoverOver(true)}
//             onMouseLeave={() => setHasHoverOver(false)}
//             // eslint-disable-next-line react/jsx-props-no-spreading
//             {...provided.draggableProps}
//             // eslint-disable-next-line react/jsx-props-no-spreading
//             {...provided.dragHandleProps}
//           >
//             {hasHoverOver && onDelete && (
//               // eslint-disable-next-line max-len
//               // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
//               <span
//                 className="absolute top-1 right-3 text-xl font-semibold text-purple-dark"
//                 onClick={(e) => {
//                   onDelete(id);
//                   e.stopPropagation();
//                 }}
//               >
//                 x
//               </span>
//             )}

//             {!isFlipped ? front : back}
//           </div>
//         );
//       }}
//     </Draggable>
//   );
// }
