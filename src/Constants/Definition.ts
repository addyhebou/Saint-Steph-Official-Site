export interface Definition {
  name: string;
  phonetic: string;
  grapheme: string;
  article: string;
  definitions: string[];
  synonyms: string[];
}

export const SUPERPRODUCER_DEFINITION: Definition = {
  name: 'superproducer',
  phonetic: 'su·per pro·duc·er',
  grapheme: '/ˈso͞opər/ /prəˈdo͞osər/',
  article: 'noun',
  definitions: [
    'a director adapt in crafting hit records out of any ideas or concepts',
  ],
  synonyms: ['saint steph'],
};
