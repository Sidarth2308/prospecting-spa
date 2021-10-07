/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable capitalized-comments */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-use-before-define */
import React, {useState, FC, Suspense} from 'react';
import {Box, Spinner} from '@chakra-ui/react';

// Import {useSelector, useDispatch} from 'react-redux';
// Import {FetchData} from '../../Redux/actions/data';
// Import {RootState} from '../../Redux/reducers';

import {StateContext} from '../../Context';
import {QuestionData} from '../../Data';
import './styles/styles.css';
import FinalScreen from '../../Containers/FinalScreen';

const INCREMENT_DECREMENT = 1;
export const STARTING1 = 1;
const STARTING = 0;

export const First_Index = 0;
export const Second_Index = 1;
export const Third_Index = 2;
export const Fourth_Index = 3;

const DndFirstParam = 3;
const DndSecondParam = 4;

const QuestionContainer = React.lazy(
  async () => import('../../Containers/QuestionContainer')
);

const QuestionTotalCounter: () => number = () => {
  let accumulator = 0;
  QuestionData.questions.forEach((sectionArray) => {
    accumulator = accumulator + sectionArray.length;
  });
  return accumulator;
};

const TotalLength = QuestionTotalCounter();

const TestingNumber = 21;

const Home: FC = () => {
  // Const fetchedData = useSelector((state: RootState) => state.fetchData);
  // Const dispatch = useDispatch();
  const [section, setSection] = useState(3);
  const [counter, setCounter] = useState(4);
  const [fullCounter, setFullCounter] = useState(20);
  const [answers, setAnswers] = useState<(string | string[])[][]>(
    QuestionData.questions.map(() => {
      return [''];
    })
  );
  console.log(answers[3]);
  // UseEffect(() => {
  //   Dispatch(FetchData());
  // }, []);

  const FinalAnswerGenerator: () => number[][] = () => {
    // const SectionScores = [
    //   [
    //     ScoreConstants.section1.formula(
    //       ScoreConstants.section1.scores,
    //       answers[First_Index]
    //     ),
    //   ],
    //   [
    //     ScoreConstants.section2.formula(
    //       ScoreConstants.section2.scores,
    //       answers[Second_Index]
    //     ),
    //   ],
    //   ScoreConstants.section3.formula(
    //     ScoreConstants.section3.scores,
    //     answers[Third_Index]
    //   ),
    //   ScoreConstants.section4.formula(
    //     ScoreConstants.section3.scores,
    //     answers[Fourth_Index]
    //   )
    // ];
    const SectionScores = [[57], [49], [25, 75], [43, 57]];
    return SectionScores;
  };

  // Console.log(
  //   FullCounter,
  //   TestingNumber,
  //   Answers[First_Index],
  //   Answers[Second_Index],
  //   Answers[Third_Index]
  // );

  const decreaseCounter: () => void = () => {
    if (counter === STARTING) {
      if (section > STARTING) {
        setFullCounter(fullCounter - INCREMENT_DECREMENT);
        setCounter(
          QuestionData.questions[section - INCREMENT_DECREMENT].length -
            INCREMENT_DECREMENT
        );
        setSection(section - INCREMENT_DECREMENT);
      }
    } else {
      setFullCounter(fullCounter - INCREMENT_DECREMENT);
      setCounter(counter - INCREMENT_DECREMENT);
    }
  };

  const increaseCounter: () => void = () => {
    setFullCounter(fullCounter + INCREMENT_DECREMENT);
    if (
      counter <
      QuestionData.questions[section].length - INCREMENT_DECREMENT
    ) {
      setCounter(counter + INCREMENT_DECREMENT);
    } else {
      setCounter(STARTING);
      setSection(section + INCREMENT_DECREMENT);
    }
  };
  return (
    <StateContext.Provider value={{answers, setAnswers, counter, section}}>
      <Suspense fallback={<Spinner />}>
        {fullCounter === TestingNumber ? (
          <FinalScreen
            SectionScores={FinalAnswerGenerator()}
            DndAnswers={answers[DndFirstParam][DndSecondParam]}
          />
        ) : (
          <Box className="HomeContainer">
            <QuestionContainer
              progressData={{
                counter: fullCounter,
                total: TotalLength,
                heading: QuestionData.sections[section],
              }}
              data={QuestionData.questions[section][counter]}
              handleNext={increaseCounter}
              handlePrev={decreaseCounter}
            />
          </Box>
        )}
      </Suspense>
    </StateContext.Provider>
  );
};

export default Home;
