// react-beautiful-dnd has been deprecated which means this capability 
// was removed while migrating from CRA to React Router + Vite as React 19 was not supported
// I will need to find a replacement in a future iteration

// import React from 'react';
// import { Droppable } from 'react-beautiful-dnd';

// export interface KanbanColumnProps {
//   index: number;
//   title: string;
//   children: JSX.Element[];
// }

// export function KanbanColumn(props: KanbanColumnProps): JSX.Element {
//   const { title, children } = props;
//   return (
//     <Droppable key={title} droppableId={title}>
//       {(provided) => (
//         <div
//           ref={provided.innerRef}
//           className="flex-col mx-2 space-y-2"
//           style={{
//             minWidth: '22.5%',
//           }}
//         >
//           <h2 className="pl-1 font-sansBold text-xl text-slate-100">
//             {title}
//             {' ('}
//             {children.length}
//             )
//           </h2>
//           <div className="h-4/5 bg-slate-200 p-4 rounded-lg border-solid border-white border-2 overflow-y-auto space-y-4">
//             {children}
//           </div>
//         </div>
//       )}
//     </Droppable>
//   );
// }
