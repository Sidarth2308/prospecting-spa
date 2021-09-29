/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {createContext} from 'react';

export const StateContext = createContext<{
  answers: string[][];
  setAnswers: React.Dispatch<React.SetStateAction<string[][]>>;
  counter: number;
  section: number;
} | null>(null);

export const ChangeDataContext = createContext<any>(null);
