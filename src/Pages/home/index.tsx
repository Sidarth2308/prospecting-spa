/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-magic-numbers */

import React, {useState, FC, Suspense} from 'react';
import {Spinner} from '@chakra-ui/react';

// Import {useSelector, useDispatch} from 'react-redux';
// Import {FetchData} from '../../Redux/actions/data';
// Import {RootState} from '../../Redux/reducers';

import {StateContext} from '../../Context';
import {QuestionData} from '../../Data';
import './styles/styles.css';

const QuestionContainer = React.lazy(
  () => import('../../Containers/QuestionContainer')
);

const Home: FC = () => {
  // Const fetchedData = useSelector((state: RootState) => state.fetchData);
  // Const dispatch = useDispatch();
  const [section, setSection] = useState(1);
  const [counter, setCounter] = useState(4);
  const [answers, setAnswers] = useState<string[][]>(
    QuestionData.questions.map(() => {
      return [];
    })
  );
  console.log(answers);
  // UseEffect(() => {
  //   Dispatch(FetchData());
  // }, []);
  const decreaseCounter = () => {
    if (counter === 0) {
      if (section > 0) {
        setCounter(QuestionData.questions[section - 1].length - 1);
        setSection(section - 1);
      }
    } else {
      setCounter(counter - 1);
    }
  };

  const increaseCounter = () => {
    if (counter < QuestionData.questions[section].length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
      setSection(section + 1);
    }
  };
  return (
    <StateContext.Provider value={{answers, setAnswers, counter, section}}>
      {QuestionData && (
        <Suspense fallback={<Spinner />}>
          <QuestionContainer
            progressData={{
              counter: counter,
              total: QuestionData.questions[section].length,
              heading: QuestionData.sections[section],
            }}
            data={QuestionData.questions[section][counter]}
            handleNext={increaseCounter}
            handlePrev={decreaseCounter}
          />
        </Suspense>
      )}
    </StateContext.Provider>
  );
};

export default Home;
