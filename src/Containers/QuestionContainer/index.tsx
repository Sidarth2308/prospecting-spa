/* eslint-disable no-use-before-define */
/* eslint-disable node/no-extraneous-import */
import {useContext, FC} from 'react';
import './styles/styles.css';
import {Flex, Text} from '@chakra-ui/layout';
import QuestionType from './QuestionType';
import {StateContext} from '../../Context';
import arrowIcon from '../../assets/arrow.svg';
import {CircularProgress, CircularProgressLabel} from '@chakra-ui/progress';
import {Image} from '@chakra-ui/image';
import {isUndefined} from 'lodash';
import topCircle from '../../assets/top-semicircle.svg';
import {First_Index} from '../../Data/scoreConstants';
type Props = {
  data: {
    preface: string;
    body: string;
    context: {
      above: string;
      center: string;
      below: {
        body: string;
        icon: string;
      };
    };
    elements: {
      question_type: string;
      question_override: {
        preface: string;
        body: string;
      };
      context: {
        help_text: string;
        left: {
          icon: {
            above: string;
            center: string;
            below: string;
          };
          text: {
            above: string;
            center: string;
            below: string;
          };
          subtext: {
            above: string;
            center: string;
            below: string;
          };
          value: string;
        };
        right: {
          icon: {
            above: string;
            center: string;
            below: string;
          };
          text: {
            above: string;
            center: string;
            below: string;
          };
          subtext: {
            above: string;
            center: string;
            below: string;
          };
          value: string;
        };
        slider?: {
          default: string;
          min: string;
          max: string;
          step: string;
          ticks: boolean;
        };
        input: {
          body: string;
          placeholder: string;
          values: string[];
        };
        radio: string[];
        multicard: string[][];
        dragdrop: string[][];
      };
    }[];

    icon?: string;
    icon1?: string;
    icon2?: string;
    icon3?: string;
    dimensions?: string[];
  };
  progressData: {
    counter: number;
    total: number;
    heading: string;
  };
  section: number;
  counter: number;
  handleNext: () => void;
  handlePrev: () => void;
};

const percentageConstant = 100;

const INCREMENT_DECREMENT = 1;

const disableChecker = (
  questionType: string,
  currentValue: (string | string[]) | undefined
): boolean => {
  if (isUndefined(currentValue)) {
    return true;
  }
  if (questionType === 'dragdrop') {
    const newCurrentValue = currentValue as string[];
    let disabled = false;
    newCurrentValue.forEach((singleValue: string) => {
      if (singleValue === '') {
        disabled = true;
      }
    });
    return disabled;
  }
  const newCurrentValue = currentValue as string;
  return newCurrentValue === '' ? true : false;
};

const QuestionContainer: FC<Props> = ({
  data,
  handleNext,
  handlePrev,
  progressData,
  section,
  counter,
}) => {
  const valueFromContext = useContext(StateContext);
  const disabled = disableChecker(
    data.elements[First_Index]?.question_type,
    valueFromContext?.answers[section][counter]
  );
  return (
    <Flex className="MainContainer">
      <Flex
        alignItems="center"
        marginTop="20px"
        justifyContent="center"
        marginBottom="32px"
      >
        <Image src={topCircle} zIndex="-1" position="absolute" />
        <Flex alignItems="center" justifyContent="center" marginRight="10px">
          <CircularProgress
            value={Math.round(
              ((progressData.counter - INCREMENT_DECREMENT) /
                progressData.total) *
                percentageConstant
            )}
            color="#5D23E9"
          >
            <CircularProgressLabel color="#fff">
              <b>
                {Math.round(
                  ((progressData.counter - INCREMENT_DECREMENT) /
                    progressData.total) *
                    percentageConstant
                )}
                %
              </b>
            </CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex direction="column">
          <Text className="PercentageHeading" color="#fff">
            {progressData.heading}
          </Text>
          <Text fontSize="sm" className="Percentage" color="#fff">
            Question {progressData.counter}/{progressData.total}
          </Text>
        </Flex>
      </Flex>
      <Flex className="HeadingContainer">
        {data.preface !== '' && (
          <Text
            fontSize={['14px', '14px', '19px']}
            lineHeight={['20px', '24px', '32px']}
            className="HeadingQuestionDescription"
          >
            {data.preface}
          </Text>
        )}
        {data.elements[First_Index]?.question_type !== 'dragdrop' && (
          <div
            style={{
              width: '100%',
              maxWidth: '1000px',
              borderBottom: '2px solid rgba(202, 201, 209, 0.44)',
            }}
          ></div>
        )}

        <Text
          fontSize={['22px', '28px', '34px']}
          lineHeight={['30px', '32px', '48px']}
          className="HeadingQuestion"
          minHeight="100px"
        >
          {data.body}
        </Text>
      </Flex>
      <QuestionType
        handleNext={handleNext}
        height="450px"
        questionDetails={data.elements}
        graphic={data.icon}
        dimension={data.dimensions || ['', '']}
        graphic1={data.icon1}
        graphic2={data.icon2}
        graphic3={data.icon3}
      />
      <Flex className="Question-ButtonContainer">
        <Flex className="PreviousButton" onClick={handlePrev}>
          <Image width="40%" src={arrowIcon} className="LeftArrow" />
        </Flex>
        {progressData.counter === progressData.total ? (
          <button
            className={disabled ? 'NextButtonFinalDisabled' : 'NextButtonFinal'}
            onClick={(): void => {
              if (!disabled) {
                handleNext();
              }
            }}
          >
            Complete assessment
          </button>
        ) : (
          <Flex
            className={disabled ? 'NextButtonDisabled' : 'NextButton'}
            onClick={(): void => {
              if (!disabled) {
                handleNext();
              }
            }}
          >
            <Image width="40%" src={arrowIcon} className="RightArrow" />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default QuestionContainer;
