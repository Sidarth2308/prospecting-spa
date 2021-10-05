/* eslint-disable no-use-before-define */
import React from 'react';

const Increment_Decrement = 1;
type Props = {
  SectionScores: number[][];
};

const FinalScreen: React.FC<Props> = ({SectionScores}) => {
  return (
    <div>
      {SectionScores.map((scores, index) => {
        return (
          <div key={index}>
            {scores.map((score, i) => {
              return (
                <div key={i}>
                  The Section {index + Increment_Decrement} score is : {score}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default FinalScreen;
