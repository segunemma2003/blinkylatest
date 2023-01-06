import { atom } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: false,
});

export const modalStatePodcast = atom({
  key: 'modalStatePodcast',
  default: false,
});

export const modalStateAudiograph = atom({
  key: 'modalStateAudiograph',
  default: false,
});
