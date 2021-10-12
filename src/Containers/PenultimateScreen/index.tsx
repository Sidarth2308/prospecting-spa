/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-use-before-define */
import {Image} from '@chakra-ui/image';
import {Flex, Text} from '@chakra-ui/layout';
import {CircularProgress, CircularProgressLabel} from '@chakra-ui/progress';
import reportMockup from '../../assets/report-preview.svg';
import React from 'react';
import './styles/styles.css';

type Props = {
  progressData: {
    counter: number;
    total: number;
    heading: string;
  };
  email: {
    email: string;
    selected: boolean;
  };
  emailSetter: React.Dispatch<
    React.SetStateAction<{
      selected: boolean;
      email: string;
    }>
  >;
  data: {
    preface: string;
    body: string;
  };
  end: boolean;
  endSetter: React.Dispatch<React.SetStateAction<boolean>>;
};
const percentageConstant = 100;

const PenultimateScreen: React.FC<Props> = ({
  progressData,
  data,
  endSetter,
  email,
  emailSetter,
}) => {
  return (
    <Flex className="MainContainer">
      <Flex
        alignItems="center"
        justifyContent="center"
        marginTop="20px"
        marginBottom="32px"
      >
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
        {data.preface !== '' && (
          <Text
            fontSize={['14px', '14px', '19px']}
            lineHeight={['20px', '24px', '32px']}
            className="HeadingQuestionDescription"
          >
            {data.preface}
          </Text>
        )}

        <Text
          fontSize={['22px', '28px', '34px']}
          lineHeight={['30px', '32px', '48px']}
          className="HeadingQuestion"
        >
          {data.body}
        </Text>
      </Flex>

      <input
        className="Ending-InputBox"
        value={email.email}
        onChange={(event): void => {
          if (event.target.value === '') {
            emailSetter({
              selected: false,
              email: '',
            });
          } else {
            emailSetter({
              selected: true,
              email: event.target.value,
            });
          }
        }}
        placeholder="Enter your email"
      />
      <button
        className="Starting-Button"
        onClick={(): void => {
          endSetter(true);
        }}
      >
        Go to my report
      </button>
      <Image
        opacity="0.5"
        zIndex="-10"
        position="absolute"
        bottom="0px"
        width="400"
        height="300"
        alt="Report mockup"
        src={reportMockup}
      />
    </Flex>
  );
};

export default PenultimateScreen;
