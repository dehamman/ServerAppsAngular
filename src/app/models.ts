export class KeyValue{
  id: number;
  key: string;
  value: string;
}
export class MetaEntry {
  id: number;
  entryTypeId: number;
  name: string;
  description: string;
  dateCreated: Date;
  entryType: string;
  data: KeyValue[];
}
