export type ImageRef = { src: string; alt: string; credit: string; url?: string };
export type ContentKind = 'fact' | 'interpretation' | 'debate' | 'framework';

export type Source = {
  id: string;
  title: string;
  author: string;
  year: string;
  url?: string;
  supports: string;
  type: 'encyclopedia' | 'book' | 'primary' | 'placeholder';
};

export type Concept = {
  id: string;
  title: string;
  definition: string;
  explanation: string;
  points: string[];
  relatedEvents: string[];
  sources: string[];
};

export type Section = {
  id: string;
  title: string;
  short: string;
  content: string[];
  kind?: ContentKind;
  image?: ImageRef;
  sources: string[];
};

export type TimelineItem = {
  id: string;
  date: string;
  calendarNote?: string;
  phase: 'prelude' | '1917' | 'aftermath';
  title: string;
  summary: string;
  detail: string;
  image?: ImageRef;
  figures: string[];
  sources: string[];
  eventId?: string;
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string[];
  image?: ImageRef;
  relatedFigures: string[];
  relatedEvents: string[];
  sources: string[];
};

export type Figure = {
  id: string;
  name: string;
  fullName: string;
  lifespan: string;
  role: string;
  biography: string;
  role1917: string;
  portrait?: ImageRef;
  relatedEvents: string[];
  sources: string[];
};

export type MediaType = 'photo' | 'document' | 'poster' | 'map';
export type Media = {
  id: string;
  title: string;
  type: MediaType;
  date: string;
  description: string;
  historicalContext: string;
  image?: ImageRef;
  source: string;
};
