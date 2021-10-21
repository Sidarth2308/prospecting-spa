import {createContext} from 'react';

export const StateContext = createContext<{
  answers: (string | string[])[][];
  setAnswers: React.Dispatch<React.SetStateAction<(string | string[])[][]>>;
  counter: number;
  section: number;
} | null>(null);

type Item = {
  id: string;
  value: string;
  active: boolean;
  source: string;
};

export const ChangeDataContext = createContext<{
  DataChange: (item: Item, index: number) => void;
  TextChange: (item: Item, value: string) => void;
} | null>(null);
