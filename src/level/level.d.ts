export type Level = {
  id: number;
  name: string;
};

export type LevelSubject = {
  level: Level;
  subject: Subject;
};
