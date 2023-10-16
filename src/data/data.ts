export type ListProps = {
  id: number;
  name: string;
  selected: boolean;
};
type ListPropsOfStage = Array<string>;
export const STAGE_LIST: ListPropsOfStage = [
  'Card Front',
  'Card Back',
  'Card Top',
];
export const OPTIONS_LIST: ListProps[] = [
  {
    id: 1,
    name: 'Rich Text',
    selected: false,
  },
  {
    id: 2,
    name: 'Browse Image',
    selected: false,
  },
  {
    id: 3,
    name: 'Upload Audio',
    selected: false,
  },

  {
    id: 4,
    name: 'Upload Video',
    selected: false,
  },

  {
    id: 5,
    name: 'Record Audio',
    selected: false,
  },
];
