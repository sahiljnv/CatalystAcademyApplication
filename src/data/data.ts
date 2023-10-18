export type ListProp = {
  id: number;
  name: string;
  selected: boolean;
};
export type OptionProp = ListProp & {
  iconName: string;
};
export const STAGE_LIST: ListProp[] = [
  {id: 1, name: 'Card Front', selected: true},
  {id: 2, name: 'Card Back', selected: false},
];
export const OPTIONS_LIST: OptionProp[] = [
  {
    id: 1,
    name: 'Rich Text',
    selected: false,
    iconName: 'format-text',
  },
  {
    id: 2,
    name: 'Browse Image',
    selected: false,
    iconName: 'image',
  },
  {
    id: 3,
    name: 'Upload Audio',
    selected: false,
    iconName: 'microphone-outline',
  },

  {
    id: 4,
    name: 'Upload Video',
    selected: false,
    iconName: 'play-circle-outline',
  },

  {
    id: 5,
    name: 'Record Audio',
    selected: false,
    iconName: 'microphone-outline',
  },
];
