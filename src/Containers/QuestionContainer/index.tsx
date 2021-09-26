/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable node/no-extraneous-import */
import {FC} from 'react';
import './styles/styles.css';
import {Flex, Text} from '@chakra-ui/layout';

import dotsImage from '../../assets/dotsOnPage.svg';
import arrowIcon from '../../assets/arrow.svg';
import {CircularProgress, CircularProgressLabel} from '@chakra-ui/progress';
import {Image} from '@chakra-ui/image';
import QuestionType from './QuestionType';
type Props = {
  data: {
    id: number;
    questionDescription: string;
    questionText: string;
    type: {
      id: number;
      type: string;
      options?: string[];
    };
    graphic?: string;
    dotsOnPage: number;
  };
  handleNext: () => void;
  handlePrev: () => void;
};

const QuestionContainer: FC<Props> = ({data, handleNext, handlePrev}) => {
  return (
    <Flex className="MainContainer">
      <Flex alignItems="center" justifyContent="center" marginBottom="40px">
        <Flex alignItems="center" justifyContent="center" marginRight="10px">
          <CircularProgress value={40} color="#775ef0">
            <CircularProgressLabel>
              <b>02%</b>
            </CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex direction="column">
          <Text fontSize="24px" fontWeight="600" lineHeight="28px">
            I think
          </Text>
          <Text fontSize="sm">Question 1/16</Text>
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
        {data?.questionDescription !== '' && (
          <Text className="HeadingQuestionDescription">
            {data?.questionDescription}
          </Text>
        )}

        <Text className="HeadingQuestion">{data?.questionText}</Text>
      </Flex>
      <Flex marginBottom="20px">
        <Image src={dotsImage} />
      </Flex>
      <QuestionType type={data?.type} graphic={data?.graphic} />
      <Flex alignItems="center" justifyContent="center" userSelect="none">
        <Flex className="PreviousButton" onClick={handlePrev}>
          <Image width="40%" src={arrowIcon} className="LeftArrow" />
        </Flex>
        <Flex className="NextButton" onClick={handleNext}>
          <Image width="40%" src={arrowIcon} className="RightArrow" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default QuestionContainer;
