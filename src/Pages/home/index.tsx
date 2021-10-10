/* eslint-disable node/no-extraneous-import */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable capitalized-comments */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-use-before-define */
import React, {useState, FC, Suspense, useEffect} from 'react';
import {Box, Spinner} from '@chakra-ui/react';
import {Flex} from '@chakra-ui/layout';
import {Input} from '@chakra-ui/input';
import {Button} from '@chakra-ui/button';
import {useSelector, useDispatch} from 'react-redux';
import {FetchData} from '../../Redux/actions/data';
import {StateContext} from '../../Context';
import './styles/styles.css';
import {DataState, QuestionsData} from '../../Redux/type';
import axios from 'axios';
import {useHistory} from 'react-router';
import {POST_API_URL} from '../../Data';

const INCREMENT_DECREMENT = 1;
export const STARTING1 = 1;
const STARTING = 0;

export const First_Index = 0;
export const Second_Index = 1;
export const Third_Index = 2;
export const Fourth_Index = 3;

const QuestionContainer = React.lazy(
  async () => import('../../Containers/QuestionContainer')
);

const TestingNumber = 21;

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
  const [section, setSection] = useState(0);
  const [counter, setCounter] = useState(0);
  const [fullCounter, setFullCounter] = useState(1);
  const [answers, setAnswers] = useState<(string | string[])[][]>([
    [''],
    [''],
    [''],
    [''],
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [start, setStart] = useState(false);

  const QuestionTotalCounter: () => number = () => {
    return 20;
  };

  const TotalLength = QuestionTotalCounter();
  useEffect(() => {
    dispatch(FetchData());
  }, []);

  useEffect(() => {
    if (fullCounter === TestingNumber) {
      const payload = {
        client: {
          name: name,
          email: email,
        },
        answers: answers,
      };
      axios
        .post<PostResponse>(POST_API_URL, payload)
        .then((response) => {
          if (response.data.status === 1) {
            history.push(`/report/${response.data.reportID}`);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [fullCounter]);

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
        {!start ? (
          <Flex className="StartContainer" direction="column">
            <Flex
              alignItems="center"
              justifyContent="center"
              direction="column"
            >
              <Input
                width="300px"
                color="white"
                marginBottom="40px"
                value={name}
                type="text"
                placeholder="Enter your name"
                onChange={(event): void => {
                  setName(event.target.value);
                }}
              />

              <Input
                width="300px"
                value={email}
                color="white"
                type="text"
                marginBottom="40px"
                placeholder="Enter your email"
                onChange={(event): void => {
                  setEmail(event.target.value);
                }}
              />
            </Flex>
            <Flex>
              <Button
                disabled={name === '' || email === ''}
                size="lg"
                onClick={(): void => {
                  setStart(true);
                }}
              >
                Start Assessment
              </Button>
            </Flex>
          </Flex>
        ) : QuestionData.questionData && fullCounter < TestingNumber ? (
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
          <Spinner />
        )}
      </Suspense>
    </StateContext.Provider>
  );
};

export default Home;
