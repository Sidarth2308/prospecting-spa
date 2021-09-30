/* eslint-disable @typescript-eslint/no-explicit-any */
import {createContext} from 'react';

export const StateContext = createContext<{
  answers: any;
  setAnswers: any;
  counter: number;
  section: number;
} | null>(null);

export const ChangeDataContext = createContext<any>(null);
