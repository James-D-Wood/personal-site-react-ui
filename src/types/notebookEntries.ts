export interface NotebookEntryData {
  id: string,
  title: string,
  uri: string,
  summary: string,
  body: string,
  dateCreated: string,
  dateUpdated?: string,
}

export default NotebookEntryData;
