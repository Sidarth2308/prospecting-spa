import React, {createContext} from 'react';

export const StateContext = createContext<{
  answers: string[];
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
  counter: number;
} | null>(null);
