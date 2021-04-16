export interface JournalEntryData {
  id: string,
  title: string,
  timestamp: number,
  description: string,
  mdBody: string,
  htmlBody: string,
}

export interface JournalEntryDTO {
  data: JournalEntryData,
}

export interface JournalEntriesDTO {
  data: JournalEntryData[]
}

export default JournalEntryData;
