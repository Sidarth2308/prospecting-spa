/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable node/no-extraneous-import */
import {useContext, FC} from 'react';
import './styles/styles.css';
import {Flex, Text} from '@chakra-ui/layout';

import {StateContext} from '../../Context';
import arrowIcon from '../../assets/arrow.svg';
import {CircularProgress, CircularProgressLabel} from '@chakra-ui/progress';
import {Image} from '@chakra-ui/image';
import QuestionType from './QuestionType';
type Props = {
  data: any;
  progressData: any;
  handleNext: () => void;
  handlePrev: () => void;
};

const percentageConstant = 100;

const QuestionContainer: FC<Props> = ({
  data,
  handleNext,
  handlePrev,
  progressData,
}) => {
  const valueFromContext = useContext(StateContext);
  const disabled = valueFromContext?.answers[valueFromContext.section][
    valueFromContext.counter
  ]
    ? false
    : true;
  return (
    <Flex className="MainContainer">
      <Flex alignItems="center" justifyContent="center" marginBottom="32px">
        <Flex alignItems="center" justifyContent="center" marginRight="10px">
          <CircularProgress
            value={Math.round(
              (progressData.counter / progressData.total) * percentageConstant
            )}
            color="#775ef0"
          >
            <CircularProgressLabel>
              <b>
                {Math.round(
                  (progressData.counter / progressData.total) *
                    percentageConstant
                )}
                %
              </b>
            </CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex direction="column">
          <Text className="PercentageHeading">{progressData.heading}</Text>
          <Text fontSize="sm" className="Percentage">
            Question {progressData.counter}/{progressData.total}
          </Text>
        </Flex>
      </Flex>
      <div
        style={{
          width: '100%',
          maxWidth: '1000px',
          borderBottom: '2px solid rgba(202, 201, 209, 0.44)',
        }}
      ></div>
      <Flex className="HeadingContainer">
        {data?.preface !== '' && (
          <Text className="HeadingQuestionDescription">{data?.preface}</Text>
        )}

        <Text className="HeadingQuestion">{data?.body}</Text>
      </Flex>
      <QuestionType
        questionDetails={data.elements}
        graphic={data.icon}
        dimension={data.dimensions}
        graphic1={data.icon1}
        graphic2={data.icon2}
      />
      <Flex alignItems="center" justifyContent="center" userSelect="none">
        <Flex className="PreviousButton" onClick={handlePrev}>
          <Image width="40%" src={arrowIcon} className="LeftArrow" />
        </Flex>
        <Flex
          className={disabled ? 'NextButtonDisabled' : 'NextButton'}
          onClick={() => {
            !disabled && handleNext();
          }}
        >
          <Image width="40%" src={arrowIcon} className="RightArrow" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default QuestionContainer;
