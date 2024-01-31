export type Video = {
  name: string;
  description: string;
  embedID: string;
  shortDescription: string;
  category: string;
};

const Categories = {
  DOCUMENTARY: 'Documentary',
  TRAILER: 'Epic Trailers',
};

const POKEMON_VIDEO: Video = {
  embedID: '18SUXm2Uxvs',
  name: 'My absolute favorite Pokemon tunes, a nostalgia playlist for me, kind of. (love for 1k)',
  description:
    "This playlist is meant to be some kind of a special playlist as a 1k sub special. It features my absolute favorite Pokemon Ost's, which are a little bit overrepresented on this channel, so I also have some really special ones in this playlist.",
  shortDescription: 'Short pokemon',
  category: 'Documentary',
};

const DONALD_VIDEO: Video = {
  embedID: 'jPMJMxA2Qhs',
  name: 'Only Black Kid in School - Donald Glover: Comedy Central Presents - Full Special',
  description:
    'Donald Glover warns against taking advice from Tracy Morgan and details the anatomy of a Black nerd.',
  shortDescription: 'Short Donald',
  category: Categories.DOCUMENTARY,
};

const DUNE_RESCORE: Video = {
  embedID: 'a3lhXj1tqA',
  name: 'Epic Action Trailer – Dune Rescore',
  description:
    'Showcase of my scoring abilities of the epic action orchestral genre over 2021 Dune Trailer – all background music and fighting effects are original.',
  shortDescription: 'Epic Action Trailer',
  category: Categories.TRAILER,
};

export const PORTFOLIO_VIDEOS: Video[] = [
  DONALD_VIDEO,
  POKEMON_VIDEO,
  DUNE_RESCORE,
];
