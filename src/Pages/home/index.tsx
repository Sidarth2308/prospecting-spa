/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-magic-numbers */
import {useState, FC} from 'react';

// Import {useSelector, useDispatch} from 'react-redux';
// Import {FetchData} from '../../Redux/actions/data';
import {QuestionData} from '../../Data';
import './styles/styles.css';

import QuestionContainer from '../../Containers/QuestionContainer';

import {StateContext} from '../../Context';
// Import {RootState} from '../../Redux/reducers';

const Home: FC = () => {
  // Const fetchedData = useSelector((state: RootState) => state.fetchData);
  // Const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [section, setSection] = useState(1);
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
    <StateContext.Provider value={{answers, setAnswers, counter}}>
      {QuestionData && (
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
      )}
    </StateContext.Provider>
  );
};

export default Home;
