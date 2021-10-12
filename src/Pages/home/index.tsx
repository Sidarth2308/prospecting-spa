/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-use-before-define */
import React, {useState, FC, Suspense, useEffect} from 'react';
import {Box, Spinner} from '@chakra-ui/react';
import {useSelector, useDispatch} from 'react-redux';
import {FetchData} from '../../Redux/actions/data';
import {StateContext} from '../../Context';
import './styles/styles.css';
import {DataState, QuestionsData} from '../../Redux/type';
import axios from 'axios';
import {useHistory} from 'react-router';
import {POST_API_URL} from '../../Data';
import StartingScreen from '../../Containers/StartingScreen';
import PenultimateScreen from '../../Containers/PenultimateScreen';

const INCREMENT_DECREMENT = 1;
const STARTING1 = 1;
const STARTING = 0;
const Success = 1;

export const First_Index = 0;
export const Second_Index = 1;
export const Third_Index = 2;
export const Fourth_Index = 3;

const QuestionContainer = React.lazy(
  async () => import('../../Containers/QuestionContainer')
);

const LengthFinding = 20;

type StateType = {
  questionData: QuestionsData;
};

type PostResponse = {
  status: number;
  message: string;
  reportID: string;
};

const Home: FC = () => {
  const QuestionData = useSelector((state: DataState) => {
    return state.fetchData as StateType;
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const [section, setSection] = useState(STARTING);
  const [counter, setCounter] = useState(STARTING);
  const [fullCounter, setFullCounter] = useState(STARTING1);
  const [answers, setAnswers] = useState<(string | string[])[][]>([
    [''],
    [''],
    [''],
    [''],
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState({
    selected: false,
    email: '',
  });
  const [end, setEnd] = useState(false);
  const [start, setStart] = useState({
    part1: false,
    part2: false,
  });

  const QuestionTotalCounter: () => number = () => {
    return LengthFinding;
  };

  const TotalLength = QuestionTotalCounter();
  useEffect(() => {
    dispatch(FetchData());
  }, []);

  useEffect(() => {
    if (end && fullCounter === TotalLength + INCREMENT_DECREMENT) {
      const payload = {
        client: {
          name: name,
          email: '',
        },
        answers: answers,
      };
      if (email.selected) {
        payload.client.email = email.email;
      }
      axios
        .post<PostResponse>(POST_API_URL, payload)
        .then((response) => {
          if (response.data.status === Success) {
            history.push(`/report/${response.data.reportID}`);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [fullCounter, end]);

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
          QuestionData.questionData.questions[section - INCREMENT_DECREMENT]
            .length - INCREMENT_DECREMENT
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
      QuestionData.questionData.questions[section].length - INCREMENT_DECREMENT
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
        {!start.part1 || !start.part2 ? (
          <StartingScreen
            start={start}
            startSetter={setStart}
            name={name}
            nameSetter={setName}
          />
        ) : QuestionData.questionData ? (
          fullCounter < TotalLength + INCREMENT_DECREMENT ? (
            <Box className="HomeContainer">
              <QuestionContainer
                progressData={{
                  counter: fullCounter,
                  total: TotalLength,
                  heading: QuestionData.questionData.sections[section],
                }}
                data={QuestionData.questionData.questions[section][counter]}
                handleNext={increaseCounter}
                handlePrev={decreaseCounter}
              />
            </Box>
          ) : (
            <Box className="HomeContainer">
              <PenultimateScreen
                email={email}
                emailSetter={setEmail}
                progressData={{
                  counter: fullCounter - INCREMENT_DECREMENT,
                  total: TotalLength,
                  heading: 'Complete',
                }}
                data={{
                  preface:
                    'The assessment is done! We will show your results now, but would you like an email version as well? If yes...',
                  body: 'Where would you like to receive your results?',
                }}
                end={end}
                endSetter={setEnd}
              />
            </Box>
          )
        ) : (
          <Spinner />
        )}
      </Suspense>
    </StateContext.Provider>
  );
};

export default Home;
