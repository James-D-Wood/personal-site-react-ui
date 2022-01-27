export interface KanbanCardData {
    body: string;
    details: string;
}

export interface KanbanColumnData {
    title: string,
    cards: KanbanCardData[],
}

export interface KanbanBoardData {
    name: string,
    columns: KanbanColumnData[],
}
